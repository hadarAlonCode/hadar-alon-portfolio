import React from 'react';
import {projects} from "../../data/projects"
import Project from './Parts/Project';


const Projects = props => {
    return (
        <section className="section__padding projects__container">
            <div className="grid about__inner__container">

                <h2 >PROJECTS</h2>
                {
                    projects.map((p)=>{
                        return <Project key={p.id} project={p} />
                    })
                }
            </div>
       </section>
    );
};


export default Projects;