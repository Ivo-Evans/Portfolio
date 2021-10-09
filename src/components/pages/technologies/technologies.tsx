import React from "react";
import Page from "../../Page/Page";
import "./technologies.css";

export default function Technologies({ classInjection }: ClassInjectionType) {
  return (
    <Page classInjection={classInjection}>
      <div className="technologies">
        <p>
          I work across the stack, which means I can create a project from the
          ground up and release it to the public. My work is focused on the
          JavaScript and TypeScript ecosystem, with fluency in supporting
          languages such as CSS and SQL. On the frontend, I have professional
          experience in React, React Native, Vue and Svelte. On the backend, I
          have experience with Express and Sails.js. When doing DevOps, I use
          AWS and infrastructure as code where possible. I have Dockerised and
          deployed servers, developed and deployed serverless functions, and
          created logging and alerting pipelines shared by multiple services.
        </p>
      </div>
    </Page>
  );
}
