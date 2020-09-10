import React from "react";
// import "../page.css";

import Page from "../../Page/Page";
import Project from "./Project/Project";
import useWindowHeightMinusNav from "../../../hooks/useWindowHeightMinusNav";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import copy from "./work.copy";

export default function Work({ classInjection }: ClassInjectionType) {
  const genericProjectHeight = useWindowDimensions()?.height;
  const [firstProjectHeight, setFirstProjectHeight] = React.useState(0);
  useWindowHeightMinusNav(setFirstProjectHeight);
  return (
    <Page classInjection={classInjection}>
      {copy.map((project, index) => (
        <Project
          key={project.title}
          minHeight={index ? genericProjectHeight : firstProjectHeight}
          title={project.title}
          image={project.image}
          link={project.link}
          tech={project.tech}
          content={project.content}
        />
      ))}
    </Page>
  );
}
