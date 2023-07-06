import React, { useEffect, useRef } from "react";
import "../styles/about.css";
import me from "../assets/me.jpg";

function About() {
    const paragraphRefs = useRef([]);
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const paragraphs = paragraphRefs.current;
            const img = imgRef.current;

            paragraphs.forEach((paragraph) => {
                const rect = paragraph.getBoundingClientRect();
                const isVisible =
                    rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible) {
                    paragraph.classList.add("fade-in");
                } else {
                    paragraph.classList.remove("fade-in");
                }
            });

            const imgRect = img.getBoundingClientRect();
            const imgVisible =
                imgRect.top < window.innerHeight && imgRect.bottom >= 0;

            if (imgVisible) {
                img.classList.add("fade-in");
            } else {
                img.classList.remove("fade-in");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="about">
            <div id="terminal">
                <h1 id="title">About me</h1>
                <p ref={(ref) => (paragraphRefs.current[0] = ref)}>
                    Hi there! My name is Rodrigo Sousa and I'm from Porto,
                    Portugal. I'm currently on my second year of a Computer
                    Engineering degree at Universidade Lusófona. I love learning
                    new things, especially about software development.
                </p>
                <br />
                <p ref={(ref) => (paragraphRefs.current[1] = ref)}>
                    Feel free to contact me and thanks for stopping by :)
                </p>
            </div>
            <div id="center-img">
                <img id="me" src={me} alt="me" ref={imgRef} />
            </div>
        </div>
    );
}

export default About;
