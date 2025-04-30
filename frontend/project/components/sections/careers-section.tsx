"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface CareersSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

// Hyundai brand colors
const brandColors = {
  primary: '#002C5F', // Hyundai primary blue
  secondary: '#00AAD2', // Hyundai secondary blue
  accent: '#0073A6', // Hyundai accent blue
  light: '#E4EBF1' // Light variant
};

export default function CareersSection({
  title,
  subtitle,
  ctaText,
  ctaLink
}: CareersSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const listItems = [
    { title: "Software Engineers", description: "Build innovative automotive solutions with cutting-edge technologies" },
    { title: "Data Scientists", description: "Transform automotive data into actionable insights and predictions" },
    { title: "UX/UI Designers", description: "Create the interfaces that define the future of automotive experiences" },
    { title: "Project Managers", description: "Lead cross-functional teams developing next-generation automotive IT" }
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden"
      ref={ref}
      style={{ background: brandColors.primary }}
    >
      {/* Abstract design elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,0 L100,100" stroke="white" strokeWidth="0.5" />
          <path d="M100,0 L0,100" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left content */}
          <motion.div 
            className="lg:w-1/2 text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-8 text-white/90 max-w-xl">{subtitle}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {listItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition duration-300"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <Link 
              href={ctaLink}
              className="inline-block px-8 py-4 bg-white text-lg font-medium text-primary rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
              style={{ color: brandColors.primary }}
            >
              {ctaText}
            </Link>
          </motion.div>
          
          {/* Right image/illustration */}
          <motion.div 
            className="lg:w-1/2"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-brandColors.secondary/30 to-transparent"></div>
              
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Automotive IT professionals at work"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-xl"
                />
                
                <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-xl text-white">
                  <blockquote className="text-lg italic mb-4">
                    "At Hyundai AutoEver, I get to work on cutting-edge automotive technologies that shape the future of mobility."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 mr-4"></div>
                    <div>
                      <p className="font-medium">Priya Sharma</p>
                      <p className="text-sm text-white/70">Senior Software Engineer, 3 years at HAEI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 