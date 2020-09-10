import React, { useRef } from "react";

import Page from "../../Page/Page";
import Project from "./Project/Project";
import useWindowHeightMinusNav from "../../../hooks/useWindowHeightMinusNav";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import copy from "./work.copy";

export default function Work({ classInjection }: ClassInjectionType) {
  const genericProjectHeight = useWindowDimensions()?.height;
  const firstProjectHeight = useWindowHeightMinusNav();
  const articleRef = useRef<HTMLElement[] | []>([]);

  const scroll = (index: number) => {
    const nextElement = articleRef.current[index + 1];
    if (!nextElement) {
      return;
    }
    nextElement.scrollIntoView({ behavior: "smooth" });
  };
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
          nextPage={copy[index + 1] ? "" : "/contact"}
          sectionRef={(el: HTMLElement) => {
            articleRef.current[index] = el;
          }}
          scrollMouse={() => scroll(index)}
          scrollKeyboard={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scroll(index);
            }
          }}
        />
      ))}
    </Page>
  );
}
