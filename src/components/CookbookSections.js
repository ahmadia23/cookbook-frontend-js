import "./CookbookSections.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBowlFood,
  faPizzaSlice,
  faBurger,
  faPepperHot,
} from "@fortawesome/free-solid-svg-icons";

const CookbookSection = () => {
  return (
    <div className="search-cookbooks">
      <div className="cookbook-theme">
        <div className="theme-icons">
          <p>
            <FontAwesomeIcon
              icon={faBowlFood}
              className="noodles"
            ></FontAwesomeIcon>
          </p>
          <span>Asian Food</span>
        </div>
      </div>
      <div className="cookbook-theme">
        <div className="theme-icons">
          <p>
            <FontAwesomeIcon
              icon={faPepperHot}
              className="noodles"
            ></FontAwesomeIcon>
          </p>
          <span>Mexican Food</span>
        </div>
      </div>
      <div className="cookbook-theme">
        <div className="theme-icons">
          <p>
            <FontAwesomeIcon
              icon={faBurger}
              className="noodles"
            ></FontAwesomeIcon>
          </p>
          <span>Fast Food</span>
        </div>
      </div>
      <div className="cookbook-theme">
        <div className="theme-icons">
          <p>
            <FontAwesomeIcon
              icon={faPizzaSlice}
              className="noodles"
            ></FontAwesomeIcon>
          </p>
          <span>Pizza</span>
        </div>
      </div>
    </div>
  );
};

export default CookbookSection;
