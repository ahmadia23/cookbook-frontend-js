import { Fragment } from "react";
import classes from "./Banner.module.css"
import React from "react";
const Banner = () => {
  return (
    <Fragment>
      <div className={classes.banner}>
        <div class="container">
          <h1>
            Discover <strong> the Sweetest Recipes </strong>{" "}
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
      <div className="home-content mt-5">
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
    </Fragment>
  );
};

export default Banner;
