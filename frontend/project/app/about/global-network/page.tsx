"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, MapPin, Users, Building, Clock, ChevronDown, ChevronUp, ExternalLink, Phone, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import the dynamic map component to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/ui/map-component'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading interactive map...</div>
    </div>
  ),
});

// Hyundai brand colors
const brandColors = {
  primary: '#002C5F', // Hyundai primary blue
  secondary: '#00AAD2', // Hyundai secondary blue
  accent: '#0073A6', // Hyundai accent blue
  light: '#E4EBF1' // Light variant
};

// Extended global network data with more details
const globalOfficesData = [
  {
    id: '1',
    name: 'Hyundai AutoEver India HQ',
    country: 'India',
    city: 'Bangalore',
    region: 'Asia-Pacific',
    coordinates: [12.9716, 77.5946] as [number, number],
    address: '123 Tech Park, Electronic City Phase 1, Bangalore, Karnataka 560100',
    contactPhone: '+91 80 1234 5678',
    contactEmail: 'info.bangalore@hyundai-autoever.in',
    description: 'Our headquarters in India houses core development teams focused on automotive software and enterprise solutions. The Bangalore office serves as the hub for our operations across India and provides world-class technology services to Hyundai Motor Group companies and clients worldwide.',
    employeeCount: 1200,
    image: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    establishedYear: 2006,
    specializations: ['SAP', 'Enterprise Solutions', 'Mobility', 'Cloud Infrastructure'],
    facilities: ['Development Center', 'Innovation Lab', 'Training Center', 'Cafeteria']
  },
  {
    id: '2',
    name: 'Hyundai AutoEver India - Hyderabad',
    country: 'India',
    city: 'Hyderabad',
    region: 'Asia-Pacific',
    coordinates: [17.3850, 78.4867] as [number, number],
    address: '456 Tech Hub, HITEC City, Hyderabad, Telangana 500081',
    contactPhone: '+91 40 9876 5432',
    contactEmail: 'info.hyderabad@hyundai-autoever.in',
    description: 'Our Hyderabad office specializes in data analytics, AI solutions, and automotive software development. This center works closely with our global R&D teams to develop cutting-edge technologies for connected vehicles and autonomous driving.',
    employeeCount: 750,
    image: 'https://images.unsplash.com/photo-1580222538898-cca4867925cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    establishedYear: 2010,
    specializations: ['Data Analytics', 'AI/ML', 'Connected Vehicles', 'Autonomous Driving'],
    facilities: ['Development Center', 'AI Lab', 'Conference Center']
  },
  {
    id: '3',
    name: 'Hyundai AutoEver Korea',
    country: 'South Korea',
    city: 'Seoul',
    region: 'Asia-Pacific',
    coordinates: [37.5665, 126.9780] as [number, number],
    address: '231 Yangjae-dong, Seocho-gu, Seoul, South Korea',
    contactPhone: '+82 2 3464 5000',
    contactEmail: 'global@hyundai-autoever.com',
    description: 'Our global headquarters coordinates worldwide operations and drives innovation in automotive technology. Located in Seoul, this center works directly with Hyundai Motor Group to develop next-generation automotive platforms and technologies.',
    employeeCount: 2800,
    image: 'https://images.unsplash.com/photo-1599461943552-722ff440344b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    establishedYear: 2000,
    specializations: ['R&D', 'Automotive Systems', 'Connected Vehicles', 'Corporate Strategy'],
    facilities: ['R&D Center', 'Innovation Center', 'Global Management Office']
  },
  {
    id: '4',
    name: 'Hyundai AutoEver America',
    country: 'United States',
    city: 'Atlanta',
    region: 'Americas',
    coordinates: [33.7490, -84.3880] as [number, number],
    address: '3025 Windy Hill Road, Atlanta, GA 30339, USA',
    contactPhone: '+1 678 765 4321',
    contactEmail: 'info.us@hyundai-autoever.com',
    description: 'Our North American hub specializes in connected vehicle technologies and enterprise solutions. The Atlanta center supports Hyundai Motor Group operations in North America and develops tailored solutions for the American automotive market.',
    employeeCount: 950,
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80',
    establishedYear: 2003,
    specializations: ['Connected Vehicles', 'Data Analytics', 'Cloud Solutions', 'Dealer Management Systems'],
    facilities: ['Development Center', 'Client Experience Center', 'Training Facility']
  },
  {
    id: '5',
    name: 'Hyundai AutoEver Europe',
    country: 'Germany',
    city: 'Munich',
    region: 'Europe',
    coordinates: [48.1351, 11.5820] as [number, number],
    address: 'Bayerstraße, 72, 80335 Munich, Germany',
    contactPhone: '+49 89 1234 5678',
    contactEmail: 'info.eu@hyundai-autoever.com',
    description: 'Our European center delivers cutting-edge solutions for automotive manufacturers and suppliers. The Munich office focuses on advanced manufacturing systems, supply chain management, and IoT technologies for the European market.',
    employeeCount: 750,
    image: 'https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    establishedYear: 2008,
    specializations: ['Manufacturing Systems', 'Supply Chain', 'IoT', 'Industry 4.0'],
    facilities: ['Development Center', 'Innovation Lab', 'Manufacturing Test Facility']
  },
  {
    id: '6',
    name: 'Hyundai AutoEver China',
    country: 'China',
    city: 'Beijing',
    region: 'Asia-Pacific',
    coordinates: [39.9042, 116.4074] as [number, number],
    address: '88 Jianguo Road, Chaoyang District, Beijing 100025, China',
    contactPhone: '+86 10 8765 4321',
    contactEmail: 'info.cn@hyundai-autoever.com',
    description: 'Our Beijing office serves the growing Chinese automotive market with specialized solutions for manufacturing, supply chain, and smart mobility. This center works closely with local automotive manufacturers and technology partners.',
    employeeCount: 1100,
    image: 'https://images.unsplash.com/photo-1591288682105-10bd4df3ffe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    establishedYear: 2005,
    specializations: ['Manufacturing Solutions', 'Smart Mobility', 'EV Infrastructure', 'Localization'],
    facilities: ['Development Center', 'Customer Experience Center', 'R&D Lab']
  },
  {
    id: '7',
    name: 'Hyundai AutoEver MENA',
    country: 'United Arab Emirates',
    city: 'Dubai',
    region: 'Middle East & Africa',
    coordinates: [25.2048, 55.2708] as [number, number],
    address: 'Dubai Internet City, Building 14, Dubai, UAE',
    contactPhone: '+971 4 123 4567',
    contactEmail: 'info.mena@hyundai-autoever.com',
    description: 'Our Dubai office serves as the hub for Middle East and North Africa operations, providing specialized solutions for the region. This center focuses on delivering digital transformation services and smart city technologies.',
    employeeCount: 320,
    image: 'https://images.unsplash.com/photo-1548950907-6a1181c80325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    establishedYear: 2012,
    specializations: ['Smart City Solutions', 'Digital Transformation', 'IoT', 'EV Charging Infrastructure'],
    facilities: ['Innovation Center', 'Client Experience Center']
  },
  {
    id: '8',
    name: 'Hyundai AutoEver India - Pune',
    country: 'India',
    city: 'Pune',
    region: 'Asia-Pacific',
    coordinates: [18.5204, 73.8567] as [number, number],
    address: '789 IT Park, Hinjawadi, Pune, Maharashtra 411057',
    contactPhone: '+91 20 5678 9012',
    contactEmail: 'info.pune@hyundai-autoever.in',
    description: 'Our Pune center specializes in automotive software testing, quality assurance, and embedded systems development. This office works closely with manufacturing facilities to develop and implement production solutions.',
    employeeCount: 450,
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1873&q=80',
    establishedYear: 2015,
    specializations: ['Testing and QA', 'Embedded Systems', 'Manufacturing Software', 'Automotive Electronics'],
    facilities: ['Testing Center', 'Embedded Systems Lab']
  }
];

