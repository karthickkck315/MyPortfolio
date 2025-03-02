import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

const projects = [
  {
    name: 'LoveLocal',
    description: 'Online grocery shopping app that provides the best deals from local retailers.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    appStoreLink: 'https://apps.apple.com/app/lovelocal',
    technologies: ['Swift', 'UIKit', 'Core Data', 'MapKit'],
  },
  {
    name: 'Vandalur Zoo',
    description: 'Provides an enhanced zoo visitor experience with features like ticket booking, animal adoption, event information, and live-streaming.',
    image: 'https://images.unsplash.com/photo-1503919005314-c3e766db4b3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    appStoreLink: 'https://apps.apple.com/app/vandalur-zoo',
    technologies: ['Swift', 'AVFoundation', 'Core Location', 'StoreKit'],
  },
  {
    name: 'VojVoj',
    description: 'A self-improvement and habit-building app that helps users develop productive routines.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    appStoreLink: 'https://apps.apple.com/app/vojvoj',
    technologies: ['Swift', 'Core Data', 'Notifications', 'HealthKit'],
  },
  {
    name: 'Wild Earth Foods',
    description: 'Online shopping app for A2 milk, organic fruits, vegetables, and daily groceries.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    appStoreLink: 'https://apps.apple.com/app/wild-earth-foods',
    technologies: ['Swift', 'UIKit', 'Core Data', 'MapKit'],
  },
  {
    name: 'Milky Mist',
    description: 'A food delivery app focusing on dairy products and daily essentials.',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    appStoreLink: 'https://apps.apple.com/app/milky-mist',
    technologies: ['Swift', 'UIKit', 'Core Data', 'MapKit'],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Portfolio Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Creative Projects
            </h2>
            <p className="text-secondary-600 text-lg">
              Explore our innovative mobile applications
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-primary-600 px-6 py-3 rounded-full font-medium backdrop-blur-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-secondary-900">{project.name}</h3>
                    <span className="text-sm text-secondary-400 font-mono">
                      {`0${index + 1}`}
                    </span>
                  </div>
                  
                  <p className="text-secondary-600 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary-50 text-secondary-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-secondary-500 text-lg">
            More projects coming soon
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;