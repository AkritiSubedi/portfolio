import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="ak_navbar">
      <ul className="nav-bar">
        <li className="ak_nav1">
          <Link to="home" spy={true} smooth={true} duration={1000}>
             <a href="">Home</a>
          </Link>
        </li>
        <li className="ak_nav1">
          <Link to="AboutMe" spy={true} smooth={true} duration={1000}>
            <a href="">About Me</a>
          </Link>
        </li>
        <li className="ak_nav1">
          <Link to="skills" spy={true} smooth={true} duration={1000}>
            <a href="">Skills</a>
          </Link>
        </li>
        <li className="ak_nav1">
          <Link to="project" spy={true} smooth={true} duration={1000}>
            <a href="">Project</a>
          </Link>
        </li>
        <li className="ak_nav1">
          <Link to="form" spy={true} smooth={true} duration={1000}>
            <a href="">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
