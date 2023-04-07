import CookbookCard from "./CookbookCard";
import React, { Fragment } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router";
import { Link } from "react-router-dom";
import "./CookbookList.css";

function CookbookList(props) {
  const cookbooksData = useLoaderData();

  let cookbooks = cookbooksData.cookbooks;

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
    cookbooks = shuffleArray(cookbooks).slice(0, 2);
  }

  const typeOfCard = props.smaller ? "card__selection-theme" : "card";

  return (
    <Fragment>
      <div className="container">
        {cookbooks.map((cookbook) => (
          <Link
            key={cookbook.id}
            to={token ? `/cookbooks/${cookbook.id}/recipes` : "/login"}
            className="links"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
              });
            }}
          >
            <CookbookCard
              key={cookbook.id}
              name={cookbook.name}
              imageUrl={
                cookbook.imageUrl.split("/")[0] === "images"
                  ? "https://cookbook-backend12.herokuapp.com/" +
                    cookbook.imageUrl
                  : cookbook.imageUrl
              }
              description={cookbook.description}
              card={typeOfCard}
            />
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default CookbookList;
