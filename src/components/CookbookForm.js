import React, { useState } from "react";
import "./CookbookForm.css";

const CookbookForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, description, theme, image);
  };

  return (
    <form onSubmit={handleSubmit} className="cookbook-form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Theme:
        <input
          type="text"
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className="cookbook-form-input"
        />
      </label>
      <br />
      <button type="submit" className="cookbook-form-submit">
        Create Cookbook
      </button>
    </form>
  );
};

export default CookbookForm;
