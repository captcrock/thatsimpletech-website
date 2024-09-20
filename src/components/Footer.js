import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>That Simple Tech</h2>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 That Simple Tech. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
