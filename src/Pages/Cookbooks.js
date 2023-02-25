import { json, Outlet, useRouteLoaderData } from "react-router";
import CookbookList from "../components/cookbooks/CookbookList";
import Button from "../UI/Button";
import React, { Fragment } from "react";
import "./Cookbooks.css";
import CookbookSection from "../components/cookbooks/CookbookSections";
import "../components/cookbooks/CookbookCard.css";

const Cookbooks = () => {
  const token = useRouteLoaderData("tokenLoader");

  return (
    <Fragment>
      <h2 className="intro-text">
        Welcome to our Cookbooks page, where you can explore a wide range of
        recipes and cooking ideas.
      </h2>

      <div className="cookbooks-showcase">
        <h2>Selection of the day</h2>
        <p className="intro-text">
          Our Cookbooks are created by passionate foodies who love to experiment
          with new flavors and techniques.
        </p>
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
          <CookbookList random={true} smaller={true}></CookbookList>
        </div>
        <p className="intro-text ">
          So take your time, browse through our selection, and get inspired to
          create your own culinary masterpiece. Haxppy cooking!
        </p>
        <Button
          to={token ? "/new" : "/login"}
          className="button-create"
          linkName="Create a Cookbook"
        ></Button>
      </section>
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
