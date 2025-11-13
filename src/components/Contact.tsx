import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle, AlertCircle, User, AtSign, FileText, Phone } from 'lucide-react';
import { trackEvent } from '../utils/eventTracking';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    subject: '',
    message: '',
    from: 'Portfolio Website',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Google Apps Script URL - Replace with your own Google Script URL
  // To get your URL:
  // 1. Create a Google Sheet
  // 2. Go to Extensions > Apps Script
  // 3. Create a script that handles POST requests
  // 4. Deploy as web app
  // 5. Copy the web app URL here
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby38a4Z1Qzh2QZLEQo_V7pHiUg5g1QL7_fUn1Qh2YJhADB6-ACaGJ5Y-Ye1qMcdvW26/exec';

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate mobile number if provided - supports international formats
    if (formData.mobileNo.trim()) {
      // Allow digits, spaces, hyphens, plus sign, parentheses, and dots (common in international formats)
      // Minimum 7 digits (shortest valid phone number), maximum 20 characters
      const mobileNoClean = formData.mobileNo.trim().replace(/[\s\-\+\(\)\.]/g, '');
      if (!/^[\d\s\-\+\(\)\.]+$/.test(formData.mobileNo.trim())) {
        newErrors.mobileNo = 'Please enter a valid mobile number';
      } else if (mobileNoClean.length < 7) {
        newErrors.mobileNo = 'Mobile number must contain at least 7 digits';
      } else if (mobileNoClean.length > 15) {
        newErrors.mobileNo = 'Mobile number is too long (maximum 15 digits)';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus('submitting');

    try {
      // Track form submission event
      trackEvent('form_submission', 'Contact Form', 'contact');

      // Prepare submission data with all fields explicitly
      // mobileNo: if empty, send empty string; otherwise send the trimmed value
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobileNo: formData.mobileNo ? formData.mobileNo.trim() : '', // Empty string if no mobile number
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        from: 'Portfolio Website',
      };

      // Log the data being sent (for debugging - remove in production if needed)
      console.log('Submitting form data:', submissionData);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      // With no-cors mode, we can't read the response
      // So we'll assume success if no error is thrown
      setFormStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        mobileNo: '',
        subject: '', 
        message: '', 
        from: 'Portfolio Website' 
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setFormStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

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
      label: 'Email',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/karthick-kck',
      link: 'https://linkedin.com/in/karthick-kck',
      icon: <Linkedin size={24} className="text-primary-500" />,
      color: 'bg-blue-50',
      label: 'LinkedIn',
    },
    {
      name: 'GitHub',
      value: 'github.com/karthickkck315',
      link: 'https://github.com/karthickkck315',
      icon: <Github size={24} className="text-primary-500" />,
      color: 'bg-gray-50',
      label: 'GitHub',
    },
    {
      name: 'Stack Overflow',
      value: 'stackoverflow.com/users/2776795/karthick-c',
      link: 'https://stackoverflow.com/users/2776795/karthick-c',
      icon: <MessageSquare size={24} className="text-primary-500" />,
      color: 'bg-orange-50',
      label: 'StackOverflow',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-3 sm:mb-4 px-4">Get In Touch</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary-500 mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-secondary-600 max-w-2xl mx-auto px-4">
            Feel free to reach out for collaborations, job opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4">Connect With Me</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"
                  onClick={() => trackEvent('contact_click', method.label, 'contact')}
                >
                  <div className={`p-3 sm:p-4 rounded-full ${method.color} mr-3 sm:mr-4 flex-shrink-0`}>
                    {method.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-secondary-800">{method.name}</h3>
                    <p className="text-sm sm:text-base text-secondary-600 truncate">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-6">Send a Message</h3>
            
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <p className="text-green-800 text-sm sm:text-base">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
              >
                <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                <p className="text-red-800 text-sm sm:text-base">
                  Something went wrong. Please try again or contact me directly via email.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-primary-500" />
                    <span>Name</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors text-sm sm:text-base`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  <div className="flex items-center gap-2">
                    <AtSign size={16} className="text-primary-500" />
                    <span>Email</span>
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors text-sm sm:text-base`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div>
                <label htmlFor="mobileNo" className="block text-sm font-medium text-secondary-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-primary-500" />
                    <span>Mobile Number</span>
                    <span className="text-xs text-secondary-500 font-normal">(Optional)</span>
                  </div>
                </label>
                <input
                  type="tel"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.mobileNo ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors text-sm sm:text-base`}
                  placeholder="+1 234 567 8900 or +91 9876543210"
                  pattern="[\d\s\-\+\(\)\.]+"
                  title="Enter a valid international phone number (e.g., +1 234 567 8900, +91 9876543210)"
                />
                {errors.mobileNo && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobileNo}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-primary-500" />
                    <span>Subject</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors text-sm sm:text-base`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} className="text-primary-500" />
                    <span>Message</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors resize-none text-sm sm:text-base`}
                  placeholder="Tell me about your project or just say hello..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  formStatus === 'submitting'
                    ? 'bg-primary-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg hover:shadow-xl'
                } text-sm sm:text-base`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;