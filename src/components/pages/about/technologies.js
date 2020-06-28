import React from "react";
import { Icon } from "@iconify/react";
import "./technologies.css";

import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import javascriptIcon from "@iconify/icons-logos/javascript";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import rubyIcon from "@iconify/icons-logos/ruby";
import pythonIcon from "@iconify/icons-logos/python";
import expressIcon from "@iconify/icons-logos/express";
import flaskIcon from "@iconify/icons-cib/flask";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import reactIcon from "@iconify/icons-logos/react";
import materialUi from "@iconify/icons-logos/material-ui";
import styledComponents from "@iconify/icons-simple-icons/styled-components";
import jestIcon from "@iconify/icons-logos/jest";
import codecovIcon from "@iconify/icons-logos/codecov";
import travisCi from "@iconify/icons-logos/travis-ci";
import prettierIcon from "@iconify/icons-logos/prettier";
import eslintIcon from "@iconify/icons-logos/eslint";
import netlifyIcon from "@iconify/icons-logos/netlify";
import herokuIcon from "@iconify/icons-logos/heroku-icon";
import googleCloudPlatform from "@iconify/icons-logos/google-cloud-platform";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import postmanIcon from "@iconify/icons-logos/postman";
import gitIcon from "@iconify/icons-logos/git-icon";
import githubOctocat from "@iconify/icons-logos/github-octocat";
import figmaIcon from "@iconify/icons-logos/figma";
import jiraIcon from "@iconify/icons-logos/jira";

// comment to self
// this is interesting but there are things to consider
// 1. These don't all look so good on dark theme. express and heroku are the worst, but many are bad
// 2. consider an on-hover or on hover or on focus underline naming the thing which uses the image's alt prop. It could use the same code as the navbar underline with the css attr() function
// 2.1 while we're at it you should also apply navbar hover effects to focus. Accessibility yo.
// 3. There's a lot of hardcoding here. Is there a possibility to map over icons instead? Would that still be possible with custom alt tags?
// 4. This currently takes up a LOT of screen real estate... almost like a whole page's worth of real estate...
// 5. The h2s should be styled differently here, so that they're less prominent.
// 6. This could be further abstracted so that each section just takes a title and an array of icons, then makes them for you.
// 7. Maybe you should work out why Hannah's looks so much better lol. Did she size them in some editor then export them as svgs?

export default function Technologies() {
  return (
    <div>
      <h1>TECHNOLOGIES</h1>
      <section className="about__section">
        <h2>Languages</h2>
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={html5}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={css3}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={javascriptIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={rubyIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={pythonIcon}
        />
      </section>
      <section className="about__section">
        <h2>Backend</h2>
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={postgresqlIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={mongodbIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={nodejsIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={expressIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={flaskIcon}
        />
      </section>
      <section className="about__section">
        <h2>Frontend</h2>
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={reactIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={materialUi}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={styledComponents}
        />
      </section>

      <section className="about__section">
        <h2>Tools</h2>
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={jestIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={postmanIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={codecovIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={travisCi}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={prettierIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={eslintIcon}
        />
      </section>

      <section className="about__section">
        <h2>Deployment</h2>
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={netlifyIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={herokuIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={googleCloudPlatform}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={dockerIcon}
        />
      </section>
      <section className="about__section">
        <h2>Project management</h2>
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={gitIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={githubOctocat}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={figmaIcon}
        />
        <Icon
          className="about__icon"
          width="1em"
          align="center, middle, meet"
          icon={jiraIcon}
        />
      </section>
    </div>
  );
}
