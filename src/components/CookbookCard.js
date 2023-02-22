import React from "react";
import "./CookbookCard.css";

const CookbookCard = (props) => {
  return (
    <div class={props.card}>
      <figure className="card__thumb">
        <img src={props.imageUrl} alt={props.name} class="card__image"></img>
        <figcaption className="card__caption">
          <h2 class="card__title">{props.name}</h2>
          <p class="card__snippet">{props.description}</p>
          <a href="" class="card__button">
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default CookbookCard;
