import React from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router";
import Banner from "../components/Banner";
import homePng from "../images/home-sweet-recipe.png";
import websitePng from "../images/website-idea.png";
import PromessCard from "../components/Home/PromessCard";
import "./Home.css";
import "../components/Home/PromessCard.css";

const Home = () => {
  const navigate = useNavigate();

  const launchAppHandler = () => {
    window.scrollTo(0, 0);
    navigate("/cookbooks");
  };

  return (
    <Fragment>
      <Banner></Banner>
      <div className="home-container">
        <div className="home-content">
          <PromessCard
            src2={homePng}
            src1={
              "https://cdn.pixabay.com/photo/2017/08/08/08/57/cake-2610754_1280.jpg"
            }
          />
        </div>
        <div className="home-website reveal">
          <p>
            We've made it easy for you to discover new recipes, organize your
            favorite dishes, and share your culinary creations with friends and
            family.
          </p>
          <img
            className="image-website"
            src={websitePng}
            alt="cooking website"
          ></img>
        </div>
        <p className="home-community reveal">
          Join our passionated community and start creating your own cookbook
          today.
        </p>
        <div className="home-actions reveal">
          <p>Unleash your culinary creativity and let's get cooking!</p>
          <button className="home-link" onClick={launchAppHandler}>
            Launch App
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