// Global stats
const globalStats = {
  countries: 15,
  offices: 24,
  employees: 8500,
  clients: 200
};

// Region list for filtering
const regions = [
  'All Regions',
  'Asia-Pacific',
  'Americas',
  'Europe',
  'Middle East & Africa'
];

export default function GlobalNetworkPage() {
  const [activeOffice, setActiveOffice] = useState<any>(null);
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [expandedOffice, setExpandedOffice] = useState<string | null>(null);
  
  const heroRef = useRef(null);
  const mapRef = useRef(null);
  const officesRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isMapInView = useInView(mapRef, { once: true, amount: 0.2 });
  const isOfficesInView = useInView(officesRef, { once: true, amount: 0.1 });

  // Filter offices by region
  const filteredOffices = selectedRegion === 'All Regions' 
    ? globalOfficesData 
    : globalOfficesData.filter(office => office.region === selectedRegion);

  // Toggle expanded office details
  const toggleOfficeDetails = (id: string) => {
    if (expandedOffice === id) {
      setExpandedOffice(null);
    } else {
      setExpandedOffice(id);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-40 pb-20 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-hyundai-blue via-hyundai-blue/90 to-hyundai-blue/80 z-0"></div>
        
        {/* World map background */}
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589519160732-57fc6aa70951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="World Map"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="absolute top-0 left-0 w-1/3 h-screen bg-gradient-radial from-sky-blue/20 to-transparent opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-active-blue/10 to-transparent opacity-40 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-5"
            >
              <span className="bg-white/10 backdrop-blur-md text-white text-sm font-medium py-1.5 px-4 rounded-full border border-white/20">
                Our Global Network
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            >
              Global <span className="text-active-blue">Presence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-16"
            >
              With offices across 15 countries, Hyundai AutoEver India is part of a global network delivering innovative IT solutions for clients worldwide.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
            >
              <div className="bg-black/30 shadow-xl border-2 border-white/40 p-6 rounded-xl text-center backdrop-blur-md">
                <div className="flex items-center justify-center mb-3">
                  <Globe className="w-10 h-10 text-active-blue" />
                </div>
                <div className="text-white text-5xl font-extrabold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{globalStats.countries}</div>
                <div className="text-white text-sm font-semibold tracking-wider uppercase">Countries</div>
              </div>
              
              <div className="bg-black/30 shadow-xl border-2 border-white/40 p-6 rounded-xl text-center backdrop-blur-md">
                <div className="flex items-center justify-center mb-3">
                  <Building className="w-10 h-10 text-active-blue" />
                </div>
                <div className="text-white text-5xl font-extrabold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{globalStats.offices}</div>
                <div className="text-white text-sm font-semibold tracking-wider uppercase">Offices</div>
              </div>
              
              <div className="bg-black/30 shadow-xl border-2 border-white/40 p-6 rounded-xl text-center backdrop-blur-md">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-10 h-10 text-active-blue" />
                </div>
                <div className="text-white text-5xl font-extrabold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{globalStats.employees.toLocaleString()}</div>
                <div className="text-white text-sm font-semibold tracking-wider uppercase">Employees</div>
              </div>
              
              <div className="bg-black/30 shadow-xl border-2 border-white/40 p-6 rounded-xl text-center backdrop-blur-md">
                <div className="flex items-center justify-center mb-3">
                  <Globe className="w-10 h-10 text-active-blue" />
                </div>
                <div className="text-white text-5xl font-extrabold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{globalStats.clients}+</div>
                <div className="text-white text-sm font-semibold tracking-wider uppercase">Global Clients</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section 
        ref={mapRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-gradient mb-6">Our Global Footprint</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our worldwide presence through our interactive map. Click on a location to learn more about our regional operations and specializations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[600px]">
              <MapComponent 
                locations={globalOfficesData} 
                activeLocation={activeOffice}
                setActiveLocation={setActiveOffice}
                brandColors={brandColors}
              />
            </div>
          </motion.div>
          
          {activeOffice && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
            >
              <div className="flex flex-col md:flex-row">
                {activeOffice.image && (
                  <div className="md:w-1/3 relative h-60 md:h-auto">
                    <Image
                      src={activeOffice.image}
                      alt={activeOffice.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center text-sm mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {activeOffice.city}, {activeOffice.country}
                      </div>
                      <div className="flex items-center text-sm opacity-80">
                        <Clock className="w-4 h-4 mr-1" />
                        Est. {activeOffice.establishedYear}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={`p-6 ${activeOffice.image ? 'md:w-2/3' : 'w-full'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeOffice.name}</h3>
                  <p className="text-gray-700 mb-4">{activeOffice.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">Address</h4>
                      <p className="text-gray-700">{activeOffice.address}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">Contact</h4>
                      <div className="flex items-center text-gray-700 mb-1">
                        <Phone className="w-4 h-4 mr-2 text-hyundai-blue" />
                        {activeOffice.contactPhone}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Mail className="w-4 h-4 mr-2 text-hyundai-blue" />
                        {activeOffice.contactEmail}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {activeOffice.specializations?.map((spec: string, i: number) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-hyundai-light-sand text-hyundai-blue"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Offices List Section */}
      <section 
        ref={officesRef}
        className="py-20 bg-hyundai-light-sand"
      >
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isOfficesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-gradient mb-6">Our Offices</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Explore our offices by region and learn more about our global capabilities and specializations.
            </p>
            
            {/* Region Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {regions.map((region) => (
                <button
                  key={region}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRegion === region
                      ? 'bg-hyundai-blue text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedRegion(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {filteredOffices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isOfficesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={office.image}
                    alt={office.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-bold">{office.name}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {office.city}, {office.country}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Users className="text-hyundai-blue h-5 w-5 mr-2" />
                      <span className="text-gray-700">
                        <span className="font-bold">{office.employeeCount}</span> employees
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-hyundai-blue h-5 w-5 mr-2" />
                      <span className="text-gray-700">Est. {office.establishedYear}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {office.specializations.slice(0, 3).map((spec, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-hyundai-light-sand text-hyundai-blue"
                      >
                        {spec}
                      </span>
                    ))}
                    {office.specializations.length > 3 && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-hyundai-light-sand text-hyundai-blue">
                        +{office.specializations.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {office.description.slice(0, 120)}...
                  </p>
                  
                  <button
                    onClick={() => toggleOfficeDetails(office.id)}
                    className="flex items-center text-hyundai-blue font-medium"
                  >
                    {expandedOffice === office.id ? (
                      <>
                        <ChevronUp className="w-5 h-5 mr-1" /> 
                        Show less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-5 h-5 mr-1" /> 
                        View details
                      </>
                    )}
                  </button>
                  
                  {expandedOffice === office.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <h4 className="text-sm text-gray-500 mb-1">Address</h4>
                          <p className="text-gray-700">{office.address}</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500 mb-1">Contact</h4>
                          <div className="flex items-center text-gray-700 mb-1">
                            <Phone className="w-4 h-4 mr-2 text-hyundai-blue" />
                            {office.contactPhone}
                          </div>
                          <div className="flex items-center text-gray-700 mb-4">
                            <Mail className="w-4 h-4 mr-2 text-hyundai-blue" />
                            {office.contactEmail}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500 mb-1">Facilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {office.facilities.map((facility, i) => (
                              <span 
                                key={i}
                                className="px-2 py-1 rounded-full text-xs bg-white text-gray-700"
                              >
                                {facility}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hyundai-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Partner with Us Globally
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/80 text-xl mb-10"
            >
              Connect with our global team to learn how we can help you leverage our worldwide expertise and resources.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
              <Link href="/about/company" className="btn-outline-hero">
                About Our Company
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 