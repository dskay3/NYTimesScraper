// Dependencies
import React from "react";
import "./Header.css";

// Header component
const Header = props =>
  <div
    className="header center"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
  </div>;

export default Header;
