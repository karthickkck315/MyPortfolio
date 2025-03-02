import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Code, ExternalLink } from 'lucide-react';

const openSourceProjects = [
  {
    name: 'Automatic-OTP',
    description: 'An open-source iOS project for automatic One-Time Password verification. This Swift-based repository is designed to handle OTP retrieval and verification, streamlining the login/verification process for users.',
    link: 'https://github.com/karthickkck315/Automatic-OTP',
    language: 'Swift',
  },
  {
    name: 'iOS-Printing',
    description: 'A Swift project for generating invoices in PDF format on iOS, with functionality to send the PDF via email and to print directly from iOS devices. This project demonstrates how to create PDF invoices programmatically and integrate sharing/printing features in an iOS app.',
    link: 'https://github.com/karthickkck315/iOS-Printing',
    language: 'Swift',
  },
  {
    name: 'ImageZoom',
    description: 'An Objective-C repository demonstrating image zooming functionality on iOS. The project provides pinch-to-zoom or image scaling features for iOS applications, showcasing work with Objective-C utilities.',
    link: 'https://github.com/karthickkck315/ImageZoom',
    language: 'Objective-C',
  },
];

const OpenSource = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            <span className="inline-block mr-2">
              <Github size={32} className="text-primary-500 inline" />
            </span>
            Open-Source Contributions
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
          <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
            Actively contributing to the iOS development community with 55+ public repositories on GitHub.
          </p>
        </motion.div>

        <div className="space-y-6">
          {openSourceProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <Code size={20} className="text-primary-500 mr-2" />
                  <h3 className="text-xl font-bold text-secondary-800">{project.name}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.language === 'Swift' 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.language}
                </span>
              </div>
              
              <p className="mt-3 text-secondary-600">{project.description}</p>
              
              <div className="mt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
                >
                  <span>View on GitHub</span>
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <a 
            href="https://github.com/karthickkck315" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-secondary-800 text-white px-6 py-3 rounded-lg hover:bg-secondary-700 transition-colors"
          >
            <Github size={20} className="mr-2" />
            <span>View All Repositories</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OpenSource;