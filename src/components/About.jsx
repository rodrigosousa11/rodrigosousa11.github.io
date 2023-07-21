import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/about.css";
import me from "../assets/me.jpg";

function About() {
    const paragraphRefs = useRef([]);
    const imgRef = useRef(null);
    const [inViewRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            const paragraphs = paragraphRefs.current;
            const img = imgRef.current;

            paragraphs.forEach((paragraph) => {
                paragraph.classList.add("fade-in");
            });

            img.classList.add("fade-in");
        }
    }, [inView]);

    return (
        <div id="about">
            <h1 id="title">ABOUT ME</h1>
            <div id="container">
                <div id="terminal">
                    <div>
                        <p
                            ref={(ref) => {
                                paragraphRefs.current[0] = ref;
                                inViewRef(ref);
                            }}
                        >
                            Hi there! My name is Rodrigo Sousa and I'm from
                            Porto, Portugal. I'm a third year Computer
                            Engineering student at Universidade Lusófona.
                        </p>
                        <br />
                        <p
                            ref={(ref) => {
                                paragraphRefs.current[1] = ref;
                                inViewRef(ref);
                            }}
                        >
                            I love learning new things, especially about
                            software development. So in my free time you will
                            probably find me working on some personal project.
                        </p>
                        <br />
                        <p
                            ref={(ref) => {
                                paragraphRefs.current[2] = ref;
                                inViewRef(ref);
                            }}
                        >
                            Feel free to contact me and thanks for stopping by
                            :)
                        </p>
                    </div>
                </div>
                <div id="center-img">
                    <img
                        id="me"
                        src={me}
                        alt="me"
                        ref={imgRef}
                        className={inView ? "fade-in" : ""}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
