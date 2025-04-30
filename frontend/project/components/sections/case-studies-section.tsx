"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Clock, Users, Zap } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  icon?: 'time' | 'efficiency' | 'users' | 'award';
}

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  metrics?: Metric[];
  logo?: string;
}

interface CaseStudiesSectionProps {
  title: string;
  subtitle?: string;
  caseStudies: CaseStudy[];
}

// Hyundai brand colors
const brandColors = {
  primary: '#002C5F', // Hyundai primary blue
  secondary: '#00AAD2', // Hyundai secondary blue
  accent: '#0073A6', // Hyundai accent blue
  light: '#E4EBF1' // Light variant
};

export default function CaseStudiesSection({
  title,
  subtitle,
  caseStudies
}: CaseStudiesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(caseStudies.map(cs => cs.category)));

  const filteredCaseStudies = selectedCategory 
    ? caseStudies.filter(cs => cs.category === selectedCategory)
    : caseStudies;

  const getIcon = (type?: string) => {
    switch (type) {
      case 'time':
        return <Clock className="w-5 h-5" />;
      case 'efficiency':
        return <Zap className="w-5 h-5" />;
      case 'users':
        return <Users className="w-5 h-5" />;
      case 'award':
        return <Award className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
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

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
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

        {/* Category filters */}
        {categories.length > 0 && (
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`
                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                ${!selectedCategory 
                  ? 'text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 hover:bg-white hover:shadow-md'}
              `}
              style={
                !selectedCategory 
                  ? { 
                      background: brandColors.primary,
                      boxShadow: `0 4px 14px ${brandColors.primary}30`
                    } 
                  : {}
              }
              variants={itemVariants}
              whileHover={{
                scale: !selectedCategory ? 1.05 : 1.03,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              All Case Studies
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category 
                    ? 'text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-white hover:shadow-md'}
                `}
                style={
                  selectedCategory === category 
                    ? { 
                        background: brandColors.primary,
                        boxShadow: `0 4px 14px ${brandColors.primary}30`
                      } 
                    : {}
                }
                variants={itemVariants}
                whileHover={{
                  scale: selectedCategory === category ? 1.05 : 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Case studies grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredCaseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {caseStudy.logo && (
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow">
                    <Image
                      src={caseStudy.logo}
                      alt={`${caseStudy.title} logo`}
                      width={80}
                      height={30}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-primary-600 rounded-full" 
                    style={{ backgroundColor: brandColors.primary }}>
                    {caseStudy.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-5 line-clamp-2">{caseStudy.description}</p>
                
                {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    {caseStudy.metrics.map((metric, index) => (
                      <div 
                        key={index} 
                        className="flex items-start"
                      >
                        <div className="mr-3 p-2 rounded-lg" style={{ backgroundColor: `${brandColors.primary}10` }}>
                          <span style={{ color: brandColors.primary }}>
                            {getIcon(metric.icon)}
                          </span>
                        </div>
                        <div>
                          <p className="text-xl font-bold" style={{ color: brandColors.primary }}>{metric.value}</p>
                          <p className="text-xs text-gray-600">{metric.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <Link 
                  href={`/case-studies/${caseStudy.slug}`}
                  className="inline-flex items-center text-sm font-medium transition-colors gap-1.5"
                  style={{ color: brandColors.primary }}
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all link - if filtered */}
        {selectedCategory && (
          <div className="mt-12 text-center">
            <Link 
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
              style={{ backgroundColor: brandColors.primary }}
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
} 