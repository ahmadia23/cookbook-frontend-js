import React, { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import "../components/RecipeForm.css";
import store from "../store/index-redux";

const Login = () => {
  // const [isLogged, setIsLogged] = useState(false);

  return (
    <Form
      method="POST"
      className="cookbook-form"
      // action={isLogged }
      // onSubmit={useActionData(action)}
    >
      <label>Email</label>
      <input type="text" name="mail" className="cookbook-form-input"></input>
      <br></br>
      <label>Password</label>
      <input
        type="text"
        name="password"
        className="cookbook-form-input"
      ></input>
      <button type="submit" className="cookbook-form-submit">
        Sign in
      </button>
    </Form>
  );
};

export default Login;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const email = data.get("mail");
  const password = data.get("password");

 const response = await fetch("http://localhost:8080/graphql", {
    headers: {"Content-Type":  "application/json"},
    method: "POST",
    body: JSON.stringify(),
  });

  const resData = await response.json();
  console.log(resData);
  redirect("/");
};
