import "./RecipeForm.css";
import React, { Fragment } from "react";
import { UseInput as UseTime } from "../../hooks/use-input";

const RecipeTime = ({ page, setPage, formData, setFormData }) => {
  const validateTime = () => {};
  const { inputValue: timeValue, inputValueHandler: timeValueHandler } =
    UseTime(validateTime);

  return (
    <Fragment>
      <h1 className="recipe-form__title"> Preparation time</h1>
      <div className="recipe-form__input ">
        <select name="recipeName" id="times" onChange={timeValueHandler}>
          <option>15 min</option>
          <option>25 min</option>
          <option>30 min</option>
          <option>1+ hours</option>
        </select>
        <div className="recipe-actions">
          <button
            className={
              page === 0 ? "recipe-form__plus space" : "recipe-form__plus"
            }
            onClick={() => {
              setFormData({ ...formData, time: timeValue });
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
