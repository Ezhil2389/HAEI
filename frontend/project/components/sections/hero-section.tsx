"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSlide {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  overlayColor?: string;
}

interface HeroSectionProps {
  slides: HeroSlide[];
  textPosition?: 'left' | 'center' | 'right';
  autoplaySpeed?: number;
}

// Particle animation component
const Particles = () => {
  return (
    <div className="absolute inset-0 z-10 opacity-30">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
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
  );
};

export default function HeroSection({
  slides,
  textPosition = 'center',
  autoplaySpeed = 6000, // 6 seconds per slide
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  // Autoplay functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplaySpeed);
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length, autoplaySpeed]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slide = slides[currentSlide];
  const titleWords = slide.title.split(' ');

  const textPositionClasses = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end',
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden" ref={containerRef}>
      {/* Animated Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`slide-bg-${currentSlide}`}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ y: springY }}
        >
          <Image
            src={slide.backgroundImage}
            alt={`Slide ${currentSlide + 1}`}
            fill
            priority
            className="object-cover"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"
            style={{ 
              backgroundColor: slide.overlayColor || 'rgba(0, 44, 95, 0.7)',
              opacity: springOpacity 
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Animated Particles */}
      <Particles />

      {/* Content */}
      <div className="container-custom relative z-10 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`slide-content-${currentSlide}`}
            className={cn(
              "max-w-3xl flex flex-col gap-8", 
              textPosition === "left" ? "text-left justify-start" : textPositionClasses[textPosition]
            )}
            style={{ scale: springScale }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative element */}
            <motion.div 
              className={cn("w-20 h-1.5 rounded-full bg-white mb-4", 
                textPosition === 'center' ? 'mx-auto' : textPosition === 'right' ? 'ml-auto' : ''
              )}
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <div className="overflow-hidden">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight drop-shadow-md"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed max-w-3xl drop-shadow-md"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {slide.subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mt-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                href={slide.primaryCta.href} 
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {slide.primaryCta.text}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              {slide.secondaryCta && (
                <Link 
                  href={slide.secondaryCta.href} 
                  className="btn-outline-hero group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {slide.secondaryCta.text}
                  </span>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Carousel Controls - REMOVED */}
        
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <span className="text-white text-sm mb-2 tracking-wider font-light uppercase">Scroll Down</span>
        <div className="w-7 h-12 border border-white/50 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ 
              y: [0, 14, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-2"
        >
          <ChevronDown className="h-6 w-6 text-white/80" />
        </motion.div>
      </motion.div>
      
      {/* Side pattern elements - reduced to just one on each side */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 border border-white/10 rounded-full" />
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 border border-white/10 rounded-full" />
    </section>
  );
}