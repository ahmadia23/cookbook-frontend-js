import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../UI/link.module.css";

const Button = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive
          ? classes["regular-link"] + classes.active
          : classes["regular-link"]
      }
    >
     {props.linkName}
    </NavLink>
  );
};

export default Button;
