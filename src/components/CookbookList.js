import CookbookCard from "./CookbookCard";
import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router";
import { NavLink } from "react-router-dom";
import classes from "./CookbookList.module.css";

function CookbookList() {
  const data = useLoaderData();
  const cookbooks = data.cookbooks;
  const token = useRouteLoaderData("tokenLoader");

  return (
    <div>
      <div>hello !</div>
      {cookbooks.map((cookbook) => (
        <NavLink
          key={cookbook.id}
          to={token ? `/cookbooks/${cookbook.id}/recipes` : "/login"}
          className={classes.links}
          end
        >
          <CookbookCard key={cookbook.id} {...cookbook} className={classes} />
        </NavLink>
      ))}
    </div>
  );
}

export default CookbookList;
