import CookbookCard from "./CookbookCard";
import { useLoaderData, useRouteError } from "react-router";

function CookbookList() {
  const data = useLoaderData();
  const cookbooks = data.cookbooks;

  return (
    <div>
      <div>hello !</div>
      {cookbooks.map((cookbook) => (
        <CookbookCard key={cookbook.id} {...cookbook} />
      ))}
    </div>
  );
}

export default CookbookList;
