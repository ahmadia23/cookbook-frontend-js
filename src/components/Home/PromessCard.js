import "./PromessCard.css";
import React, { Fragment } from "react";

const PromessCard = (props) => {
  return (
    <Fragment>
      <p className="home-intro">
        Do you love to cook and create amazing dishes in the kitchen? Do you
        have a passion for trying new recipes and discovering the latest cooking
        trends?
      </p>
      <p className="home-intro">
        Look no further, because our cookbook application has everything you
        need to bring your culinary dreams to life.
      </p>
      <div className="home-card">
        <img src={props.src} alt="sweet recipe"></img>
      </div>
    </Fragment>
  );
};

export default PromessCard;
