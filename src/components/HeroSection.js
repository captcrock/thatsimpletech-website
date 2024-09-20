import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Innovative IT Solutions for Small Businesses
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Bringing cutting-edge technology to your business needs.
      </motion.p>
      <a href="#services" className="cta-button">Discover Our Services</a>
    </section>
  );
}

export default HeroSection;
