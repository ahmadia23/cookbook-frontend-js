import React from "react";
import { Form, redirect } from "react-router-dom";
import "../components/RecipeForm.css";
import UseInput from "../hooks/use-input";

const Login = () => {
  let errorMailMessage = "";
  let errorPasswordMessage = "";

  const validateEmail = (value) => {
    if (value.trim(" ").length === 0) {
      errorMailMessage = (
        <p className="error-message">Email should not be empty</p>
      );
      return false;
    }
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
      return true;
    } else {
      errorMailMessage = (
        <p className="error-message">
          Invalid email, please enter a valid format
        </p>
      );
      return false;
    }
  };

  const validatePassword = (value) => {
    if (value.trim(" ").length === 0) {
      errorPasswordMessage = (
        <p className="error-message">Password should not be empty</p>
      );
      return false;
    }
    if (value.length < 5) {
      errorPasswordMessage = (
        <p className="error-message">
          Password should be at least of 5 characters
        </p>
      );
      return false;
    }
  };

  const {
    inputValue: emailValue,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    inputValueHandler: emailValueHandler,
  } = UseInput(validateEmail);

  const {
    inputValue: passwordValue,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    inputValueHandler: passwordValueHandler,
  } = UseInput(validatePassword);

  const emailClasses = emailHasError
    ? "errorInput cookbook-form-input"
    : "cookbook-form-input";

  const passwordClasses = passwordHasError
    ? "errorInput cookbook-form-input"
    : "cookbook-form-input";

  return (
    <Form method="POST" className="cookbook-form">
      {emailHasError && errorMailMessage}
      {passwordHasError && errorPasswordMessage}
      <label>Email</label>
      <input
        type="text"
        name="email"
        className={emailClasses}
        onChange={emailValueHandler}
        onBlur={emailBlurHandler}
        value={emailValue}
      ></input>
      <br></br>
      <label>Password</label>
      <input
        type="text"
        name="password"
        className={passwordClasses}
        onChange={passwordValueHandler}
        onBlur={passwordBlurHandler}
        value={passwordValue}
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
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/login", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(loginData),
  });
  if (response.status === 422) {
    redirect("/login");
    return response;
  }

  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  const userId = resData.userId;
  localStorage.setItem("userId", userId);
  return redirect("/");
};
