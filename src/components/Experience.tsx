import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Rocket, 
  Code2, 
  Terminal, 
  Globe, 
  Cpu, 
  ServerIcon, 
  Layers,
  Smartphone,
  Database
} from 'lucide-react';

const experiences = [
  {
    company: 'KAMBAA INCORPORATION',
    role: 'Senior iOS Developer',
    period: 'Sep 2022 - Present',
    location: 'Coimbatore',
    current: true,
    icon: Rocket,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-100',
    icons: [ // Multiple icons for animation
      Smartphone,
      Globe,
      Rocket
    ]
  },
  {
    company: 'ZENITUS TECHNOLOGIES',
    role: 'Senior iOS Developer',
    period: 'Jul 2021 - Aug 2022',
    location: 'Chennai',
    current: false,
    icon: Terminal,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-100',
    icons: [
      Terminal,
      Code2,
      Cpu
    ]
  },
  {
    company: 'MIDROUTE TECHNOLOGIES',
    role: 'Senior iOS Developer',
    period: 'Jan 2020 - Jun 2021',
    location: 'Coimbatore',
    current: false,
    icon: Layers,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-100',
    icons: [
      Layers,
      Database,
      ServerIcon
    ]
  },
  {
    company: 'TECHNODUCE INFO SOLUTIONS',
    role: 'Senior iOS Developer',
    period: 'Nov 2014 - Dec 2019',
    location: 'Coimbatore',
    current: false,
    icon: Building2,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-100',
    icons: [
      Building2,
      Globe,
      Cpu
    ]
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const pulseVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={titleVariants} className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-3 sm:mb-4 px-4">Work Experience</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 md:w-1 bg-primary-200"
            style={{ transformOrigin: 'top' }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className={`relative mb-8 sm:mb-12 md:mb-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0 pl-8 md:pl-0' : 'md:pl-12 md:ml-auto pl-8 md:pl-12'
              }`}
            >
              <motion.div 
                variants={dotVariants}
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-0 md:right-auto md:left-full md:-ml-2.5 -ml-2.5' : 'left-0 md:left-auto md:right-full md:-mr-2.5 -ml-2.5'
                }`}
              >
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 md:border-4 ${
                      exp.current ? 'bg-primary-500 border-primary-200' : 'bg-white border-primary-500'
                    }`}
                  />
                  {exp.current && (
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={pulseVariants}
                      className="absolute inset-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary-500 -z-10"
                    />
                  )}
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className={`bg-gradient-to-br from-white to-gray-50 p-4 sm:p-5 md:p-6 rounded-lg shadow-md 
                  border border-gray-100 backdrop-blur-sm 
                  ${index % 2 === 0 ? 'md:text-right' : ''}
                  transform-gpu perspective-1000`}
                style={{
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden"
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                >
                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.2 }
                    }}
                    className={`relative p-1.5 sm:p-2 rounded-full ${exp.bgColor}`}
                  >
                    {exp.icons.map((Icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: iconIndex === 0 ? 1 : 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          transition: {
                            duration: 2,
                            delay: iconIndex * 2,
                            repeat: Infinity,
                            repeatDelay: (exp.icons.length - 1) * 2
                          }
                        }}
                      >
                        <Icon size={18} className={`${exp.iconColor} sm:w-5 sm:h-5`} />
                      </motion.div>
                    ))}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary-800 ml-2 sm:ml-3">{exp.company}</h3>
                </motion.div>
                <motion.h4 
                  whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                  className="text-base sm:text-lg font-semibold text-primary-600 mb-1 sm:mb-2"
                >
                  {exp.role}
                </motion.h4>
                <div className="flex flex-col sm:flex-row flex-wrap text-xs sm:text-sm text-secondary-500 mb-2 gap-1 sm:gap-0">
                  <span className="sm:mr-4">{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
                {exp.current && (
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                  >
                    Current
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;