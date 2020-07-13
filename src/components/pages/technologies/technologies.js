/* eslint-disable react/prop-types */
import React from "react";

import Logo from "./logo";
import technologyList from "./technologylist";
import InfoBox from "./InfoBox";
import Nav from "../../Nav/Nav";
import "./technologies.css";

export default function Technologies({ classInjection }) {
  const [selectedTech] = React.useState(false);
  return (
    <div className={classInjection}>
      <Nav />
      <div className="about__technologies">
        {technologyList.map((technology) => {
          return (
            <Logo
              icon={technology.icon}
              description={technology.name}
              extraClasses={technology.classModifier}
              height={technology.heightModifier}
            />
          );
        })}
      </div>
      <div className="about__infobox">
        {selectedTech ? <h2>PlaceHolder</h2> : <InfoBox />}
      </div>
    </div>
  );
}
