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
// import mongodbIcon from "@iconify/icons-cib/mongodb";
import reactIcon from "@iconify/icons-logos/react";
import materialUi from "@iconify/icons-logos/material-ui";
import styledComponents from "@iconify/icons-simple-icons/styled-components";
import storybookIcon from "@iconify/icons-logos/storybook-icon";
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

import * as types from "./types"


const projects: types.projects = {
  portfolio: {
    title: "Portfolio site",
    link: "https://github.com/Ivo-Evans/portfolio",
  },
  bitwise: {
    title: "Bitwise CMS",
    link: "https://github.com/ivo-evans/blog",
  },
  citadelsApi: {
    title: "Citadels API (Flask)",
    link: "https://github.com/dghp/api",
  },
  localLibrary: {
    title: "Local Library (Django)",
    link: "https://github.com/Ivo-Evans/local-library",
  },
  cardleyApi: {
    title: "Cardley API",
    link: "https://github.com/fac19/Cardley---backend",
  },
  cardleyFrontend: {
    title: "Cardley front-end",
    link: "https://github.com/fac19/Cardley",
  },
  snippetsOfCode: {
    title: "Snippets of Code",
    link: "https://github.com/fac19/Week8-BFOP",
  },
  transparentCommitizen: {
    title: "Transparent Commitizen (NPM package)",
    link: "https://github.com/Ivo-Evans/transparent-commitizen/",
  },
  zaatari: {
    title: "Radio Zaatari/Humanibase",
    link: "https://github.com/fac19/Zaatari-Radio",
  },
  spotify: {
    title: "Music recommendation engine",
    link: "https://github.com/fac19/week10-Joe-Ivo",
  },
  cardleyPrototype: {
    title: "Cardley Figma prototype",
    link:
      "https://www.figma.com/proto/LpeTeVEFYk9sJt0mIHC2f3/Flash-Card?node-id=31%3A135&scaling=min-zoom",
  },
  zaatariPrototype: {
    title: "Zaatari Figma prototype",
    link:
      "https://www.figma.com/file/WcsS1OxRsROl1dUqBH1e9t/Project-Zataari-FAC?node-id=0%3A1",
  },
};

