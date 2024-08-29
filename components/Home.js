import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home-container">
            <div className="profile-section">
                <div className="profile-pic-container">
                    <img src="/th.jpeg" alt="Harini" className="profile-pic" />
                </div>
            </div>
            <div className="content-section">
                <h1>Hello, It's Me</h1>
                <h2>Harini</h2>
                <h3>And I'm a Full Stack Developer</h3>
                <p>I'm a developer passionate about creating dynamic and responsive web applications with a focus on front-end design and backend efficiency.</p>
                <div className="social-icons">
                    <a href="https://github.com/har-kumar" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/harini-k-748389259/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </a>
                </div>
                <a href="/about" className="btn">More About Me</a>
            </div>
        </div>
    );
};

export default Home;
