// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { MapPin, Mail, Briefcase, Target, Code, Phone } from 'lucide-react';

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50">
//       <motion.div
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? 'visible' : 'hidden'}
//         className="max-w-6xl mx-auto"
//       >
//         {/* Header Section */}
//         <motion.div 
//           variants={itemVariants} 
//           className="text-center mb-16"
//           whileHover={{ scale: 1.02 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
//             About Me
//           </h2>
//           <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Content Section */}
//           <motion.div 
//             variants={itemVariants} 
//             className="lg:col-span-2"
//           >
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//               <h3 className="text-2xl font-bold text-secondary-800 mb-6 flex items-center">
//                 <Code className="mr-2 text-primary-500" />
//                 Profile Summary
//               </h3>
//               <div className="space-y-4 text-secondary-600">
//                 <p className="leading-relaxed">
//                   Hello! I’m a versatile and passionate developer with over 10 plus years of professional experience specializing in iOS application development. My expertise lies in Swift, SwiftUI, UIKit, and Objective-C, where I’ve built 25+ high-performance mobile apps catering to diverse industries—from food delivery and taxi booking to CRM, eCommerce, and video streaming. More recently, I’ve expanded my skill set to include Flutter for cross-platform development, along with a deepening interest in AI agent creation.
//                 </p>

//                <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//   iOS Development & Project Experience
// </h4>

// {/* Core Competencies */}
// <h5 className="text-lg font-semibold mb-2">Core Competencies</h5>
// <ul className="list-disc pl-5 space-y-2">
//   <li>
//     Swift, SwiftUI, UIKit, Objective-C – Building seamless, intuitive user interfaces.
//   </li>
//   <li>
//     Design Patterns: MVC, MVVM – Ensuring clean, maintainable, and scalable code.
//   </li>
//   <li>
//     Agile &amp; Waterfall Methods – Full lifecycle development, from concept to App Store deployment.
//   </li>
//   <li>
//     Third-Party Libraries: Alamofire, AFNetworking, Firebase, Crashlytics, Facebook Analytics,
//     Singular, CT Events – Enhancing app functionality through robust integrations.
//   </li>
//   <li>
//     Location &amp; Mapping: MapKit, Google Maps, OpenStreetMap, Core Location – Real-time
//     tracking and location-based features.
//   </li>
//   <li>
//     Push Notifications &amp; Real-Time Communication: APNS, Firebase Cloud Messaging, OneSignal,
//     WebSockets, Socket.IO – Enabling instant messaging, ride tracking, and alerts.
//   </li>
//   <li>
//     Database &amp; Backend Services: AWS for file uploads, REST APIs for data exchange, JSON parsing,
//     Realm DB for offline support.
//   </li>
// </ul>

// {/* Notable Projects */}
// <h5 className="text-lg font-semibold mt-4 mb-2">Notable Projects</h5>
// <ul className="list-disc pl-5 space-y-2">
//   <li>
//     Food Delivery Apps (Single/Multi-Vendor): Swiggy, Zomato, Foodpanda clones with distinct
//     user and rider modules for seamless ordering and delivery.
//   </li>
//   <li>
//     Taxi Booking Platforms: Uber/Ola-like ecosystems, integrating location services, driver-rider
//     matching, and real-time tracking.
//   </li>
//   <li>
//     Ticket Booking &amp; CRM: Solutions for event/travel reservations and enterprise-level customer
//     relationship management.
//   </li>
//   <li>
//     Hyperlocal &amp; eCommerce: Grocery, meat, electronics, and other marketplaces with
//     user-friendly interfaces and secure payment gateways.
//   </li>
//   <li>
//     Video Streaming &amp; Social Media Apps: Implementing custom video players, live streaming,
//     real-time chat, and push notification systems.
//   </li>
//   <li>
//     Hotel &amp; Room Booking: Airbnb/Groupon-style applications offering reservation functionalities
//     and intuitive user flows.
//   </li>
// </ul>

// <p className="mt-4">
//   These projects gave me a holistic understanding of end-to-end mobile development—covering
//   front-end design, backend integrations, deployment, and post-release support.
// </p>


//                 <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Flutter & Cross-Platform</h4>
//                 <p className="leading-relaxed">
//                   To stay at the forefront of technological innovation, I’ve also ventured into Flutter. This enables me to deliver apps on iOS and Android from a single codebase—offering clients a fast and cost-effective route to market without compromising on performance or user experience.
//                 </p>

//                <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//   AI Agent Creation & Chatbot Innovations
// </h4>

