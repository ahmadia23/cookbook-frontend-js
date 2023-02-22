import CookbookCard from "./CookbookCard";
import React, { Fragment } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router";
import { NavLink } from "react-router-dom";
import "./CookbookList.css";

function CookbookList(props) {
  const data = useLoaderData();
  let cookbooks = data.cookbooks;
  const token = useRouteLoaderData("tokenLoader");

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  if (props.random) {
    console.log(shuffleArray(cookbooks));
    cookbooks = shuffleArray(cookbooks).slice(0, 2);
  }

  return (
    <Fragment>
      <div className="container">
        {cookbooks.map((cookbook) => (
          <NavLink
            key={cookbook.id}
            to={token ? `/cookbooks/${cookbook.id}/recipes` : "/login"}
            className="links"
            end
          >
            <CookbookCard key={cookbook.id} {...cookbook} />
          </NavLink>
        ))}
      </div>
    </Fragment>
  );
}

export default CookbookList;
