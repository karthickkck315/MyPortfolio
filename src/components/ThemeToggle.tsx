import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle-btn"
    >
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};
