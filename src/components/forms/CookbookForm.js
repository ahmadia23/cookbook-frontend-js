import React, { Fragment } from "react";
import "./CookbookForm.css";
import { Form } from "react-router-dom";

const CookbookForm = (props) => {
  const handleSubmit = (event) => {
    console.log("I submited the form");
  };

  return (
    <Fragment>
      <img
        className="cookbook__form-banner"
        src="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_1280.jpg"
        alt="create a cookbook"
      ></img>
      <Form onSubmit={handleSubmit} method="post" className="cookbook-form">
        <div class="title">Create your Cookbook</div>
        <div class="subtitle">Connect with the community!</div>
        <div className={"input-container ic1"}>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="My wonderful asian rolls..."
            value={props.nameValue}
          ></input>
          <div class="cut"></div>
          <label className="placeholder">Cookbook Name</label>
        </div>
        <div className={"input-container ic2"}>
          <input
            type="text"
            name="description"
            className="input"
            placeholder="This cookbook has a variety of..."
            value={props.descriptionValue}
          ></input>
          <div class="cut cut-short"></div>
          <label className="placeholder">Description</label>
        </div>
        <div className={"input-container ic1"}>
          <input
            type="text"
            name="theme"
            className="input"
            placeholder="Asian food.."
            value={props.themeValue}
          ></input>
          <div class="cut cut-short"></div>
          <label className="placeholder">Theme</label>
        </div>
        <div className={"input-container ic1"}>
          <input
            type="text"
            name="image"
            className="input"
            placeholder="https://..."
            value={props.imageValue}
          ></input>
          <div class="cut cut-short"></div>
          <label className="placeholder">Image Url</label>
        </div>
        <button type="submit" className="submit">
          Create Cookbook
        </button>
      </Form>
    </Fragment>
  );
};

export default CookbookForm;
