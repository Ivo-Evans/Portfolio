import React from "react";
import "./bio.css";
import { Link } from "react-router-dom"

const resume = require("../../../assets/resume.pdf")
const self = require("../../../assets/images/self2.jpg")

export default function Bio() {
  return (
    <div className="bio">
      <img src={self} alt="me"/>
      <h1>About Me</h1>
      <p>
        I&apos;m a full-stack engineer looking for opportunities in London. I am
        a graduate of and mentor at the bootcamp Founders and Coders, and am
        currently teaching JavaScript thanks to funding from the GLA (Greater
        London Assembly).
      </p>
      <p>
        In my spare time I like cycling, climbing and coding personal projects.
        I also enjoy science fiction novels, and I lived in Istanbul for a year.
        I have a first at BA level philosophy, and a distinction at MA level. My
        academic background, including in logic, has been a great help
        programming.
      </p>
      <p>
        I&apos;m looking forward to joining a progressive team where I can
        continue to learn, and which is <strong>making cool products</strong>.
      </p>
      <p>
        Find my resume{" "}
        <a href={resume} rel="noopener noreferrer" target="_blank">
          here
        </a> or continue on to <Link to="/technologies">my stack</Link>.
      </p>
    </div>
  );
}
