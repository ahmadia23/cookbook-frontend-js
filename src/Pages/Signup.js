// redireiger vers la page signup s'il y a une erreur
//récupérer le message de l'erreur
// afficher l'erreur au dessus du forme en rouge

import "../components/RecipeForm.css";
import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import UseInput from "../hooks/use-input";
import "../UI/errors.css";
import { useSelector } from "react-redux";

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
  } = UseInput(validateEmail);
  const {
    inputValue: passwordValue,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    inputValueHandler: passwordValueHandler,
  } = UseInput(validatePassword);

  const {
    inputValue: SndPasswordValue,
    inputValueHandler: SndPasswordValueHandler,
  } = UseInput(validatePassword);

  const emailClasses = emailHasError
    ? "errorInput cookbook-form-input"
    : "cookbook-form-input";
  const passwordClasses =
    passwordValue !== SndPasswordValue
      ? "errorInput cookbook-form-input"
      : "cookbook-form-input";

  let notMatching =
    passwordValue !== SndPasswordValue ? (
      <p className="error-message">Confirmation password does not match</p>
    ) : (
      ""
    );

  // resetSndPassword();
  // resetEmail();
  // resetPassword();

  return (
    <Form
      method="POST"
      action="/signup"
      className="cookbook-form"
      // action={isLogged }
      // onSubmit={useActionData(action)}
      // onSubmit={submitHandler}
    >
      <p className="error-message">{data && data.errorMessage}</p>
      {notMatching}
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
      <label>Confirm password</label>
      <input
        type="text"
        name="SndPassword"
        className={passwordClasses}
        onChange={SndPasswordValueHandler}
        value={SndPasswordValue}
      ></input>
      <button type="submit" className="cookbook-form-submit">
        Sign up
      </button>
    </Form>
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
  const response = await fetch("http://localhost:8080/signup", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(newUser),
  });

  if (response.status === 422) {
    redirect("/signup");
    return response;
  }
  if (response.status === 404) {
    redirect("/");
    return response;
  }
  return redirect("/login");
};
