import { json, Outlet, redirect, useParams } from "react-router";
import { useLoaderData } from "react-router";
import "../components/cookbooks/CookbookCard.css";
import { Fragment } from "react";
import React from "react";
import { useSubmit, Form } from "react-router-dom";
import { getAuthToken } from "../util/Authentification";

const CookbookDetails = () => {
  const cookbook = useLoaderData().cookbook;
  const submit = useSubmit();
  const cookbookId = useParams().cookbookId;
  const adminMode = useLoaderData().adminMode;

  const removeCookbookHandler = (event) => {
    event.preventDefault();
    const proceed = window.confirm("are you sure ?");

    if (proceed) {
      submit(null, {
        method: "delete",
        action: `/cookbooks/${cookbookId}/delete`,
      });
    }
  };

  return (
    <Fragment>
      <div className="cookbook-page">
        <img
          src={cookbook.image}
          alt={cookbook.name}
          className="cookbook-page__image"
        />
        <div className="cookbook-page__content">
          <h3 className="cookbook-page__title">{cookbook.name}</h3>
          <p className="cookbook-page__description">{cookbook.description}</p>
          <span className="cookbook-page__theme">{cookbook.theme}</span>
        </div>
      </div>
      {adminMode ? (
        <Form onSubmit={removeCookbookHandler}>
          <button>Remove this cookbook</button>
        </Form>
      ) : (
        ""
      )}
      <Outlet />
    </Fragment>
  );
};
export default CookbookDetails;

export const loader = async ({ request, params }) => {
  const cookbookId = params.cookbookId;
  const token = getAuthToken();
  const response = await fetch(
    `http://localhost:8080/cookbooks/${cookbookId}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!response.ok) {
    return json({ message: "could not fetch the cookbook" }, { status: 500 });
  } else {
    return response;
  }
  // catch(err){
  //   console.log(err);
};

export const action = async ({ request, params }) => {
  const token = getAuthToken();
  const cookbookId = params.cookbookId;
  const response = await fetch(
    `http://localhost:8080/cookbooks/${cookbookId}`,
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      method: request.method,
    }
  );
  if (response.status === 500) {
    const resData = await response.json();
    console.log(resData);
    return response;
  }
  if (response.status === 403) {
    const resData = await response.json();
    console.log(resData);
    return response;
  }

  return redirect(`/cookbooks`);
};
