"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO string format
  image: string;
  slug: string;
  category?: string;
}

interface NewsSectionProps {
  title: string;
  subtitle?: string;
  news: NewsItem[];
  showMoreLink?: string;
}

export default function NewsSection({ 
  title, 
  subtitle, 
  news,
  showMoreLink = '/news'
}: NewsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <motion.h2 
              className="mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          
          {showMoreLink && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href={showMoreLink}
                className="text-hyundai-blue font-medium hover:underline inline-flex items-center"
              >
                View all news
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {news.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,44,95,0.18)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <Link href={`/news/${item.slug}`} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                {item.category && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-hyundai-light-sand text-hyundai-blue rounded-full mb-3">
                    {item.category}
                  </span>
                )}
                
                <Link href={`/news/${item.slug}`}>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-hyundai-blue transition-colors">
                    {item.title}
                  </h3>
                </Link>
                
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={item.date}>
                    {format(new Date(item.date), 'MMMM d, yyyy')}
                  </time>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">{item.excerpt}</p>
                
                <Link 
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center text-hyundai-blue font-medium hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}