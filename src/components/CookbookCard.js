import React from "react";
import "./CookbookCard.css";

const CookbookCard = ({ name, imageUrl, description, theme }) => {
  return (
    <div class="card">
      <figure className="card__thumb">
        <img src={imageUrl} alt={name} class="card__image"></img>
        <figcaption className="card__caption">
          <h2 class="card__title">{name}</h2>
          <p class="card__snippet">{description}</p>
          <a href="" class="card__button">
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default CookbookCard;
