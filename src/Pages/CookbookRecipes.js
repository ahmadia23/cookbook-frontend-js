import React from "react";
import { NavLink, useLoaderData, json, useParams } from "react-router-dom";
import classes from "../UI/link.module.css";
import RecipeCard from "../components/recipes/RecipeCard";
import Button from "../UI/Button";
import { getAuthToken } from "../util/Authentification";

const CookbookRecipes = () => {
  const recipes = useLoaderData().recipes;
  const cookbookId = useParams().cookbookId;
  const adminMode = useLoaderData().adminMode;

  const RecipeList = recipes.map((recipe) => {
    return (
      <NavLink
        key={recipe.id}
        to={`/cookbooks/${cookbookId}/recipes/${recipe.id}`}
        className={classes.links}
        end
      >
        <RecipeCard key={recipes.id} {...recipe} />
      </NavLink>
    );
  });

  return (
    <div>
      <h1>Look at all this cookbook's recipes</h1>
      {RecipeList}
      {adminMode ? (
        <Button
          to={`/cookbooks/${cookbookId}/new`}
          linkName="Add a new recipe"
        ></Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CookbookRecipes;

export const loader = async ({ request, params }) => {
  const token = getAuthToken();
  const id = params.cookbookId;
  const response = await fetch(
    `http://localhost:8080/cookbooks/${id}/recipes`,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  if (!response.ok) {
    throw json({ message: "could not fetch all the recipes" }, { status: 500 });
  }
  return response;
};
