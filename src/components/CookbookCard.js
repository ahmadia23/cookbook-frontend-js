import React from "react";
import "./CookbookCard.css";

const CookbookCard = ({ name, imageUrl, description, theme }) => {
  let realCardParent;

  const isInTheCard = (element) => {
    if (realCardParent.contains(element)) return true;
    else return false;
  };

  const hoverCardHandler = (event) => {
    realCardParent = document.querySelector(".links");
    const element = event.target;
    const caption = element.querySelector(".card__caption");
    const image = element.querySelector(".card__image");
    const thumb = element.querySelector(".card__thumb");
    const snippet = element.querySelector(".card__snippet");
    if (element) {
      if (isInTheCard(element)) {
        console.log(element);
        image.classList.toggle("card__image_up");
        thumb.classList.toggle("card__thumb_up");
        snippet.classList.toggle("card__snippet_up");
        caption.classList.toggle("card__caption_up");
      }
    }
  };

  return (
    <div class="card" onMouseOver={hoverCardHandler}>
      <figure className="card__thumb">
        <img src={imageUrl} alt={name} class="card__image"></img>
        <figcaption className="card__caption">
          <h2 class="card__title">{name}</h2>
          <p class="card__snippet">{description}</p>
          <div className="card__end">
            <span className="cookbook-card__theme">{theme}</span>
            <a href="" class="card__button">
              Read more
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CookbookCard;
