import React, { useState } from "react";
import { Form } from "react-router-dom";

function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    theme: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Theme:
        <input
          type="text"
          name="theme"
          value={formData.theme}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default FormExample;
