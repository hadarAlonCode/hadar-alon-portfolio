import React from 'react';

import Fade from 'react-reveal/Fade';

const Project = props => {
    const {project} = props
    const {id, description , name, site, tech , img} = project
    
    return (
        <div className="project__container section__padding">
            <Fade left delay={400}>
            <section className="project__text">
                <h4>{name}</h4>
                <div className="under__line"></div>
                <p>{description}</p>
                <h5>Technologies</h5>
                <div className="tech__container">
                {tech.map((t, i) =>{
                    return <div>{i === 0 ? null : "|"} {t} </div>
                })} 
                </div>
                <a href={site} target="_blank" > <button className="btn">VIEW SITE</button></a>
              
           
            </section>
            </Fade>
            <Fade right delay={400}>
            <section className="project__img__container">
                 <img className='project__img' src={img} alt={name} />
            </section>
            </Fade>
            
        </div>
    );
};



export default Project;