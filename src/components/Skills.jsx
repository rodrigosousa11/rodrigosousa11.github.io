import React from "react";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import {
    FaJava,
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaNodeJs,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import {
    SiJavascript,
    SiMysql,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiKotlin,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import "../styles/skills.css";

function Skills() {
    const skillsData = [
        { icon: <FaJava />, name: "Java" },
        { icon: <FaC />, name: "C" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiKotlin />, name: "Kotlin" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMicrosoftsqlserver />, name: "SQL Server" },
        { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaGitAlt />, name: "Git" },
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const trail = useTrail(skillsData.length, {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(20px)",
    });

    return (
        <div ref={ref} id="skills">
            <h1 id="Title">STUFF I LIKE</h1>
            <div className="skills-container">
                {trail.map((props, index) => (
                    <animated.div key={index} className="skill" style={props}>
                        <div className="skill-icon">
                            {skillsData[index].icon}
                        </div>
                        <div className="skill-name">
                            {skillsData[index].name}
                        </div>
                    </animated.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
