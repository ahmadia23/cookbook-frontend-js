import CookbookCard from "./CookbookCard";
import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router";
import { NavLink } from "react-router-dom";
import "./CookbookList.css";

function CookbookList() {
  const data = useLoaderData();
  const cookbooks = data.cookbooks;
  const token = useRouteLoaderData("tokenLoader");

  return (
    <div>
      <div>hello !</div>
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
    </div>
  );
}

export default CookbookList;
