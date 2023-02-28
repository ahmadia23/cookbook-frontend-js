import "./RecipeForm.css";
import React from "react";
import { Form } from "react-router-dom";

const RecipeForm = (props) => {
  return (
    <Form onSubmit={props.handler} className="recipe-form">
      <h1 className="recipe-form__title">{props.title}</h1>
      <div className="recipe-form__input ">
        <input
          name="recipeName"
          placeholder={props.placeholder}
          ref={props.ref}
          type="text"
        ></input>
        <button type="submit" className="recipe-form__button">
          {props.step}
        </button>
      </div>
    </Form>
  );
};
export default RecipeForm;
