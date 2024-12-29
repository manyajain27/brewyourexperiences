import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">BREW</span>
              <span className="text-sm">YOUR EXPERIENCES</span>
            </div>
            <p className="text-sm">
              Crafting unforgettable travel experiences that blend luxury, adventure, and authentic local culture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#27C3C5] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#27C3C5] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#27C3C5] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#27C3C5] transition-colors">Home</a>
              </li>
              <li>
                <a href="#trips" className="hover:text-[#27C3C5] transition-colors">Upcoming Trips</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#27C3C5] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#27C3C5] transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#27C3C5] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#27C3C5]" />
                <span>123 Adventure Street<br />Wanderlust City, WC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#27C3C5]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#27C3C5]" />
                <span>info@brewyourexperiences.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#27C3C5]"
              />
              <button className="w-full bg-[#27C3C5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1fa9ab] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} Brew Your Experiences. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#27C3C5] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#27C3C5] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#27C3C5] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;