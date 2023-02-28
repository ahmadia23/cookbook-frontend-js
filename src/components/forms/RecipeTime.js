import "./RecipeForm.css";
import React, { Fragment } from "react";

const RecipeTime = ({ page, setPage }) => {
  return (
    <Fragment>
      <h1 className="recipe-form__title"> Preparation time</h1>
      <div className="recipe-form__input ">
        <input name="recipeName" type="text" list="thems"></input>
        <datalist id="themes">
          <option>Asian food</option>
          <option>African food</option>
          <option>Mexiacn food</option>
          <option>Audi</option>
        </datalist>
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

export default RecipeTime;
