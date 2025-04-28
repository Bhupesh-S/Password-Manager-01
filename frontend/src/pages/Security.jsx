import React from 'react';
import '../styles/Security.css'; // Import your CSS file for styling

const Security = () => {
  return (
    <section className="security py-5 bg-light">
      <div className="container">
        <h2 className="text-center"><i className="fas fa-shield-alt"></i> Top-Notch Security</h2>
        <p className="text-center">Our password manager uses industry-leading security measures to protect your data.</p>

        <div className="security-features">
          <div className="security-card">
            <i className="fas fa-user-lock"></i>
            <h3>End-to-End Encryption</h3>
            <p>All passwords are encrypted using AES-256 encryption, ensuring only you have access to them.</p>
          </div>

          <div className="security-card">
            <i className="fas fa-fingerprint"></i>
            <h3>Multi-Factor Authentication</h3>
            <p>Enable 2FA for an extra layer of security when logging in to your account.</p>
          </div>

          <div className="security-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Zero-Knowledge Architecture</h3>
            <p>We can't access your passwords, ensuring full confidentiality.</p>
          </div>

          <div className="security-card">
            <i className="fas fa-lock"></i>
            <h3>Automatic Logout</h3>
            <p>Your session automatically expires after a period of inactivity for added security.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
