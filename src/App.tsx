import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Github, Smartphone, Code2, Award, Briefcase, User, Mail, BookOpen } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import './styles/theme.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', label: 'Home', icon: <Smartphone size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code2 size={20} /> },
    { id: 'skills', label: 'Skills', icon: <BookOpen size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Award size={20} /> },
    { id: 'opensource', label: 'Open Source', icon: <Github size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Header sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} scrollY={scrollY} />
        
        <main className="pt-16 sm:pt-20">
          <section id="home" className="min-h-screen">
            <Hero setActiveSection={setActiveSection} />
          </section>

          <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 dark:bg-gray-900">
            <About />
          </section>

          <section id="experience" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
            <Experience />
          </section>

          <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 dark:bg-gray-900">
            <Projects />
          </section>

          <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
            <Skills />
          </section>

          <section id="achievements" className="py-8 sm:py-12 md:py-16 lg:py-20 dark:bg-gray-900">
            <Achievements />
          </section>

          <section id="opensource" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
            <OpenSource />
          </section>

          <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 dark:bg-gray-900">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;