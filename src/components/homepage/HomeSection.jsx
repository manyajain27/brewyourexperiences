import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation'; // Import smoother typing animation
import bgImage from '../../media/bali-bg.jpg'; // Import background image



function HomeSection() {
  return (
    
    <div >
      <div className="relative h-screen">
        {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="container1 max-w-3xl flex flex-col gap-4">
          {/* Typing Animation for Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 flex flex-col gap-2">
            <span>Craft Your Perfect</span>
            {' '}
            <span style={{ color: '#27C3C5' }}>
              <TypeAnimation
                sequence={[
                  'Adventure.', // First word
                  2000,       
                  'Journey.',  // Second word
                  2000,       
                  'Experience.', // Third word
                  2000,       
                ]}
                wrapper="span"
                speed={50} // Typing speed (lower is slower)
                repeat={Infinity} // Infinite loop
              />
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover handcrafted travel experiences that blend luxury, adventure, and authentic local culture.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="explore-trips-button text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors">
              Explore Trips <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        
      
        </div>
      </div>
      </div>
      <div className="scroll absolute flex flex-col items-center ">
        <span className='scroll-text text-gray-300'>Scroll Below</span>
        <ArrowDown className='down-arrow h-8 w-8 text-gray-300'/>
      </div>
    </div>
  );
}

export default HomeSection;
