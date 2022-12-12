import React from "react";
import "./scss/nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">HOME</NavLink>
      </div>
      <div>
        <NavLink to="/ABOUT">ABOUT</NavLink>
      </div>
      <div>
        <NavLink to="/SKILLS">SKILLS</NavLink>
      </div>
      <div>
        <NavLink to="/PROJECT">PROJECT</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
