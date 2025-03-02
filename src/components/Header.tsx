import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  sections: { id: string; label: string; icon: React.ReactNode }[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ sections, activeSection, setActiveSection, scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //const { theme, setTheme } = useTheme();
  //const isDarkMode = theme === 'dark';
  //const toggleTheme = () => setTheme(isDarkMode ? 'light' : 'dark');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, setActiveSection]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrollY > 50 
        ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
        : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 relative flex items-center justify-between">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <motion.span 
            className="text-primary-600 dark:text-primary-400 font-bold text-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Portfolio
          </motion.span>
        </motion.div>

        {/* Theme Toggle Button
        <motion.button
          className="absolute right-32 text-secondary-800 dark:text-secondary-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
        >
          {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
        </motion.button> */}

        {/* Enhanced Hamburger Menu Button */}
        <motion.button
          className="absolute right-20 text-secondary-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.div
            initial={false}
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute right-4 top-16 w-48 overflow-hidden bg-white dark:bg-gray-800 rounded-md shadow-lg"
      >
        <nav className="py-2">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 
                    ${activeSection === section.id
                      ? 'bg-primary-500 text-white'
                      : 'text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;