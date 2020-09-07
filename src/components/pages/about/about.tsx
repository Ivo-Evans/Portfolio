import React from "react";
import Bio from "./bio";
import Page from "../../Page/Page";
import "./about.css";
// import "../page.css";

export default function About({ classInjection }: ClassInjectionType) {
  return (
    <Page classInjection={classInjection}>
      <div className="about">
        <Bio />
      </div>
    </Page>
  );
}
