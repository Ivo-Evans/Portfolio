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
          languages such as CSS and SQL, but I&rsquo;m comfortable enough in
          other high-level programming languages such as Ruby and Python too.{" "}
        </p>
        <p>
          On the frontend, I have professional experience in React, React
          Native, Vue.js and Svelte. On the backend, I have experience with
          Express, Sails.js and the SST framework for AWS Lambda. And for
          DevOps, I use AWS, Docker and infrastructure as code tooling such as
          the AWS CDK.
        </p>
        <p>
          As a developer I&rsquo;m a keen advocate of practices such as type
          safety, linting and well organised, DRY code. I take pride in what I
          do and I strive to write code which can be reused when business
          requirements change or grow. Above all I like to create elegant and
          well designed engineering solutions.
        </p>
      </div>
    </Page>
  );
}
