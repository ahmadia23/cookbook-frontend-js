import { Fragment } from "react";
import React from "react";
import classes from "./MainNavigation.module.css";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

const MainNavigation = (props) => {
  const token = useRouteLoaderData("tokenLoader");

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
              Recipes to Go
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
          {token ? (
            ""
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Login
              </NavLink>
            </li>
          )}
          {!token ? (
            ""
          ) : (
            <li>
              <Form action="/logout" method="Post">
                <button>Logout</button>
              </Form>
            </li>
          )}
          {token ? (
            ""
          ) : (
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Signup
              </NavLink>
            </li>
          )}
        </ul>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
