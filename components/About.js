import React from 'react';
import './About.css'; // Import your CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p>Hello! I'm Harini, a passionate Full Stack Developer with a background in computer science and a love for creating dynamic and responsive web applications. I enjoy working on both the front-end and back-end of projects, using my skills to build innovative solutions.</p>
            
            <h2>Background</h2>
            <p>I graduated with a degree in Computer Science from [Your University]. During my studies, I developed a strong foundation in software engineering, databases, and machine learning.</p>

            <h2>Interests</h2>
            <p>Outside of coding, I love exploring new technologies, contributing to open-source projects, and staying updated with industry trends. I also enjoy reading tech blogs, participating in hackathons, and collaborating with other developers.</p>
            
            <h2>Resume</h2>
            <p>For a detailed overview of my professional experience and skills, feel free to view or download my resume:</p>
            <a href="https://har-kumar.github.io/WT3/#" download className="btn">Download Resume</a>
        </div>
    );
};

export default About;
