import "../styles/contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

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
                    setLoading(false);
                    toast.success("Thank you for your a message!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                },
                (error) => {
                    console.log(error.text);
                    setLoading(false);
                    toast.error(
                        "Failed to send message. Please try again later.",
                        {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    );
                }
            );
    };

    return (
        <div id="contact">
            <ToastContainer />
            {loading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                </div>
            ) : null}
            <form ref={form} onSubmit={sendEmail}>
                <h1 id="contact-title">CONTACT ME</h1>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                />
                <textarea name="message" placeholder="Message" required />
                <button id="send-but" type="submit">
                    Send
                </button>
            </form>
            <div className="socials-contact">
                <a href="mailto:rodrigosousa1105@gmail.com" className="social">
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
