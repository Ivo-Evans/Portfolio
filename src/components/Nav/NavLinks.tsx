import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./NavLink.css";

export default [
  <NavLink key="home" activeClassName="link--disabled" exact to="/">
    Home
  </NavLink>,
  <NavLink key="about" activeClassName="link--disabled" to="/about">
    About Me
  </NavLink>,
  <NavLink key="contact" activeClassName="link--disabled" to="/contact">
    Contact
  </NavLink>,
  <a
    key="github"
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/Ivo-Evans"
    className="link"
  >
    <span>My GitHub</span>
    <Icon icon="ic:baseline-open-in-new" color="#8a8a8a" />
  </a>,
];
