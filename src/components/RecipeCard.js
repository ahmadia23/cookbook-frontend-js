import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ name, image, description, time }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} className="recipe-card__image" />
      <div className="recipe-card__content">
        <h3 className="recipe-card__title">{name}</h3>
        <p className="recipe-card__description">{description}</p>
        <span className="recipe-card__time">{time} minutes</span>
      </div>
    </div>
  );
}

export default RecipeCard;
