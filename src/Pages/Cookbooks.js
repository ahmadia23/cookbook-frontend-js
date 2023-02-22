import { json, Outlet, useRouteLoaderData } from "react-router";
import CookbookList from "../components/CookbookList";
import Button from "../UI/Button";
import React, { Fragment } from "react";
import "./Cookbooks.css";
import CookbookSection from "../components/CookbookSections";
import "../components/CookbookCard.css";

const Cookbooks = () => {
  const token = useRouteLoaderData("tokenLoader");
  return (
    <Fragment>
      <h2 className="intro-text">
        Welcome to our Cookbooks page, where you can explore a wide range of
        recipes and cooking ideas. Our Cookbooks are created by passionate
        foodies who love to experiment with new flavors and techniques.
      </h2>
      <div className="cookbooks-showcase">
        <h2>Selection of the day</h2>
        <CookbookList random={true} smaller={false}></CookbookList>
      </div>
      <section className="cookbooks">
        <div cookbooks-intro></div>
        <p className="intro-text">
          Each cookbook has a unique theme and includes a collection of
          delicious recipes that are sure to tantalize your taste buds. Whether
          you are a seasoned chef or a beginner in the kitchen, our cookbooks
          offer something for everyone.
        </p>
        <div className="cookbook-section">
          <h2 className="cookbook-section-title">Theme Inspiration</h2>
          <CookbookSection></CookbookSection>
          <CookbookList smaller={true}></CookbookList>
        </div>
        <p>
          So take your time, browse through our selection, and get inspired to
          create your own culinary masterpiece. Happy cooking!
        </p>
      </section>
      <Button to={token ? "/new" : "/login"} linkName="New Cookbook" />
      <Outlet></Outlet>
    </Fragment>
  );
};

export const loader = async () => {
  const response = await fetch("http://localhost:8080/cookbooks");
  if (!response.ok) {
    return json({ message: "could not fetch cookbooks" }, { status: 500 });
  } else {
    return response;
  }
  // catch(err){
  //   console.log(err);
  // }
};
export default Cookbooks;