// <p className="mb-4">
//   In addition to traditional mobile development, I am currently exploring the world of
//   AI-powered agent creation. This includes:
// </p>

// <ul className="list-disc pl-5 space-y-2">
//   {/* Python & No-Code Tools */}
//   <li>
//     <strong>Python &amp; No-Code Tools (n8n, Lyzer, Flowise):</strong> Experimenting with
//     workflow automation and AI logic-building without needing extensive boilerplate code.
//   </li>

//   {/* Open-Source LLMs & Frameworks */}
//   <li>
//     <strong>Open-Source LLMs &amp; Frameworks:</strong>
//     <ul className="list-disc pl-5 space-y-1 mt-1">
//       <li>
//         <strong>LangChain</strong> for orchestrating complex, LLM-driven applications,
//         including prompt chaining and context management.
//       </li>
//       <li>
//         <strong>Groq</strong> for hardware acceleration and optimization, ensuring faster
//         inference and improved performance in AI tasks.
//       </li>
//       <li>
//         <strong>ollama</strong> as a CLI tool to run LLaMA-based models locally, empowering
//         experimentation with custom or privacy-focused solutions.
//       </li>
//     </ul>
//   </li>

//   {/* Conversational AI & Chatbots */}
//   <li>
//     <strong>Conversational AI &amp; Chatbots:</strong> Harnessing open-source language
//     models to create chatbots capable of dynamic, human-like interactions—integrating them
//     into mobile or web apps for next-level user engagement.
//   </li>
// </ul>

// <p className="mt-4">
//   Through these explorations, I’m learning prompt engineering, fine-tuning, and hands-on
//   deployment—pushing the boundaries of what’s possible with NLP (Natural Language
//   Processing) to build smarter, more adaptive apps.
// </p>


//                 <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//   Technical Approach &amp; Collaboration
// </h4>

// <p className="mb-4">
//   I thrive in a team-oriented, collaborative environment—whether it’s with designers perfecting
//   UI/UX or backend specialists ensuring robust data handling. I’m a firm believer in:
// </p>

// <ul className="list-disc pl-5 space-y-2">
//   <li>
//     <strong>Continuous Integration &amp; Code Reviews:</strong> Maintaining high-quality
//     standards and catching potential issues early.
//   </li>
//   <li>
//     <strong>Agile Methodologies:</strong> Transparent communication, iterative development,
//     and rapid feedback loops.
//   </li>
//   <li>
//     <strong>Mentorship &amp; Learning:</strong> Sharing knowledge with peers and staying
//     updated through ongoing experimentation and research.
//   </li>
// </ul>


//                {/* Personal Passions Section */}
// <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//   Personal Passions
// </h4>
// <p className="leading-relaxed mb-4">
//   Outside of coding, I’m enthusiastic about technology, gadgets, and farming. My interest
//   in farming adds a grounded perspective to my tech-driven life, reminding me of the
//   importance of sustainability, growth, and nurturing innovation in all endeavors. This
//   combination of seemingly diverse interests fuels my creativity and problem-solving
//   skills in tech.
// </p>

// {/* Career Objective Section */}
// <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//   Career Objective
// </h4>
// <p className="leading-relaxed mb-4">
//   I aim to build a thriving IT career, combining innovative mobile solutions with
//   emerging AI technologies to drive organizational growth and deliver impactful user
//   experiences. As I progress, I look forward to leading more projects, guiding
//   technical decisions, and embracing new challenges—whether in full-time roles,
//   contract projects, or freelance collaborations.
// </p>
// <p className="leading-relaxed">
//   If you’re seeking a developer who merges solid mobile expertise with an eagerness to
//   explore the latest frontiers in AI, let’s connect and create remarkable,
//   forward-thinking applications together.
// </p>

//               </div>
//             </div>
//           </motion.div>

//           {/* Personal Info Card */}
//           <motion.div variants={itemVariants}>
//             <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-8">
//               <h3 className="text-2xl font-bold text-secondary-800 mb-6">Personal Info</h3>
//               <div className="space-y-6">
//                 {[
//                   { Icon: Briefcase, title: 'Experience', value: '9+ Years in iOS Development' },
//                   { Icon: Target, title: 'Expertise', value: 'iOS, Flutter, AI Development' },
//                   { Icon: Code, title: 'Tech Stack', value: 'Swift, SwiftUI, Flutter, Python' },
//                   { Icon: MapPin, title: 'Location', value: 'Coimbatore, India' },
//                   { Icon: Mail, title: 'Email', value: 'karthickiphone315@gmail.com' },
//                   { Icon: Phone, title: 'Phone', value: <a href="tel:+919715168081" className="hover:text-primary-600">+91 9715168081</a> }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-start group"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <div className="mr-4 p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors">
//                       <item.Icon size={20} className="text-primary-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-secondary-700">{item.title}</h4>
//                       <p className="text-secondary-600">{typeof item.value === 'string' ? item.value : item.value}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;







// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { MapPin, Mail, Briefcase, Target, Code, Phone } from 'lucide-react';

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // Container animation variants: fade in and slide up
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { 
//         staggerChildren: 0.2, 
//         when: 'beforeChildren' 
//       } 
//     },
//   };

//   // Item animation variants: fade and slight slide effect
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.6, ease: 'easeOut' } 
//     },
//   };

//   const personalInfoItems = [
//     { Icon: Briefcase, title: 'Experience', value: '9+ Years in iOS Development' },
//     { Icon: Target, title: 'Expertise', value: 'iOS, Flutter, AI Development' },
//     { Icon: Code, title: 'Tech Stack', value: 'Swift, SwiftUI, Flutter, Python' },
//     { Icon: MapPin, title: 'Location', value: 'Coimbatore, India' },
//     { Icon: Mail, title: 'Email', value: 'karthickiphone315@gmail.com' },
//     { Icon: Phone, title: 'Phone', value: <a href="tel:+919715168081" className="hover:text-primary-600 transition-colors">+91 9715168081</a> }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50">
//       <motion.div
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? 'visible' : 'hidden'}
//         className="max-w-6xl mx-auto"
//       >
//         {/* Header Section */}
//         <motion.div
//           variants={itemVariants}
//           className="text-center mb-16"
//           whileHover={{ scale: 1.02 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4 tracking-tight">
//             About Me
//           </h2>
//           {/* Animated Underline */}
//           <motion.div
//             className="h-1 w-24 bg-primary-500 mx-auto rounded-full origin-left"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 0.5, ease: 'easeOut' }}
//           />
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Content Section */}
//           <motion.div variants={itemVariants} className="lg:col-span-2">
//             <motion.div 
//               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
//               whileHover={{ scale: 1.01 }}
//             >
//               <div className="flex items-center mb-6">
//                 <Code className="mr-2 text-primary-500" size={28} />
//                 <h3 className="text-2xl font-bold text-secondary-800">Profile Summary</h3>
//               </div>
//               <div className="space-y-4 text-secondary-600 leading-relaxed">
//                 <p>
//                   Hello! I’m a versatile and passionate developer with over nine years of professional experience specializing in iOS application development. My expertise lies in Swift, SwiftUI, UIKit, and Objective-C, where I’ve built 25+ high-performance mobile apps catering to diverse industries—from food delivery and taxi booking to CRM, eCommerce, and video streaming. More recently, I’ve expanded my skill set to include Flutter for cross-platform development, along with a deepening interest in AI agent creation.
//                 </p>

//                 <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//                   iOS Development & Project Experience
//                 </h4>

//                 {/* Core Competencies */}
//                 <h5 className="text-lg font-semibold mb-2">Core Competencies</h5>
//                 <ul className="list-disc pl-5 space-y-2">
//                   <li>Swift, SwiftUI, UIKit, Objective-C – Building seamless, intuitive user interfaces.</li>
//                   <li>Design Patterns: MVC, MVVM – Ensuring clean, maintainable, and scalable code.</li>
//                   <li>Agile & Waterfall Methods – Full lifecycle development, from concept to App Store deployment.</li>
//                   <li>Third-Party Libraries: Alamofire, AFNetworking, Firebase, Crashlytics, Facebook Analytics, Singular, CT Events – Enhancing app functionality through robust integrations.</li>
//                   <li>Location & Mapping: MapKit, Google Maps, OpenStreetMap, Core Location – Real-time tracking and location-based features.</li>
//                   <li>Push Notifications & Real-Time Communication: APNS, Firebase Cloud Messaging, OneSignal, WebSockets, Socket.IO – Enabling instant messaging, ride tracking, and alerts.</li>
//                   <li>Database & Backend Services: AWS for file uploads, REST APIs for data exchange, JSON parsing, Realm DB for offline support.</li>
//                 </ul>

