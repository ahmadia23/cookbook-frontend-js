// import classes from "./Home.module.css";
import React from "react";
import { Fragment } from "react";
import { useActionData, useRouteLoaderData } from "react-router";
import Banner from "../components/Banner";
import homePng from "../images/home-sweet-recipe.png";
import PromessCard from "../components/Home/PromessCard";

const Home = () => {
  const token = useRouteLoaderData("tokenLoader");
  const message = useActionData();
  console.log(message);
  return (
    <Fragment>
      <Banner></Banner>
      <section className="container">
        <div className="home-content mt-5">
          <PromessCard src={homePng} />
          <p className="home-card">
            With our platform, you can create your own personalized cookbook,
            tailored to your specific theme and preferences. Write down your
            favorite recipes, save recipes you love from other users, and share
            your creations with the world. You'll never run out of ideas or
            inspiration in the kitchen again.
          </p>
          <p className="home-card">
            Our platform is designed with the modern cook in mind. With a sleek,
            dark blueprint and intuitive user interface, you'll feel right at
            home in the kitchen. We've made it easy for you to discover new
            recipes, organize your favorite dishes, and share your culinary
            creations with friends and family.
          </p>
          <p>
            Join our community of passionate cooks and start creating your own
            cookbook today. Explore the world of cooking and discover new
            dishes, flavors, and techniques. Unleash your culinary creativity
            and let's get cooking!
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
