import React, { useState } from 'react';
import '../styles/components/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState('');
  
  const contactInfo = {
    email: "rohrermaxwell@gmail.com",
    phone: "(319) 540-6551",
    linkedin: "https://www.linkedin.com/in/maxwell-rohrer/",
    github: "https://github.com/mjbucks"
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out if you'd like to connect!
        </p>
        
        <div className="contact-grid">
          <div className="contact-item" onClick={handleCopyEmail}>
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>{contactInfo.email}</p>
              {copySuccess && <span className="copy-feedback">{copySuccess}</span>}
            </div>
          </div>

          <a href={`tel:${contactInfo.phone}`} className="contact-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-info">
              <h3>Phone</h3>
              <p>{contactInfo.phone}</p>
            </div>
          </a>

          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>maxwell-rohrer</p>
            </div>
          </a>

          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <div className="contact-info">
              <h3>GitHub</h3>
              <p>mjbucks</p>
            </div>
          </a>
        </div>
      </div>
      
      <footer className="footer">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Maxwell Rohrer. All rights reserved.</p>
          <p>Designed and built by Maxwell Rohrer</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact; 