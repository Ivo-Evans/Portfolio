import React from "react";
import PropTypes from "prop-types";
import Nav from "../Nav";
import "./page.css";

export default function About({ classInjection }) {
  return (
    <div className={classInjection}>
      <Nav />
      <h1>About</h1>
    </div>
  );
}

About.propTypes = {
  classInjection: PropTypes.string.isRequired,
};
