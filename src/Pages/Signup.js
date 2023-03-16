// redireiger vers la page signup s'il y a une erreur
//récupérer le message de l'erreur
// afficher l'erreur au dessus du forme en rouge

import "../components/forms/RecipeForm.css";
import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { UseInput as UseSignup } from "../hooks/use-input";
import "../UI/errors.css";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import "./Login.css";

const Signup = () => {
  let errorMailMessage = "";
  let errorPasswordMessage = "";
  const data = useActionData();

  const stateTest = useSelector((state) => state);
  console.log(stateTest);

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
  };

  const {
    inputValue: emailValue,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    inputValueHandler: emailValueHandler,
  } = UseSignup(validateEmail);
  const {
    inputValue: passwordValue,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    inputValueHandler: passwordValueHandler,
  } = UseSignup(validatePassword);

  const {
    inputValue: SndPasswordValue,
    inputValueHandler: SndPasswordValueHandler,
  } = UseSignup(validatePassword);

  const emailClasses = emailHasError
    ? "error-field input-container ic1"
    : "input-container ic1";
  const passwordClasses =
    passwordValue !== SndPasswordValue
      ? "error-field input-container ic2"
      : "input-container ic2";

  let notMatching =
    passwordValue !== SndPasswordValue ? (
      <p className="error-message">Confirmation password does not match</p>
    ) : (
      ""
    );

  return (
    <div className="form-container">
      <Form method="POST" action="/signup" className="login-form">
        <p className="error-message">{data && data.errorMessage}</p>
        {notMatching}
        {emailHasError && errorMailMessage}
        {passwordHasError && errorPasswordMessage}
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
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
        <div className={passwordClasses}>
          <input
            type="text"
            name="SndPassword"
            className="input"
            placeholder="Confirm your password..."
            onChange={SndPasswordValueHandler}
            value={SndPasswordValue}
          ></input>
          <div class="cut cut-short"></div>
          <label className="placeholder">Confirm password</label>
        </div>
        <button
          type="submit"
          className={"ok" ? "submit" : "inactive :disabled"}
        >
          Sign up
        </button>
        <div className="other-actions">
          <p>Already registered ? </p>
          <Button
            to="/login"
            linkName="Sign in"
            className={"link-form "}
          ></Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  console.log("from action method", data);
  const newUser = {
    email: data.get("email"),
    password: data.get("password"),
    confirmedPassword: data.get("SndPassword"),
  };
  const response = await fetch(
    "https://cookbook-backend12.herokuapp.com/signup",
    {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newUser),
    }
  );

  if (response.status === 422) {
    redirect("/signup");
    return response;
  }
  if (response.status === 404) {
    redirect("/");
    return response;
  }
  if (response.status === 500) {
    return response;
  }
  return redirect("/login");
};
