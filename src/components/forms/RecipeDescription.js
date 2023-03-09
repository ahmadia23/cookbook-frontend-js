import "./RecipeForm.css";
import "../../UI/errors.css";
import React, { Fragment, useEffect, useState } from "react";
import { UseInput as UseDes } from "../../hooks/use-input";

const RecipeDescription = ({ page, setPage, formData, setFormData }) => {
  let errorMessage = "";
  const [isClicked, setIsClicked] = useState(false);

  const validateDescription = (value) => {
    if (value.trim(" ").length === 0) {
      errorMessage = (
        <p className="error-message">Description should not be empty</p>
      );
      return false;
    }
    if (value.trim(" ").length < 10) {
      errorMessage = (
        <p className="error-message">
          Description sould be more than 10 characters
        </p>
      );
      return false;
    } else if (value.trim(" ").length > 105) {
      errorMessage = (
        <p className="error-message">
          Description is too long, max 105 characters
          {value.trim(" ").length}
        </p>
      );
      return false;
    } else {
      return true;
    }
  };

  const validateSteps = (value) => {
    if (value.trim(" ").length === 0) {
      errorMessage = (
        <p className="error-message">Description should not be empty</p>
      );
      return false;
    }
    if (value.trim(" ").length < 30) {
      errorMessage = (
        <p className="error-message">
          Description sould be more than 30 characters
        </p>
      );
      return false;
    } else {
      return true;
    }
  };

  const {
    inputValue: descriptionValue,
    inputIsValid: descriptionValid,
    hasError: descriptionHasError,
    inputBlurHandler: descriptionBlurHandler,
    inputValueHandler: descriptionValueHandler,
  } = UseDes(validateDescription);

  const {
    inputValue: stepsValue,
    inputIsValid: stepsIsValid,
    hasError: stepsHasError,
    inputBlurHandler: stepsBlurHandler,
    inputValueHandler: stepsValueHandler,
  } = UseDes(validateSteps);

  useEffect(() => {
    setFormData({
      ...formData,
      description: descriptionValue,
      steps: stepsValue,
    });
  }, [stepsValue, descriptionValue]);

  const descriptionClasses = descriptionHasError ? "errorInput" : "";
  const setpsClasses = stepsHasError ? "errorInput" : "";
  console.log(formData);
  console.log(descriptionValue);

  return (
    <Fragment>
      {isClicked && !descriptionValid && errorMessage}
      <h1 className="recipe-form__title">Describe your recipe ?</h1>
      <div className="recipe-form__input ">
        <label>Short description</label>
        <input
          name="description"
          placeholder="With tender pasta noodles, a deliciously..."
          onChange={descriptionValueHandler}
          onBlur={descriptionBlurHandler}
          className={descriptionClasses}
        ></input>
        <label>Describe the steps in the following format</label>
        <textarea
          name="steps"
          placeholder="1. Dice onions carrot and vegetables ..."
          type="text"
          onChange={stepsValueHandler}
          onBlur={stepsBlurHandler}
          className={setpsClasses}
        ></textarea>
        <div className="recipe-actions">
          <button
            className={
              page === 0 ? "recipe-form__plus space" : "recipe-form__plus"
            }
            onClick={(e) => {
              e.preventDefault();
              setIsClicked(true);
              if (!descriptionValid || !stepsIsValid) {
                errorMessage = <p className="error-message">Invalid fields</p>;
                return;
              }
              console.log(formData);
              setPage(page + 1);
            }}
          >
            Next
          </button>
          <button
            className="recipe-form__minus"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeDescription;
