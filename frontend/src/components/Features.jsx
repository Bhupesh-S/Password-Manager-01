import React from 'react';
import '../styles/Features.css'; // Assuming you have a CSS file for styling

const Features = () => {
  return (
    <section className="features py-5">
      <div className="container">
        <h2 className="text-center"><i className="fas fa-shield-alt"></i> Why Choose Our Password Manager?</h2>
        <p className="text-center">Top-tier security with JWT authentication, easy access, and multi-device sync.</p>
        <div className="row">
          {[
            { icon: "fa-user-lock", title: "Security First", desc: "Passwords are encrypted using AES-256 and stored with zero-knowledge security." },
            { icon: "fa-fingerprint", title: "Multi-Factor Authentication", desc: "Retrieve passwords securely using MFA for added security." },
            { icon: "fa-sync", title: "Automatic Sync", desc: "Passwords sync across all devices automatically." },
          ].map((feature, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card feature-card mb-4">
                <div className="card-body text-center">
                  <i className={`fas ${feature.icon} fa-3x`}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
