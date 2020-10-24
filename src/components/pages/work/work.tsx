import React, { useRef } from "react";

import Page from "../../Page/Page";
import Project from "./Project/Project";
import useWindowHeightMinusNav from "../../../hooks/useWindowHeightMinusNav";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import copy from "./work.copy";

export default function Work({ classInjection }: ClassInjectionType) {
  const firstProjectHeight = useWindowHeightMinusNav();
  const genericProjectHeight = useWindowDimensions()?.height;
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
// so, this ref thing works. But you have to wonder _why_. elements are effectively pushed on to articleRef.current with the function nextPage in a child component. At (ostensibly) the _same time_ a click handler is registered on each child component which asks about the _next_ element in articleRef.current. When the function is called, I would have thought that, as a closure, it would remember its context and not know about the elements later in the list which hadn't been created yet. Like, in vanilla JS, you couldn't map over an array, monotonically creating another array as a side effect, and then at element n access element n + 1 of the side effect array.
