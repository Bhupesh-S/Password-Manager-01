import React, { useState } from 'react';
import '../styles/Contact.css'; // Import your CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your form submission logic (e.g., send the data to your server or an API)
    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact py-5 bg-light">
      <div className="container">
        <h2 className="text-center"><i className="fas fa-envelope"></i> Get In Touch</h2>
        <p className="text-center">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
