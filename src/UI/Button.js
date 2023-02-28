import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      to={props.to}
      className={props.className}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }}
    >
      {props.linkName}
    </Link>
  );
};

export default Button;
