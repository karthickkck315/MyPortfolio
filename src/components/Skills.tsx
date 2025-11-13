import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Layers, Palette, CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    title: 'Platforms & Core',
    icon: <Layers className="w-6 h-6" />,
    skills: [
      { name: 'iOS/iPadOS', level: 95 },
      { name: 'macOS', level: 85 },
      { name: 'Flutter', level: 40 }
    ],
    bgColor: 'bg-blue-500'
  },
  {
    title: 'Programming',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'Swift/SwiftUI', level: 98 },
      { name: 'Python', level: 10 },
      { name: 'Objective-C', level: 92 }
    ],
    bgColor: 'bg-purple-500'
  },
  {
    title: 'Cloud & Backend',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'Firebase', level: 90 },
      { name: 'AWS S3', level: 80 },
      { name: 'REST APIs', level: 92 }
    ],
    bgColor: 'bg-green-500'
  },
  {
    title: 'Payment Solutions',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'Stripe/PayPal', level: 90 },
      { name: 'RazorPay/PhonePe', level: 90 },
      { name: 'MyFatoorah/CCAvenue', level: 90 }
    ],
    bgColor: 'bg-emerald-500'
  },
  {
    title: 'API & Integration',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'REST APIs/Webhooks', level: 95 },
      { name: 'WebSockets', level: 88 },
      { name: 'Payment Integration', level: 92 }
    ],
    bgColor: 'bg-yellow-500'
  },
  {
    title: 'Development Tools',
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: 'Xcode/VSCode', level: 95 },
      { name: 'Git/Bitbucket/CI/CD', level: 75 },
      { name: 'Jenkins', level: 50 }
    ],
    bgColor: 'bg-orange-500'
  },
  {
    title: 'Libraries & SDKs',
    icon: <CheckCircle className="w-6 h-6" />,
    skills: [
      { name: 'Alamofire', level: 90 },
      { name: 'Google Maps/OSM', level: 90 },
      { name: 'Amazon Video Player', level: 85 }
    ],
    bgColor: 'bg-red-500'
  },
  {
    title: 'Databases & Storage',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'Realm DB', level: 88 },
      { name: 'CloudKit', level: 85 }
    ],
    bgColor: 'bg-indigo-500'
  },
  {
    title: 'Monitoring & Analytics',
    icon: <Layers className="w-6 h-6" />,
    skills: [
      { name: 'Crashlytics', level: 92 },
      { name: 'Sentry/Firebase', level: 88 },
      { name: 'Push Notifications', level: 90 }
    ],
    bgColor: 'bg-teal-500'
  },
  {
    title: 'AI & Tools',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'Generative AI', level: 85 },
      { name: 'ChatGPT/Claude', level: 88 },
      { name: 'Cursor', level: 85 }
    ],
    bgColor: 'bg-pink-500'
  }
];

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const circumference = 2 * Math.PI * 38; // r = 38
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="38"
          cx="40"
          cy="40"
        />
        <circle
          className="text-primary-500 transition-all duration-1000 ease-out"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="38"
          cx="40"
          cy="40"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold">{`${percentage}%`}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4 px-4">
            Technical Skills
          </h2>
          <p className="text-secondary-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Expertise in iOS development with a strong foundation in various technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${category.bgColor} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-4 sm:mb-6">
                {category.title}
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-secondary-900 font-medium mb-1">
                        {skill.name}
                      </h4>
                      <div className="h-2 bg-secondary-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full ${category.bgColor}`}
                        />
                      </div>
                    </div>
                    <span className="ml-4 text-sm font-semibold text-secondary-600">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;