import { json, Outlet, redirect, useParams } from "react-router";
import { useLoaderData } from "react-router";
import "../components/recipes/RecipeCard.css";
import { Fragment } from "react";
import React from "react";
import { useSubmit, Form } from "react-router-dom";
import { getAuthToken } from "../util/Authentification";
import Button from "../UI/Button";
import "../UI/errors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const RecipeDetails = () => {
  const recipe = useLoaderData().recipe;
  let lineNumber = 0;
  let successMessage = "";

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
          action: `/cookbooks/${cookbookId}/${recipeId}/delete`,
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
        action: `/cookbooks/${cookbookId}/${recipeId}/save`,
      }
    );
    successMessage = "Recipe has been saved";
  };

  // console.log(recipe.steps.trim(" ").split(/\d+\./));
  const stepsLines = recipe.steps.trim(" ").split(/\d+\./).slice(1);

  return (
    <Fragment>
      {successMessage && <h2 className="success-message">{successMessage}</h2>}
      <div className="recipe-page">
        <Form onSubmit={saveRecipeHandler}>
          <button className="saving-button">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </button>
        </Form>

        <div className="recipe-page__content">
          <div
            className="recipe-page__main"
            style={{
              backgroundImage: `url(${recipe.imageUrl})`,
              width: "70vw",
            }}
          >
            <h2> {recipe.name}</h2>
            <p className="recipe-page__description">{recipe.description}</p>
          </div>
          <h3>
            Preparation Time :{" "}
            <span className="recipe-page__theme">{recipe.time} minutes</span>
          </h3>
          {stepsLines.map((line) => {
            lineNumber += 1;
            return (
              <p
                key={Math.floor(Math.random() * 50)}
                className="recipe-page__steps"
              >
                {`${lineNumber}- ${line}`}
              </p>
            );
          })}
        </div>
      </div>
      {adminMode && (
        <Form onSubmit={removeRecipeHandler}>
          <button type="submit" className="remove-button">
            Remove this recipe
          </button>
        </Form>
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

  console.log("enterred");

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
