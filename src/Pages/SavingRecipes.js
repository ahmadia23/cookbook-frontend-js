import React from "react";
import { getAuthToken } from "../util/Authentification";
import { json, redirect, useLoaderData } from "react-router";
import "../components/recipes/SavedRecipeCard.css";
import SavedRecipeCard from "../components/recipes/SavedRecipeCard";
import "../Pages/Home.css";
import { useSubmit } from "react-router-dom";

const SavingRecipes = () => {
  const token = getAuthToken();
  const recipes = useLoaderData().recipes;
  const submit = useSubmit();
  if (!token) {
    console.log("hello");
    return redirect("/login");
  }

  console.log(useLoaderData);

  const removeSavingHandler = (event) => {
    event.preventDefault();
    const recipeId = event.target.closest(".saved-recipe").id;
    const proceed = window.confirm("are you sure ?");

    if (proceed) {
      submit(
        { recipeId: recipeId },
        {
          method: "delete",
          action: `${recipeId}/delete-saving`,
        }
      );
    }
  };

  return (
    <div>
      <h1 className="saving-title"> My favorite recipes</h1>
      <div className="favorite-recipes">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <SavedRecipeCard
                key={recipes.id}
                imageUrl={recipe.imageUrl}
                id={recipe.id}
                name={recipe.name}
                onRemove={removeSavingHandler}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavingRecipes;

export const loader = async ({ request, params }) => {
  const token = getAuthToken();
  const response = await fetch(
    `https://cookbook-backend12.herokuapp.com/savings`,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  if (!response.ok) {
    throw json({ message: "could not fetch all the recipes" }, { status: 500 });
  }
  return response;
};

export const action = async ({ request, params }) => {
  const token = getAuthToken();
  const recipeId = params.recipeId;
  console.log(recipeId);
  const response = await fetch(
    `https://cookbook-backend12.herokuapp.com/savings/${recipeId}/delete-saving`,
    {
      headers: { Authorization: "Bearer " + token },
      method: request.method,
    }
  );
  if (!response.ok) {
    throw json({ message: "could not delete the saving" }, { status: 500 });
  }
  return redirect("/cookbooks");
};
