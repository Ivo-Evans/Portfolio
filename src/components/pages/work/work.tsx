import React from "react";
import "../page.css";

import Nav from "../../Nav/Nav";
import Project from "./Project";
import { ClassInjectionType } from "../../classInjectionType"

import humanibaseImage from "../../../assets/images/projects/humanibase_cropped.png";
import apiImage from "../../../assets/images/projects/api_cropped.jpg";
import cardleyImage from "../../../assets/images/projects/cardley_cropped.png";

export default function Work({ classInjection }: ClassInjectionType) {
  return (
    <div className={classInjection}>
      <Nav />
      <Project
        name="Humanibase"
        description="Humanibase is a platform for hosting and uploading audio workshops for those in refugee camps. We developed it for Zaatari Radio, which operates a radio station across Jordan and London."
        tech={["React", "Lambda functions", "Airtable"]}
        picture={humanibaseImage}
        codeLink="https://github.com/fac19/Zaatari-Radio"
        deployLink="https://radio-zaatari.netlify.app/"
      />
      <Project
        name="Cardley REST API"
        description="This is the API for the flashcard/learning app Cardley. Highlights include bcrypt+JWT authentication, many-many database relations, good test coverage and robust, adjustable console logging."
        tech={["Node", "Express", "PostgreSQL", "Jest", "Travis CI"]}
        picture={apiImage}
        codeLink="https://github.com/fac19/cardley---backend"
      />
      <Project
        name="Cardley site"
        description="This React app provides a UI for the Cardley API and lets users browse public decks, edit their own decks, and practice decks. Plus there is confetti."
        tech={["React", "Jest", "Styled Components", "Material UI"]}
        picture={cardleyImage}
        codeLink="https://github.com/fac19/cardley"
        deployLink="https://cardley.netlify.app/"
      />
    </div>
  );
}
