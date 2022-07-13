import React from "react";
import { Link } from "react-router-dom";
import "./bio.css";

const self = require("../../../assets/images/self2.jpg");

export default function Bio() {
  return (
    <main className="bio">
      <img src={self} alt="me" />
      <p>
        Hey, I&rsquo;m Ivo, a full-stack engineer from London. My work is
        focused on the JavaScript and TypeScript ecosystem, with fluency in
        supporting languages such as CSS and SQL. I&rsquo;m comfortable in other
        high-level programming languages, such as Ruby and Python, too.
      </p>
      <p>
        On the frontend, I have professional experience in React, React Native,
        Vue.js and Svelte; on the backend, Express, Sails.js and the SST
        framework for AWS Lambda. For DevOps I use AWS, Docker and
        infrastructure as code tooling such as the AWS CDK.
      </p>
      <p>
        I&rsquo;m a keen advocate of practices such as type safety, linting and
        well organised, DRY code. I take pride in what I do and I strive to
        write code which can be reused when business requirements change or
        grow. Above all I like to create elegant and well designed engineering
        solutions.
      </p>
      <p>
        I also do things other than computers! Quite a lot of my leisure
        activities could have been done before computers were even invented.
        These include rock climbing, reading books and playing ragtime music on
        my acoustic guitar. I hope you&rsquo;ll{" "}
        <Link to="contact">get in touch</Link>.
      </p>
      {/* <p>
        <Link to="contact">Get in touch!</Link>
      </p> */}
    </main>
  );
}
