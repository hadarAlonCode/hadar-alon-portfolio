import React from 'react';
import hadar from "../../images/hadar.png"
import pdf from "../../files/Hadar_Alon_CV.pdf";

import Fade from 'react-reveal/Fade';
import {socials} from "../../data/socials"


const Footer = props => {
    return (
        <footer id="footerL" className="footer__container">

        <div className="contact__msg">Have a question or want to work together?</div>
        <a href={pdf} download="Hadar_Alon_CV"><button className="btn">DOWNLOAD RESUME</button></a>

        <div className="social__icons">
            {socials.map(s=>{
                return (
                    <a href={s.link} target="_blank" >
                        <div className="social__icon__container">
                        <img className='social__icon' src={s.icon} alt={s.name} />
                        </div>
                    </a>
                )
            })}
            
           
        </div>

        <Fade bottom>
                 <img className='hadar__logo' src={hadar} alt="logo" />
        </Fade>
           
        </footer>
    );
};



export default Footer;