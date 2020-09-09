import React from 'react';
import SkillsWest from "../../../assets/images/projects/skillswest.silver.png"

export default [
    {
        title: "SkillsWest.London",
        link: "https://www.skillswest.london/",
        tech: ["Gatsby/TypeScript", "Strapi", "Postgres", "AWS"],
        image: SkillsWest,
        content: <>
        <p>
        SkillsWest. London is a project of the West London Alliance (WLA), a group of councils in West London. WLA asked for a website to collate courses in the emerging green construction sector. Me and a partner created a static site with Gatsby. Among other things, it represents many-many relations between career paths and courses, and uses public APIs to dynamically generate data which we visualise with recharts. 
            </p>
            <p>
            On the backend, my responsibilities included deploying a cluster of AWS services (EC2, RDS, Amplify), as well as taking responsibility for database management and for synchronising state between the front and back end.  
            </p>
            <p>
            On the frontend, my responsibilities included creating functionality to search through courses and career paths, writing the code for API queries and data visualisation, and styling large parts of the site with styled-components. 
            </p>
            <p>
                Find it on Github <a href="https://github.com/tech-for-better/WLA-frontend">(1)</a> <a href="https://github.com/tech-for-better/WLA-backend">(2)</a> or <a href="https://www.skillswest.london/">live</a>.
            </p>
            </>
    }
]