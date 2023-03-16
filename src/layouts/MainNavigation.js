import { Fragment } from "react";
import React from "react";
import classes from "./MainNavigation.module.css";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import "../Pages/Home.css";
import logoHome from "../images/logoSweet.png";

const MainNavigation = (props) => {
  const token = useRouteLoaderData("tokenLoader");

  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink to="/" className={"logo"}>
          <img className={"logo-home"} alt="logo" src={logoHome}></img>
        </NavLink>
        <ul className={classes.list}>
          {token ? (
            <li>
              <NavLink
                to="/savings"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {" "}
                Loved
              </NavLink>
            </li>
          ) : (
            ""
          )}
          <li>
            <NavLink
              to="/cookbooks"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Inspiration
            </NavLink>
          </li>

          {token ? (
            ""
          ) : (
            <li className="login-actions">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Login
              </NavLink>
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
          {!token ? (
            ""
          ) : (
            <li>
              <Form action="/logout" method="Post">
                <button className="home-logout">Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </header>
      <div className="border-section-full"></div>
    </Fragment>
  );
};

export default MainNavigation;
