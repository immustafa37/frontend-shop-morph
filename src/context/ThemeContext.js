import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isGlassTheme, setIsGlassTheme] = useState(true);

  const toggleTheme = () => {
    setIsGlassTheme(!isGlassTheme);
    document.body.className = isGlassTheme ? 'neumorphism-theme' : 'glassmorphism-theme';
  };

  return (
    <ThemeContext.Provider value={{ isGlassTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);