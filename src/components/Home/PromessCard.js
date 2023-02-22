import "./PromessCard.css";
import React, { Fragment } from "react";

const PromessCard = (props) => {
  window.addEventListener("scroll", () => {
    const alltext = document.querySelectorAll(".reveal");

    alltext.forEach((text) => {
      const textPosition = text.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 2;

      console.log(text);
      console.log(textPosition);
      console.log(screenPosition);

      if (textPosition < screenPosition) {
        text.classList.add("show");
      } else {
        text.classList.remove("show");
      }
    });
  });

  return (
    <Fragment>
      <p className="home-intro reveal">
        Do you love to cook and create amazing dishes in the kitchen? Do you
        have a passion for trying new recipes and discovering the latest cooking
        trends?
      </p>
      <p className="home-intro reveal">
        Look no further, because our cookbook application has everything you
        need to bring your culinary dreams to life.
      </p>
      <div className="home-card reveal">
        <img src={props.src1} alt="sweet recipe"></img>
        <p>
          With our platform, you can create your own personalized cookbook,
          tailored to your specific theme and preferences.
        </p>
      </div>
      <div className="home-card reveal">
        <p>
          Share your creations with the world. You'll never run out of ideas or
          inspiration in the kitchen again.
        </p>
        <img src={props.src2} alt="sweet recipe"></img>
      </div>
    </Fragment>
  );
};

export default PromessCard;
