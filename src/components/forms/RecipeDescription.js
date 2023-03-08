import "./RecipeForm.css";
import React, { Fragment, useState } from "react";
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
    if (value.trim(" ").length < 20) {
      errorMessage = (
        <p className="error-message">
          Description sould be more than 20 characters
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
    inputBlurHandler: descriptionBlurHandler,
    inputValueHandler: descriptionValueHandler,
  } = UseDes(validateDescription);

  const descriptionClasses = !descriptionValid ? "error-field" : "";
  console.log(formData);
  console.log(descriptionValue);

  return (
    <Fragment>
      <h1 className="recipe-form__title">Describe your recipe ?</h1>
      <div className="recipe-form__input ">
        {isClicked && !descriptionValid && errorMessage}
        <textarea
          name="recipeName"
          placeholder="With tender pasta noodles, a deliciously..."
          type="text"
          onChange={descriptionValueHandler}
          onBlur={descriptionBlurHandler}
          className={descriptionClasses}
        ></textarea>
        <div className="recipe-actions">
          <button
            className={
              page === 0 ? "recipe-form__plus space" : "recipe-form__plus"
            }
            onClick={(e) => {
              e.preventDefault();
              setIsClicked(true);
              if (!descriptionValid) {
                errorMessage = (
                  <p className="error-message">Description is invalid</p>
                );
                return;
              }
              setFormData({ ...formData, description: descriptionValue });
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
