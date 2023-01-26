import React from 'react';
import './CookbookCard.css';


const CookbookCard = ({ name, image, description, theme }) => {

  return (
    <div className="cookbook-card" style={{ background: theme.background, color: theme.color }}>
      <img src={image} alt={name} className="cookbook-card__image" />
      <div className="cookbook-card__content">
        <h3 className="cookbook-card__title">{name}</h3>
        <p className="cookbook-card__description">{description}</p>
        <span className="cookbook-card__theme">{theme}</span>
      </div>
    </div>
  );
}

export default CookbookCard;
