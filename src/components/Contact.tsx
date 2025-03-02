import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
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

  const contactMethods = [
    {
      name: 'Email',
      value: 'karthickiphone315@gmail.com',
      link: 'mailto:karthickiphone315@gmail.com',
      icon: <Mail size={24} className="text-primary-500" />,
      color: 'bg-red-50',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/karthick-kck',
      link: 'https://linkedin.com/in/karthick-kck',
      icon: <Linkedin size={24} className="text-primary-500" />,
      color: 'bg-blue-50',
    },
    {
      name: 'GitHub',
      value: 'github.com/karthickkck315',
      link: 'https://github.com/karthickkck315',
      icon: <Github size={24} className="text-primary-500" />,
      color: 'bg-gray-50',
    },
    {
      name: 'Stack Overflow',
      value: 'stackoverflow.com/users/2776795/karthick-c',
      link: 'https://stackoverflow.com/users/2776795/karthick-c',
      icon: <MessageSquare size={24} className="text-primary-500" />,
      color: 'bg-orange-50',
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
          <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, job opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"
            >
              <div className={`p-4 rounded-full ${method.color} mr-4`}>
                {method.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-800">{method.name}</h3>
                <p className="text-secondary-600">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;