import React from 'react';
import '../styles/ThemeToggle.css';

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default ThemeToggle;
