import React from "react";
import Nav from "./Nav";
import "../pages/page.css";
import "../../index.css";

export default { title: "Nav" };

export const noParentNav = () => <Nav />;

export const lightNav = () => {
  return (
    <div className="page page--white">
      <Nav />
    </div>
  );
};

export const darkNav = () => {
  return (
    <div className="page page--black">
      <Nav />
    </div>
  );
};
