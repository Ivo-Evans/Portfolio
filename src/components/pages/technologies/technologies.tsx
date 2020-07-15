/* eslint-disable react/prop-types */
import React from "react";
import Logo from "./children/logo";
import technologyList from "./technologylist";
import InfoBox from "./children/InfoBox";
import Nav from "../../Nav/Nav";
import "./technologies.css";
import "../../../animations.css";
import { ClassInjectionType } from "../../classInjectionType";
import * as types from "./types";

export default function Technologies({ classInjection }: ClassInjectionType) {
  const [selectedTech, setSelectedTech] = React.useState<types.ISelectedTech>(
    {},
  );
  return (
    <div className={classInjection}>
      <Nav />
        <article className="technologies__list">
          {technologyList.map((technology) => {
            return (
                <Logo
                  onClick={() => {
                    setSelectedTech({ enabled: true, ...technology });
                  }}
                  onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedTech({ enabled: true, ...technology });
                    }
                  }}
                  icon={technology.icon}
                  description={technology.name}
                  extraClasses={`${technology.classModifier} ${
                    selectedTech.name === technology.name &&
                    "tech-list__icon--selected"
                  }`}
                  height={technology.heightModifier}
                />
            );
          })}
        </article>
        {typeof selectedTech === "object" && (
          <InfoBox
            name={selectedTech.name}
            icon={selectedTech.icon}
            comment={selectedTech.comment}
            links={selectedTech.links}
            classModifier={selectedTech.classModifier}
          />
        )}
    </div>
  );
}
