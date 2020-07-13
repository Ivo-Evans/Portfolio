/* eslint-disable react/prop-types */
import React from "react";

import Logo from "./logo";
import technologyList from "./technologylist";
import InfoBox from "./InfoBox";
import Nav from "../../Nav/Nav";
import "./technologies.css";

export default function Technologies({ classInjection }) {
  const [selectedTech, setSelectedTech] = React.useState(true);
  return (
    <div className={classInjection}>
      <Nav />
      <div className="about__technologies">
        {technologyList.map((technology) => {
          return (
              <div
              role="button"
              tabIndex={-1}
              onClick={() => {
                setSelectedTech({... technology})
                  }}
            onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    setSelectedTech({... technology})

                }
            }}
              >

                  <Logo
                    icon={technology.icon}
                    description={technology.name}
                    extraClasses={`${technology.classModifier} ${selectedTech.name === technology.name && "about__icon--selected"}`}
                    height={technology.heightModifier}
                  />

              </div>
          );
        })}
      </div>
      <div className="about__infobox">
        {selectedTech ? <h2>PlaceHolder</h2> : <InfoBox />}
      </div>
    </div>
  );
}
