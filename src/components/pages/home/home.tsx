import React from "react";
import { Link } from "react-router-dom"
import Nav from "../../Nav/Nav";
import "../page.css";
import "./home.css";
import { ClassInjectionType } from "../../classInjectionType"

export default function Home({ classInjection }: ClassInjectionType) {
  return (
    <div className={classInjection}>
      <Nav />
      <main className="central-banner">
        <h1 className="strapline">
            Hi,<br />
          my name is <Link to="/about" className="strapline__name">Ivo Evans.
          </Link> <br />{" "}
          I make experiences for the modern web.
        </h1>
        {/* <div className="stack">
          <p>React</p>
          <p>Node</p>
          <p>Express</p>
          <p>PostgreSQL</p>
        </div> */}
      </main>
    </div>
  );
}

