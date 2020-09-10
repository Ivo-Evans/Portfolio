import React from "react";
import NavLinks from "../NavLinks";
import "./NavItems.css";

export default function NavItems({ open }: { open: boolean }) {
  return (
    <div
      className={
        open ? "nav--mobile-links nav--open" : "nav--mobile-links nav--closed"
      }
    >
      {NavLinks}
    </div>
  );
}
