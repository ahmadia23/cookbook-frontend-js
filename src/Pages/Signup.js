import "../components/RecipeForm.css";
import React, { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import UseInput from "../hooks/use-input";
import "../UI/errors.css";

const Signup = () => {
  let errorMailMessage = "";
  let errorPasswordMessage = "";
  const navigate = useNavigate();

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
    inputIsValid: emailIsValid,
    reset: resetEmail,
  } = UseInput(validateEmail);
  const {
    inputValue: passwordValue,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    inputValueHandler: passwordValueHandler,
    inputIsValid: passwordIsValid,
    reset: resetPassword,
  } = UseInput(validatePassword);

  const {
    inputValue: SndPasswordValue,
    inputValueHandler: SndPasswordValueHandler,
    reset: resetSndPassword,
  } = UseInput(validatePassword);


  const emailClasses = emailHasError
    ? "errorInput cookbook-form-input"
    : "cookbook-form-input";
  const passwordClasses =  passwordValue !== SndPasswordValue
    ? "errorInput cookbook-form-input"
    : "cookbook-form-input";

  let notMatching =
    passwordValue !== SndPasswordValue ? (
      <p className="error-message">Confirmation password does not match</p>
    ) : (
      ""
    );


  return (
    <Form
      method="POST"
      action="/signup"
      className="cookbook-form"
      // action={isLogged }
      // onSubmit={useActionData(action)}
      // onSubmit={submitHandler}
    >
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
      ></input>
      <br></br>
      <label>Password</label>
      <input
        type="text"
        name="password"
        className={passwordClasses}
        onChange={passwordValueHandler}
        onBlur={passwordBlurHandler}
      ></input>
      <label>Confirm password</label>
      <input
        type="text"
        name="password"
        className={passwordClasses}
        onChange={SndPasswordValueHandler}
      ></input>
      <button type="submit" className="cookbook-form-submit">
        Sign up
      </button>
    </Form>
  );
};

export default Signup;

export const action = async({ request, params }) => {
  const data = await request.formData();
  console.log(data.get("email"));
  redirect("/");
};
