import CookbookRecipes from "./CookbookRecipes";
import React from "react";
import { getAuthToken } from "../util/Authentification";
import { json, redirect, useLoaderData } from "react-router";
import RecipeCard from "../components/RecipeCard";
import "../UI/Home.css";

const SavingRecipes = () => {
  const token = getAuthToken();
  if (!token) {
    console.log("hello");
    return redirect("/login");
  }
  const recipes = useLoaderData().recipes;

  console.log(useLoaderData());

  return (
    <div>
      <h1 className="saving-title"> This is the recipes you liked </h1>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>
              <RecipeCard key={recipes.id} {...recipe} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SavingRecipes;

export const loader = async ({ request, params }) => {
  const token = getAuthToken();
  const response = await fetch(`http://localhost:8080/savings`, {
    headers: { Authorization: "Bearer " + token },
  });
  if (!response.ok) {
    throw json({ message: "could not fetch all the recipes" }, { status: 500 });
  }
  return response;
};
