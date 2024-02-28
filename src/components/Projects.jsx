import React, { useState } from "react";
import "../styles/projects.css";
import tasky from "../assets/tasky.png";
import multiclipboard from "../assets/multiclip.jpg";
import portfolio from "../assets/portfolio.png";
import sueca from "../assets/sueca.png";
import stegano from "../assets/stegano.png";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const Projects = () => {
	const projectData = [
		{
			name: "SteganoLab",
			description : "This web application allows users to encode secret messages into images with or without passwords using the LSB-Steganography technique in which we replace the least significant bit of the image with the bits of a message to be hidden and decode them back to retrieve the original message. Users can optionally sign up for an account for the opportunity to keep track of their past encodings and decodings.",
			imageURL: stegano,
			githubLink: "https://github.com/rodrigosousa11/SteganoLab"
		},
		{
			name: "Tasky",
			description:
				"Tasky is a web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to manage their tasks by adding, updating (marking as completed or not), and deleting them. The app also features user authentication to secure task management for each individual user.",
			warning:
				"Please be patient when using the website, some functions may take a while due to using a free plan.",
			imageURL: tasky,
			githubLink: "https://github.com/rodrigosousa11/tasky-todo-mern-app",
			websiteLink: "https://tasky-7jcp.onrender.com/",
		},
		{
			name: "SuecaCounter",
			description:
				"SuecaCounter is an android application developed in Kotlin, designed to simplify score counting in the ”Sueca” card game. Stores scores, winners, and date/time of each game in Firebase Realtime Database, providing users with a complete history of their matches. Utilizes Firebase Authentication to authenticate users, ensuring a secure environment.",
			imageURL: sueca,
			githubLink: "https://github.com/rodrigosousa11/SuecaCounter",
		},
		{
			name: "CLI Multi-Clipboard",
			description:
				"This is a Python clipboard manager that allows you to store more than one element copied and load copied elements back to clipboard using command-line commands. It uses a JSON file to store the copied data.",
			imageURL: multiclipboard,
			githubLink: "https://github.com/rodrigosousa11/cli-multi-clipboard",
		},
		{
			name: "My Personal Website",
			description:
				"This website is built using Vite and React and serves as a platform for me to showcase my personal information, skills, projects and contacts.",
			imageURL: portfolio,
			githubLink:
				"https://github.com/rodrigosousa11/rodrigosousa11.github.io",
			websiteLink: "https://rodrigosousa11.github.io/",
		},
	];

	const [hoveredProject, setHoveredProject] = useState(null);

	return (
		<div className="projects">
			<h1 id="projects-title">PROJECTS</h1>
			{projectData.map((project, index) => (
				<div key={project.name} className="project-item">
					<div className="project-description">
						<h3>{project.name}</h3>
						<div>{project.description}</div>
						{project.warning && (
							<div className="project-warning">
								{project.warning}
							</div>
						)}
					</div>
					<div className="project-image">
						<div
							className="project-image-container"
							onMouseEnter={() => setHoveredProject(index)}
							onMouseLeave={() => setHoveredProject(null)}
						>
							<img src={project.imageURL} alt={project.name} />
							{hoveredProject === index && (
								<div className="project-links">
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<BsGithub />
									</a>
									{project.websiteLink && (
										<a
											href={project.websiteLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<BsLink45Deg />
										</a>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
