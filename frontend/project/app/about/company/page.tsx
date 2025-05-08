"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function CompanyPage() {
  // Animation variants for staggered animations
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

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-hyundai-blue via-hyundai-blue/90 to-hyundai-blue/80 z-0"></div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 z-0" 
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "80px 80px"
          }}
        ></div>
        
        <div className="absolute top-0 left-0 w-1/3 h-screen bg-gradient-radial from-sky-blue/20 to-transparent opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-active-blue/10 to-transparent opacity-40 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-5"
            >
              <span className="bg-white/10 backdrop-blur-md text-white text-sm font-medium py-1.5 px-4 rounded-full border border-white/20">
                About Hyundai AutoEver India
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            >
              Driving <span className="text-active-blue">Innovation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10"
            >
              As a subsidiary of Hyundai Motor Group, we deliver cutting-edge IT solutions that empower businesses across automotive, manufacturing, and enterprise sectors.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="#mission" className="btn-outline-hero">
                Our Mission
              </Link>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mx-auto"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Hyundai AutoEver India Headquarters"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              
              {/* Stats overlaid on image */}
              <div className="absolute bottom-0 inset-x-0 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="glass-card rounded-2xl px-6 py-5 flex-1 backdrop-blur-lg bg-black/30 border border-white/10 transform-gpu">
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="bg-white/20 h-14 w-14 rounded-xl flex items-center justify-center mr-4 shadow-inner">
                      <span className="text-white text-2xl font-bold">17+</span>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Years of</p>
                      <p className="text-white font-semibold text-lg">Excellence</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl px-6 py-5 flex-1 backdrop-blur-lg bg-black/30 border border-white/10 transform-gpu">
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="bg-white/20 h-14 w-14 rounded-xl flex items-center justify-center mr-4 shadow-inner">
                      <span className="text-white text-2xl font-bold">1200+</span>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">IT</p>
                      <p className="text-white font-semibold text-lg">Professionals</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl px-6 py-5 flex-1 backdrop-blur-lg bg-black/30 border border-white/10 transform-gpu">
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="bg-white/20 h-14 w-14 rounded-xl flex items-center justify-center mr-4 shadow-inner">
                      <span className="text-white text-2xl font-bold">200+</span>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Global</p>
                      <p className="text-white font-semibold text-lg">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Company badge */}
            <div className="absolute -top-6 right-6 glass-card rounded-2xl px-6 py-4 backdrop-blur-lg bg-black/30 border border-white/10 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src="/hyundai-autoever-logo-white.svg"
                    alt="Hyundai AutoEver Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">Hyundai AutoEver India</p>
                  <p className="text-white/70 text-sm">Part of Hyundai Motor Group</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="mission" className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                  alt="Hyundai AutoEver India Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white rounded-[2rem] p-8 shadow-xl max-w-sm">
                <h4 className="text-hyundai-blue mb-3">Established 2006</h4>
                <p className="text-gray-700">
                  Starting with a small team, we've grown to become a key technology partner for Hyundai Motor Group and clients across industries.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-[2rem] p-8 md:p-12"
            >
              <h2 className="mb-8 text-gradient">Our Vision & Mission</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-hyundai-blue mb-3">Vision</h4>
                  <p className="text-lg text-gray-700">
                    To be the global IT innovation partner that creates value through digital transformation, driving the future mobility ecosystem.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-hyundai-blue mb-3">Mission</h4>
                  <p className="text-lg text-gray-700">
                    Provide innovative IT solutions and services that exceed customer expectations and create sustainable value for all stakeholders.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-hyundai-blue mb-3">Values</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Check className="text-hyundai-blue h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Customer First</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-hyundai-blue h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Innovation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-hyundai-blue h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Collaboration</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-hyundai-blue h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Integrity</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-hyundai-light-sand relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From our founding to today, we've continuously evolved to meet the changing technological needs of our clients
            </motion.p>
          </div>
          
          <motion.div 
            className="relative max-w-4xl mx-auto py-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-hyundai-blue/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              <motion.div variants={itemVariants} className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-hyundai-blue text-white rounded-full z-10 shadow-lg">
                    2006
                  </div>
                </div>
                <div className="glass-card rounded-[2rem] p-8">
                  <h4 className="text-hyundai-blue mb-3">Foundation</h4>
                  <p className="text-gray-700">
                    Hyundai AutoEver India was established in Bangalore as a subsidiary of Hyundai Motor Group to provide IT services for automotive and enterprise businesses.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-hyundai-blue text-white rounded-full z-10 shadow-lg">
                    2010
                  </div>
                </div>
                <div className="glass-card rounded-[2rem] p-8">
                  <h4 className="text-hyundai-blue mb-3">Expansion</h4>
                  <p className="text-gray-700">
                    Expanded operations to include a wider range of IT services and opened a second office in Hyderabad to support growing client base.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-hyundai-blue text-white rounded-full z-10 shadow-lg">
                    2015
                  </div>
                </div>
                <div className="glass-card rounded-[2rem] p-8">
                  <h4 className="text-hyundai-blue mb-3">Innovation Center</h4>
                  <p className="text-gray-700">
                    Established R&D Innovation Center focused on developing cutting-edge technologies for connected vehicles, cloud computing, and AI.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-hyundai-blue text-white rounded-full z-10 shadow-lg">
                    2023
                  </div>
                </div>
                <div className="glass-card rounded-[2rem] p-8">
                  <h4 className="text-hyundai-blue mb-3">Today & Beyond</h4>
                  <p className="text-gray-700">
                    Today, we employ over 1,200 IT professionals in India and continue to grow our capabilities in advanced technologies including AI, IoT, and cloud services.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Core Competencies
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our expertise spans multiple domains, combining industry knowledge with technological innovation
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Competency cards */}
            <motion.div 
              variants={itemVariants}
              className="glass-card rounded-[2rem] p-8 card-hover"
            >
              <div className="h-16 w-16 bg-sky-blue rounded-2xl flex items-center justify-center mb-6">
                <Image
                  src="/icons/it-solutions.svg"
                  alt="Automotive IT"
                  width={32}
                  height={32}
                />
              </div>
              <h4 className="text-hyundai-blue mb-3">Automotive IT</h4>
              <p className="text-gray-700 mb-6">
                Specialized solutions for automotive manufacturing, connected vehicles, and mobility platforms.
              </p>
              <Link 
                href="/services/automotive" 
                className="text-hyundai-blue font-medium flex items-center group"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="glass-card rounded-[2rem] p-8 card-hover"
            >
              <div className="h-16 w-16 bg-sky-blue rounded-2xl flex items-center justify-center mb-6">
                <Image
                  src="/icons/cloud.svg"
                  alt="Cloud Services"
                  width={32}
                  height={32}
                />
              </div>
              <h4 className="text-hyundai-blue mb-3">Cloud Services</h4>
              <p className="text-gray-700 mb-6">
                End-to-end cloud solutions from migration to management, with expertise in AWS, Azure, and GCP.
              </p>
              <Link 
                href="/services/cloud" 
                className="text-hyundai-blue font-medium flex items-center group"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="glass-card rounded-[2rem] p-8 card-hover"
            >
              <div className="h-16 w-16 bg-sky-blue rounded-2xl flex items-center justify-center mb-6">
                <Image
                  src="/icons/consulting.svg"
                  alt="Enterprise Solutions"
                  width={32}
                  height={32}
                />
              </div>
              <h4 className="text-hyundai-blue mb-3">Enterprise Solutions</h4>
              <p className="text-gray-700 mb-6">
                Comprehensive ERP, CRM, and business process management systems customized for your needs.
              </p>
              <Link 
                href="/services/it-solutions" 
                className="text-hyundai-blue font-medium flex items-center group"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hyundai-blue text-white relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Our Journey
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how Hyundai AutoEver India can help drive your business forward with innovative IT solutions tailored to your needs.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/services" className="btn-outline-hero">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 