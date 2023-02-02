import { Fragment } from "react";
import classes from "./Banner.module.css";
import React from "react";
const Banner = () => {
  return (
    <Fragment>
      <div className={classes.banner}>
        <div class="container">
          <h1>
          Welcome to the world of <strong>culinary creativity! </strong>{" "}
          </h1>
          <p>
            Change your life and learn to code at one of our campuses around the
            world.
          </p>
          {/* <a className="btn btn-flat" href="#">
            Apply now
          </a> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
