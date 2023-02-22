import { useRouteError } from "react-router";
import PageContent from "../components/PageContent";
import React from "react";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured";
  let message = "something went wrong !";

  if (error.status === 500 || error.status === 403) {
    message = error.data.errorMessage;
  }
  if (error.status === 404) {
    message = "could not find ressource or page";
    title = "Not Found";
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorPage;
