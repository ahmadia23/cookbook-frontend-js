import RecipeForm from "../components/forms/RecipeForm";
import React, { Fragment, useState } from "react";
import { useLoaderData, redirect, json } from "react-router";
import { getAuthToken } from "../util/Authentification";
import "./RecipeNew.css";
import RecipeName from "../components/forms/RecipeName";
import { Form } from "react-router-dom";
import RecipeDescription from "../components/forms/RecipeDescription";
import RecipeTime from "../components/forms/RecipeTheme";
import RecipeIngredients from "../components/forms/RecipeIngredients";

const RecipeNew = ({ editMode }) => {
  const adminMode = useLoaderData().adminMode;
  const [page, setPage] = useState(0);
  const [recipeName, setRecipeName] = useState();
  const [recipeDetail, setRecipeDetail] = useState();

  if (!adminMode && editMode) {
    return redirect("/");
  }

  const recipe = useLoaderData().recipe;
  let recipeData;
  if (recipe) {
    recipeData = {
      name: recipe.name,
      description: recipe.description,
      time: recipe.time,
      imageUrl: recipe.imageUrl,
    };
  }

  // const nameTitle = (
  //   <h1 className="recipe-form__title">What is the Name of your recipe ? </h1>
  // );
  // const descriptionTitle = (
  //   <h1 className="recipe-form__title">Describe your recipe ? </h1>
  // );

  const componentList = [
    <RecipeName page={page} setPage={setPage} />,
    <RecipeDescription page={page} setPage={setPage} />,
    <RecipeTime page={page} setPage={setPage} />,
    <RecipeIngredients page={page} setPage={setPage} />,
  ];

  return (
    <Fragment>
      <Form className="recipe-form container">
        <div className="progress-bar">
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
        <div>{componentList[page]}</div>
        {`page is now: ${page}`}

        {/* <div className="container">
        {adminMode ? (
          <RecipeForm
            name={recipeData.name}
            description={recipeData.description}
            time={recipeData.time}
            imageUrl={recipeData.imageUrl}
            editMode={editMode}
          ></RecipeForm>
        ) : (
          <RecipeForm />
        )}
      </div> */}
      </Form>
    </Fragment>
  );
};

export default RecipeNew;

export const sendNewRecipe = async ({ request, params }) => {
  const data = await request.formData();
  const cookbookId = params.cookbookId;
  const token = getAuthToken();
  const newRecipe = {
    name: data.get("name"),
    description: data.get("description"),
    time: data.get("time"),
    imageUrl: data.get("image"),
  };
  const response = await fetch(
    `http://localhost:8080/cookbooks/${cookbookId}/add-recipe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(newRecipe),
    }
  );

  if (response.status === 403) {
    throw json({ message: "Unauthorized to add a new recipe" });
  }
  console.log(response);
  return redirect(`/cookbooks/${cookbookId}/recipes`);
};

export const loadExistingRecipe = async ({ request, params }) => {
  const recipeId = params.recipeId;
  const cookbookId = params.cookbookId;
  const token = getAuthToken();

  const response = await fetch(
    `http://localhost:8080/cookbooks/${cookbookId}/${recipeId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "could not update the recipe" }, { status: 500 });
  }
  return response;
};

export const sendEditedRecipe = async ({ request, params }) => {
  const data = await request.formData();
  const cookbookId = params.cookbookId;
  const recipeId = params.recipeId;
  const token = getAuthToken();
  console.log(token);

  const newRecipe = {
    name: data.get("name"),
    description: data.get("description"),
    time: data.get("time"),
    imageUrl: data.get("image"),
  };

  console.log("from editing :", newRecipe);
  const response = await fetch(
    `http://localhost:8080/recipes/${recipeId}/edit`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(newRecipe),
    }
  );
  if (response.status === 403) {
    throw json({ message: "Unauthorized to update the recipe" });
  }
  return redirect(`/cookbooks/${cookbookId}/recipes`);
};
