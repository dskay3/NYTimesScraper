// Imports dependencies
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="nav-extended main-nav">
    <div className="nav-wrapper">
      {/* Webpage Logo */}
      <Link className="brand-logo" to="/">
        The NY Times Article Scraper
      </Link>

      {/* Mobile: Creates burger icon */}
      <a href="/" data-activates="mobile-demo" className="button-collapse">
        <i className="material-icons">menu</i>
      </a>

      {/* Right side Navbar links */}
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {/* Link to Main Home Page */}
        <li 
          className={ window.location.pathname === "/" ? "active" : "" }
        >
          <Link to="/">Home</Link>
        </li>

        {/* Link to Saved Articles */}
        <li 
          className={ window.location.pathname === "/saved" ? "active" : "" }
        >
          <Link to="/saved">Saved</Link>
        </li>

        {/* Link to Repo */}
        <li>
          <a href="https://github.com/dskay3/NYTimesScraper">Repo</a>
        </li>
      </ul>

      {/* Mobile: Navbar links */}
      <ul className="side-nav" id="mobile-demo">
        {/* Link to Main Home Page */}
        <li 
          className={ window.location.pathname === "/" ? "active" : "" }
        >
          <Link to="/">Home</Link>
        </li>

        {/* Link to Saved Articles */}
        <li 
          className={ window.location.pathname === "/saved" ? "active" : "" }
        >
          <Link to="/saved">Saved</Link>
        </li>

        {/* Link to Repo */}
        <li>
          <a href="https://github.com/dskay3/NYTimesScraper">Repo</a>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