const technologies: types.technology[] = [
  {
    icon: html5,
    name: "HTML5",
    experience: 5,
    interest: 5,
    comment:
      "I'm comfortable with HTML, but nowadays it seems like I write a lot more JSX. When I'm writing HTML, I always try to write semantic HTML.",
  },
  {
    icon: css3,
    name: "CSS3",
    experience: 5,
    interest: 5,
    comment:
      "I find CSS a pleasant diversion from programming. I enjoyed writing the CSS for this site, where I got to flex my skills a little by using pseudo-elements and advanced combinators.",
    links: [projects.portfolio],
  },
  {
    icon: javascriptIcon,
    name: "JavaScript",
    experience: 5,
    interest: 5,
    comment:
      "JavaScript is my bread and butter. It is the language I 'think' in, and the language I go to when I need to make something difficult or something no-nonsense in a short space of time. I love JavaScript most for its usability across the stack - least for its type coercion.",
  },
  {
    icon: typescriptIcon,
    name: "TypeScript",
    experience: 5,
    interest: 5,
    comment:
      "TypeScript is the seasoning that makes the meal when it comes to JavaScript. I'm a big fan, and I think I'll be using it for years to come.",
    links: [projects.portfolio],
  },
  {
    icon: rubyIcon,
    name: "Ruby",
    experience: 5,
    interest: 5,
    comment:
      "Ruby was the first language I learnt, so it holds a special place in my heart. Nevertheless, it wouldn't be my first choice for a new project.",
    links: [projects.bitwise],
  },
  {
    icon: pythonIcon,
    name: "Python",
    experience: 5,
    interest: 5,
    comment:
      "I appreciate Python for its clean syntax, for its treatment of OOP, and for its useful features like list comprehensions and generators.",
    links: [projects.citadelsApi, projects.localLibrary],
  },
  {
    icon: postgresqlIcon,
    name: "PostgreSQL",
    experience: 5,
    interest: 5,
    comment:
      "PostgreSQL is the solid backbone of many of my projects. I prefer relational to noSQL databases, because I think there's a lot of value in a well thought-out schema.",
    links: [projects.cardleyApi, projects.snippetsOfCode],
  },
  //   {
  //     icon: mongodbIcon,
  //     name: "MongoDB",
  //     experience: 5,
  //     interest: 5,
  //     comment:
  //       "MongoDB is the technology on this list that I have the least experience with, although I did make an API with it. That said, I have an understanding of when you should use a noSQL database over a relational one, and how you might do so.",
  //     links: [projects.citadelsApi],
  //   },
  {
    icon: nodejsIcon,
    name: "Node.JS",
    experience: 5,
    interest: 5,
    comment:
      "I'm very comfortable with Node, and in fact I'm teaching the Node week for the next cohort at Founders and Coders.",
    links: [projects.cardleyApi, projects.transparentCommitizen],
  },
  {
    icon: expressIcon,
    name: "Express",
    classModifier: "about__express-icon",
    heightModifier: "2em",
    experience: 5,
    interest: 5,
    comment:
      "I know Express and its documentation well - I've even looked over the source code.",
    links: [projects.cardleyApi],
  },
  {
    icon: flaskIcon,
    name: "Flask",
    experience: 5,
    interest: 5,
    comment:
      "I wrote a server in Flask for an implementation of the card game Citadels. I appreciated Flask's unopinionated and lightweight nature.",
    links: [projects.citadelsApi],
  },
  {
    icon: reactIcon,
    name: "React",
    experience: 5,
    interest: 5,
    comment:
      "I'm well-used to React, and a fan primarily because of it's benefits to the developer experience. This site, like many of my projecs, uses React.",
    links: [projects.zaatari, projects.portfolio],
  },
  {
    icon: materialUi,
    name: "Material UI",
    experience: 5,
    interest: 5,
    comment:
      "Material UI can be helpful for developing an MVP. For a bespoke experience, however, I prefer to write my own components.",
    links: [projects.cardleyFrontend],
  },
  {
    icon: styledComponents,
    name: "Styled Components",
    experience: 5,
    interest: 5,
    comment:
      "I find Styled Components, alongside tools like Storybook, to be a useful way of writing modular, distinct UI elements.",
    links: [projects.zaatari],
  },
  {
    icon: storybookIcon,
    name: "Storybook",
    comment:
      "Storybook is, in my opinion, an excellent way to develop UI components. It aligns well with the philosophy of JS-first web development, allowing you to write modular and clean components.",
    links: [projects.zaatari],
  },
  {
    icon: jestIcon,
    name: "Jest",
    experience: 5,
    interest: 5,
    comment:
      "Jest is my favourite testing library for its excellent documentation, its speed, and its adequacy across the stack.",
    links: [projects.cardleyApi],
  },
  {
    icon: postmanIcon,
    name: "Postman",
    experience: 5,
    interest: 5,
    comment:
      "Postman is a pleasant alternative to cURL. I appreciate in particular its saveable and shareable collections.",
    links: [projects.citadelsApi],
  },
  {
    icon: codecovIcon,
    name: "CodeCov",
    experience: 5,
    interest: 5,
    comment:
      "I've used CodeCov in a few projects now, and I think it's a useful way of assessing code coverage.",
  },
  {
    icon: travisCi,
    name: "Travis",
    experience: 5,
    interest: 5,
    comment:
      "Travis is a solid choice for a simple CI provider, with a nice UI and good docs.",
    links: [projects.cardleyFrontend, projects.cardleyApi, projects.zaatari],
  },
  {
    icon: prettierIcon,
    name: "Prettier",
    experience: 5,
    interest: 5,
    comment: "I find prettier to be a great accompaniment to ESLint",
    links: [projects.cardleyFrontend, projects.cardleyApi, projects.zaatari],
  },
  {
    icon: eslintIcon,
    name: "ESLint",
    experience: 5,
    interest: 5,
    comment: "I'm a big fan of ESLint. I generally opt for the AirBnB config.",
    links: [projects.cardleyFrontend, projects.cardleyApi, projects.zaatari],
  },
  {
    icon: netlifyIcon,
    name: "Netlify",
    experience: 5,
    interest: 5,
    comment:
      "I'm comfortable with Netlify, having used it to deploy sites, send API queries with lambda functions, and configure DNS.",
    links: [projects.zaatari, projects.spotify],
  },
  {
    icon: herokuIcon,
    name: "Heroku",
    experience: 5,
    interest: 5,
    comment:
      "I'm comfortable with Heroku. If there's a need for a quick and seamless server deployment, I'd certainly consider it. If price and performance are criteria, I'd generally opt for Google Cloud Platform.",
    links: [projects.cardleyApi, projects.snippetsOfCode],
  },
  {
    icon: googleCloudPlatform,
    name: "Google Cloud",
    experience: 5,
    interest: 5,
    comment:
      "I enjoy Google Cloud Platform for its performance and the degree of control that it gives me.",
    links: [projects.portfolio],
  },
  {
    icon: dockerIcon,
    name: "Docker",
    experience: 5,
    interest: 5,
    comment:
      "I'm a great fan of Docker. Running an app inside a container and then interfacing with the host operating system by exposing ports is fascinating to me.",
    links: [projects.portfolio],
  },
  {
    icon: gitIcon,
    name: "Git",
    experience: 5,
    interest: 5,
    comment:
      "I'm certainly experienced with Git, and I appreciate it as a tool. At time of writing I've made ~1,700 commits to GitHub alone - you can bet your bucks that things have gotten gnarly a few times along the road, and I've learnt a lot in the process. I even got into writing Husky extensions for a while, so I've looked into advanced Git features like submodules and subtrees.",
  },
  {
    icon: githubOctocat,
    name: "GitHub",
    experience: 5,
    interest: 5,
    comment:
      "GitHub is my go-to repository hosting service. I'm familiar with all the core GitHub concepts, as well as  features like addons and webhooks.",
  },
  {
    icon: figmaIcon,
    name: "Figma",
    experience: 5,
    interest: 5,
    comment:
      "Figma is a useful design tool. I appreciate it's prototype view, and the ability for multiple team-members to get on a design at once.",
    links: [projects.cardleyPrototype, projects.zaatariPrototype],
  },
  {
    icon: jiraIcon,
    name: "Jira",
    experience: 5,
    interest: 5,
    comment:
      "Like many, I have a love-hate relationship with Jira. But I do know how to use it. I even wrote an NPM package to help our team use Jira smart-commits with Git.",
    links: [projects.transparentCommitizen],
  },
];

export default technologies