import React, { Fragment } from "react";
import "./CookbookForm.css";
import "../../Pages/Login.css";
import { Form } from "react-router-dom";
import { UseInput } from "../../hooks/use-input";

const CookbookForm = (props) => {
  let errorTitleMessage;
  let errorDescriptionMessage;
  let errorThemeMessage;

  const fileNameHandler = (e) => {
    console.log(e.target.value);
    const fileName = document.getElementById("file-selected");
    fileName.innerText = e.target.value.split("\\").slice(-1);
  };

  const validateTitle = (title) => {
    if (title.trim(" ").length === 0) {
      errorTitleMessage = (
        <p className="error-message">Title should not be empty</p>
      );
      return false;
    }
    if (/^[a-zA-Z0-9]{4,10}$/.test(title)) {
      return true;
    } else {
      errorTitleMessage = (
        <p className="error-message">
          Title should not have special characters
        </p>
      );
      return false;
    }
  };

  const validateDescription = (description) => {
    if (description.trim(" ").length === 0) {
      errorDescriptionMessage = (
        <p className="error-message">Description should not be empty</p>
      );
      return false;
    }
  };
  const validateTheme = (theme) => {
    if (theme.trim(" ").length === 0) {
      errorThemeMessage = (
        <p className="error-message">Theme should not be empty</p>
      );
      return false;
    }
  };

  const {
    inputValue: title,
    inputValueHandler: titleValueHandler,
    hasError: titleHasError,
    inputBlurHandler: titleBlur,
  } = UseInput(validateTitle);
  const {
    inputValue: description,
    inputValueHandler: descriptionHandler,

    inputBlurHandler: descriptionBlur,
    hasError: descriptionHasError,
  } = UseInput(validateDescription);
  const {
    inputValue: theme,
    inputValueHandler: themeValueHandler,
    hasError: themeHasError,
    inputBlurHandler: themeBlur,
  } = UseInput(validateTheme);

  return (
    <Fragment>
      <img
        className="cookbook__form-banner"
        src="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_1280.jpg"
        alt="create a cookbook"
      ></img>
      <Form
        method="post"
        className="cookbook-form"
        encType="multipart/form-data"
      >
        <h2 className="title">Create your Cookbook</h2>
        <h3 className="subtitle">Connect with the community!</h3>
        {titleHasError && errorTitleMessage}
        {themeHasError && errorThemeMessage}
        {descriptionHasError && errorDescriptionMessage}
        <div className={"input-container ic1"}>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="My wonderful asian rolls..."
            onBlur={titleBlur}
            onChange={titleValueHandler}
            value={title}
          ></input>
          <div className="cut"></div>
          <label className="placeholder">Cookbook Name</label>
        </div>
        <div className={"input-container ic2"}>
          <input
            type="text"
            name="description"
            className="input"
            onChange={descriptionHandler}
            onBlur={descriptionBlur}
            placeholder="This cookbook has a variety of..."
            value={description}
          ></input>
          <div className="cut cut-short"></div>
          <label className="placeholder">Description</label>
        </div>
        <div className={"input-container ic1"}>
          <input
            type="text"
            name="theme"
            className="input"
            onChange={themeValueHandler}
            onBlur={themeBlur}
            placeholder="Asian food.."
            value={theme}
          ></input>
          <div className="cut cut-short"></div>
          <label className="placeholder">Theme</label>
        </div>
        <div className={"input-container ic1"}>
          <label className="custom-file-upload" htmlFor="file-upload">
            Upload an image
          </label>
          <span id="file-selected"></span>
          <input
            type="file"
            name="image"
            id="file-upload"
            onChange={fileNameHandler}
          ></input>
        </div>
        <button type="submit" className="submit">
          Create Cookbook
        </button>
      </Form>
    </Fragment>
  );
};

export default CookbookForm;
