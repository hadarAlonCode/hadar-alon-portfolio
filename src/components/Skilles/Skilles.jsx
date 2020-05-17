import React, {useEffect,useState} from 'react';
import {skilles_logos} from "../../data/logos"
import { gsap } from "gsap";


const Skilles = props => {


    const [first_load, setFirstLoad] = useState(true)

    useEffect(() => {

        let html = document.getElementById("html");
        if(first_load && html ){
           startAnimation()
           setFirstLoad(false)
        }
       
    });


    const startAnimation =()=>{
        var tl = gsap.timeline({repeat: 0, repeatDelay: -2});

        tl.fromTo("#html", {y: 100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#css", {y: -100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#sass", {y: 100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#js", {y: -100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#jquery", {y: 100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#react", {y: -100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#redux", {y: 100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#mobx", {y: -100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#node", {y: 100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#express", {y: -100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#mongo", {y: 100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});
        tl.fromTo("#sql", {y: -100 , opacity:0}, {y: 0, opacity:1, duration: 0.5});

      
        //yoyo!!!! 
        // tl.from("#html", {y: 10 , duration: 2, ease: "power1.inOut" ,repeat: -1 , yoyo: true} );
        // tl.to("#css" , 3, {y: -15, duration: 2.5, ease: "power1.inOut", repeat: -1, yoyo: true});
    
       
    }


    return (
      
            <div className="skilles__logos">
                
                {skilles_logos.map(logo => {
                    return (<img id={logo.name}className='skilles__logo' src={logo.img} alt={`${logo.name}`} />)
                })}
            
            </div>
     
    );
};



export default Skilles;