//                 {/* Notable Projects */}
//                 <h5 className="text-lg font-semibold mt-4 mb-2">Notable Projects</h5>
//                 <ul className="list-disc pl-5 space-y-2">
//                   <li>Food Delivery Apps (Single/Multi-Vendor): Swiggy, Zomato, Foodpanda clones with distinct user and rider modules for seamless ordering and delivery.</li>
//                   <li>Taxi Booking Platforms: Uber/Ola-like ecosystems, integrating location services, driver-rider matching, and real-time tracking.</li>
//                   <li>Ticket Booking & CRM: Solutions for event/travel reservations and enterprise-level customer relationship management.</li>
//                   <li>Hyperlocal & eCommerce: Grocery, meat, electronics, and other marketplaces with user-friendly interfaces and secure payment gateways.</li>
//                   <li>Video Streaming & Social Media Apps: Implementing custom video players, live streaming, real-time chat, and push notification systems.</li>
//                   <li>Hotel & Room Booking: Airbnb/Groupon-style applications offering reservation functionalities and intuitive user flows.</li>
//                 </ul>

//                 <p className="mt-4">
//                   These projects gave me a holistic understanding of end-to-end mobile development—covering front-end design, backend integrations, deployment, and post-release support.
//                 </p>

//                 <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Flutter & Cross-Platform</h4>
//                 <p>
//                   To stay at the forefront of technological innovation, I’ve also ventured into Flutter. This enables me to deliver apps on iOS and Android from a single codebase—offering clients a fast and cost-effective route to market without compromising on performance or user experience.
//                 </p>

//                 <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//                   AI Agent Creation & Chatbot Innovations
//                 </h4>
//                 <p>
//                   In addition to traditional mobile development, I am currently exploring the world of AI-powered agent creation. This includes:
//                 </p>

//                 <ul className="list-disc pl-5 space-y-2">
//                   <li>
//                     <strong>Python & No-Code Tools (n8n, Lyzer, Flowise):</strong> Experimenting with workflow automation and AI logic-building without needing extensive boilerplate code.
//                   </li>
//                   <li>
//                     <strong>Open-Source LLMs & Frameworks:</strong>
//                     <ul className="list-disc pl-5 space-y-1 mt-1">
//                       <li><strong>LangChain</strong> for orchestrating complex, LLM-driven applications, including prompt chaining and context management.</li>
//                       <li><strong>Groq</strong> for hardware acceleration and optimization, ensuring faster inference and improved performance in AI tasks.</li>
//                       <li><strong>ollama</strong> as a CLI tool to run LLaMA-based models locally, empowering experimentation with custom or privacy-focused solutions.</li>
//                     </ul>
//                   </li>
//                   <li>
//                     <strong>Conversational AI & Chatbots:</strong> Harnessing open-source language models to create chatbots capable of dynamic, human-like interactions—integrating them into mobile or web apps for next-level user engagement.
//                   </li>
//                 </ul>

//                 <p className="mt-4">
//                   Through these explorations, I’m learning prompt engineering, fine-tuning, and hands-on deployment—pushing the boundaries of what’s possible with NLP (Natural Language Processing) to build smarter, more adaptive apps.
//                 </p>

//                 <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//                   Technical Approach & Collaboration
//                 </h4>
//                 <p>
//                   I thrive in a team-oriented, collaborative environment—whether it’s with designers perfecting UI/UX or backend specialists ensuring robust data handling. I’m a firm believer in:
//                 </p>
//                 <ul className="list-disc pl-5 space-y-2">
//                   <li><strong>Continuous Integration & Code Reviews:</strong> Maintaining high-quality standards and catching potential issues early.</li>
//                   <li><strong>Agile Methodologies:</strong> Transparent communication, iterative development, and rapid feedback loops.</li>
//                   <li><strong>Mentorship & Learning:</strong> Sharing knowledge with peers and staying updated through ongoing experimentation and research.</li>
//                 </ul>

//                 <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//                   Personal Passions
//                 </h4>
//                 <p className="mb-4">
//                   Outside of coding, I’m enthusiastic about technology, gadgets, and farming. My interest in farming adds a grounded perspective to my tech-driven life, reminding me of the importance of sustainability, growth, and nurturing innovation in all endeavors. This combination of seemingly diverse interests fuels my creativity and problem-solving skills in tech.
//                 </p>

