import React from 'react';
import {useState} from 'react';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar-full fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nav-bar flex items-center justify-between h-[120px]">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="title text-gray-200" style={{display: 'flex',flexDirection:"column", alignItems: 'center', gap:"0.3rem",fontFamily:"Lato"}}>
                    <span className="brew text-5xl font-bold relative">BREW</span>
                    <span className='text-1xl relative' >YOUR EXPERIENCES</span>
                    {/* <img src={planelogo} alt="plane logo" className='plane w-[200px] absolute'/> */}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-[1.2rem]">
              <a href="#home" className="nav-links text-gray-300 transition-colors px-3 py-2" >Home</a>
              <a href="#trips" className="nav-links text-gray-300 transition-colors px-3 py-2">Trips</a>
              <a href="#about" className="nav-links text-gray-300 transition-colors px-3 py-2">About Us</a>
              <a href="#blog" className="nav-links text-gray-300 transition-colors px-3 py-2">Blog</a>
              <a href="#contact" className="nav-links text-gray-300 transition-colors px-3 py-2">Contact</a>
              <button className="book-now text-black px-6 py-2 rounded-full font-semibold transition-colors">
                <span>Book Now</span>
                
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}