import "./RecipeForm.css";
import React, { Fragment } from "react";

const RecipeIngredients = ({ page, setPage }) => {
  return (
    <Fragment>
      <h1 className="recipe-form__title"> Select the ingredients </h1>
      <div className="recipe-form__input ">
        <input name="recipeName" type="select"></input>
        <div className="recipe-actions">
          <button
            className={
              page === 0 ? "recipe-form__plus space" : "recipe-form__plus"
            }
            onClick={() => {
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

export default RecipeIngredients;
