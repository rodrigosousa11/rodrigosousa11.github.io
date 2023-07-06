import React from "react";
import name from "../assets/name.png";
import "../styles/home.css";
import { FaChevronCircleDown } from "react-icons/fa";

function Home() {
    const handleScrollAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleScrollContact = () => {
        const aboutSection = document.getElementById("contact");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div id="home">
            <div className="presentation">
                <p className="whoami">Hi there! I'm</p>
                <img src={name} alt="name" className="name" />
                <p className="whoami">Computer Engineer Enthusiast</p>
            </div>
            <button id="contact-but" onClick={handleScrollContact}>Contact</button>
            <FaChevronCircleDown
                className="arrow"
                onClick={handleScrollAbout}
            />
        </div>
    );
}

export default Home;
