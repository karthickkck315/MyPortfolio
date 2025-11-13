import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { trackEvent } from '../utils/eventTracking';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    // Track theme toggle event
    const newTheme = isDark ? 'Light' : 'Dark';
    trackEvent('theme_toggle', newTheme, 'header');
    toggleTheme();
  };

  return (
    <button 
      onClick={handleThemeToggle}
      className="theme-toggle-btn"
    >
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};
