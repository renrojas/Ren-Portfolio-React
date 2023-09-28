import React, { useRef } from "react";
import './contact.css';
import LinkedIn from '../../assets/LI-In-Bug.png'
import GitHub from '../../assets/github-mark.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_51mli1u', 'template_6mng0sb', form.current, '3WAucS4lC1K79avjc')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent')
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section className="contactPage" id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="from_name" />
                <input type="email" className="email" placeholder="Your Email" name="from_email" />
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <a href="https://www.linkedin.com/in/karensrojas/" target="_blank">
                        <img src={LinkedIn} alt="LinkedIn Icon" className="link" />
                    </a>
                    <a href="https://github.com/renrojas" target="_blank">
                        <img src={GitHub} alt="GitHub Icon" className="link" />
                    </a>
                </div>
            </form>
        </section>
    )
}
export default Contact;