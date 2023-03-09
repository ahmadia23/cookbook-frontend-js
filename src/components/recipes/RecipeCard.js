import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ name, imageUrl, description, time, ingredients }) => {
  return (
    <div className="recipe-card">
      <img src={imageUrl} alt={name} className="recipe-card__image" />
      <div className="recipe-card__content">
        <h3 className="recipe-card__title">{name}</h3>
        <p className="recipe-card__description">{description}</p>
        <h4>Ingredients</h4>
        <p className="recipe-card__description">{ingredients}</p>
        <h4>Preparation Time: </h4>
        <p className="recipe-card__time">{time} minutes</p>
      </div>
    </div>
  );
};

export default RecipeCard;
