import { json, Outlet } from "react-router";
import CookbookList from "../components/CookbookList";
import { NavLink } from "react-router-dom";
import classes from "../UI/link.module.css";
import Button from "../UI/Button";
import React from "react";

const Cookbooks = () => {

  return (
    <div>
      <h1>Hello from cookbooks</h1>
      <CookbookList></CookbookList>
      <Button to="/new" linkName="New Cokkbook"/>
      <Outlet></Outlet>
    </div>
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
