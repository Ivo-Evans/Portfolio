/* eslint-disable react/prop-types */
import React from "react";
import Logo from "./children/logo";
import technologyList from "./technologylist";
import InfoBox from "./children/InfoBox";
import Page from "../../Page/Page";
import "./technologies.css";
import "../../../animations.css";
import * as types from "./technologies.types";

export default function Technologies({ classInjection }: ClassInjectionType) {
  const [selectedTech, setSelectedTech] = React.useState<types.ISelectedTech>(
    {},
  );
  const infoBoxRef = React.useRef<null | HTMLDivElement>(null);
  return (
    <Page classInjection={classInjection}>
      <article className="technologies__list">
        {technologyList.map((technology) => {
          return (
            <Logo
              onClick={() => {
                setSelectedTech({ enabled: true, ...technology });
                return infoBoxRef?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              onKeyPress={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedTech({ enabled: true, ...technology });
                  return infoBoxRef?.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
                return null;
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
      <div ref={infoBoxRef} />
    </Page>
  );
}
