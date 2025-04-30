"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Users, Building } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  description?: string;
  employeeCount?: number;
  image?: string;
  establishedYear?: number;
  specializations?: string[];
}

interface GlobalPresenceSectionProps {
  title: string;
  subtitle?: string;
  locations: Location[];
  stats?: {
    countries: number;
    offices: number;
    employees: number;
  };
}

// Hyundai brand colors
const brandColors = {
  primary: '#002C5F', // Hyundai primary blue
  secondary: '#00AAD2', // Hyundai secondary blue
  accent: '#0073A6', // Hyundai accent blue
  light: '#E4EBF1' // Light variant
};

export default function GlobalPresenceSection({
  title,
  subtitle,
  locations,
  stats
}: GlobalPresenceSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const mapPinVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: 0.5 + (custom * 0.1),
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }),
    hover: { 
      scale: 1.3,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  // Function to convert coordinates to relative position on map
  const getPositionFromCoordinates = (coords: [number, number]): { left: string, top: string } => {
    // Simple conversion from coordinates to CSS position
    const [lat, lng] = coords;
    // Normalize coordinates to a 0-100% range
    // This is a very simplified approach, a real implementation would use proper map projection
    const left = ((lng + 180) / 360) * 100;
    const top = ((90 - lat) / 180) * 100;
    
    return {
      left: `${left}%`,
      top: `${top}%`
    };
  };

  return (
    <section 
      className="py-24 relative overflow-hidden"
      ref={ref}
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="mb-4 text-gray-900"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p
              className="text-lg text-gray-700"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Stats section */}
        {stats && (
          <motion.div 
            className="grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center p-4 rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-6 h-6" style={{ color: brandColors.primary }} />
              </div>
              <div className="text-3xl font-bold" style={{ color: brandColors.primary }}>{stats.countries}</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center mb-3">
                <Building className="w-6 h-6" style={{ color: brandColors.primary }} />
              </div>
              <div className="text-3xl font-bold" style={{ color: brandColors.primary }}>{stats.offices}</div>
              <div className="text-gray-600 text-sm">Offices</div>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-6 h-6" style={{ color: brandColors.primary }} />
              </div>
              <div className="text-3xl font-bold" style={{ color: brandColors.primary }}>{stats.employees.toLocaleString()}</div>
              <div className="text-gray-600 text-sm">Employees</div>
            </div>
          </motion.div>
        )}

        {/* Map container */}
        <motion.div 
          className="rounded-2xl bg-white shadow-lg overflow-hidden mb-10 p-4 md:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            {/* World map background - Using a high quality world map image */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-white overflow-hidden">
              <Image
                src="https://www.worldatlas.com/upload/bb/c3/32/world-political-map-3.png"
                alt="World Map"
                fill
                className="object-cover"
              />
              
              {/* Overlay to tone down the map colors */}
              <div className="absolute inset-0 bg-white opacity-40"></div>
              
              {/* Location pins */}
              {locations.map((location, index) => {
                const position = getPositionFromCoordinates(location.coordinates);
                return (
                  <motion.div
                    key={location.id}
                    className="absolute cursor-pointer flex flex-col items-center"
                    style={{
                      left: position.left,
                      top: position.top,
                      transform: 'translate(-50%, -50%)',
                      zIndex: activeLocation?.id === location.id ? 20 : 10,
                    }}
                    custom={index}
                    variants={mapPinVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setActiveLocation(location)}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg ${
                        activeLocation?.id === location.id ? 'scale-150' : ''
                      }`}
                      style={{ 
                        backgroundColor: activeLocation?.id === location.id ? brandColors.secondary : brandColors.primary
                      }}
                    ></div>
                    <div 
                      className={`absolute -bottom-1 w-12 h-12 rounded-full animate-ping opacity-30 ${
                        activeLocation?.id === location.id ? 'opacity-50' : 'opacity-20'
                      }`}
                      style={{ backgroundColor: brandColors.primary }}
                    ></div>
                    <span 
                      className={`absolute mt-6 px-2 py-1 text-xs font-medium rounded whitespace-nowrap transition-all duration-300 ${
                        activeLocation?.id === location.id ? 'opacity-100 mt-7 bg-white shadow-md' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{ color: brandColors.primary }}
                    >
                      {location.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Location details */}
        <AnimatePresence mode="wait">
          {activeLocation && (
            <motion.div 
              key={activeLocation.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            >
              <div className="flex flex-col md:flex-row">
                {activeLocation.image && (
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <Image
                      src={activeLocation.image}
                      alt={activeLocation.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                )}
                
                <div className={`p-6 ${activeLocation.image ? 'md:w-2/3' : 'w-full'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{activeLocation.name}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{activeLocation.country}</span>
                      </div>
                    </div>
                    
                    {activeLocation.establishedYear && (
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Established</div>
                        <div className="font-medium">{activeLocation.establishedYear}</div>
                      </div>
                    )}
                  </div>
                  
                  {activeLocation.description && (
                    <p className="text-gray-700 mb-5">{activeLocation.description}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-3 mb-5">
                    {activeLocation.specializations?.map((spec, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  
                  {activeLocation.employeeCount && (
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2" style={{ color: brandColors.primary }} />
                      <span className="text-sm text-gray-700">
                        <span className="font-bold">{activeLocation.employeeCount.toLocaleString()}</span> employees
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Location list for small screens */}
        <div className="mt-8 md:hidden grid grid-cols-2 gap-4">
          {locations.map((location) => (
            <button
              key={location.id}
              className={`text-left p-3 rounded-lg text-sm transition-all ${
                activeLocation?.id === location.id 
                  ? 'text-white shadow' 
                  : 'bg-white shadow-sm hover:shadow text-gray-700'
              }`}
              style={{ 
                backgroundColor: activeLocation?.id === location.id ? brandColors.primary : undefined 
              }}
              onClick={() => setActiveLocation(location)}
            >
              <div className="font-medium">{location.name}</div>
              <div className={`text-xs ${activeLocation?.id === location.id ? 'text-white/80' : 'text-gray-500'}`}>
                {location.country}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 