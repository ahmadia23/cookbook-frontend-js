import { json, Outlet } from "react-router";
import { useLoaderData } from "react-router";
import "../components/CookbookCard.css";
import { Fragment } from "react";

const CookbookDetails = () => {
  const cookbook = useLoaderData().cookbook;

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
      <Outlet />
    </Fragment>
  );
};

export default CookbookDetails;

export const loader = async ({ request, params }) => {
  const id = params.cookbookId;
  const response = await fetch("http://localhost:8080/cookbooks/" + id);
  if (!response.ok) {
    throw json(
      { message: "could not fetch this cookbook's data" },
      { status: 500 }
    );
  }
  return response;
};
