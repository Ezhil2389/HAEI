"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, ArrowRight } from 'lucide-react';

interface Technology {
  name: string;
  logo: string;
  description?: string;
}

interface TechnologiesSectionProps {
  title: string;
  subtitle?: string;
  technologies: Technology[];
}

// Updated technology data with real logo URLs
const updatedLogos: Record<string, string> = {
  'SAP': 'https://www.vectorlogo.zone/logos/sap/sap-ar21.svg',
  'Salesforce': 'https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg',
  'AWS': 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg',
  'Spring Boot': 'https://www.vectorlogo.zone/logos/springio/springio-ar21.svg',
  'Java': 'https://www.vectorlogo.zone/logos/java/java-ar21.svg',
  'React': 'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg',
  'Angular': 'https://www.vectorlogo.zone/logos/angular/angular-ar21.svg',
  'Gatsby.js': 'https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-ar21.svg',
  'Node.js': 'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg',
  'Jira': 'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg',
  'Jenkins': 'https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg',
  'GitLab': 'https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg'
};

// Hyundai brand colors
const brandColors = {
  primary: '#002C5F', // Hyundai primary blue
  secondary: '#00AAD2', // Hyundai secondary blue
  accent: '#0073A6', // Hyundai accent blue
  light: '#E4EBF1' // Light variant
};

