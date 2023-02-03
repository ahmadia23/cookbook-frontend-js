import React from "react";
// import UseInput from "../hooks/use-input";
import "./CookbookForm.css";
import { Form } from "react-router-dom";

const CookbookForm = (props) => {
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
        Theme:
        <input
          type="text"
          name="theme"
          value={props.themeValue}
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
      <button type="submit" className="cookbook-form-submit">
        Create Cookbook
      </button>
    </Form>
  );
};

export default CookbookForm;
