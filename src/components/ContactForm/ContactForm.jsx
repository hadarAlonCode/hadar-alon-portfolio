import React, { Component } from 'react';
import TextInput from '../Inputs/TextInput';
import Loader from '../Loader/Loader';

import { sendContactForm } from '../../functions/api';

class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            form_data: {
                name: "",
                email:"",
                message:""

            },
            form_loader: false,
            check_validation: false

        }
    }


    updateForm = (state_name, value) => {

        const { form_data } = this.state
        let copy_form_data = JSON.parse(JSON.stringify(form_data))
        copy_form_data[state_name] = value

        this.setState({
            form_data: copy_form_data
        })
    }


    validationForm = () => {

        this.setState({
            check_validation: true
        })

        setTimeout(() => {
            this.setState({
                check_validation: false
            })
        }, 500);

    }


    submitForm = async () => {

      
        const { form_data } = this.state
        const {contactFormSuccess} = this.props

        this.validationForm()

        this.setState({
            form_loader: true
        })

        setTimeout(async () => {
            let err_class = document.querySelectorAll(".validation_error");

            if (err_class.length > 0) {
                this.setState({
                    form_loader: false
                })
                return
            } else {

               
                let subject = `Email from ${form_data.email} `
                let text = `name:${form_data.name}, email:${form_data.email}, message: ${form_data.message} `
                let body = {
                    subject,
                    text: text, 
                }

                let new_contact = await sendContactForm(body)

                if (new_contact.ok) {
                    this.setState({
                        form_loader: false
                    })
                    contactFormSuccess(true)
                }else{
                    alert("There was an error trying to dend your Message, Please try again later")
                    this.setState({
                        form_loader: false
                    })
                }

            }

        }, 500);

    }


    render() {
        const {form_data ,check_validation ,form_loader} = this.state
        return (
            <div className="contact__form">
                <div className="contact__form__container">
                    <TextInput
                        state_name={"name"}
                        state_value={form_data["name"]}
                        err_text={"Please enter name"}
                        updateForm={this.updateForm}
                        check_validation={check_validation}
                        title_text="Name*" 
                    />
                    <TextInput
                        title_text="Email*" 
                        state_name={"email"}
                        state_value={form_data["email"]}
                        err_text={"Please enter valid email"}
                        updateForm={this.updateForm}
                        check_validation={check_validation}
                    />
                    <TextInput
                        state_name={"message"}
                        state_value={form_data["message"]}
                        err_text={"Please enter a message"}
                        updateForm={this.updateForm}
                        check_validation={check_validation}
                        title_text="Message" />

                    {form_loader ?
                       <Loader />
                       :
                       <button className="btn" onClick={()=>this.submitForm()}>SUBMIT</button>
                    }

                
                </div>
                
            </div>
        );
    }
}

export default ContactForm;