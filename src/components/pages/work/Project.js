import React from "react";
import PropTypes from "prop-types";

const Project = ({ name, description, picture, tech }) => {
  return (
    <article>
      <img src={picture} alt={name} />
      <div className="text">
        <h2>{name}</h2>
        <p>{description}</p>
        {tech && (
          <ul>
            {tech.map((technology) => (
              <li>{technology}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
