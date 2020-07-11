import React from "react";
import { NavLink } from "react-router-dom";

export default [
  <NavLink activeClassName="link--disabled" exact to="/">
    Home
  </NavLink>,
  <NavLink activeClassName="link--disabled" to="/about">
    About Me
  </NavLink>,
  <NavLink activeClassName="link--disabled" to="/technologies">
      My Stack
    </NavLink>,
  <NavLink activeClassName="link--disabled" to="/work">
    My Work
  </NavLink>,
  <NavLink activeClassName="link--disabled" to="/contact">
    Contact
  </NavLink>,
//   <a
//     target="_blank"
//     rel="noopener noreferrer"
//     href="https://github.com/Ivo-Evans"
//   >
//     GitHub
//   </a>,
];
