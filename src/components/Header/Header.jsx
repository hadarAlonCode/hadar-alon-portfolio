import React, {useEffect , useState} from 'react';
import Fade from 'react-reveal/Fade';

const Header = props => {

   

    
    return (
        <header >
                <div  className="grid header__container">
                <Fade bottom opposite collapse delay={300}>
                   <h1>HADAR ALON</h1>
                </Fade>
                <Fade bottom opposite collapse delay={500}>

                   <p>Hello! I'm Hadar, a Full-Stack Web Developer leaning to Front End. I love learning new things (and actually doing it pretty fast). I am an open-minded and communicative person who cares a lot about details.</p>
                   </Fade>
                  

              
                    <a href={"#projectsL"} >
                    <Fade bottom opposite collapse delay={700}>
                       <button id="aboutL" className="btn"> CHECK MY WORK </button>
                       </Fade>
                    </a>
           
                </div>
            </header>
    );
};



export default Header;

