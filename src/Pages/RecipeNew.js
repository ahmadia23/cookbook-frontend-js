import RecipeForm from "../components/RecipeForm";
import React from "react";

const RecipeNew = () => {
  return (
    <div>
      <h1>Hello from the new cookbook </h1>
      <RecipeForm></RecipeForm>
    </div>
  );
};

export default RecipeNew;

export const action = async ({ request, params }) => {
  fetch();
};
