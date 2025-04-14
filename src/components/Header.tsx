import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, FileText, Download } from 'lucide-react';
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
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const resumeButtonRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Add button animation styles
  const buttonStyles = `
    .download-button {
      background: linear-gradient(-45deg, #3B82F6, #2563EB, #1E40AF, #60A5FA);
      background-size: 400% 400%;
      animation: gradientBG 8s ease infinite;
      position: relative;
    }

    .download-button::before {
      content: '';
      position: absolute;
      inset: -2px;
      z-index: -1;
      background: linear-gradient(-45deg, #3B82F6, #2563EB, #1E40AF, #60A5FA);
      background-size: 400% 400%;
      animation: gradientBG 8s ease infinite;
      border-radius: 8px;
      filter: blur(4px);
      opacity: 0.7;
      transition: opacity 0.3s;
    }

    .download-button:hover::before {
      opacity: 1;
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const yOffset = -headerHeight;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      // Using scrollIntoView with setTimeout to ensure reliable scrolling
      setTimeout(() => {
        window.scroll({
          top: y,
          behavior: 'smooth'
        });
      }, 0);
    }
  };

  const handleDownloadResume = (fileType: 'pdf' | 'doc') => {
    if (fileType === 'pdf') {
      const link = document.createElement('a');
      link.href = '/Karthick_iOS_Developer_Resume.pdf';
      link.download = 'Karthick_iOS_Developer_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const link = document.createElement('a');
      link.href = '/Karthick_iOS_Developer_Resume.docx';
      link.download = 'Karthick_iOS_Developer_Resume.docx';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setShowResumeOptions(false);
  };

  // Close resume options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resumeButtonRef.current && !resumeButtonRef.current.contains(event.target as Node)) {
        setShowResumeOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Adjust these values to fine-tune when sections become active
        threshold: 0.2
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, setActiveSection]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrollY > 50 
        ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
        : 'bg-transparent py-4'}`}>
      <style>{buttonStyles}</style>
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

        {/* Right side buttons container */}
        <div className="flex items-center space-x-4">
          {/* Resume Download Button with Dropdown */}
          <div className="relative" ref={resumeButtonRef}>
            <motion.button
              className="download-button p-2.5 rounded-lg text-white text-sm flex items-center space-x-2 shadow-lg backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowResumeOptions(!showResumeOptions)}
            >
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Download size={18} />
              </motion.div>
              <span className="hidden sm:inline font-medium">Download Resume</span>
            </motion.button>

            <AnimatePresence>
              {showResumeOptions && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1">
                    <motion.button
                      onClick={() => handleDownloadResume('pdf')}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-all duration-200"
                      whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    >
                      <FileText size={16} />
                      <span>Download PDF</span>
                    </motion.button>
                    <motion.button
                      onClick={() => handleDownloadResume('doc')}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-all duration-200"
                      whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    >
                      <FileText size={16} />
                      <span>Download DOCX</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enhanced Hamburger Menu Button */}
          <motion.button
            className="text-secondary-800 dark:text-secondary-200"
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