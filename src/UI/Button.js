import React from "react";
import { NavLink } from "react-router-dom";

const Button = (props) => {
  return (
    <NavLink to={props.to} className={props.className}>
      {props.linkName}
    </NavLink>
  );
};

export default Button;
