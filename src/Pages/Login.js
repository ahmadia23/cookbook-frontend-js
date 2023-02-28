import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import "./Login.css";
import UseInput from "../hooks/use-input";
import Button from "../UI/Button";

const Login = () => {
  let errorMailMessage = "";
  let errorPasswordMessage = "";

  const [buttonAvailable, setButton] = useState(true);

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

  console.log(buttonAvailable);
  if (buttonAvailable) {
    console.log("yo");
    setButton(false);
  }

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
    ? "error-field input-container ic1"
    : "input-container ic1";

  const passwordClasses = passwordHasError
    ? "error-field input-container ic2"
    : "input-container ic2";

  return (
    <div className="form-container">
      <Form method="POST" className="login-form">
        {emailHasError && errorMailMessage}
        {passwordHasError && errorPasswordMessage}
        <div class="title">Welcome</div>
        <div class="subtitle">Link to your account!</div>
        <div className={emailClasses}>
          <input
            type="text"
            name="email"
            className="input"
            placeholder="Enter a valid email..."
            onChange={emailValueHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          ></input>
          <div class="cut"></div>
          <label className="placeholder">Email</label>
        </div>
        <div className={passwordClasses}>
          <input
            type="text"
            name="password"
            className="input"
            placeholder="Enter your password..."
            onChange={passwordValueHandler}
            onBlur={passwordBlurHandler}
            value={passwordValue}
          ></input>
          <div class="cut cut-short"></div>
          <label className="placeholder">Password</label>
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>
        <div className="other-actions">
          <p>Don't have an account yet ? </p>
          <Button
            to="/signup"
            linkName="Sign up"
            className={"link-form "}
          ></Button>
        </div>
      </Form>
    </div>
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
