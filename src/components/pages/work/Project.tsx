import React from "react";
import "./Project.css";

type ProjectProps = {
    name: string,
    description: string,
    picture: string,
    tech: string[],
    deployLink: string,
    codeLink: string
}

const Project = ({
  name,
  description,
  picture,
  tech,
  deployLink,
  codeLink,
}: ProjectProps) => {
  return (
    <article className="project">
        <a href={deployLink || codeLink} target="_blank" rel="noopener noreferrer">
          <img className="project__image" src={picture} alt={name} />
        </a>

      <div className="project__text">
        <h2>
        <a href={deployLink || codeLink} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
        </h2>
        <div className="project__description">
          <p>{description}</p>
          <p>
            Find the code{" "}
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              here
            </a>
            {deployLink && (
              <>
                {" "}
                and the deployed project{" "}
                <a href={deployLink} target="_blank" rel="noopener noreferrer">
                  here
                </a>
              </>
            )}
            .
          </p>
        </div>
        <div className="project__tech-stack">
          <h3>Tech Stack</h3>
          {tech && (
            <ul>
              {tech.map((technology) => (
                <li>{technology}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

Project.defaultProps = {
  deployLink: "",
};

export default Project;
