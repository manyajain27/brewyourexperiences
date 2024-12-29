import React from 'react'

function About() {
    return (
        <div className="min-h-screen md:h-auto bg-white py-24 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <div className="w-24 h-1 bg-[#27C3C5] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Crafting Unforgettable Adventures</h3>
                <p className="text-gray-600">
                  At Brew Your Experiences, we believe travel should be more than just visiting places – it should be about creating 
                  lasting memories and meaningful connections. We curate unique travel experiences that blend luxury with authenticity, 
                  ensuring every journey tells a story worth sharing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                      <span className="text-[#27C3C5] text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Personalized Itineraries</h4>
                      <p className="text-gray-600">Tailored travel experiences designed around your interests and preferences.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                      <span className="text-[#27C3C5] text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Local Expertise</h4>
                      <p className="text-gray-600">Connect with local guides and discover hidden gems off the beaten path.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                      <span className="text-[#27C3C5] text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Sustainable Travel</h4>
                      <p className="text-gray-600">Eco-friendly adventures that respect and preserve local communities and environments.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-64 bg-gray-200 rounded-lg"></div>
                <div className="h-64 bg-gray-200 rounded-lg mt-8"></div>
                <div className="h-64 bg-gray-200 rounded-lg"></div>
                <div className="h-64 bg-gray-200 rounded-lg mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default About
