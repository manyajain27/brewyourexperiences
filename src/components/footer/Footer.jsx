import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Subtle fade in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Social icon hover animation
  const iconHover = {
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Mobile Footer (< 768px) */}
        <div className="md:hidden space-y-8">
          {/* Company Info - Mobile */}
          <motion.div 
            className="text-center space-y-4"
            variants={fadeIn}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">BREW</span>
              <span className="text-xs">YOUR EXPERIENCES</span>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center space-x-6">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href={index === 1 ? "https://www.instagram.com/brewyourexperiences/" : "#"}
                  target={index === 1 ? '_blank' : '_self'}
                  className="hover:text-[#27C3C5] transition-colors"
                  whileHover="hover"
                  variants={iconHover}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter - Mobile */}
          <motion.div 
            className="space-y-3"
            variants={fadeIn}
          >
            <h3 className="text-base font-semibold text-white text-center pb-2">Stay Updated</h3>
            <form className="space-y-3">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#27C3C5] text-sm"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#27C3C5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1fa9ab] transition-colors text-sm"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Essential Contact - Mobile */}
          <motion.div 
            className="text-sm space-y-2"
            variants={fadeIn}
          >
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4 text-[#27C3C5]" />
              <span>brewyourexperiences@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 text-[#27C3C5]" />
              <span>+91 9920302249/ 9820201485</span>
            </div>
          </motion.div>
        </div>

        {/* Desktop Footer (≥ 768px) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">BREW</span>
              <span className="text-sm">YOUR EXPERIENCES</span>
            </div>
            <p className="text-sm">
              Crafting unforgettable travel experiences that blend luxury, adventure, and authentic local culture.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href={index === 1 ? "https://www.instagram.com/brewyourexperiences/" : "#" } 
                  target={index === 1 ? '_blank' : '_self'}
                  className="hover:text-[#27C3C5] transition-colors"
                  whileHover="hover"
                  variants={iconHover}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Upcoming Trips", "About Us", "Blog", "Contact"].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-[#27C3C5] transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#27C3C5]" />
                <span>Charni Road<br />Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#27C3C5]" />
                <span>+91 9920302249/ 9820201485</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#27C3C5]" />
                <span>brewyourexperiences@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <form className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#27C3C5]"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#27C3C5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1fa9ab] transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs md:text-sm">
            <div className='flex gap-3'>
              © {currentYear} Brew Your Experiences . 
              <div>All rights reserved.</div>
            </div>
            <div className="flex space-x-4 md:space-x-6">
              <motion.a 
                whileHover={{ x: 2 }}
                href="#" 
                className="hover:text-[#27C3C5] transition-colors"
              >
                Privacy
              </motion.a>
              <motion.a 
                whileHover={{ x: 2 }}
                href="#" 
                className="hover:text-[#27C3C5] transition-colors"
              >
                Terms
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;