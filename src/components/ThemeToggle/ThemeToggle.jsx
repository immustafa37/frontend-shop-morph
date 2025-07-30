import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isGlassTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isGlassTheme ? 'Switch to Neumorphism' : 'Switch to Glassmorphism'}
    </button>
  );
};

export default ThemeToggle;