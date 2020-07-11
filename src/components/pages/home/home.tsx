import React from "react";
import Nav from "../../Nav/Nav";
import "../page.css";
import "./home.css";
import { ClassInjectionType } from "../../classInjectionType"

export default function Home({ classInjection }: ClassInjectionType) {
  return (
    <div className={classInjection}>
      <Nav />
      <div className="central-banner">
        <h1 className="strapline">
          My name is <span className="strapline__name">Ivo Evans.
          </span> <br />{" "}
          I make experiences for the modern web.
        </h1>
        {/* <div className="stack">
          <p>React</p>
          <p>Node</p>
          <p>Express</p>
          <p>PostgreSQL</p>
        </div> */}
      </div>
    </div>
  );
}

