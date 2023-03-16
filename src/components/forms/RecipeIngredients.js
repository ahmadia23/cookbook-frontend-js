import "./RecipeForm.css";
import React, { Fragment, useEffect } from "react";
import { UseInput as UseIngredients } from "../../hooks/use-input";
import { useSubmit } from "react-router-dom";

const RecipeIngredients = ({ page, setPage, formData, setFormData }) => {
  const validateIngredients = () => {};
  const {
    inputValue: ingredientsValue,
    inputValueHandler: ingredientsHandler,
  } = UseIngredients(validateIngredients);
  const submit = useSubmit();

  useEffect(() => {
    setFormData({ ...formData, ingredients: ingredientsValue });
  }, [ingredientsValue, formData, setFormData]);

  const submitHandler = (e) => {
    e.preventDefault();
    const proceed = window.confirm("are you sure ?");

    if (proceed) {
      submit(formData, {
        method: "POST",
        action: "",
      });
    }
  };

  return (
    <Fragment>
      <h1 className="recipe-form__title"> Indicate the ingredients </h1>
      <div className="recipe-form__input ">
        <textarea
          placeholder="salad, potatoes, carrot..."
          name="ingredients"
          type="text"
          onChange={ingredientsHandler}
          value={ingredientsValue}
        ></textarea>
        <div className="recipe-actions">
          <button
            type="submit"
            className={
              page === 0 ? "recipe-form__plus space" : "recipe-form__plus"
            }
            onClick={submitHandler}
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
