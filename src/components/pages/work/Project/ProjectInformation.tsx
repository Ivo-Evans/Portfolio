import React from "react";
import { IProjectInformation } from "./ProjectTypes";
import "./ProjectInformation.css";

const ProjectInformation = ({
  title,
  image,
  link,
  tech,
  content,
}: IProjectInformation) => (
  <article className="project">
    <a className="project__image" href={link}>
      <img className="project__image" src={image} alt={title} />
    </a>
    <div>
      <div className="project__titlebar">
        <a className="project__title" href={link}>
          <h2>{title}</h2>
        </a>
        <p>{tech.join(", ")}</p>
      </div>
      <div className="project__content">{content}</div>
    </div>
  </article>
);

export default ProjectInformation;
