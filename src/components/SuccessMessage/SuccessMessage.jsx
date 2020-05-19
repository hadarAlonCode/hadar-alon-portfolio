import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const SuccessMessage = props => {
    const {contactFormSuccess} = props
    return (


        <Fade top delay={200}>
        <div className="success__message">
           <h3>THANK YOU</h3>
           <div className="message">Your message has been sent</div>
           <button onClick={()=>contactFormSuccess(false)} className="btn">
           <i className="fas fa-arrow-left"></i>
               Go Back 
               </button>
        </div>
        </Fade>
    );
};



export default SuccessMessage;