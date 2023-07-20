import { useEffect, useRef } from "react";
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
            <h1 id="title">ABOUT ME</h1>
            <div id="container">
                <div id="terminal">
                    <div>
                        <p ref={(ref) => (paragraphRefs.current[0] = ref)}>
                            Hi there! My name is Rodrigo Sousa and I'm from Porto,
                            Portugal.
                            I'm a third year Computer Engineering student at Universidade Lusófona.
                        </p>
                        <br />
                        <p ref={(ref) => (paragraphRefs.current[1] = ref)}>
                            I love learning new things, especially about software development. 
                            So in my free time you will probably find me working on some personal project.
                        </p>
                        <br />
                        <p ref={(ref) => (paragraphRefs.current[2] = ref)}>
                            Feel free to contact me and thanks for stopping by :)
                        </p>
                    </div>
                </div>
                <div id="center-img">
                    <img id="me" src={me} alt="me" ref={imgRef} />
                </div>
            </div>
        </div>
    );
}

export default About;
