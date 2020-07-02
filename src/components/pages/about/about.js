import React from "react";
import PropTypes from "prop-types";
import Nav from "../../Nav/Nav";
import Bio from "./bio";
import Technologies from "./technologies";

import "../page.css";

export default function About({ classInjection }) {
  return (
    <div className={classInjection}>
      <Nav />
      <Bio />
      <Technologies />
    </div>
  );
}

About.propTypes = {
  classInjection: PropTypes.string.isRequired,
};
