import React, {useState} from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Fade from 'react-reveal/Fade';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import Slide from 'react-reveal/Slide';

const Contact = props => {

   const [success_message , SetSuccessMessage] = useState(true)

    const contactFormSuccess =(boolean)=>{
          SetSuccessMessage(boolean)
    }

    return (
        <section className="contact__section">
            <div className="grid contact__section__inner">
            <Fade left delay={300}>
            <h2>CONTACT</h2>
            <div className="contact__msg">Have a question or want to work together?</div>
            </Fade>
             {success_message ?
                <SuccessMessage  contactFormSuccess={contactFormSuccess}/>
             : 
                <Slide bottom delay={200} >
                    <ContactForm contactFormSuccess={contactFormSuccess} />
                </Slide>
             }
            
            </div>
        </section>
    );
};

export default Contact;