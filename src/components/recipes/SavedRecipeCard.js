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
      <h2
        class="recipe__saved-title"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "32vw",
          height: "30vh",
          padding: "6rem",
          borderRadius: "1rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        {name}
      </h2>
    </div>
  );
};

export default SavedRecipeCard;
