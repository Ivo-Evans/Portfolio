import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import resume from "../pages/resume.pdf";

export default function Nav() {
  return (
    <div className="nav">
      <NavLink
        classname="nav__left"
        activeClassName="link--disabled"
        exact
        to="/"
      >
        Home
      </NavLink>
      <div className="nav__right">
        <NavLink activeClassName="link--disabled" to="/about">
          About me
        </NavLink>
        <NavLink activeClassName="link--disabled" to="/work">
          My work
        </NavLink>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          Resume
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Ivo-Evans"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
