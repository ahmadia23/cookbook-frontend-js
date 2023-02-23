import CookbookForm from "../components/forms/CookbookForm";
import React from "react";
import { json, redirect } from "react-router";
import { getAuthToken } from "../util/Authentification";

const CookbookNew = () => {
  return (
    <div>
      <h1>Hello from the new cookbook </h1>
      <CookbookForm></CookbookForm>
    </div>
  );
};

export default CookbookNew;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const token = getAuthToken();

  const cookbookData = {
    name: data.get("name"),
    description: data.get("description"),
    theme: data.get("theme"),
    image: data.get("image"),
  };
  console.log(cookbookData);
  const response = await fetch("http://localhost:8080/new-cookbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(cookbookData),
  });
  if (!response.ok) {
    throw json({ message: "could not add the cookbook" }, { status: 500 });
  }
  console.log(response);
  return redirect("/cookbooks");
};
