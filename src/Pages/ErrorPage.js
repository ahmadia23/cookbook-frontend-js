import { useRouteError } from "react-router";
import PageContent from "../components/PageContent";


const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured";
  let message = "something went wrong !";

  if (error.status === 500){
    message = error.data.message;

  }
  if (error.status === 400){
    message = "could not find ressource or page";
    title= "Not Found";
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  )
}

export default ErrorPage;
