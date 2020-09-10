import React from "react";
import "./Project.css";
import { Icon } from "@iconify/react";
import arrowDown from "@iconify/icons-heroicons-outline/arrow-down";
import { Link } from "react-router-dom";
import { IProject } from "./ProjectTypes";
import ProjectInformation from "./ProjectInformation";

const Project = ({
  minHeight,
  title,
  image,
  link,
  tech,
  content,
  nextPage,
  sectionRef,
  incrementAndScrollMouse,
  incrementAndScrollKeyboard,
}: IProject) => (
  <section
    ref={sectionRef}
    className="project-section"
    style={{ minHeight: `${minHeight}px` }}
  >
    <ProjectInformation
      title={title}
      image={image}
      link={link}
      tech={tech}
      content={content}
    />
    {nextPage ? (
      <Link to={nextPage}>
        <Icon className="project-section__arrow" icon={arrowDown} />
      </Link>
    ) : (
      <div
        role="button"
        tabIndex={0}
        onClick={incrementAndScrollMouse}
        onKeyPress={incrementAndScrollKeyboard}
      >
        <Icon className="project-section__arrow" icon={arrowDown} />
      </div>
    )}
  </section>
);

export default Project;
