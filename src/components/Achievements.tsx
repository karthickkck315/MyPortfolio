import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, CheckCircle, Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'Perfectionist Award',
    company: 'TECHNODUCE INFO SOLUTIONS',
    description: 'Recognized for delivering high-quality code and attention to detail in iOS application development.',
    icon: <Trophy size={28} className="text-blue-500" />,

    // icon: (
    //   <img 
    //     src="/assets/tropy.gif" 
    //     alt="Trophy" 
    //     className="w-15 h-15"
    //   />
    // ),
  },
  {
    title: 'Team Impact Award',
    company: 'TECHNODUCE INFO SOLUTIONS',
    description: 'Awarded for significant contributions to team success and collaborative problem-solving.',
    icon: <Star size={28} className="text-blue-500" />,
  },
  {
    title: 'Client Comforter Award',
    company: 'ZENITUS TECHNOLOGIES',
    description: 'Recognized for exceptional client communication and delivering solutions that exceeded expectations.',
    icon: <CheckCircle size={28} className="text-green-500" />,
  },
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 flex justify-center items-center gap-2">
            <Star size={40} className="text-indigo-500" />
            Achievements & Awards
          </h2>
          <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-transparent bg-clip-padding"
              style={{
                borderImage: 'linear-gradient(to right, #6366F1, #8B5CF6) 1',
              }}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                  {achievement.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {achievement.title}
              </h3>
              <p className="text-indigo-600 text-sm mb-4 text-center uppercase tracking-wide">
                {achievement.company}
              </p>
              <p className="text-gray-600 text-center flex-grow">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;