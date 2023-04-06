import React, { Fragment } from "react";
import "./CookbookForm.css";
import "../../Pages/Login.css";
import { Form } from "react-router-dom";

const CookbookForm = (props) => {
  const handleSubmit = (event) => {
    console.log("I submited the form");
  };

  const fileNameHandler = (e) => {
    console.log(e.target.value);
    const fileName = document.getElementById("file-selected");
    fileName.innerText = e.target.value.split("\\").slice(-1);
  };

  return (
    <Fragment>
      <img
        className="cookbook__form-banner"
        src="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_1280.jpg"
        alt="create a cookbook"
      ></img>
      <Form onSubmit={handleSubmit} method="post" className="cookbook-form">
        <h2 className="title">Create your Cookbook</h2>
        <h3 className="subtitle">Connect with the community!</h3>
        <div className={"input-container ic1"}>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="My wonderful asian rolls..."
            value={props.nameValue}
          ></input>
          <div className="cut"></div>
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
          <div className="cut cut-short"></div>
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
          <div className="cut cut-short"></div>
          <label className="placeholder">Theme</label>
        </div>
        <div className={"input-container ic1"}>
          <label className="custom-file-upload" htmlFor="file-upload">
            Upload an image
          </label>
          <span id="file-selected"></span>
          <input
            type="file"
            name="image"
            id="file-upload"
            onChange={fileNameHandler}
          ></input>
        </div>
        <button type="submit" className="submit">
          Create Cookbook
        </button>
      </Form>
    </Fragment>
  );
};

export default CookbookForm;
