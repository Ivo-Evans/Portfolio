import React from "react";
import NavLinks from "../NavLinks";
import "./NavDesktop.css";

export default function NavDesktop() {
  return (
    <nav className="nav nav--desktop">
      <div className="nav__left">{NavLinks[0]}</div>
      <div className="nav__right">{NavLinks.slice(1, NavLinks.length)}</div>
    </nav>
  );
}
