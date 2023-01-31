import React from "react";
import { NavLink,useLoaderData, json} from "react-router-dom";
import classes from "../UI/link.module.css";
import RecipeCard from "../components/RecipeCard";


const CookbookRecipes = () => {
  const recipes = useLoaderData().recipes;
  console.log(recipes);
  const RecipeList = recipes.map((recipe) => {
    return (
      <NavLink
        key={recipe.id}
        // to={`${cookbook.id}/recipes`}
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
    </div>
  );
};

export default CookbookRecipes;

export const loader = async ({ request, params }) => {
  const id = params.cookbookId;
  const response = await fetch(`http://localhost:8080/cookbooks/${id}/recipes`);
  if (!response.ok) {
    throw json({ message: "could not fetch all the recipes" }, { status: 500 });
  }
  return response;
};
