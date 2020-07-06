import React from "react";
import PropTypes from "prop-types";
import "./Project.css";

const Project = ({
  name,
  description,
  picture,
  tech,
  deployLink,
  codeLink,
}) => {
  return (
    <article className="project">
      {deployLink ? (
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <img className="project__image" src={picture} alt={name} />
        </a>
      ) : (
        <img className="project__image" src={picture} alt={name} />
      )}

      <div className="project__text">
        <h2>
          {deployLink ? (
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ) : (
            <>{name}</>
          )}
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

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  deployLink: PropTypes.string,
  codeLink: PropTypes.string.isRequired,
};

Project.defaultProps = {
  deployLink: "",
};

export default Project;
