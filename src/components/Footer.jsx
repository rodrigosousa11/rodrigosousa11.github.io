import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronCircleUp } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
    const handleScrollUp = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer>
            <div className="goback">
                <FaChevronCircleUp className="arrow-up" onClick={handleScrollUp} />
            </div>
            <div className="footer-content">
                <div className="socials">
                    <a
                        href="https://github.com/rodrigosousa11"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="mailto:rodrigosousa1105@gmail.com">
                        <FaEnvelope className="social-icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rodrigo-sousa-bb8a69262"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="social-icon" />
                    </a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Rodrigo Sousa</p>
            </div>
        </footer>
    );
}

export default Footer;
