import React from "react";
import PropTypes from "prop-types";
import Nav from "../Nav/Nav";
import "./page.css";
import "./home.css";

export default function Home({ classInjection }) {
  return (
    <div className={classInjection}>
      <Nav />
      <div className="central-banner">
        <h1 className="strapline">I make experiences for the modern web</h1>
        <div className="stack">
          <p>React</p>
          <p>Node</p>
          <p>Express</p>
          <p>PostgreSQL</p>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  classInjection: PropTypes.string.isRequired,
};
