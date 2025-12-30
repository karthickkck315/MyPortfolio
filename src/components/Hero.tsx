import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { SiApple, SiAndroid, SiFirebase, SiFlutter, SiOpenai } from 'react-icons/si';
import { trackEvent } from '../utils/eventTracking';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const techIcons = [SiApple, SiAndroid, SiFirebase, SiFlutter, SiOpenai];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const floatStyles = `
    .float-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    @media (min-width: 640px) {
      .float-container {
        gap: 24px;
      }
    }

    .float-icon {
      width: 48px;
      height: 48px;
      background: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
      position: relative;
    }

    @media (min-width: 640px) {
      .float-icon {
        width: 64px;
        height: 64px;
        border-radius: 16px;
      }
    }

    .float-icon::after {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0.1));
      border-radius: 16px;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: -1;
    }

    .float-icon:hover::after {
      opacity: 1;
    }
  `;

  const fullViewBorderStyles = `
    .border-container {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      padding: 4px;
      background: linear-gradient(
        90deg,
        #3B82F6,
        #2563EB,
        #1E40AF,
        #60A5FA,
        #3B82F6
      );
      background-size: 400% 100%;
      animation: gradientFlow 6s linear infinite;
      box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
    }

    .border-container::before,
    .border-container::after {
      content: '';
      position: absolute;
      inset: -50%;
      background: conic-gradient(
        from 0deg,
        transparent 0deg,
        rgba(96, 165, 250, 0.8) 120deg,
        rgba(37, 99, 235, 0.6) 180deg,
        transparent 360deg
      );
      animation: rotate 4s linear infinite;
    }

    .border-container::after {
      animation-delay: -2s;
      filter: blur(2px);
    }

    .content-inner {
      background: linear-gradient(
        135deg,
        #1E3A8A 0%,
        #1E40AF 25%,
        #2563EB 50%,
        #3B82F6 75%,
        #60A5FA 100%
      );
      border-radius: 12px;
      position: relative;
      z-index: 1;
      backdrop-filter: blur(4px);
      box-shadow: 
        inset 0 0 20px rgba(255, 255, 255, 0.2),
        0 8px 32px rgba(30, 64, 175, 0.3);
    }

    .content-inner::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
        rgba(255, 255, 255, 0.25) 0%,
        transparent 60%
      );
      opacity: 0;
      transition: opacity 0.3s;
    }

    .border-container:hover .content-inner::before {
      opacity: 1;
    }

    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      100% { background-position: 400% 50%; }
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  const waveStyles = `
    .waves {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 200px;
      overflow: hidden;
    }

    .wave {
      position: absolute;
      left: -180px;
      width: calc(100% + 360px);
      height: 100%;
      background-repeat: repeat-x;
      animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(1) {
      bottom: 0;
      opacity: 0.2;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%233B82F6'/%3E%3C/svg%3E");
      background-position: left bottom;
      background-size: 200px 100%;
      animation-duration: 12s;
      animation-delay: -3s;
    }

    .wave:nth-of-type(2) {
      bottom: 0;
      opacity: 0.1;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%233B82F6'/%3E%3C/svg%3E");
      background-position: left bottom;
      background-size: 200px 100%;
      animation-duration: 10s;
    }

    .wave:nth-of-type(3) {
      bottom: 0;
      opacity: 0.15;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%233B82F6'/%3E%3C/svg%3E");
      background-position: left bottom;
      background-size: 200px 100%;
      animation-duration: 14s;
      animation-delay: -5s;
    }

    @keyframes wave {
      0% { transform: translateX(0) translateZ(0) scaleY(1); }
      50% { transform: translateX(-25%) translateZ(0) scaleY(0.95); }
      100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
    }
  `;

  const backgroundStyles = `
    .animated-background {
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, #f0f7ff 0%, #ffffff 100%);
      overflow: hidden;
    }

    .bg-shape {
      position: absolute;
      background: linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.03));
      border-radius: 50%;
      animation: floatShape linear infinite;
    }

    .shape1 {
      width: 400px;
      height: 400px;
      top: -100px;
      right: -100px;
      animation-duration: 15s;
    }

    .shape2 {
      width: 300px;
      height: 300px;
      bottom: 10%;
      left: -50px;
      animation-duration: 12s;
    }

    .shape3 {
      width: 200px;
      height: 200px;
      top: 30%;
      right: 20%;
      animation-duration: 18s;
    }

    @keyframes floatShape {
      0% {
        transform: translate(0, 0) rotate(0deg) scale(1);
      }
      33% {
        transform: translate(30px, -30px) rotate(120deg) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) rotate(240deg) scale(0.9);
      }
      100% {
        transform: translate(0, 0) rotate(360deg) scale(1);
      }
    }
  `;

  const socialIconStyles = `
    .social-icon {
      position: relative;
      overflow: visible;
      transform-style: preserve-3d;
      perspective: 1000px;
    }

    .social-icon-wrapper {
      position: relative;
      width: 48px;
      height: 48px;
      transform-style: preserve-3d;
      transition: transform 0.4s ease-out;
    }

    .social-icon-inner {
      position: relative;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
      transition: all 0.4s ease-out;
    }

    .social-glow {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      filter: blur(15px);
      opacity: 0;
      transition: opacity 0.4s;
      z-index: -1;
    }

    .github-icon .social-glow { background: rgba(36, 41, 46, 0.5); }
    .linkedin-icon .social-glow { background: rgba(0, 119, 181, 0.5); }
    .email-icon .social-glow { background: rgba(37, 99, 235, 0.5); }

    .github-icon .social-icon-inner { background: linear-gradient(145deg, #24292e, #1a1d21); }
    .linkedin-icon .social-icon-inner { background: linear-gradient(145deg, #0077B5, #005885); }
    .email-icon .social-icon-inner { background: linear-gradient(145deg, #2563EB, #1E40AF); }

    .social-icon:hover .social-glow {
      opacity: 1;
    }

    .social-icon:hover .social-icon-wrapper {
      transform: translateZ(20px) rotateX(-20deg) rotateY(-20deg);
    }

    .social-icon:hover .social-icon-inner {
      transform: translateZ(30px);
      box-shadow: 
        0 5px 15px rgba(0, 0, 0, 0.3),
        0 0 5px rgba(255, 255, 255, 0.1) inset;
    }

    .social-icon svg {
      transition: transform 0.4s ease-out;
      backface-visibility: hidden;
    }

    .social-icon:hover svg {
      transform: scale(1.1) translateZ(10px);
    }
  `;

  const floatAnimation = {
    animate: (index: number) => ({
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: index * 0.2
        },
        scale: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: index * 0.2
        }
      }
    }),
    hover: {
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  const socialIconVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      rotateX: -30,
      rotateY: -30,
    },
    animate: (i: number) => ({ 
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        delay: 0.3 + (i * 0.1),
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const handleScrollDown = () => {
    // Track scroll down button click
    trackEvent('navigation_click', 'Scroll to About', 'hero');
    
    setActiveSection('about');
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = document.querySelector('.border-container');
    
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = (mouseEvent.target as HTMLElement).getBoundingClientRect();
      const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
      const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
      
      (mouseEvent.target as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
      (mouseEvent.target as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
    };

    container?.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <style>{floatStyles}</style>
      <style>{fullViewBorderStyles}</style>
      <style>{waveStyles}</style>
      <style>{backgroundStyles}</style>
      <style>{socialIconStyles}</style>
      
      <div className="animated-background">
        <div className="bg-shape shape1"></div>
        <div className="bg-shape shape2"></div>
        <div className="bg-shape shape3"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center relative py-20 sm:py-0">
        <div className="text-center max-w-4xl w-full">
          <div className="float-container">
            {techIcons.map((Icon, index) => (
              <motion.div
                key={index}
                className="float-icon"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  ...floatAnimation.animate(index)
                }}
                whileHover="hover"
              >
                <Icon size={24} className="text-primary-600 sm:w-8 sm:h-8" />
              </motion.div>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-secondary-900 to-primary-600 bg-clip-text text-transparent mb-4 px-4"
          >
            Karthick C
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 space-y-3"
          >
            <motion.div 
              className="border-container inline-block"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(37, 99, 235, 0.4)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 15 
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }}
            >
              <div className="content-inner px-4 py-2 sm:px-6 sm:py-3">
                <span className="text-white text-base sm:text-xl font-medium">
                  Senior iOS Developer - Immediately Available
                </span>
              </div>
            </motion.div>
            <p className="text-primary-600 font-medium mt-2 text-sm sm:text-base px-4">Turning Ideas into Amazing Apps</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-secondary-600 mb-10 max-w-2xl mx-auto leading-relaxed px-4"
          >
            With over 10+ years of expertise in iOS development, I specialize in creating 
            intuitive, performant, and beautiful applications that users love. 
            Let's build something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center space-x-4 sm:space-x-8 mb-12 px-4"
          >
            {[
              { icon: Github, href: "https://github.com/karthickkck315", class: "github-icon", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/karthick-kck", class: "linkedin-icon", label: "LinkedIn" },
              { icon: Mail, href: "mailto:karthickiphone315@gmail.com", class: "email-icon", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${social.class}`}
                variants={socialIconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                custom={index}
                onClick={() => trackEvent('contact_click', social.label, 'hero')}
              >
                <div className="social-icon-wrapper">
                  <div className="social-glow"></div>
                  <div className="social-icon-inner">
                    <social.icon size={24} color="white" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-10 left-0 right-0 flex justify-center"
          >
            <button
              onClick={handleScrollDown}
              className="p-4 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 group"
            >
              <ChevronDown size={28} className="text-primary-600 group-hover:text-primary-700" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;