import { json, Outlet, redirect, useParams } from "react-router";
import { useLoaderData } from "react-router";
import "../components/RecipeCard.css";
import { Fragment } from "react";
import React from "react";
import { useSubmit, Form } from "react-router-dom";
import { getAuthToken } from "../util/Authentification";
import Button from "../UI/Button";

const RecipeDetails = () => {
  const recipe = useLoaderData().recipe;
  const submit = useSubmit();
  const recipeId = useParams().recipeId;
  const cookbookId = useParams().cookbookId;
  const adminMode = useLoaderData().adminMode;
  console.log("hello there");

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

  return (
    <Fragment>
      <div className="recipe-page">
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
  console.log(recipeId);
  const cookbookId = params.cookbookId;

  console.log("right action cookbookid is: ", cookbookId);
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
    const resData = await response.json();
    console.log(resData);
    return response;
  }

  return redirect(`/cookbooks/${cookbookId}/recipes`);
};
