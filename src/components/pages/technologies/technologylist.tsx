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
import graphqlIcon from "@iconify/icons-logos/graphql";
import reactIcon from "@iconify/icons-logos/react";
import gatsbyIcon from "@iconify/icons-logos/gatsby";
// import materialUi from "@iconify/icons-logos/material-ui";
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
import awsIcon from "@iconify/icons-logos/aws";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import postmanIcon from "@iconify/icons-logos/postman";
import gitIcon from "@iconify/icons-logos/git-icon";
import githubOctocat from "@iconify/icons-logos/github-octocat";
import figmaIcon from "@iconify/icons-logos/figma";
import jiraIcon from "@iconify/icons-logos/jira";


import * as types from "./technologies.types";

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
  wla: {
    title: "SkillsWest.London",
    link: "https://www.skillswest.london/",
  },
};

const technologies: types.technology[] = [
  {
    icon: html5,
    name: "HTML5",
    experience: 5,
    interest: 5,
    comment:
      "I'm comfortable with HTML, although nowadays it seems like I write a lot more JSX. When writing markup, I endeavour to write it semantically always.",
  },
  {
    icon: css3,
    name: "CSS3",
    experience: 5,
    interest: 5,
    comment:
      "I find CSS a pleasant diversion from programming and from algorithmic thinking. I enjoyed writing the CSS for this site, where I got to flex my skills a little by using pseudo-elements and advanced combinators. I'm a fan of both CSS-in-JSS and old school use of the cascade.",
    links: [projects.portfolio],
  },
  {
    icon: javascriptIcon,
    name: "JavaScript",
    experience: 5,
    interest: 5,
    comment:
      "JavaScript is my bread and butter. It is the language I 'think' in, and the language I go to when I need to make something difficult or something in a short space of time. I love JavaScript most for its usability across the stack - least for its type coercion.",
  },
  {
    icon: typescriptIcon,
    name: "TypeScript",
    experience: 5,
    interest: 5,
    comment:
      "Once learnt, TypeScript is difficult to give up.  I find typechecking at compile-time invaluable.",
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
      "As someone that codes primarily in JavaScript, but started out with Ruby, Python is something of a best of both worlds. I appreciate its treatment of OOP, its first-class functions and its clean syntax.",
    links: [projects.citadelsApi, projects.localLibrary],
  },
  {
    icon: postgresqlIcon,
    name: "PostgreSQL",
    experience: 5,
    interest: 5,
    comment:
      "A lot of my projects are backed, ultimately, by PostgreSQL, the reliable elephant supporting technologies higher up in the stack. I prefer to use relational to noSQL databases where possible - I like it when things make sense.",
    links: [projects.cardleyApi, projects.snippetsOfCode],
  },
    {
      icon: mongodbIcon,
      name: "MongoDB",
      experience: 5,
      interest: 5,
      comment:
        "MongoDB is the technology on this list that I have the least experience with, although I did make a side-project API with it. I have a functional understanding of using documents and collections, and I'm not afraid to reach for a noSQL database like Mongo if the data is inherently unstructured, or is structured as a tree.",
      links: [projects.citadelsApi],
    },
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
      icon: graphqlIcon,
      name: "GraphQL",
      experience: 5,
      interest: 5,
      comment: "GraphQL is a nice query language, and something that web development, frankly, needs. REST is inefficient, but it would be insanity to make raw queries to the database. GraphQL provides a standardised syntax for information interchange between modern front and back ends, and for that, it is invaluable.",
      links: [projects.wla]
  },
  {
    icon: reactIcon,
    name: "React",
    experience: 5,
    interest: 5,
    comment:
      "I'm well-used to React, and a fan primarily because of its benefits to the developer experience. This site, like many of my projecs, uses React.",
    links: [projects.wla, projects.portfolio, projects.zaatari],
  },
  {
    icon: gatsbyIcon,
    name: "Gatsby",
    experience: 3,
    interest: 4,
    comment:
      "Developer experience is by and large fantastic with Gatsby, and I value the ability to easily create static sites with React that it allows me.",
    links: [projects.wla],
  },
    // {
    //   icon: materialUi,
    //   name: "Material UI",
    //   experience: 5,
    //   interest: 5,
    //   comment:
    //     "Material UI can be helpful for developing an MVP. For a bespoke experience, however, I prefer to write my own components.",
    //   links: [projects.cardleyFrontend],
    // },
  {
    icon: styledComponents,
    name: "Styled Components",
    experience: 5,
    interest: 5,
    comment:
      "I think that CSS-in-JS is the future, and that post-processors like styled components and emotion capitalise on many, although not all, of the achievements of pre-processors like SASS.",
    links: [projects.wla, projects.zaatari],
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
      "Postman is a solid option for API testing and development. In truth I use a mixture of Postman, cURL and Insomnia as suits my needs.",
    links: [projects.citadelsApi],
  },
  {
    icon: codecovIcon,
    name: "CodeCov",
    experience: 5,
    interest: 5,
    comment:
      "I've used CodeCov in a few projects now, and I find it a useful way of assessing code coverage.",
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
      "I'm comfortable with Netlify, having used it to do things like deploy sites, send API queries with lambda functions, and configure DNS.",
    links: [projects.zaatari, projects.spotify],
  },
  {
    icon: herokuIcon,
    name: "Heroku",
    experience: 5,
    interest: 5,
    comment:
      "I'm comfortable with Heroku. If there's a need for a quick and seamless server deployment, I'd certainly consider it. If performance or fine-tuning are necessary, I would opt for GCP or AWS.",
    links: [projects.cardleyApi, projects.snippetsOfCode],
  },
  {
    icon: googleCloudPlatform,
    name: "Google Cloud",
    experience: 5,
    interest: 5,
    comment:
      "I enjoy Google Cloud Platform for its performance and the degree of control that it gives me. It's good compromise, in terms of control and ease of use, between Heroku and AWS.",
    links: [projects.portfolio],
  },
  {
    icon: awsIcon,
    name: "AWS",
    experience: 3,
    interest: 3,
    comment:
      "I could say I am experienced with AWS, but of course AWS is a broad church. So what have I used? EC2, RDS PostgreSQL, S3 and Amazon Amplify.",
    links: [projects.wla],
  },
  {
    icon: dockerIcon,
    name: "Docker",
    experience: 5,
    interest: 5,
    comment:
      "I'm a great fan of Docker. I find running an app inside a container, and then interfacing with the host operating system by exposing ports, fascinating.",
    links: [projects.portfolio],
  },
  {
    icon: gitIcon,
    name: "Git",
    experience: 5,
    interest: 5,
    comment:
      "I make thousands of commits a year, so I am well-acquainted with git. I even got into writing Husky extensions for a while, so I've looked into advanced Git features like submodules and subtrees.",
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
      "Figma is a useful design tool. I appreciate its prototype view, and the ability for multiple team-members to get on a design at once.",
    links: [projects.cardleyPrototype, projects.zaatariPrototype],
  },
  {
    icon: jiraIcon,
    name: "Jira",
    experience: 5,
    interest: 5,
    comment:
      "Like many, I have a love-hate (or you could even say hate-hate) relationship with Jira. But I do know how to use it. I even wrote an NPM package to help our team use Jira smart-commits with Git.",
    links: [projects.transparentCommitizen],
  },
];

export default technologies;
