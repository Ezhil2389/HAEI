"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  BarChart, 
  Layers, 
  Cpu, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

// Service data
const servicesData = [
  {
    id: 1,
    title: "IT Solutions",
    description: "Comprehensive IT solutions including enterprise systems, cloud infrastructure, and custom software development.",
    icon: Server,
    href: "/services/it-solutions",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Automotive",
    description: "Specialized solutions for the automotive industry including connected vehicle platforms and manufacturing systems.",
    icon: Cpu,
    href: "/services/automotive",
    image: "https://images.unsplash.com/photo-1547730123-991bc16e30d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Cloud Services",
    description: "Scalable cloud solutions for businesses of all sizes, including migration, managed services, and optimization.",
    icon: Cloud,
    href: "/services/cloud",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: 4,
    title: "Consulting",
    description: "Strategic IT consulting to align technology initiatives with business objectives and drive digital transformation.",
    icon: Layers,
    href: "/services/consulting",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "from-emerald-500 to-emerald-600"
  }
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const approachRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-40 pb-20 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-hyundai-blue via-hyundai-blue/90 to-hyundai-blue/80 z-0"></div>
        
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
                Our Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Elevating Business with <br />
              <span className="text-active-blue">Technology Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Hyundai AutoEver India offers a comprehensive range of technology services designed to drive innovation, efficiency, and growth for businesses across industries.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link href="#services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn-outline-hero">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section 
        id="services"
        ref={servicesRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="bg-hyundai-blue/10 text-hyundai-blue text-sm font-medium py-1 px-3 rounded-full">
                What We Offer
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6"
            >
              Our Service Offerings
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We provide a wide range of technology services tailored to meet the unique needs of our clients, driving digital transformation and business growth.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-block mb-4">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm md:text-base max-w-md mx-auto">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-white p-5 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <Link 
                    href={service.href}
                    className="flex items-center justify-between text-hyundai-blue font-medium"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
                
                <Link 
                  href={service.href}
                  className="absolute inset-0 z-10"
                  aria-label={`Learn more about ${service.title}`}
                ></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section 
        ref={approachRef}
        className="py-20 bg-gray-50"
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4">
                  <span className="bg-hyundai-blue/10 text-hyundai-blue text-sm font-medium py-1 px-3 rounded-full">
                    Our Approach
                  </span>
                </div>
                
                <h2 className="text-gradient mb-6">How We Deliver Excellence</h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  At Hyundai AutoEver India, we follow a structured approach to deliver high-quality solutions that address the unique challenges and requirements of each client.
                </p>
                
                <div className="space-y-6 mb-8">
                  {[
                    {
                      title: "Client-Centric Focus",
                      description: "We place our clients at the center of everything we do, ensuring that our solutions address their specific needs and objectives."
                    },
                    {
                      title: "Industry Expertise",
                      description: "Our deep understanding of various industries enables us to deliver tailored solutions that address sector-specific challenges."
                    },
                    {
                      title: "Innovative Thinking",
                      description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions that drive business value."
                    },
                    {
                      title: "End-to-End Support",
                      description: "From initial consultation to implementation and ongoing support, we provide comprehensive services throughout the entire project lifecycle."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <Link href="/about/company" className="btn-primary inline-flex items-center">
                  About Our Company <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isApproachInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <div className="text-white text-3xl font-bold mb-2">100+</div>
                    <p className="text-white/90">
                      Successful projects delivered for clients across industries
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 bg-hyundai-blue rounded-2xl p-6 shadow-xl max-w-xs">
                <h3 className="text-white text-xl font-bold mb-3">Industry-Leading Expertise</h3>
                <p className="text-white/80">
                  Our team combines deep technical knowledge with industry expertise to deliver solutions that drive tangible business results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-hyundai-blue to-hyundai-dark-blue rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-white text-3xl md:text-4xl font-bold mb-6"
                >
                  Ready to Transform Your Business?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-white/80 text-lg mb-8"
                >
                  Let's discuss how our services can help you achieve your business objectives and drive growth through technology.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/contact" className="btn-white">
                    Get in Touch
                  </Link>
                  <Link href="/case-studies" className="btn-outline-hero">
                    View Case Studies
                  </Link>
                </motion.div>
              </div>
              
              <div className="hidden md:block relative h-full min-h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Collaborative Teamwork"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-hyundai-blue"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 