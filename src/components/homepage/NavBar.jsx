import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Hide the navbar if scrolled more than 50px
      } else {
        setScrolled(false); // Show the navbar when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
        <nav className={`nav-bar-full w-full z-50 transition-all ${scrolled ? 'transform -translate-y-[120px]' : 'transform translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nav-bar flex items-center justify-between h-[120px]">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="title text-gray-200" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: "0.3rem", fontFamily: "Lato" }}>
                  <span className="brew text-5xl font-bold relative">BREW</span>
                  <span className='text-1xl relative'>YOUR EXPERIENCES</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-[1.2rem]">
              <Link to="/" className="nav-links text-gray-300 transition-colors px-3 py-2">Home</Link>
              <Link to="/trips" className="nav-links text-gray-300 transition-colors px-3 py-2">Trips</Link>
              <Link to="/about" className="nav-links text-gray-300 transition-colors px-3 py-2">About Us</Link>
              <Link to="/faqs" className="nav-links text-gray-300 transition-colors px-3 py-2">FAQs</Link>
              <Link to="/blog" className="nav-links text-gray-300 transition-colors px-3 py-2">Blog</Link>
              <Link to="/contact" className="nav-links text-gray-300 transition-colors px-3 py-2">Contact</Link>
              <button className="book-now text-black px-6 py-2 rounded-full font-semibold transition-colors">
                <span>Book Now</span>
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-10 w-10" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
    <MobileMenu isOpen={isOpen} onClose={handleClose} />
    </>
    
  );
}
