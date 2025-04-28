import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const steps = [
    { icon: 'fa-user-plus', title: 'Sign Up', desc: 'Create an account with your email and a secure password.' },
    { icon: 'fa-key', title: 'Add Passwords', desc: 'Store your passwords securely with AES-256 encryption.' },
    { icon: 'fa-sync-alt', title: 'Sync Devices', desc: 'Access your passwords across all your devices.' },
    { icon: 'fa-shield-alt', title: 'Stay Secure', desc: 'Enable MFA for an extra layer of protection.' },
  ];

  return (
    <>
      <section className="hero text-center py-5">
        <div className="container">
          <h1>Secure Your Passwords with Confidence</h1>
          <p>Store, manage, and retrieve your passwords securely with JWT authentication.</p>
          <Link to="/signup" className="btn btn-primary">
            <i className="fas fa-lock"></i> Get Started
          </Link>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <h2 className="text-center">
            <i className="fas fa-shield-alt"></i> Why Choose Our Password Manager?
          </h2>
          <p className="text-center">Top-tier security with JWT authentication, easy access, and multi-device sync.</p>
          <div className="row">
            {[
              { icon: 'fa-user-lock', title: 'Security First', desc: 'Passwords are encrypted using AES-256 and stored with zero-knowledge security.' },
              { icon: 'fa-fingerprint', title: 'Multi-Factor Authentication', desc: 'Retrieve passwords securely using MFA for added security.' },
              { icon: 'fa-sync', title: 'Automatic Sync', desc: 'Passwords sync across all devices automatically.' },
            ].map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card feature-card mb-4">
                  <div className="card-body text-center">
                    <i className={`fas ${feature.icon} fa-3x mb-3`}></i>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works py-5 bg-light">
        <div className="container">
          <h2 className="text-center">
            <i className="fas fa-cogs"></i> How It Works
          </h2>
          <p className="text-center">Follow these simple steps to secure your passwords.</p>
          <div className="row">
            {steps.map((step, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="card feature-card mb-4">
                  <div className="card-body text-center">
                    <i className={`fas ${step.icon} fa-3x mb-3`}></i>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;