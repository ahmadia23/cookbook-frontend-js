import "./RecipeForm.css";
import React, { Fragment } from "react";
import { UseInput as UseIngredients } from "../../hooks/use-input";
import { useSubmit } from "react-router-dom";

const RecipeIngredients = ({ page, setPage, formData, setFormData }) => {
  const validateIngredients = () => {};
  const { inputValue: ingredients, inputValueHandler: ingredientsHandler } =
    UseIngredients(validateIngredients);
  const submit = useSubmit();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(ingredients);
    console.log(formData);
    setFormData({ ...formData, ingredients: ingredients });
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
          name="recipeName"
          type="text"
          onChange={ingredientsHandler}
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
