import React from "react";
// import UseInput from "../hooks/use-input";
import "./RecipeForm.css";
import { Form } from "react-router-dom";

const RecipeForm = (props) => {
  // const validateName = (name) => {
  //   return name.trim().length !== 0;
  //
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [theme, setTheme] = useState("");
  // const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    console.log("I submited the form");
  };

  return (
    <Form onSubmit={handleSubmit} method="post" className="cookbook-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.nameValue}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={props.descriptionValue}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="number"
          name="time"
          value={props.timeValue}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={props.imageValue}
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
        Add Recipe
      </button>
    </Form>
  );
};

export default RecipeForm;
