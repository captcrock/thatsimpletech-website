import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="That Simple Tech Logo" className="logo-img" />
        <span>That Simple Tech</span>
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode}>🌙 Dark Mode</button>
      </div>
    </nav>
  );
}

export default Navbar;
