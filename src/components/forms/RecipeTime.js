import "./RecipeForm.css";
import React, { Fragment, useEffect } from "react";
import { UseInput as UseTime } from "../../hooks/use-input";

const RecipeTime = ({ page, setPage, formData, setFormData }) => {
  const validateTime = () => {};

  const { inputValue: timeValue, inputValueHandler: timeValueHandler } =
    UseTime(validateTime);

  useEffect(() => {
    console.log(timeValue);
  }, [timeValue]);
  return (
    <Fragment>
      <h1 className="recipe-form__title"> Preparation time</h1>
      <div className="recipe-form__input ">
        <select
          name="time"
          id="times"
          onChange={timeValueHandler}
          value={timeValue}
        >
          <option value="15">15 min</option>
          <option value="25">25 min</option>
          <option value="30">30 min</option>
          <option value="1+">1+ hours</option>
        </select>
        <div className="recipe-actions">
          <button
            className={
              page === 0 ? "recipe-form__plus space" : "recipe-form__plus"
            }
            onClick={() => {
              if (!timeValue) {
                setPage(page + 1);
                return setFormData({ ...formData, time: "15" });
              }
              setPage(page + 1);
              setFormData({ ...formData, time: timeValue });
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
