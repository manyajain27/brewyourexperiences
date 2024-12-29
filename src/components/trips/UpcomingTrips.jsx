import React, {useState} from 'react';
import NavBar from '../homepage/NavBar';
// import bgImage from '../../media/teal-bg.jpg';  // Import the background image
import baliImg from '../../media/bali-sunset.png';
import japanImg from '../../media/japan.jpg';
import costaRicaImg from '../../media/costa-rica.jpeg';
import { motion, AnimatePresence  } from 'framer-motion';

function UpcomingTrips({ showNavbar = true }) {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const trips = [
    {
      id: 1,
      title: "Bali Sunset Adventure",
      date: "June 15-25, 2024",
      price: "$2,499",
      spots: "6 spots left",
      image: baliImg,
      description: "Experience the magic of Bali's legendary sunsets"
    },
    {
      id: 2,
      title: "Japanese Culture Immersion",
      date: "July 1-12, 2024",
      price: "$3,299",
      spots: "4 spots left",
      image: japanImg,
      description: "Discover the ancient traditions of Japan"
    },
    {
      id: 3,
      title: "Costa Rica Eco Tour",
      date: "August 5-15, 2024",
      price: "$2,799",
      spots: "8 spots left",
      image: costaRicaImg,
      description: "Explore pristine rainforests and beaches"
    }
  ];

  // Smooth reveal animation for page load
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  // Staggered animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Enhanced card animations
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  // Floating animation for price tag
  const priceVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white relative"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {showNavbar && <NavBar />}

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Trips</h2>
          <motion.div 
            className="w-24 h-1 bg-[#27C3C5] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Join our carefully curated trips designed to create unforgettable memories and authentic cultural experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {trips.map((trip) => (
              <motion.div
                key={trip.id}
                layoutId={`card-${trip.id}`}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg"
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setHoveredId(trip.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setSelectedId(trip.id)}
              >
                <motion.div className="relative">
                  <motion.img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-52 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-20 transition-opacity"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === trip.id ? 1 : 0 }}
                  />
                </motion.div>

                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold mb-2"
                    layout
                  >
                    {trip.title}
                  </motion.h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">{trip.date}</p>
                    <motion.p 
                      className="text-[#27C3C5] font-semibold inline-block"
                      variants={priceVariants}
                      whileHover="hover"
                    >
                      {trip.price}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-500"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {trip.spots}
                    </motion.p>
                  </div>
                  <motion.button 
                    className="w-full bg-[#27C3C5] text-white px-6 py-3 rounded-full font-semibold"
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: "#1fa9ab"
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25
                    }}
                  >
                    Learn More
                  </motion.button>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#27C3C5]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredId === trip.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white rounded-xl p-6 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">
                {trips.find(t => t.id === selectedId)?.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {trips.find(t => t.id === selectedId)?.description}
              </p>
              <motion.button
                className="bg-[#27C3C5] text-white px-6 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedId(null)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default UpcomingTrips;