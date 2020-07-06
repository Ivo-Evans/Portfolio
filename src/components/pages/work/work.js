import React from "react";
import PropTypes from "prop-types";
import Nav from "../../Nav/Nav";
import Project from "./Project";
import "../page.css";

export default function Work({ classInjection }) {
  return (
    <div className={classInjection}>
      <Nav />
      <Project
        name="Humanibase"
        description="Humanibase is a platform for hosting and uploading audio workshops for those in refugee camps. We developed it for Zaatari Radio, which operates a radio station across Jordan and London."
        tech={["React", "Lambda functions", "Airtable"]}
      />
      <Project
        name="Cardley REST API"
        description="This is the API for the flashcard/learning app Cardley. It features user login/signup/signout coded by us with JWTs and password hashing, as well as database table relations allowing us to represent users, decks, cards, and decks shared between users that are in different orders for different users. It also features robust console logging with three modes and has good code coverage."
        tech={["Node", "Express", "PostgreSQL"]}
      />
      <Project name="Cardley" description="" />
    </div>
  );
}

Work.propTypes = {
  classInjection: PropTypes.string.isRequired,
};
