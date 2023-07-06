import "../styles/contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_mq3eekj",
                "template_sjw4x6j",
                form.current,
                "SMxAIAFmsInu4GhXz"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact">
            <form ref={form} onSubmit={sendEmail}>
                <h1 id="contact-title">Contact me</h1>
                <input type="text" name="user_name" placeholder="Name" />
                <input type="email" name="user_email" placeholder="Email" />
                <textarea name="message" placeholder="Message" />
                <button id="send-but" type="submit">Send</button>
            </form>
            <div className="socials-contact">
                <a 
                    href="mailto:rodrigosousa1105@gmail.com"
                    className="social"
                >
                    <FaEnvelope />
                    <span>rodrigosousa1105@gmail.com</span>
                </a>
                <a
                    href="https://github.com/rodrigosousa11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                >
                    <FaGithub />
                    <span>rodrigosousa11</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/rodrigo-sousa-bb8a69262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                >
                    <FaLinkedin />
                    <span>Rodrigo Sousa</span>
                </a>
            </div>
        </div>
    );    
}

export default Contact;
