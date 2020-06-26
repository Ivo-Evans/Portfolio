import React from "react";
import PropTypes from "prop-types";
import Nav from "../../Nav/Nav";
import Bio from "./bio";

import "../page.css";

export default function About({ classInjection }) {
  return (
    <div className={classInjection}>
      <Nav />
      <Bio />
      <h1>Technologies I like ↓</h1>
    </div>
  );
}

About.propTypes = {
  classInjection: PropTypes.string.isRequired,
};
