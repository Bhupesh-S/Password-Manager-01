import React from 'react';
import '../styles/About.css'; // Import your CSS file for styling

const About = () => {
  return (
    <section className="about py-5 bg-light">
      <div className="container">
        <h2 className="text-center"><i className="fas fa-info-circle"></i> About Our Password Manager</h2>
        <p className="text-center">We provide a simple, secure, and reliable way to manage your passwords with top-notch security features.</p>

        <div className="about-content">
          <div className="mission">
            <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
            <p>Our goal is to help individuals and organizations securely store and manage their passwords, with a focus on ease of use, security, and reliability. We believe in giving you full control over your data, with no compromises on security.</p>
          </div>

          <div className="featuress">
            <h3><i className="fas fa-cogs"></i> Key Features</h3>
            <ul>
              <li>End-to-End Encryption (AES-256)</li>
              <li>Multi-Factor Authentication (MFA)</li>
              <li>Zero-Knowledge Architecture</li>
              <li>Automatic Device Sync</li>
              <li>Secure Password Storage & Retrieval</li>
            </ul>
          </div>

          <div className="team">
            <h3><i className="fas fa-users"></i> Our Team</h3>
            <p>Our team is composed of passionate engineers, designers, and security experts who are dedicated to building a safe and user-friendly product.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