export default function TechnologiesSection({
  title,
  subtitle,
  technologies
}: TechnologiesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [featuredTech, setFeaturedTech] = useState<string>('SAP');
  const [bgMousePosition, setBgMousePosition] = useState({ x: 0, y: 0 });

  // Update logo URLs to use real logos
  const enhancedTechnologies = technologies.map(tech => ({
    ...tech,
    logo: updatedLogos[tech.name] || tech.logo
  }));

  // Group technologies into categories
  const categories: Record<string, string[]> = {
    "Enterprise Solutions": ['SAP', 'Salesforce'],
    "Cloud & Infrastructure": ['AWS', 'Jenkins', 'GitLab'],
    "Backend Development": ['Java', 'Spring Boot', 'Node.js'],
    "Frontend Development": ['React', 'Angular', 'Gatsby.js'],
    "Project Management": ['Jira']
  };

  const flattenedCategories = Object.entries(categories).map(([category, techs]) => ({
    name: category,
    technologies: enhancedTechnologies.filter(tech => techs.includes(tech.name))
  }));

  // Rotate featured technology
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        const allTechNames = enhancedTechnologies.map(tech => tech.name);
        const currentIndex = allTechNames.indexOf(featuredTech);
        const nextIndex = (currentIndex + 1) % allTechNames.length;
        setFeaturedTech(allTechNames[nextIndex]);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isInView, featuredTech, enhancedTechnologies]);

  // Background parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setBgMousePosition({ x, y });
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const techCardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const techCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const spotlightVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 30 }
    }
  };

  // Get the current featured technology
  const currentFeaturedTech = enhancedTechnologies.find(tech => tech.name === featuredTech);

  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden" 
      ref={ref}
      style={{
        background: brandColors.light // Solid color background
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-50">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={`${brandColors.primary}15`} strokeWidth="1" />
            </pattern>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={`${brandColors.primary}10`} />
              <stop offset="50%" stopColor={`${brandColors.secondary}08`} />
              <stop offset="100%" stopColor={`${brandColors.primary}10`} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#techGradient)" />
        </svg>
        
        {/* Parallax floating elements */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: brandColors.primary }}
          animate={{
            x: bgMousePosition.x * -30,
            y: bgMousePosition.y * -30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div 
          className="absolute bottom-20 -left-20 w-60 h-60 rounded-full opacity-5 blur-3xl"
          style={{ background: brandColors.secondary }}
          animate={{
            x: bgMousePosition.x * 20,
            y: bgMousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 30 }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-10 blur-xl"
          style={{ background: brandColors.accent }}
          animate={{
            x: bgMousePosition.x * 10,
            y: bgMousePosition.y * 10,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 30 }}
        />
        
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: brandColors.primary
            }}
            animate={{
              y: [0, Math.random() * -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
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

        {/* Featured Technology Spotlight - Improved background */}
        {currentFeaturedTech && (
          <motion.div 
            className="mb-16 relative"
            variants={spotlightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/50">
              {/* Improved featured tech background */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)`,
                  backdropFilter: 'blur(8px)'
                }}
              ></div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 mix-blend-overlay opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="10" style={{stroke: brandColors.primary, strokeWidth: 1}} />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
                </svg>
              </div>
              
              <div className="relative z-10 p-10 flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 flex items-center justify-center">
                  <div className="relative w-48 h-32 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentFeaturedTech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Image
                          src={currentFeaturedTech.logo}
                          alt={`${currentFeaturedTech.name} logo`}
                          width={200}
                          height={100}
                          className="object-contain max-h-32"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeaturedTech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold mb-4" style={{ color: brandColors.primary }}>
                        Featured Technology: {currentFeaturedTech.name}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {currentFeaturedTech.description || 
                          `${currentFeaturedTech.name} is one of our core technologies that helps us deliver cutting-edge solutions to our clients.`}
                      </p>
                      <div className="flex gap-3">
                        <button className="text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all" 
                          style={{ 
                            background: brandColors.primary,
                            boxShadow: `0 4px 14px ${brandColors.primary}30`
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = `${brandColors.primary}e8`;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = brandColors.primary;
                          }}
                        >
                          Learn more <ArrowRight size={16} />
                        </button>
                        <button 
                          className="border px-6 py-3 rounded-full transition-all"
                          style={{ 
                            borderColor: `${brandColors.primary}30`,
                            color: brandColors.primary
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = `${brandColors.primary}08`;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          View projects
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Decorative side element */}
              <div 
                className="absolute top-0 right-0 h-full w-12" 
                style={{ 
                  background: `linear-gradient(to bottom, ${brandColors.primary}, ${brandColors.secondary})`,
                  opacity: 0.2
                }}
              ></div>
            </div>
          </motion.div>
        )}

        {/* Main content */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {flattenedCategories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(prev => prev === category.name ? null : category.name)}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category.name 
                    ? 'text-white shadow-lg scale-105' 
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'}
                `}
                style={
                  activeCategory === category.name 
                    ? { 
                        background: brandColors.primary,
                        boxShadow: `0 4px 14px ${brandColors.primary}30`
                      } 
                    : {}
                }
                variants={fadeInUpVariants}
                whileHover={{
                  scale: activeCategory === category.name ? 1.05 : 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Technologies display - masonry/grid layout */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 lg:gap-6"
            variants={techCardsContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {enhancedTechnologies
              .filter(tech => !activeCategory || categories[activeCategory]?.includes(tech.name))
              .map((tech) => (
                <motion.div
                  key={tech.name}
                  className={`
                    relative overflow-hidden rounded-2xl cursor-pointer shadow-lg
                    ${hoveredTech === tech.name ? 'shadow-2xl' : ''}
                    transform transition-all duration-500 group
                  `}
                  style={{
                    borderWidth: hoveredTech === tech.name ? '2px' : '0px',
                    borderStyle: 'solid',
                    borderColor: hoveredTech === tech.name ? brandColors.primary : 'transparent',
                    boxShadow: hoveredTech === tech.name 
                      ? `0 10px 25px ${brandColors.primary}25` 
                      : '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  variants={techCardVariants}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  whileHover={{ 
                    y: -8,
                    rotateY: 5,
                    rotateX: -5,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  {/* Card header with clearer background - special fix for Spring Boot */}
                  <div className="h-36 p-5 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: tech.name === 'Spring Boot' 
                        ? 'white' // Solid white background for Spring Boot
                        : 'linear-gradient(to bottom right, #ffffff, #f8f9fa)'
                    }}
                  >
                    {/* Logo */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        width={200}
                        height={100}
                        className="object-contain max-h-full drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Glossy effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Background pattern - different for Spring Boot */}
                    {tech.name !== 'Spring Boot' && (
                      <svg className="absolute inset-0 w-full h-full z-0 opacity-10" viewBox="0 0 100 100">
                        <defs>
                          <pattern id={`smallGrid-${tech.name}`} width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#smallGrid-${tech.name})`} />
                      </svg>
                    )}
                  </div>
                  
                  {/* Card content */}
                  <div className="bg-white p-5">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{tech.name}</h3>
                    {tech.description && (
                      <p className="text-xs text-gray-600 line-clamp-2 min-h-[2rem]">{tech.description}</p>
                    )}
                    
                    {/* Animated info link on hover */}
                    <div className={`
                      mt-2 py-1 text-xs font-medium flex items-center gap-1
                      opacity-0 transform translate-y-4 transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0
                    `}
                    style={{ color: brandColors.primary }}
                    >
                      Learn more <ExternalLink size={12} />
                    </div>
                  </div>
                  
                  {/* Bottom highlight line */}
                  <div 
                    className="h-1 w-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                    style={{ 
                      background: brandColors.primary // Solid Hyundai blue
                    }}
                  ></div>
                </motion.div>
              ))}
          </motion.div>
          
          {/* "Show all" button - visible when a category is selected */}
          {activeCategory && (
            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 bg-white/80 hover:bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ color: brandColors.primary }}
              >
                Show All Technologies <ChevronDown className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 