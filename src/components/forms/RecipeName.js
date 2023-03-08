import "./RecipeForm.css";
import React, { Fragment, useState } from "react";
import { UseInput as UseName } from "../../hooks/use-input";

const RecipeName = ({ page, setPage, formData, setFormData }) => {
  let nameErrorMessage = "";
  const [isClicked, setIsClicked] = useState(false);

  const validateName = (value) => {
    if (value.trim(" ").length === 0) {
      nameErrorMessage = (
        <p className="error-message">Name should not be empty</p>
      );
      return false;
    }
    if (value.trim(" ").length < 3 || !/^[a-zA-Z]+$/.test(value)) {
      nameErrorMessage = (
        <p className="error-message">
          Name sould be more than 3 characters and without special characters
        </p>
      );
      return false;
    } else {
      return true;
    }
  };

  const {
    inputValue: nameValue,
    inputIsValid: nameIsValid,
    inputBlurHandler: nameBlurHandler,
    inputValueHandler: nameValueHandler,
  } = UseName(validateName);

  const nameClasses = nameIsValid ? "error-field" : "";

  return (
    <Fragment>
      <h1 className="recipe-form__title">Your recipe Name ? </h1>
      <div className="recipe-form__input ">
        {isClicked && !nameIsValid && nameErrorMessage}
        <input
          name="recipeName"
          placeholder="My spicy lasagnas..."
          type="text"
          onChange={nameValueHandler}
          className={nameClasses}
          onBlur={nameBlurHandler}
        ></input>
        <div className="recipe-actions">
          <button
            className="recipe-form__plus"
            onClick={(e) => {
              e.preventDefault();
              setIsClicked(true);
              if (!nameIsValid) {
                nameErrorMessage = (
                  <p className="error-message">name is invalid</p>
                );
                return nameErrorMessage;
              }
              setFormData({ ...formData, name: nameValue });
              console.log(formData);
              setPage(page + 1);
            }}
          >
            Next
          </button>
          <button className="recipe-form__minus">Cancel</button>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeName;
