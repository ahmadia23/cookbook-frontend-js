// import classes from "./Home.module.css";
import React from "react";
import { Fragment } from "react";
import { useActionData, useNavigate } from "react-router";
import Banner from "../components/Banner";
import homePng from "../images/home-sweet-recipe.png";
import websitePng from "../images/website-idea.png";
import PromessCard from "../components/Home/PromessCard";
import "./Home.css";
import "../components/Home/PromessCard.css";
import RecipeCarousel from "../components/Home/RecipeCarousel";

const Home = () => {
  const message = useActionData();
  const navigate = useNavigate();

  const launchAppHandler = () => {
    navigate("/cookbooks");
  };

  console.log(message);
  return (
    <Fragment>
      <Banner></Banner>
      <section className="container">
        <div className="home-content mt-5">
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
          <img src={websitePng} alt="cooking website"></img>
        </div>
        <p className="home-intro reveal">
          Join our community of passionate cooks and start creating your own
          cookbook today. Explore the world of cooking and discover new dishes,
          flavors, and techniques.
        </p>
        <RecipeCarousel></RecipeCarousel>
        <div className="home-intro reveal">
          <p>Unleash your culinary creativity and let's get cooking!</p>
          <button className="home-link" onClick={launchAppHandler}>
            Launch App{" "}
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
