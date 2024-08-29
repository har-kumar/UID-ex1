import React from 'react';
import './Skills.css';

const skills = [
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'CSS', level: '70%' },
    // Add more skills as needed
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h1 className="skills-title">Skills</h1>
            <div className="skills-list">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-bar-container">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: skill.level }}></div>
                        </div>
                        <span className="skill-level">{skill.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
