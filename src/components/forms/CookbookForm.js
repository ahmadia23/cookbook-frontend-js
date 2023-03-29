import React, { Fragment } from "react";
import "./CookbookForm.css";
import "../../Pages/Login.css";
import { Form } from "react-router-dom";
import { ImagePicker } from "react-file-picker";

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
        <h2 class="title">Create your Cookbook</h2>
        <h3 class="subtitle">Connect with the community!</h3>
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
          <ImagePicker
            extensions={["jpg", "jpeg", "png"]}
            dims={{
              minWidth: 100,
              maxWidth: 500,
              minHeight: 100,
              maxHeight: 500,
            }}
            onChange={(base64) => {}}
            onError={(errMsg) => {}}
            required
          >
            <button>Click to upload image</button>
          </ImagePicker>
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
