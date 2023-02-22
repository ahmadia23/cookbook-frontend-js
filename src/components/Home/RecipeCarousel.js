import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecipeCarousel.css";

const RecipeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/06/25/19/28/berries-2441679_1280.jpg"
            alt="food"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_1280.jpg"
            alt="food"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/12/19/19/29/dumplings-4706924_1280.jpg"
            alt="food"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/06/06/46/bread-2589595_1280.jpg"
            alt="food"
          />
        </div>
      </Slider>
    </div>
  );
};

export default RecipeCarousel;
