import React from "react";
// import "../page.css";

import Page from "../../Page/Page";
import Project from "./Project/Project";
import useWindowHeightMinusNav from '../../../hooks/useWindowHeightMinusNav'
import useWindowDimensions from '../../../hooks/useWindowDimensions'


import copy from "./work.copy"

export default function Work({ classInjection }: ClassInjectionType) {
    const [firstProjectHeight, ] = React.useState(useWindowHeightMinusNav())
    // const firstProjectHeight = useWindowHeightMinusNav()
    console.log("Work -> firstProjectHeight", firstProjectHeight)
    const genericProjectHeight = useWindowDimensions()?.height
    console.log("Work -> genericProjectHeight", genericProjectHeight)

    
  return (
    <Page classInjection={classInjection}>
        {copy.map((project, index) => {
            return (
            <Project
                key={project.title}
                minHeight={index ? genericProjectHeight : firstProjectHeight}
                title={project.title}
                image={project.image}
                link={project.link}
                tech={project.tech}
                content={project.content}
            />
        )})}
        {/* <Project minHeight={firstProjectHeight} />
        <Project minHeight={genericProjectHeight} /> */}
      {/* <Project
        name="Humanibase"
        description="Humanibase is a platform for hosting and uploading audio workshops for those in refugee camps. We developed it for Zaatari Radio, which operates a radio station across Jordan and London."
        tech={["React", "Lambda functions", "Airtable"]}
        picture={humanibaseImage}
        codeLink="https://github.com/fac19/Zaatari-Radio"
        deployLink="https://radio-zaatari.netlify.app/"
      />
      <Project
        name="Cardley REST API"
        description="This is the API for the flashcard/learning app Cardley. Highlights include bcrypt+JWT authentication, many-many database relations, good test coverage and robust, adjustable console logging."
        tech={["Node", "Express", "PostgreSQL", "Jest", "Travis CI"]}
        picture={apiImage}
        codeLink="https://github.com/fac19/cardley---backend"
      />
      <Project
        name="Cardley site"
        description="This React app provides a UI for the Cardley API and lets users browse public decks, edit their own decks, and practice decks. Plus there is confetti."
        tech={["React", "Jest", "Styled Components", "Material UI"]}
        picture={cardleyImage}
        codeLink="https://github.com/fac19/cardley"
        deployLink="https://cardley.netlify.app/"
      /> */}
    </Page>
  );
}
