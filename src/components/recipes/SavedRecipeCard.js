import "./SavedRecipeCard.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SavedRecipeCard = ({ name, imageUrl, onRemove, id }) => {
  return (
    <div class="saved-recipe" id={id}>
      <button className="remove-button" onClick={onRemove}>
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </button>
      <div
        class="saving-card"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "32vw",
          height: "30vh",
          padding: "4rem",
          borderRadius: "1rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          position: "relative",
          opacity: "0.9",
          zIndex: "0.6",
        }}
      >
        <h2 className="recipe__saved-title"> {name}</h2>
      </div>
    </div>
  );
};

export default SavedRecipeCard;
