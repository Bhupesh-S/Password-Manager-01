import React from 'react';
import '../styles/HowItWorks.css'; // Import your CSS file for styling

const HowItWorks = () => {
  const steps = [
    { icon: 'fa-user-plus', title: 'Step 1: Sign Up', desc: 'Create a secure account with a strong master password.' },
    { icon: 'fa-key', title: 'Step 2: Add Passwords', desc: 'Save and organize your passwords securely in our vault.' },
    { icon: 'fa-mobile-alt', title: 'Step 3: Access Anytime', desc: 'Retrieve your passwords securely from any device.' },
    { icon: 'fa-lock', title: 'Step 4: Stay Secure', desc: 'Enable 2FA and keep your passwords safe from breaches.' },
  ];

  return (
    <section className="how-it-works py-5 bg-light">
      <div className="container">
        <h2 className="text-center"><i className="fas fa-cogs"></i> How It Works</h2>
        <p className="text-center">Follow these simple steps to secure your passwords.</p>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-md-3" key={index}>
              <div className="card feature-card mb-4">
                <div className="card-body text-center">
                  <i className={`fas ${step.icon} fa-3x`}></i>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
