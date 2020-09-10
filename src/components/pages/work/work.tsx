import React, { useState, useRef } from "react";
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
  const [currentProject, setCurrentProject] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);
  const articles = copy.map((article, index) => {
    const sectionRef = index === currentProject + 1 ? articleRef : null;
    return { ...article, sectionRef };
  });
  const incrementAndScroll = () => {
    setCurrentProject(currentProject + 1);
    if (articleRef === null) {
      return;
    }
    articleRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Page classInjection={classInjection}>
      {articles.map((project, index) => (
        <Project
          key={project.title}
          minHeight={index ? genericProjectHeight : firstProjectHeight}
          title={project.title}
          image={project.image}
          link={project.link}
          tech={project.tech}
          content={project.content}
          nextPage={copy[index + 1] ? "" : "/contact"}
          sectionRef={project.sectionRef}
          incrementAndScrollMouse={incrementAndScroll}
          incrementAndScrollKeyboard={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              incrementAndScroll();
            }
          }}
        />
      ))}
    </Page>
  );
}
