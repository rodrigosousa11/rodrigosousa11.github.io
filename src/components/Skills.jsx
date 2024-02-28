import React from "react";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import {
    FaJava,
    FaPython,
    FaReact,
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
    SiDjango,
    SiExpress,
    SiFirebase,
    SiTypescript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import "../styles/skills.css";

function Skills() {
    const skillsData = [
        { icon: <FaJava />, name: "Java" },
        { icon: <FaC />, name: "C" },
        { icon: <TbBrandCpp />, name: "C++"},
        { icon: <FaPython />, name: "Python" },
        { icon: <SiKotlin />, name: "Kotlin" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMicrosoftsqlserver />, name: "SQL Server" },
        { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiFirebase />, name: "Firebase" },
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
