import "./RecipeForm.css";
import React, { Fragment } from "react";

const RecipeDescription = ({ page, setPage, formData, setFormData }) => {
  return (
    <Fragment>
      <h1 className="recipe-form__title">Describe your recipe ?</h1>
      <div className="recipe-form__input ">
        <textarea
          name="recipeName"
          placeholder="With tender pasta noodles, a deliciously..."
          type="text"
          onChange={(e) => {
            setFormData();
          }}
        ></textarea>
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

export default RecipeDescription;
