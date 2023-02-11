import RecipeForm from "../components/RecipeForm";
import React from "react";
import { useLoaderData, redirect, json } from "react-router";
import { getAuthToken } from "../util/Authentification";

const RecipeNew = () => {
  return (
    <div>
      <h1>Hello from the new recipe</h1>
      <RecipeForm></RecipeForm>
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
  console.log(newRecipe);
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
