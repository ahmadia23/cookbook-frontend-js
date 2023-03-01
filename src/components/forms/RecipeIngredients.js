import "./RecipeForm.css";
import React, { Fragment } from "react";

const RecipeIngredients = ({ page, setPage, formData, setFormData }) => {
  return (
    <Fragment>
      <h1 className="recipe-form__title"> Indicate the ingredients </h1>
      <div className="recipe-form__input ">
        <textarea name="recipeName" type="text"></textarea>
        <div className="recipe-actions">
          <button
            type="submit"
            className={
              page === 0 ? "recipe-form__plus space" : "recipe-form__plus"
            }
          >
            Submit
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

export default RecipeIngredients;
