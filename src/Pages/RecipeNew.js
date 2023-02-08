import RecipeForm from "../components/RecipeForm";
import React from "react";
import { useParams, json, useLoaderData, redirect } from "react-router";
import { getAuthToken } from "../util/Authentification";

const RecipeNew = () => {
  const isAllowed = useLoaderData().authorized;
  if (!isAllowed) {
    redirect("/");
  }

  return (
    <div>
      <h1>Hello from the new recipe</h1>
      <RecipeForm></RecipeForm>
    </div>
  );
};

export default RecipeNew;

export const action = async ({ request, params }) => {
  // const response = await fetch(
  //   `http://localhost:8080/cookbooks/${id}/add-recipe`, {
  //     headers:
  //   });
};

export const loader = async ({ request, params }) => {
  const token = getAuthToken();
  const cookbookId = params.cookbookId;

  console.log(token);

  console.log(cookbookId);
  const response = await fetch(`http://localhost:8080/allow/${cookbookId}`, {
    headers: { Authorization: "Bearer " + token },
  });
  if (!response.ok) {
    throw json({ message: "could not fetch get the result" }, { status: 500 });
  }
  return response;
};
