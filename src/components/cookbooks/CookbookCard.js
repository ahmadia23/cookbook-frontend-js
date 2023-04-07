import React from "react";
import "./CookbookCard.css";

const CookbookCard = (props) => {
  return (
    <div className={props.card}>
      <figure className="card__thumb">
        <img
          src={props.imageUrl}
          alt={props.name}
          crossorigin="anonymous"
          className="card__image"
        ></img>
        <figcaption className="card__caption">
          <h2 className="card__title">{props.name}</h2>
          <p className="card__snippet">{props.description}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CookbookCard;
