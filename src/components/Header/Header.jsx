import React, {useEffect , useState} from 'react';
import Fade from 'react-reveal/Fade';
import header_img from "../../images/h3.jpg"

const Header = props => {

   

    
    return (
        <header >
                <img className='header__img' src={header_img} alt="header" />

                <div  className="grid header__container">
                <Fade bottom opposite collapse delay={300}>
                   <h1>HADAR ALON</h1>
                </Fade>
                <Fade bottom opposite collapse delay={500}>

                   <p>Full Stack Web Developer</p>
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

