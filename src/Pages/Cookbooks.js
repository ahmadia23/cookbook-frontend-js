import { json, Outlet, useRouteLoaderData } from "react-router";
import CookbookList from "../components/CookbookList";
import Button from "../UI/Button";
import React from "react";

const Cookbooks = () => {
  const token = useRouteLoaderData("tokenLoader");
  return (
    <div>
      <h1>Hello from cookbooks</h1>
      <CookbookList></CookbookList>
      <Button to={token ? "/new" : "/login"} linkName="New Cookbook" />
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
