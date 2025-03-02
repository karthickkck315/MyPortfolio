import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    name: 'VojVoj - Habit Builder',
    description: 'An intelligent habit-tracking and personal development app that helps users build lasting habits through scientifically proven methods. Features include habit stacking, smart reminders, progress analytics, and social accountability.',
    image: 'https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/475985534_915845797413858_7302844347044631368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DxZ96iEC7ggQ7kNvgH4Msa7&_nc_oc=AdgjDn3lnxyIa0fYbS7wA_0lsFxweZQnnkuVDzwLeLgLpjXCC3HGFzRr02_heyy5gyJkgU3JlKw-A7ewHowVP5g-&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=A6KbQnbAAyDDYcMMKDp73Wl&oh=00_AYDF4Mz2WXyszxQcr-YJ32ESGjgokZ3xOFIhGi7nXX9RAg&oe=67CA7C5B',
    appStoreLink: 'https://apps.apple.com/in/app/vojvoj/id1599081960',
    playStoreLink: '',
    technologies: [
      'Swift',
      'Firebase',
      'WidgetKit',
      'Push Notifications',
      'Firebase Analytics',
      'In-App Purchases',
      'video streaming',
      'One-on-One Chat'
    ],
    features: [
      'Smart habit stacking',
      'Progress tracking & analytics',
      'Custom reminder system',
      'Social accountability',
      'Habit journaling',
      'Achievement rewards'
    ],
    highlights: [
      'Over 50,000+ active users',
      'Scientifically backed methodology',
      'Personalized habit recommendations',
      'Daily streaks & milestones',
      'Integration with Apple Health',
      'Premium subscription model'
    ]
  },
  {
    name: 'LoveLocal',
    description: 'A revolutionary online shopping platform connecting customers with their favorite neighborhood stores. Features include real-time inventory tracking, 2-hour express delivery, and a seamless checkout process. The app supports 30,000+ local retailers across multiple cities in India.',
    image: 'https://saggregation.mpaani.com/db32edbb20240129-103728.jpg',
    appStoreLink: 'https://apps.apple.com/in/app/lovelocal-fresh-grocery-online/id6443932475',
    playStoreLink: 'https://play.google.com/store/apps/details?id=chotelal.mpaani.com.android.chotelal&hl=en_IN&pli=1',
    technologies: ['Swift', 'Core Location', 'UIKit', 'GoogleMap', 'Push Notifications', 'Payment Gateway', 'Sentry', 'Crashlytics'],
    features: [
      'Real-time inventory management',
      '2-hour express delivery',
      'Multiple payment options',
      'Live order tracking',
      'Personalized recommendations',
      'Digital bills and invoicing'
    ]
  },
  {
    name: 'Vandalur Zoo (AAZP)',
    description: 'Official mobile app for Arignar Anna Zoological Park, one of India\'s largest zoos. Features e-ticketing, virtual zoo tours, animal information database, and real-time notifications for zoo events and wildlife education programs.',
    image: 'https://i.ytimg.com/vi/w1bWuQUvIFE/maxresdefault.jpg',
    appStoreLink: 'https://apps.apple.com/in/app/vandalur-zoo/id1442038360',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.aazp&hl=en_IN',
    technologies: [
      'Swift',
      'AVFoundation',
      'Core Location',
      'Push Notifications',
      'QR Scanner',
      'Payment Gateway'
    ],
    features: [
      'Online ticket booking system',
      'Interactive zoo map navigation',
      'Animal adoption program',
      'Educational wildlife content',
      'Real-time zoo updates',
      'Virtual zoo tours'
    ],
    highlights: [
      'Over 2,700 animals of 170 species',
      'Integrated payment gateway for tickets',
      'Digital animal information system',
      'Live zoo events and programs'
    ]
  },
  {
    name: 'Village Meat',
    description: 'A premium meat delivery platform offering farm-fresh meat, seafood, and eggs. The app ensures doorstep delivery of hygienically processed meat products with strict quality control and temperature-controlled supply chain.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UP9s86w8lsinIn761fP8KS8uicmNWQW8IC9uyIXxo5u1VqYKkRTBdb7dkgXYl7eTFTc&usqp=CAU',
    appStoreLink: 'https://apps.apple.com/in/app/village-meat/id1668195939',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.villagemeat.app',
    technologies: [
      'Swift',
      'UIKit',
      'Core Location',
      'Google Maps',
      'Live Location Tracking',
      'Push Notifications',
      'Payment Gateway',
      'Firebase Analytics'
    ],
    features: [
      'Real-time order tracking',
      'Schedule delivery slots',
      'Quality assurance tracking',
      'Multiple payment options',
      'Live price updates',
      'Express delivery service'
    ],
    highlights: [
      'FSSAI certified products',
      'Temperature controlled delivery',
      'Same day delivery service',
      'Freshly cut meat guarantee',
      'Premium quality assurance',
      'Hygienic processing units'
    ]
  },
  {
    name: 'Tamil Nadu Treepedia',
    description: 'An educational app developed for the Tamil Nadu Forest Department to help users identify and learn about various tree species. Features a comprehensive database of indigenous trees, scientific information, and interactive learning tools.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1cqOE6oXbxid4RzYCfwGXh7QRIXZ72mzLy5IKWIJpuoX9r0kmRUR4CbaOIoIEGHW94Y&usqp=CAU',
    appStoreLink: 'https://apps.apple.com/us/app/treepedia-tn/id1441882267',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.fresh.mind.plantation&hl=en_IN',
    technologies: [
      'Swift',
      'Realm Database',
      'Google Maps',
      'AVFoundation',
    ],
    features: [
      'Tree species identification',
      'Detailed botanical information',
      'Image recognition',
      'Offline database access',
      'GPS-based tree mapping',
      'Educational content'
    ],
    highlights: [
      'Official TN Forest Dept app',
      'Database of 100+ tree species',
      'Scientific classification data',
      'Medicinal properties info',
      'Conservation status tracking',
      'Bilingual support (En/Ta)'
    ]
  },
  {
    name: 'Nilaas Fashion Institute',
    description: 'A comprehensive fashion education platform offering online and offline courses in fashion design, pattern making, and garment construction. Features include video lectures, course tracking, assignment submissions, and live mentoring sessions.',
    image: 'https://i.imgur.com/D5pN1TS.png', // Updated to use local asset
    appStoreLink: 'https://apps.apple.com/in/app/nilaas-fashion-institute/id6572306106',
    playStoreLink: '',
    technologies: [
      'Swift',
      'Firebase',
      'Video Streaming',
      'Push Notifications',
    ],
    features: [
      'Video course library',
      'Progress tracking system',
      'Assignment submissions',
      'Live mentoring sessions',
      'Course certificates',
      'Offline content access'
    ],
    highlights: [
      'Professional fashion courses',
      'Industry expert instructors',
      'Practical workshops',
      'Interactive learning modules',
      'Placement assistance',
      'Portfolio development'
    ]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-6xl font-bold text-secondary-900 mb-6">
            Projects
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            Showcasing innovative mobile applications built with modern technologies
          </p>
        </motion.div>
      </div>

      {/* Projects Timeline */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[400px] object-contain transform group-hover:scale-105 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.appStoreLink && (
                      <a
                        href={project.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 hover:bg-white text-primary-600 hover:text-primary-700 px-4 py-2 rounded-full font-medium backdrop-blur-sm flex items-center gap-2 transition-colors duration-300 shadow-lg"
                      >
                        App Store <ArrowRight size={16} />
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 hover:bg-white text-primary-600 hover:text-primary-700 px-4 py-2 rounded-full font-medium backdrop-blur-sm flex items-center gap-2 transition-colors duration-300 shadow-lg"
                      >
                        Play Store <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary-600/20">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="text-3xl font-bold text-secondary-900">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-lg text-secondary-600">
                  {project.description}
                </p>

                {project.features && (
                  <div className="grid grid-cols-2 gap-2 pt-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                        <span className="text-sm text-secondary-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white shadow-sm rounded-full text-secondary-600 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && (
                  <div className="mt-4 p-4 bg-primary-50 rounded-xl">
                    <h4 className="text-lg font-semibold text-primary-700 mb-2">Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                          <span className="text-sm text-primary-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <span className="inline-block px-6 py-3 bg-secondary-50 text-secondary-600 rounded-full text-lg font-medium">
            More projects coming soon
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;