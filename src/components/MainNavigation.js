import { Fragment } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cookbooks/recipes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              {" "}
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cookbooks"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Cookbooks
            </NavLink>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
