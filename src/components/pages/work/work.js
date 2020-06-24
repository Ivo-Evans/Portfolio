import React from "react";
import PropTypes from "prop-types";
import Nav from "../../Nav/Nav";
import "../page.css";

export default function Work({ classInjection }) {
  return (
    <div className={classInjection}>
      <Nav />
      <h1>Work</h1>
    </div>
  );
}

Work.propTypes = {
  classInjection: PropTypes.string.isRequired,
};
