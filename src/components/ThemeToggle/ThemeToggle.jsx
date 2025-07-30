import React, { useContext } from 'react';
import './ThemeToggle.css';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Change to {theme === 'glass' ? 'Neumorphism' : 'Glassmorphism'}
    </button>
  );
};

export default ThemeToggle;
