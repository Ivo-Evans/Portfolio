import React from "react";
import NavLinks from "./NavLinks";

export default function NavDesktop() {
  return (
    <div className="nav nav--desktop">
      <div className="nav__left">{NavLinks[0]}</div>
      <div className="nav__right">{NavLinks.slice(1, NavLinks.length)}</div>
    </div>
  );
}