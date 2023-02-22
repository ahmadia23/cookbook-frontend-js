import {
  json,
  Outlet,
  redirect,
  useActionData,
  useNavigate,
  useParams,
} from "react-router";
import { useLoaderData } from "react-router";
import "../components/RecipeCard.css";
import { Fragment, useEffect } from "react";
import React from "react";
import { useSubmit, Form } from "react-router-dom";
import { getAuthToken } from "../util/Authentification";
import Button from "../UI/Button";
import "../UI/errors.css";

const RecipeDetails = () => {
  const recipe = useLoaderData().recipe;
  const errorMessage = useActionData();
  const navigate = useNavigate();
  let error;

  useEffect(() => {
    if (errorMessage) {
      error = errorMessage.message;
      navigate(".");
    }
  }, errorMessage);

  if (errorMessage) {
    console.log("errooooor", errorMessage.message);
  }
  const submit = useSubmit();
  const recipeId = useParams().recipeId;
  const cookbookId = useParams().cookbookId;
  const adminMode = useLoaderData().adminMode;

  const removeRecipeHandler = (event) => {
    event.preventDefault();
    const proceed = window.confirm("are you sure ?");

    if (proceed) {
      submit(
        { recipeId: recipeId },
        {
          method: "delete",
          action: `/cookbooks/${cookbookId}/recipes/${recipeId}/delete`,
        }
      );
    }
  };
  const saveRecipeHandler = (event) => {
    event.preventDefault();
    console.log("saving...");

    submit(
      { recipeId: recipeId },
      {
        method: "POST",
        action: `/cookbooks/${cookbookId}/recipes/${recipeId}/save`,
      }
    );
  };

  return (
    <Fragment>
      <p className="error-message">ok</p>
      <div className="recipe-page">
        <Form onSubmit={saveRecipeHandler}>
          <button>Save this recipe</button>
        </Form>
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="recipe-page__image"
        />
        <div className="recipe-page__content">
          <h3 className="recipe-page__title">{recipe.name}</h3>
          <p className="recipe-page__description">{recipe.description}</p>
          <span className="recipe-page__theme">{recipe.time}</span>
        </div>
      </div>
      {adminMode ? (
        <Form onSubmit={removeRecipeHandler}>
          <Button linkName="Remove this recipe"></Button>
        </Form>
      ) : (
        ""
      )}
      {adminMode ? (
        <Button to={`edit`} linkName="edit this recipe"></Button>
      ) : (
        ""
      )}
      <Outlet />
    </Fragment>
  );
};
export default RecipeDetails;

export const loader = async ({ request, params }) => {
  const recipeId = params.recipeId;
  const cookbookId = params.cookbookId;
  const token = getAuthToken();
  const response = await fetch(
    `http://localhost:8080/cookbooks/${cookbookId}/${recipeId}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!response.ok) {
    return json({ message: "could not fetch the recipe" }, { status: 500 });
  } else {
    return response;
  }
  // catch(err){
  //   console.log(err);
};

export const action = async ({ request, params }) => {
  const token = getAuthToken();
  const recipeId = params.recipeId;
  const cookbookId = params.cookbookId;

  const response = await fetch(
    `http://localhost:8080/recipes/${recipeId}/delete`,
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      method: request.method,
    }
  );
  if (response.status === 500) {
    const resData = await response.json();
    console.log(resData);
    return response;
  }
  if (response.status === 403) {
    return response;
  }

  return redirect(`/cookbooks/${cookbookId}/recipes`);
};
