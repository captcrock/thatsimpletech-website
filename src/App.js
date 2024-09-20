import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <HeroSection />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Services />
      <Testimonials />
      <ContactForm />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
