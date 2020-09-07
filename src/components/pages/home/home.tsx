import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Page from "../../Page/Page";

export default function Home({ classInjection }: ClassInjectionType) {
  return (
    <Page classInjection={classInjection}>
      <div className="central-banner">
        <h1 className="strapline">
          Hi,
          <br />
          my name is{" "}
          <Link to="/about" className="strapline__name">
            Ivo Evans.
          </Link>{" "}
          <br /> I make experiences for the modern web.
        </h1>
      </div>
    </Page>
  );
}
