import "./RecipeForm.css";
import React, { Fragment, useState } from "react";
import { UseInput as UseImage } from "../../hooks/use-input";

const RecipeImage = ({ page, setPage, formData, setFormData }) => {
  let imageErrorMessage = "";
  const [isClicked, setIsClicked] = useState(false);

  const urlRegex =
    /[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
  const validateImage = (value) => {
    if (value.trim(" ").length === 0) {
      imageErrorMessage = (
        <p className="error-message">Image url should not be empty</p>
      );
      return false;
    }
    if (value.trim(" ").length < 3 || !urlRegex.test(value)) {
      imageErrorMessage = (
        <p className="error-message">Image sould be an url</p>
      );
      return false;
    } else {
      return true;
    }
  };

  const {
    inputValue: imageValue,
    inputIsValid: imageIsValid,
    inputValueHandler: imageValueHandler,
  } = UseImage(validateImage);

  const imageClasses = imageIsValid ? "error-field" : "";

  return (
    <Fragment>
      <h1 className="recipe-form__title"> Add a presentation picture</h1>
      <div className="recipe-form__input ">
        {isClicked && !imageIsValid && imageErrorMessage}
        <input
          placeholder="Url of your picture..."
          name="image"
          type="text"
          onChange={imageValueHandler}
          className={imageClasses}
        ></input>
        <div className="recipe-actions">
          <button
            className="recipe-form__plus"
            onClick={(e) => {
              e.preventDefault();
              setIsClicked(true);
              if (!imageIsValid) {
                imageErrorMessage = (
                  <p className="error-message">image is invalid</p>
                );
                return imageErrorMessage;
              }
              setFormData({ ...formData, imageUrl: imageValue });
              console.log(formData);
              setPage(page + 1);
            }}
          >
            Next
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

export default RecipeImage;
