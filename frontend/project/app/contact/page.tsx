"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/sections/contact-form';

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-hyundai-light-sand">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-gray-900">Contact Us</h1>
            <p className="text-xl text-gray-700">
              Have questions or need assistance? Reach out to our team for support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                We're here to help with any questions you might have about our services, careers, or partnerships. Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-hyundai-light-sand p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-hyundai-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Headquarters</h3>
                    <p className="text-gray-700">
                      123 Tech Park, Sector 21<br />
                      Gurugram, Haryana 122016<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hyundai-light-sand p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-hyundai-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:info@hyundaiautoever.in" className="text-hyundai-blue hover:underline">
                      info@hyundaiautoever.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hyundai-light-sand p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-hyundai-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Call Us</h3>
                    <a href="tel:+911234567890" className="text-hyundai-blue hover:underline">
                      +91 1234 567 890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hyundai-light-sand p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-hyundai-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">Our Offices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-4 text-gray-900">Gurugram</h3>
              <p className="text-gray-700 mb-4">
                123 Tech Park, Sector 21<br />
                Gurugram, Haryana 122016<br />
                India
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-hyundai-blue hover:underline">
                View on map
              </a>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-4 text-gray-900">Bangalore</h3>
              <p className="text-gray-700 mb-4">
                456 Tech Avenue, Whitefield<br />
                Bangalore, Karnataka 560066<br />
                India
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-hyundai-blue hover:underline">
                View on map
              </a>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-medium mb-4 text-gray-900">Hyderabad</h3>
              <p className="text-gray-700 mb-4">
                789 Cyber Tower, HITEC City<br />
                Hyderabad, Telangana 500081<br />
                India
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-hyundai-blue hover:underline">
                View on map
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}