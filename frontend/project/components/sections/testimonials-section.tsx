"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  logo: string;
  image?: string;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

// Hyundai brand colors
const brandColors = {
  primary: '#002C5F', // Hyundai primary blue
  secondary: '#00AAD2', // Hyundai secondary blue
  accent: '#0073A6', // Hyundai accent blue
  light: '#E4EBF1' // Light variant
};

export default function TestimonialsSection({
  title,
  subtitle,
  testimonials
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [autoplay, setAutoplay] = useState(true);

  // Handle autoplay
  useEffect(() => {
    if (!autoplay || !isInView) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplay, activeIndex, isInView]);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      className="py-24 relative overflow-hidden"
      ref={ref}
      style={{ background: '#ffffff' }}
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: brandColors.primary }}></div>
        <div className="absolute bottom-10 -left-20 w-60 h-60 rounded-full opacity-5 blur-3xl"
          style={{ background: brandColors.secondary }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="mb-4 text-gray-900"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p
              className="text-lg text-gray-700"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className="mt-8 relative">
          <div className="relative overflow-hidden h-[500px] md:h-[450px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col md:flex-row items-center md:items-stretch"
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0 p-6 md:p-12 flex items-center">
                  <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 relative">
                    {/* Quote icon */}
                    <div 
                      className="absolute -top-6 -left-6 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: brandColors.primary }}
                    >
                      <Quote className="text-white w-6 h-6" />
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="shrink-0 mr-4">
                        <Image 
                          src={testimonials[activeIndex].logo}
                          alt={testimonials[activeIndex].company}
                          width={80}
                          height={40}
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonials[activeIndex].author}</p>
                        <p className="text-sm text-gray-600">{testimonials[activeIndex].position}</p>
                        <p className="text-sm" style={{ color: brandColors.primary }}>{testimonials[activeIndex].company}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 p-4 md:p-6 flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 w-full max-w-lg aspect-video">
                    <Image
                      src={testimonials[activeIndex].image || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
                      alt={`${testimonials[activeIndex].company} project`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="font-medium mb-1">Project Highlight</p>
                        <p className="text-sm text-white/80">Solutions delivered for {testimonials[activeIndex].company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full shadow-md hover:shadow-lg transition-all"
              style={{ background: brandColors.light }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" style={{ color: brandColors.primary }} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={{ 
                    background: index === activeIndex ? brandColors.primary : undefined 
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full shadow-md hover:shadow-lg transition-all"
              style={{ background: brandColors.light }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" style={{ color: brandColors.primary }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 