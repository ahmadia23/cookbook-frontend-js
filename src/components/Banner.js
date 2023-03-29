import { Fragment } from "react";
import "./Banner.css";
import React from "react";
const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        <div class="container">
          <h1>
            Welcome to the world of <strong>culinary creativity! </strong>
          </h1>
          <p className="banner__text">
            Learn to cook elegant and elaborated recipes form all over the world
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