//                 <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
//                   Career Objective
//                 </h4>
//                 <p className="mb-4">
//                   I aim to build a thriving IT career, combining innovative mobile solutions with emerging AI technologies to drive organizational growth and deliver impactful user experiences. As I progress, I look forward to leading more projects, guiding technical decisions, and embracing new challenges—whether in full-time roles, contract projects, or freelance collaborations.
//                 </p>
//                 <p>
//                   If you’re seeking a developer who merges solid mobile expertise with an eagerness to explore the latest frontiers in AI, let’s connect and create remarkable, forward-thinking applications together.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Personal Info Card */}
//           <motion.div variants={itemVariants}>
//             <motion.div 
//               className="bg-white p-8 rounded-2xl shadow-lg sticky top-8 transition-transform duration-300 hover:scale-105"
//             >
//               <h3 className="text-2xl font-bold text-secondary-800 mb-6">Personal Info</h3>
//               <div className="space-y-6">
//                 {personalInfoItems.map((item, index) => (
//                   <motion.div key={index} className="flex items-start group" whileHover={{ scale: 1.02 }}>
//                     <div className="mr-4 p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors">
//                       <item.Icon size={20} className="text-primary-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-secondary-700">{item.title}</h4>
//                       <p className="text-secondary-600">{item.value}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Briefcase, Target, Code, Phone } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Container animation: fade in and slide up
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.2, when: 'beforeChildren' } 
    },
  };

  // Item animation: fade in with slight slide effect
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  const personalInfoItems = [
    { Icon: Briefcase, title: 'Experience', value: '10+ Years in iOS Development' },
    { Icon: Target, title: 'Expertise', value: 'iOS, Flutter, AI Development' },
    { Icon: Code, title: 'Tech Stack', value: 'Swift, SwiftUI, Flutter, Python' },
    { Icon: MapPin, title: 'Location', value: 'Coimbatore, India' },
    { Icon: Mail, title: 'Email', value: 'karthickiphone315@gmail.com' },
    { Icon: Phone, title: 'Phone', value: <a href="tel:+919715168081" className="hover:text-primary-600 transition-colors">+91 9715168081</a> }
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Inline CSS for the running line animation */}
      <style>{`
        @keyframes runningLine {
          0% { border-color: transparent; }
          50% { border-color: rgba(59, 130, 246, 0.8); }
          100% { border-color: transparent; }
        }
        .animate-running-line {
          animation: runningLine 2s infinite;
        }
      `}</style>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4 tracking-tight">
            About Me
          </h2>
          {/* Animated Underline */}
          <motion.div
            className="h-1 w-24 bg-primary-500 mx-auto rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center mb-6">
                <Code className="mr-2 text-primary-500" size={28} />
                <h3 className="text-2xl font-bold text-secondary-800">Profile Summary</h3>
              </div>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Hello! I’m a versatile and passionate developer with over 10+ years of professional experience specializing in iOS application development. My expertise lies in Swift, SwiftUI, UIKit, and Objective-C, where I’ve built 25+ high-performance mobile apps catering to diverse industries—from food delivery and taxi booking to CRM, eCommerce, and video streaming. More recently, I’ve expanded my skill set to include Flutter for cross-platform development, along with a deepening interest in AI agent creation.
                </p>

                <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
                  iOS Development & Project Experience
                </h4>

                {/* Core Competencies */}
                <h5 className="text-lg font-semibold mb-2">Core Competencies</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Swift, SwiftUI, UIKit, Objective-C – Building seamless, intuitive user interfaces.</li>
                  <li>Design Patterns: MVC, MVVM – Ensuring clean, maintainable, and scalable code.</li>
                  <li>Agile & Waterfall Methods – Full lifecycle development, from concept to App Store deployment.</li>
                  <li>Third-Party Libraries: Alamofire, AFNetworking, Firebase, Crashlytics, Facebook Analytics, Singular, CT Events – Enhancing app functionality through robust integrations.</li>
                  <li>Location & Mapping: MapKit, Google Maps, OpenStreetMap, Core Location – Real-time tracking and location-based features.</li>
                  <li>Push Notifications & Real-Time Communication: APNS, Firebase Cloud Messaging, OneSignal, WebSockets, Socket.IO – Enabling instant messaging, ride tracking, and alerts.</li>
                  <li>Database & Backend Services: AWS for file uploads, REST APIs for data exchange, JSON parsing, Realm DB for offline support.</li>
                </ul>

                {/* Notable Projects */}
                <h5 className="text-lg font-semibold mt-4 mb-2">Notable Projects</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Food Delivery Apps (Single/Multi-Vendor): Swiggy, Zomato, Foodpanda clones with distinct user and rider modules for seamless ordering and delivery.</li>
                  <li>Taxi Booking Platforms: Uber/Ola-like ecosystems, integrating location services, driver-rider matching, and real-time tracking.</li>
                  <li>Ticket Booking & CRM: Solutions for event/travel reservations and enterprise-level customer relationship management.</li>
                  <li>Hyperlocal & eCommerce: Grocery, meat, electronics, and other marketplaces with user-friendly interfaces and secure payment gateways.</li>
                  <li>Video Streaming & Social Media Apps: Implementing custom video players, live streaming, real-time chat, and push notification systems.</li>
                  <li>Hotel & Room Booking: Airbnb/Groupon-style applications offering reservation functionalities and intuitive user flows.</li>
                </ul>

                <p className="mt-4">
                  These projects gave me a holistic understanding of end-to-end mobile development—covering front-end design, backend integrations, deployment, and post-release support.
                </p>

                <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Flutter & Cross-Platform</h4>
                <p>
                  To stay at the forefront of technological innovation, I’ve also ventured into Flutter. This enables me to deliver apps on iOS and Android from a single codebase—offering clients a fast and cost-effective route to market without compromising on performance or user experience.
                </p>

                <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
                  AI Agent Creation & Chatbot Innovations
                </h4>
                <p>
                  In addition to traditional mobile development, I am currently exploring the world of AI-powered agent creation. This includes:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Python & No-Code Tools (n8n, Lyzer, Flowise):</strong> Experimenting with workflow automation and AI logic-building without needing extensive boilerplate code.
                  </li>
                  <li>
                    <strong>Open-Source LLMs & Frameworks:</strong>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li><strong>LangChain</strong> for orchestrating complex, LLM-driven applications, including prompt chaining and context management.</li>
                      <li><strong>Groq</strong> for hardware acceleration and optimization, ensuring faster inference and improved performance in AI tasks.</li>
                      <li><strong>ollama</strong> as a CLI tool to run LLaMA-based models locally, empowering experimentation with custom or privacy-focused solutions.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Conversational AI & Chatbots:</strong> Harnessing open-source language models to create chatbots capable of dynamic, human-like interactions—integrating them into mobile or web apps for next-level user engagement.
                  </li>
                </ul>

                <p className="mt-4">
                  Through these explorations, I’m learning prompt engineering, fine-tuning, and hands-on deployment—pushing the boundaries of what’s possible with NLP (Natural Language Processing) to build smarter, more adaptive apps.
                </p>

                <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
                  Technical Approach & Collaboration
                </h4>
                <p>
                  I thrive in a team-oriented, collaborative environment—whether it’s with designers perfecting UI/UX or backend specialists ensuring robust data handling. I’m a firm believer in:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Continuous Integration & Code Reviews:</strong> Maintaining high-quality standards and catching potential issues early.</li>
                  <li><strong>Agile Methodologies:</strong> Transparent communication, iterative development, and rapid feedback loops.</li>
                  <li><strong>Mentorship & Learning:</strong> Sharing knowledge with peers and staying updated through ongoing experimentation and research.</li>
                </ul>

                <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
                  Personal Passions
                </h4>
                <p className="mb-4">
                  Outside of coding, I’m enthusiastic about technology, gadgets, and farming. My interest in farming adds a grounded perspective to my tech-driven life, reminding me of the importance of sustainability, growth, and nurturing innovation in all endeavors. This combination of seemingly diverse interests fuels my creativity and problem-solving skills in tech.
                </p>

                <h4 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">
                  Career Objective
                </h4>
                <p className="mb-4">
                  I aim to build a thriving IT career, combining innovative mobile solutions with emerging AI technologies to drive organizational growth and deliver impactful user experiences. As I progress, I look forward to leading more projects, guiding technical decisions, and embracing new challenges—whether in full-time roles, contract projects, or freelance collaborations.
                </p>
                <p>
                  If you’re seeking a developer who merges solid mobile expertise with an eagerness to explore the latest frontiers in AI, let’s connect and create remarkable, forward-thinking applications together.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Personal Info Card */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg sticky top-8 transition-transform duration-300 hover:scale-105 relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-secondary-800 mb-6">Personal Info</h3>
              <div className="space-y-6">
                {personalInfoItems.map((item, index) => (
                  <motion.div key={index} className="flex items-start group relative" whileHover={{ scale: 1.02 }}>
                    {/* Running line animation behind the icon */}
                    {/* <div className="absolute"></div> */}
                    <div className="inset-0 rounded-xl animate-running-line border-2 mr-4 p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors relative z-10">
                      <item.Icon size={20} className="text-primary-600" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-secondary-700">{item.title}</h4>
                      <p className="text-secondary-600">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;