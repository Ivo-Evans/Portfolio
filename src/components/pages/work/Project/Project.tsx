import React from "react";
import "./Project.css";
import { IProject } from "./ProjectTypes";
import ProjectInformation from "./ProjectInformation";

const Project = ({
  minHeight,
  title,
  image,
  link,
  tech,
  content,
}: IProject) => (
  <section className="project-section" style={{ minHeight: `${minHeight}px` }}>
    <ProjectInformation
      title={title}
      image={image}
      link={link}
      tech={tech}
      content={content}
    />
  </section>
);

export default Project;
