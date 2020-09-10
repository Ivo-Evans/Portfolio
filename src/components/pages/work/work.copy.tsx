import React from "react";
import SkillsWest from "../../../assets/images/projects/skillswest.silver.png";
import Humanibase from "../../../assets/images/projects/humanibase.matteblack.png";
import Cardley from "../../../assets/images/projects/cardley.silver.png";

export default [
  {
    title: "SkillsWest.London",
    link: "https://www.skillswest.london/",
    tech: ["Gatsby/TypeScript", "Strapi", "Postgres", "AWS"],
    image: SkillsWest,
    content: (
      <>
        <p>
          SkillsWest. London is a project of the West London Alliance (WLA), a
          group of councils in West London. WLA asked for a website to collate
          courses in the emerging green construction sector. Me and a partner
          created a static site with Gatsby. Among other things, it represents
          many-many relations between career paths and courses, and uses public
          APIs to dynamically generate data which we visualise with recharts.
        </p>
        <p>
          On the backend, my responsibilities included deploying a cluster of
          AWS services (EC2, RDS, Amplify), as well as taking responsibility for
          database management and for synchronising state between the front and
          back end.
        </p>
        <p>
          On the frontend, my responsibilities included creating functionality
          to search through courses and career paths, writing the code for API
          queries and data visualisation, and styling large parts of the site
          with styled-components.
        </p>
        <p>
          Find it on GitHub{" "}
          <a href="https://github.com/tech-for-better/WLA-frontend">(1)</a>{" "}
          <a href="https://github.com/tech-for-better/WLA-backend">(2)</a> or{" "}
          <a href="https://www.skillswest.london/">live</a>.
        </p>
      </>
    ),
  },
  {
    title: "Humanibase",
    link: "https://radio-zaatari.netlify.app/",
    tech: ["React", "Lambda functions", "Airtable"],
    image: Humanibase,
    content: (
      <>
        <p>
          Humanibase is a platform for hosting and uploading audio workshops for
          those in refugee camps. We made it for Zaatari Radio, a radio station
          based between London and Zaatari, Jordan, whose normal efforts to run
          radio workshops was impeded by COVID-19. We went for a lightweight
          JAMstack: a React app that talks to the DaaS Airtable via serverless
          functions.
        </p>
        <p>
          I had a big influence in architecting solutions and integrating
          systems. I was responsible for creating a system of getting markdown
          from Airtable, rendering it in the website, and interpolating in audio
          resources. I also handled file/pdf flow through the application, from
          its placement in the database to its final download by a user from the
          frontend.
        </p>
        <p>
          Find it on <a href="https://github.com/fac19/Zaatari-Radio">GitHub</a>{" "}
          or <a href="https://radio-zaatari.netlify.app/">live</a>.
        </p>
      </>
    ),
  },
  {
    title: "Cardley",
    link: "https://cardley.netlify.app/",
    tech: [
      "Node.JS",
      "Express",
      "PostgreSQL",
      "Jest",
      "Travis CI",
      "React",
      "styled-components",
    ],
    image: Cardley,
    content: (
      <>
        <p>
          For my student project, me and a team of four decided to create a full
          stack flashcard app featuring user authenication flows, card
          scheduling, and the concept of public/private flashcard decks. It was
          an ambitious project and one which I think we, in the context,
          achieved remarkably well.
        </p>
        <p>
          For authentication we hashed passwords using BCrypt, stored the
          results in the database, and checked the hashes when we issued JWTs.
          The database featured many-many relations and useful build scripts.
          The backend had good code coverage.
        </p>
        <p>
          The job of the React app is to provide a UI for the Cardley API and
          let users browse public decks, edit their own decks, and practice
          decks. We also included confetti for the end of a practice session,
          which was a big hit with users.
        </p>
        <p>
          Fint the frontend code{" "}
          <a href="https://github.com/fac19/Cardley">here</a>, the backend code{" "}
          <a href="https://github.com/fac19/Cardley---backend">here</a> and the
          deployed frontend <a href="https://cardley.netlify.app/">here</a>.
        </p>
      </>
    ),
  },
];
