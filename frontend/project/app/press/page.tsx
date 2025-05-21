"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Newspaper,
  FileText,
  Download,
  Calendar,
  ChevronRight
} from 'lucide-react';

export default function PressPage() {
  const headerRef = useRef(null);
  const pressRef = useRef(null);
  const resourcesRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: true });
  const isPressInView = useInView(pressRef, { once: true, amount: 0.2 });
  const isResourcesInView = useInView(resourcesRef, { once: true, amount: 0.2 });

  // Press releases data
  const pressReleasesData = [
    {
      id: "company-launches-new-autonomous-vehicle-platform",
      title: "Company Launches New Autonomous Vehicle Platform",
      date: "March 15, 2024",
      summary: "We are excited to announce the launch of our next-generation autonomous vehicle platform, featuring advanced AI capabilities and enhanced safety features.",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "strategic-partnership-with-leading-automaker",
      title: "Strategic Partnership with Leading Automaker",
      date: "February 28, 2024",
      summary: "We have entered into a strategic partnership with a leading automaker to develop next-generation connected vehicle solutions.",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "company-expands-global-operations",
      title: "Company Expands Global Operations",
      date: "January 15, 2024",
      summary: "We are expanding our global operations with new offices in key markets to better serve our growing international customer base.",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Media resources data
  const mediaResourcesData = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats and color schemes",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Brand Guidelines",
      description: "Comprehensive guide to our brand identity and usage",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Product Images",
      description: "High-quality product images and renders",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Executive Team Photos",
      description: "Professional photos of our executive team",
      icon: FileText,
      downloadUrl: "#"
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative py-20 bg-gradient-to-br from-blue-700 to-sky-800 text-white"
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-white/90 mb-10">
              Stay updated with our latest news, press releases, and media resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section 
        ref={pressRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPressInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Latest News</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isPressInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Press Releases
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleasesData.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isPressInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{release.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4">
                    {release.summary}
                  </p>
                  
                  <Link 
                    href={`/press/${release.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources Section */}
      <section 
        ref={resourcesRef}
        className="py-20 bg-gray-50"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isResourcesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Resources</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isResourcesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Media Resources
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isResourcesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Access our media kit, brand assets, and other resources for journalists and media professionals.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaResourcesData.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isResourcesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 bg-blue-100 rounded-xl inline-block mb-6">
                  <resource.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-700 mb-4">
                  {resource.description}
                </p>
                
                <a 
                  href={resource.downloadUrl}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  <span>Download</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Inquiries</h2>
            <p className="text-lg text-gray-700 mb-8">
              For media inquiries, please contact our press team. We're here to help with your questions and provide additional information.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Press Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 