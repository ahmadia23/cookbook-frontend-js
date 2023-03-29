import React from "react";
import { NavLink, useLoaderData, json, useParams } from "react-router-dom";
import classes from "../UI/link.module.css";
import RecipeCard from "../components/recipes/RecipeCard";
import { getAuthToken } from "../util/Authentification";
import "./Cookbooks.css";

const CookbookRecipes = () => {
  const recipes = useLoaderData().recipes;
  const cookbookId = useParams().cookbookId;
  // const adminMode = useLoaderData().adminMode;

  const RecipeList = recipes.map((recipe) => {
    return (
      <NavLink
        key={recipe.id}
        to={`/cookbooks/${cookbookId}/${recipe.id}`}
        className={classes.links}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        end
      >
        <RecipeCard key={recipes.id} {...recipe} />
      </NavLink>
    );
  });

  return (
    <div className="border__section-top ">
      <h2 className="intro-recipes">All the recipes</h2>
      {RecipeList}
    </div>
  );
};

export default CookbookRecipes;

export const loader = async ({ request, params }) => {
  const token = getAuthToken();
  const id = params.cookbookId;
  const response = await fetch(
    `https://cookbook-backend12.herokuapp.com/cookbooks/${id}/recipes`,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  if (!response.ok) {
    throw json({ message: "could not fetch all the recipes" }, { status: 500 });
  }
  return response;
};
