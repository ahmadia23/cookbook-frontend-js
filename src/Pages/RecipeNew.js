import RecipeForm from "../components/RecipeForm";
import React from "react";
import { useLoaderData, redirect, json } from "react-router";
import { getAuthToken } from "../util/Authentification";

const RecipeNew = ({ editMode }) => {
  const adminMode = useLoaderData().adminMode;
  if (!adminMode && editMode) {
    return redirect("/");
  }
  const recipe = useLoaderData().recipe;
  const recipeData = {
    name: recipe.name,
    description: recipe.description,
    time: recipe.time,
    imageUrl: recipe.imageUrl,
  };
  return (
    <div>
      <h1>Hello from the new recipe</h1>
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
    </div>
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
