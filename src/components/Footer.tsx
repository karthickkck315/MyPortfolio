import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smartphone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-0"
            >
              <div className="flex items-center">
                <Smartphone size={24} className="text-primary-400 mr-2" />
                <span className="text-2xl font-bold">Karthick C</span>
              </div>
              <p className="text-secondary-400 mt-2">Sr.iOS Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <p className="text-secondary-300 flex items-center justify-center md:justify-end">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 mx-1" fill="currentColor" />
                <span>in {currentYear}</span>
              </p>
              <p className="text-secondary-400 text-sm mt-1">
                Coimbatore, India
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;