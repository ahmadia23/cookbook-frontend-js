import CookbookCard from "./CookbookCard";
<<<<<<< HEAD
import { useLoaderData } from "react-router";
import { NavLink } from "react-router-dom";
import classes from "./CookbookList.module.css";
=======
import { useLoaderData, useRouteError } from "react-router";
>>>>>>> parent of de64699 (fixing bug + fetching recipes)

function CookbookList() {
  const data = useLoaderData();
  const cookbooks = data.cookbooks;

  return (
    <div>
      <div>hello !</div>
      {cookbooks.map((cookbook) => (
<<<<<<< HEAD
        <NavLink
          key={cookbook.id}
          to={`${cookbook.id}/recipes`}
          className={classes.links}
          end
        >
          <CookbookCard key={cookbook.id} {...cookbook} className={classes} />
        </NavLink>
=======
        <CookbookCard key={cookbook.id} {...cookbook} />
>>>>>>> parent of de64699 (fixing bug + fetching recipes)
      ))}
    </div>
  );
}

export default CookbookList;
