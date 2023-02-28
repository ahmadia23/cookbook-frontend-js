import "./RecipeForm.css";
import React, { Fragment } from "react";

const RecipeName = ({ page, setPage }) => {
  return (
    <Fragment>
      <h1 className="recipe-form__title">Your recipe Name ? </h1>
      <div className="recipe-form__input ">
        <input
          name="recipeName"
          placeholder="My spicy lasagnas..."
          type="text"
        ></input>
        <div className="recipe-actions">
          <button
            className="recipe-form__plus"
            onClick={() => {
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
