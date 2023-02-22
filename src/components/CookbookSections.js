import "./CookbookSections.css";
import React from "react";

const CookbookSection = () => {
  return (
    <div className="search-cookbooks">
      <div className="theme-icons">
        <div>
          <i class="fa-regular fa-bowl-chopsticks-noodles"></i>
          <span>Asian Food</span>
        </div>
        <div>
          <i class="fa-sharp fa-regular fa-taco"></i>
          <span>Mexican Food</span>
        </div>
        <div>
          <i class="fa-solid fa-burger-fries"></i>
          <span>Fast Food</span>
        </div>
        <div>
          <i class="fa-light fa-pizza-slice"></i>
          <span>Pizza</span>
        </div>
      </div>
    </div>
  );
};

export default CookbookSection;
