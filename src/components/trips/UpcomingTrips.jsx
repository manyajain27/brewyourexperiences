import React from 'react'

function UpcomingTrips() {


    const trips = [
        {
          title: "Bali Sunset Adventure",
          date: "June 15-25, 2024",
          price: "$2,499",
          spots: "6 spots left",
          image: "/api/placeholder/400/300"
        },
        {
          title: "Japanese Culture Immersion",
          date: "July 1-12, 2024",
          price: "$3,299",
          spots: "4 spots left",
          image: "/api/placeholder/400/300"
        },
        {
          title: "Costa Rica Eco Tour",
          date: "August 5-15, 2024",
          price: "$2,799",
          spots: "8 spots left",
          image: "/api/placeholder/400/300"
        }
      ];


    return (
        <div className="min-h-screen md:h-auto bg-gray-50  py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Trips</h2>
              <div className="w-24 h-1 bg-[#27C3C5] mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our carefully curated trips designed to create unforgettable memories and authentic cultural experiences.
              </p>
            </div>
    
            <div className="grid md:grid-cols-3 gap-8">
              {trips.map((trip, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600">{trip.date}</p>
                      <p className="text-[#27C3C5] font-semibold">{trip.price}</p>
                      <p className="text-sm text-gray-500">{trip.spots}</p>
                    </div>
                    <button className="w-full bg-[#27C3C5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1fa9ab] transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default UpcomingTrips
