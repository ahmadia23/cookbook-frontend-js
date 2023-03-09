import React, { Fragment, useState } from "react";
import { useLoaderData, redirect, json } from "react-router";
import { getAuthToken } from "../util/Authentification";
import "./RecipeNew.css";
import RecipeName from "../components/forms/RecipeName";
import { Form } from "react-router-dom";
import RecipeDescription from "../components/forms/RecipeDescription";
import RecipeTime from "../components/forms/RecipeTime";
import RecipeIngredients from "../components/forms/RecipeIngredients";
import RecipeImage from "../components/forms/RecipeImage";

const RecipeNew = ({ editMode }) => {
  const adminMode = useLoaderData().adminMode;
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    steps: "",
    time: "",
    ingredients: "",
    imageUrl: "",
  });

  if (!adminMode && editMode) {
    return redirect("/");
  }

  const componentList = [
    <RecipeName
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <RecipeDescription
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <RecipeTime
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <RecipeImage
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <RecipeIngredients
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  return (
    <Fragment>
      <Form className="recipe-form">
        <div className="progress-bar">
          <div
            style={{
              width:
                page === 0
                  ? "20%"
                  : page === 1
                  ? "40%"
                  : page === 2
                  ? "60%"
                  : page === 3
                  ? "80%"
                  : "100%",
            }}
          ></div>
        </div>
        {componentList[page]}
        {`page is now: ${page}`}
      </Form>
    </Fragment>
  );
};

export default RecipeNew;

export const sendNewRecipe = async ({ request, params }) => {
  const data = await request.formData();
  console.log("data", data);
  const cookbookId = params.cookbookId;
  const token = getAuthToken();
  const newRecipe = {
    name: data.get("name"),
    description: data.get("description"),
    steps: data.get("steps"),
    time: data.get("time"),
    ingredients: data.get("ingredients"),
    imageUrl: data.get("imageUrl"),
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
