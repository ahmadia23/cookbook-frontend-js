import {
  json,
  Outlet,
  redirect,
  useLoaderData,
  useRouteLoaderData,
} from "react-router";
import CookbookList from "../components/cookbooks/CookbookList";
import Button from "../UI/Button";
import React, { Fragment, useState } from "react";
import "./Cookbooks.css";
import CookbookSection from "../components/cookbooks/CookbookSections";
import "../components/cookbooks/CookbookCard.css";
import ReactSearchBox from "react-search-box";
import { Form } from "react-router-dom";
import CookbooksResults from "../components/cookbooks/CookbooksResults";

const Cookbooks = () => {
  const token = useRouteLoaderData("tokenLoader");
  const cookbooks = useLoaderData().cookbooks;
  const [results, setResults] = useState([]);
  const [inputSearched, setInputSearched] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  // let activeStyle = {
  //   window:top: 0,
  // };

  const showCookbookResults = () => {
    setSearchMode(true);
    const re = cookbooks.filter((cookbook) => {
      console.log(
        cookbook.name.toLowerCase().replace(/\s+/g, "").includes(inputSearched)
      );
      return cookbook.name
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(inputSearched);
    });
    console.log("re is: ", re);
    setResults(re);
    return redirect("results");
  };

  return (
    <Fragment>
      <h2 className="intro-text">
        Welcome to our Cookbooks page, where you can explore a wide range of
        recipes and cooking ideas.
      </h2>
      <h3 className="cookbook-section-title "> Find the right cookbook</h3>
      <div className="cookbook-searchbar">
        <Form onSubmit={showCookbookResults}>
          <ReactSearchBox
            onChange={(e) => setInputSearched(e)}
            inputHWidth="10vw"
            inputBackgroundColor="#aeaba7"
            className="cookbook-searchbar"
            placeholder="I am looking for a cookbook, a theme..."
          ></ReactSearchBox>
        </Form>
      </div>
      {searchMode ? (
        <section className="results-section">
          <CookbooksResults cookbooks={results}></CookbooksResults>
        </section>
      ) : (
        <div>
          <div className="cookbooks-showcase">
            <h2>Selection of the day</h2>
            <p className="intro-text">
              Our Cookbooks are created by passionate foodies who love to
              experiment with new flavors and techniques.
            </p>
            <CookbookList random={true} smaller={false}></CookbookList>
          </div>
          <section className="cookbooks">
            <p className="intro-text">
              Each cookbook has a unique theme and includes a collection of
              delicious recipes that are sure to tantalize your taste buds.
              Whether you are a seasoned chef or a beginner in the kitchen, our
              cookbooks offer something for everyone.
            </p>
            <div className="cookbook-section">
              <h2 className="cookbook-section-title">Theme Inspiration</h2>
              <CookbookSection></CookbookSection>
              <CookbookList random={true} smaller={true}></CookbookList>
            </div>
            <p className="intro-text ">
              So take your time, browse through our selection, and get inspired
              to create your own culinary masterpiece. Happy cooking!
            </p>
            <Button
              to={token ? "/new" : "/login"}
              className="button-create"
              linkName="Create a Cookbook"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            ></Button>
          </section>
          <Outlet></Outlet>
        </div>
      )}
    </Fragment>
  );
};

export const loader = async () => {
  const response = await fetch(
    "https://cookbook-backend12.herokuapp.com/cookbooks"
  );
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
