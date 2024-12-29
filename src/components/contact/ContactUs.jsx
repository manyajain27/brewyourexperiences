import React from 'react'
import { Mail, Phone, MapPin} from 'lucide-react';

function ContactUs() {
    return (
        <div className="min-h-screen md:h-auto  bg-gray-50 py-24 md:py-36 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="w-24 h-1 bg-[#27C3C5] mx-auto"></div>
            </div>
    
            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" placeholder='Enter your name' className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27C3C5] focus:ring-[#27C3C5]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder='Enter your email' className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27C3C5] focus:ring-[#27C3C5]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number (WhatsApp)</label>
                    <input type="number" placeholder='(+91)' className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27C3C5] focus:ring-[#27C3C5]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea rows={4} placeholder='Write down your message...' className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27C3C5] focus:ring-[#27C3C5]"></textarea>
                  </div>
                  <button className="w-full bg-[#27C3C5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1fa9ab] transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
    
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#27C3C5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email Us</h4>
                    <p className="text-gray-600">brewyourexperiences@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#27C3C5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Call Us</h4>
                    <p className="text-gray-600">(+91) 9920302249 / 9820201485</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#27C3C5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Visit Us</h4>
                    <p className="text-gray-600">--<br />--</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ContactUs
