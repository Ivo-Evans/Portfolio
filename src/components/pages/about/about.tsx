import React from "react";
import Nav from "../../Nav/Nav";
import Bio from "./bio";
import Technologies from "./technologies";
import { ClassInjectionType } from "../../classInjectionType"

import "../page.css";

export default function About({ classInjection }: ClassInjectionType) {
  return (
    <div className={classInjection}>
      <Nav />
      <Bio />
      <Technologies />
    </div>
  );
}
