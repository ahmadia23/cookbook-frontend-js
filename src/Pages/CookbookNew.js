import CookbookForm from "../components/forms/CookbookForm";
import React from "react";
import { json, redirect } from "react-router";
import { getAuthToken } from "../util/Authentification";

const CookbookNew = () => {
  return (
    <div className="cookbook__new">
      <CookbookForm></CookbookForm>
    </div>
  );
};

export default CookbookNew;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const cookbookFormData = new FormData();

  cookbookFormData.append("name", data.get("name"));
  cookbookFormData.append("description", data.get("description"));
  cookbookFormData.append("theme", data.get("theme"));
  cookbookFormData.append("image", data.get("image"));

  const token = getAuthToken();
  //http://localhost:8080/
  //https://cookbook-backend12.herokuapp.com/
  console.log(cookbookFormData.get("image"));
  const response = await fetch("http://localhost:8080/new-cookbook", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: cookbookFormData,
  });
  if (!response.ok) {
    throw json({ message: "could not add the cookbook" }, { status: 500 });
  }
  console.log(response);
  return redirect("/cookbooks");
};
