import React from "react";

import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import javascriptIcon from "@iconify/icons-logos/javascript";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import rubyIcon from "@iconify/icons-logos/ruby";
import pythonIcon from "@iconify/icons-logos/python";
import expressIcon from "@iconify/icons-logos/express";
import flaskIcon from "@iconify/icons-cib/flask";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import mongodbIcon from "@iconify/icons-cib/mongodb";
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

import { ClassInjectionType } from "../../classInjectionType";
import Logo from "./logo";
import InfoBox from "./InfoBox";
import Nav from "../../Nav/Nav";
import "./technologies.css";

export default function Technologies({ classInjection }: ClassInjectionType) {
  const logos = [
    <Logo icon={html5} description="HTML" />,
    <Logo icon={css3} description="CSS" />,
    <Logo icon={javascriptIcon} description="JavaScript" />,
    <Logo icon={typescriptIcon} description="TypeScript" />,
    <Logo icon={rubyIcon} description="Ruby" />,
    <Logo icon={pythonIcon} description="Python" />,
    <Logo icon={postgresqlIcon} description="PostgreSQL" />,
    <Logo icon={mongodbIcon} description="MongoDB" />,
    <Logo icon={nodejsIcon} description="Node.JS" />,
    <Logo
      extraClasses="about__express-icon"
      height="2em"
      icon={expressIcon}
      description="Express"
    />,
    <Logo icon={flaskIcon} description="Flask" />,
    <Logo icon={reactIcon} description="React" />,
    <Logo icon={materialUi} description="Material UI" />,
    <Logo icon={styledComponents} description="Styled Components" />,
    <Logo icon={jestIcon} description="Jest" />,
    <Logo icon={postmanIcon} description="Postman" />,
    <Logo icon={codecovIcon} description="CodeCov" />,
    <Logo icon={travisCi} description="Travis CI" />,
    <Logo icon={prettierIcon} description="Prettier" />,
    <Logo icon={eslintIcon} description="ESLint" />,
    <Logo icon={netlifyIcon} description="Netlify" />,
    <Logo icon={herokuIcon} description="Heroku" />,
    <Logo icon={googleCloudPlatform} description="Google Cloud" />,
    <Logo icon={dockerIcon} description="Docker" />,
    <Logo icon={gitIcon} description="Git" />,
    <Logo icon={githubOctocat} description="GitHub" />,
    <Logo icon={figmaIcon} description="Figma" />,
    <Logo icon={jiraIcon} description="Jira" />,
  ];

  const [selectedTech] = React.useState(false);
  return (
    <div className={classInjection}>
      <Nav />
      <div className="technologies__list">{logos}</div>
      <div className="technologies__infobox">
        {selectedTech ? <h2>PlaceHolder</h2> : <InfoBox />}
      </div>
    </div>
  );
}
