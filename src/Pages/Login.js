import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import "../components/RecipeForm.css";

const Login = () => {
  return (
    <Form
      method="POST"
      className="cookbook-form"
      // onSubmit={useActionData(action)}
    >
      <label>Mail address</label>
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

  const graphqlQuery = {
    query: `
        mutation {
          login(userInput: {email: "${email}", password: "${password}"}){
            userId
            token
          }
      }
    `,
  };
  const response = await fetch("http://localhost:8080/graphql", {
    headers: {"Content-Type":  "application/json"},
    method: "POST",
    body: JSON.stringify(graphqlQuery),
  });

  const resData = await response.json();
  console.log(resData);
  redirect("/");
};
