import React, { useState } from "react";
// import UseInput from "../hooks/use-input";
import "./RecipeForm.css";
import { Form } from "react-router-dom";

const RecipeForm = (props) => {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [time, setTime] = useState(props.time);
  const [image, setImage] = useState(props.imageUrl);

  const nameValueHandler = (event) => {
    setName(event.target.value);
  };

  const descriptionValueHandler = (event) => {
    setDescription(event.target.value);
  };

  const timeValueHandler = (event) => {
    setTime(event.target.value);
  };

  const imageValueHandler = (event) => {
    setImage(event.target.value);
  };

  return (
    <Form method="post" className="cookbook-form">
      <label>
        Name:
        <input
          onChange={nameValueHandler}
          type="text"
          name="name"
          value={name}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          onChange={descriptionValueHandler}
          name="description"
          value={description}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Time:
        <input
          onChange={timeValueHandler}
          type="number"
          name="time"
          value={time}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          onChange={imageValueHandler}
          type="text"
          name="image"
          value={image}
          className="cookbook-form-input"
        />
      </label>
      <br />
      {/* <label>
        Ingredients:
        <input
          type="text"
          name="image"
          value={props.ingedientsValue}
          className="cookbook-form-input"
        />
      </label> */}
      <br />
      <button type="submit" className="cookbook-form-submit">
        {props.editMode ? "Edit this recipe" : "Add Recipe"}
      </button>
    </Form>
  );
};

export default RecipeForm;
