import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/eventTracking';

const projects = [
  {
    name: 'VojVoj - Social Media Platform',
    description: 'VojVoj is a "Creator Economy" platform designed to fix the problems of traditional social media (like Instagram or TikTok). Its primary mission is to allow creators to earn money without relying on ads or secret algorithms.The client wanted a social media app like Instagram, but with no ads. Instead, creators get paid directly by fans. My job was to talk to the client, understand their vision, and build the entire visual part of the app.Most platforms only pay creators if they have millions of followers or high ad views.The VojVoj transparent, direct-payment ecosystem. It focuses on niches like skateboarding, surfing, and snowboarding.',
    image: 'https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/475985534_915845797413858_7302844347044631368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DxZ96iEC7ggQ7kNvgH4Msa7&_nc_oc=AdgjDn3lnxyIa0fYbS7wA_0lsFxweZQnnkuVDzwLeLgLpjXCC3HGFzRr02_heyy5gyJkgU3JlKw-A7ewHowVP5g-&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=A6KbQnbAAyDDYcMMKDp73Wl&oh=00_AYDF4Mz2WXyszxQcr-YJ32ESGjgokZ3xOFIhGi7nXX9RAg&oe=67CA7C5B',
    appStoreLink: 'https://apps.apple.com/in/app/vojvoj/id1599081960',
    playStoreLink: '',
    technologies: [
      'Swift',
      'UIKit',
      'Storyboard',
      'StoreKit',
      'Core Animation',
      'Core Graphics',
      'Core Image',
      'Core Text',
      'Core Video',
      'Core Audio',
      'Core Media',
      'Firebase',
      'Realm Database',
      'AWS S3',
      'Amazon IVS Player SDK',
      'iOS Share Extension',
      'WidgetKit',
      'Push Notifications',
      'Firebase Analytics',
      'Firebase Crashlytics',
      'Firebase Remote Config',
      'Firebase Firestore Database',
      'Firebase Authentication',
      'Firebase Storage',
      'Firebase Performance Monitoring',
      'In-App Purchases',
      'Video Streaming',
      'One-on-One Chat',
      'Deep Linking',
    ],
    features: [
      'Sign In with Apple',
      'Ad-Free Feed Experience',
      'Subscription-only',
      'Coin Donation/Purchase',
      'Collaborative Post Tagging',
      'Achievement rewards',
      'Digital wallet system',
      'Claim Rewards',
      'Achievement Badges',
      'Leaderboard',
      'Notification System',
      'Deep Linking',
      'Social Sharing',
      'Mute/Unmute',
      'Delete Post',
      'Report Post',
      'Share Post/Video/Profile with friends',
      'Comment on Post/Video',
      'Refer and Earn',
      'Gallery-to-App Integration',
    ],
    contributions: [
      'No Ads/Algorithms: Content is served based on community and follows, not what an ad-bot decides.',
'Coin System: Users buy "Coin Packs" (Small, Medium, Large) and can donate 1, 5, or 10 coins directly to a post they like.',
'Subscription Model: Creators can "paywall" long-form content (tips, tutorials, behind-the-scenes).',
'Collaboration Split: A unique feature where two creators can post one video together and the app automatically splits the earnings between their two digital wallets.'
    ],
    highlights: [
      'Over 5000+ active users',
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
      <div className="container mx-auto px-4 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4 sm:mb-6 px-4">
            Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 leading-relaxed px-4">
            Showcasing innovative mobile applications built with modern technologies
          </p>
        </motion.div>
      </div>

      {/* Projects Timeline */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-contain transform group-hover:scale-105 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.appStoreLink && (
                      <a
                        href={project.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 hover:bg-white text-primary-600 hover:text-primary-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm flex items-center gap-1 sm:gap-2 transition-colors duration-300 shadow-lg"
                        onClick={() => trackEvent('project_click', `App Store - ${project.name}`, 'projects')}
                      >
                        App Store <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 hover:bg-white text-primary-600 hover:text-primary-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm flex items-center gap-1 sm:gap-2 transition-colors duration-300 shadow-lg"
                        onClick={() => trackEvent('project_click', `Play Store - ${project.name}`, 'projects')}
                      >
                        Play Store <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600/20">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-base sm:text-lg text-secondary-600">
                  {project.description}
                </p>

                {project.contributions && (
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-secondary-50 rounded-lg sm:rounded-xl">
                    <h4 className="text-base sm:text-lg font-semibold text-secondary-700 mb-2 sm:mb-3">Business Logic</h4>
                    <ul className="space-y-2">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0 mt-1.5 sm:mt-2" />
                          <span className="text-xs sm:text-sm text-secondary-700 leading-relaxed">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 sm:pt-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-secondary-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white shadow-sm rounded-full text-secondary-600 text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && (
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-primary-50 rounded-lg sm:rounded-xl">
                    <h4 className="text-base sm:text-lg font-semibold text-primary-700 mb-2">Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-primary-700">{highlight}</span>
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