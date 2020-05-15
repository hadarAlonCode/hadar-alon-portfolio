
import React, {useEffect ,useState} from 'react';
import Skilles from '../Skilles/Skilles';
import Fade from 'react-reveal/Fade';

const About = props => {


 const [skilles_animation, setSkillesAnimation] = useState(false)

useEffect(() => { 

    let skilles_title = document.getElementById("skills__title");

    if(skilles_title){
        let start_animation =  isScrolledIntoView(skilles_title)
        if(start_animation){
         setSkillesAnimation(true)}
     
        let scrollEvent = function() {
           let start_animation =  isScrolledIntoView(skilles_title)
           if(start_animation){
            setSkillesAnimation(true)
            
            window.removeEventListener('scroll', scrollEvent)
           }
        };
        window.addEventListener('scroll', scrollEvent)   
    }
  });


const isScrolledIntoView = (el) => {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

    return (
        <section className="section__padding about__container" >

                <div className="grid about__inner__container">
                <Fade left delay={800}>
                    <h2>ABOUT</h2>
                    <p className="first__p">Creative Full Stack web developer.  Passionate about developing efficient web solutions. I am ambitious, adventurous, and love to take on new challenges.</p>
                    <p>Proficient in ReactJS and NodeJS. Proven experience with MERN stack and on/off site SEO latest requirements.</p>
                    </Fade>
                    <div className="skilles__container">
                        <Fade>
                             <div id="skills__title"></div>
                        </Fade>

                        {skilles_animation ? <Skilles /> : null}
                        
                       
                        
                    </div>
                </div>

                
                <div id="projectsL"></div>
            </section>
    );
};



export default About;
