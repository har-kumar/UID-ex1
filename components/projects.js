import React from 'react';
import './Projects.css'; // Import your CSS file for styling

const projects = [
    {
        name: 'Airline Reservation System',
        description: 'A comprehensive system for managing flight bookings, reservations, and customer information.',
        image: '/Airline.jpg' // Path to the project image
    },
    {
        name: 'Fitness Tracker',
        description: 'An application to track fitness activities, monitor progress, and set workout goals.',
        image: '/Fitness.jpg' // Path to the project image
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-list">
                {projects.map((project) => (
                    <div className="project-card" key={project.name}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h2 className="project-title">{project.name}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
