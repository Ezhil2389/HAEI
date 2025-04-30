"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  ctaText?: string;
  ctaLink?: string;
  imagePosition?: 'left' | 'right';
}

export default function AboutSection({
  title,
  subtitle,
  description,
  image,
  stats,
  ctaText = 'Learn more about us',
  ctaLink = '/about',
  imagePosition = 'left',
}: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-hyundai-light-sand to-white opacity-50" />

      <div className="container-custom relative">
        <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          {/* Image */}
          <motion.div 
            className="lg:w-1/2 relative h-[600px] w-full rounded-[2rem] overflow-hidden"
            style={{ scale }}
          >
            <motion.div
              className="absolute inset-0 glass"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            />
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              style={{ y }}
            />
          </motion.div>

          {/* Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: imagePosition === 'right' ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-[2rem] p-8 md:p-12"
            >
              {subtitle && (
                <motion.p 
                  className="text-hyundai-blue font-medium mb-4 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {subtitle}
                </motion.p>
              )}
              
              <motion.h2 
                className="mb-6 text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {title}
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {description}
              </motion.p>

              {stats && (
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center glass p-5 rounded-xl flex flex-col justify-center items-center h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-3xl md:text-4xl font-bold text-hyundai-blue mb-3">{stat.value}</p>
                      <p className="text-gray-600 text-sm whitespace-nowrap">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link 
                  href={ctaLink}
                  className="btn-primary group"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}