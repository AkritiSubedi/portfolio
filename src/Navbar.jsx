import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'; // Assuming you have the required icon component
import "./Navbar.css";

function Navbar(props) {
  const [show, setShow] = useState(false);

  function toggleMenu() {
    setShow(!show);
  }

  return (
    <div>
      <div className="ak_navbar">
      <ul className="nav-bar">
              <NavLink to="/">
                <li className="ak_nav1">Home</li>
              </NavLink>
              <NavLink to="/Body">
                <li className="ak_nav1">About Me</li>
              </NavLink>
              <NavLink to="skills">
                <li className="ak_nav1">Skills</li>
              </NavLink>
              <NavLink to="project">
                <li className="ak_nav1">Project</li>
              </NavLink>
              <NavLink to="contact">
                <li className="ak_nav1">Contact</li>
              </NavLink>
            </ul>
        {/* <nav>
          {show ? (
            <ul className="nav-bar">
              <NavLink to="/">
                <li className="ak_nav1">Home</li>
              </NavLink>
              <NavLink to="/Body">
                <li className="ak_nav1">About Me</li>
              </NavLink>
              <NavLink to="skills">
                <li className="ak_nav1">Skills</li>
              </NavLink>
              <NavLink to="project">
                <li className="ak_nav1">Project</li>
              </NavLink>
              <NavLink to="contact">
                <li className="ak_nav1">Contact</li>
              </NavLink>
            </ul>
          ) : (
            <></>
          )}
          <div className="navbar">
            <div className="hicon" >
              <div className="ham"
              onClick={toggleMenu}
              >
              <GiHamburgerMenu />
              </div>
            </div>
            <ul className="nav-bar">
              <NavLink to="/">
                <li className="ak_nav2">Home</li>
              </NavLink>
              <NavLink to="/Body">
                <li className="ak_nav2">About Me</li>
              </NavLink>
              <NavLink to="skills">
                <li className="ak_nav2">Skills</li>
              </NavLink>
              <NavLink to="project">
                <li className="ak_nav2">Project</li>
              </NavLink>
              <NavLink to="contact">
                <li className="ak_nav2">Contact</li>
              </NavLink>
            </ul>
          </div>
        </nav> */}
      </div>
    </div>
  );
}

export default Navbar;
