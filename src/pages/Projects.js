import React from 'react';
import Layout from "../components/Layout";
import ProjectsStyles from "../styles/projects.module.scss";

function Projects() {
    return (
       <Layout>
       <div className={ProjectsStyles.project}>Projects Page</div>
       </Layout>
    )
}

export default Projects;
