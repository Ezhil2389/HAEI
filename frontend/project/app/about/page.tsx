 "use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Globe, Users, BookOpen, Building } from 'lucide-react';

export default function AboutPage() {
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
                About Us
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            >
              Our <span className="text-active-blue">Story</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10"
            >
              Hyundai AutoEver India is a leading IT services company specializing in automotive technology solutions and enterprise IT services. We combine industry expertise with cutting-edge technology to drive digital transformation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="#journey" className="btn-outline-hero">
                Our Journey
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                      <span className="text-white text-2xl font-bold">2006</span>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Year</p>
                      <p className="text-white font-semibold text-lg">Founded</p>
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
                      <span className="text-white text-2xl font-bold">45+</span>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Countries</p>
                      <p className="text-white font-semibold text-lg">Worldwide</p>
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

      {/* Our History Section */}
      <section id="journey" className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="badge"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-2xl"
            >
              Milestones in Our <span className="text-gradient">Growth Story</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 text-lg mt-4"
            >
              From our humble beginnings to becoming a leading IT partner for global enterprises, our journey has been defined by innovation, excellence, and customer success.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-hyundai-blue via-active-blue to-sky-blue rounded-full opacity-30"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex justify-end order-1 md:order-1">
                    <div className="max-w-md glass-card rounded-[2rem] p-8">
                      <span className="text-hyundai-blue font-semibold">2006</span>
                      <h3 className="text-xl font-bold mb-3">Foundation</h3>
                      <p className="text-gray-700">Established operations in India with a team of 50 IT professionals focused on supporting Hyundai Motor Group's IT needs in the region.</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-hyundai-blue z-10">
                    <Building className="text-hyundai-blue h-6 w-6" />
                  </div>
                  
                  <div className="md:w-1/2 order-2 md:order-2">
                    <div className="relative h-[200px] w-full md:w-[90%] rounded-[2rem] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                        alt="HAEI Foundation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 order-2 md:order-1">
                    <div className="relative h-[200px] w-full md:w-[90%] ml-auto rounded-[2rem] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                        alt="HAEI Expansion"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-hyundai-blue z-10">
                    <Users className="text-hyundai-blue h-6 w-6" />
                  </div>
                  
                  <div className="md:w-1/2 order-1 md:order-2">
                    <div className="max-w-md glass-card rounded-[2rem] p-8 ml-auto">
                      <span className="text-hyundai-blue font-semibold">2010</span>
                      <h3 className="text-xl font-bold mb-3">Expansion</h3>
                      <p className="text-gray-700">Expanded operations with a new development center in Bangalore and grew to 300+ employees, offering services to external clients in the automotive and manufacturing sectors.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex justify-end order-1 md:order-1">
                    <div className="max-w-md glass-card rounded-[2rem] p-8">
                      <span className="text-hyundai-blue font-semibold">2015</span>
                      <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
                      <p className="text-gray-700">Launched Digital Transformation services, helping clients modernize legacy systems and adopt cloud technologies, IoT solutions, and data analytics platforms.</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-hyundai-blue z-10">
                    <BookOpen className="text-hyundai-blue h-6 w-6" />
                  </div>
                  
                  <div className="md:w-1/2 order-2 md:order-2">
                    <div className="relative h-[200px] w-full md:w-[90%] rounded-[2rem] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                        alt="Digital Transformation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 order-2 md:order-1">
                    <div className="relative h-[200px] w-full md:w-[90%] ml-auto rounded-[2rem] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                        alt="Global Expansion"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-hyundai-blue z-10">
                    <Globe className="text-hyundai-blue h-6 w-6" />
                  </div>
                  
                  <div className="md:w-1/2 order-1 md:order-2">
                    <div className="max-w-md glass-card rounded-[2rem] p-8 ml-auto">
                      <span className="text-hyundai-blue font-semibold">Present</span>
                      <h3 className="text-xl font-bold mb-3">Global Footprint</h3>
                      <p className="text-gray-700">Today, with over 1,200 IT professionals, HAEI serves clients across 45+ countries, providing end-to-end IT solutions across automotive, manufacturing, and enterprise sectors.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Navigation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="badge"
            >
              Explore More
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-2xl"
            >
              Discover <span className="text-gradient">Who We Are</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 text-lg mt-4"
            >
              Learn more about different aspects of our organization through these specialized pages.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-hover rounded-[2rem] bg-white p-8 shadow-sm border border-gray-100"
            >
              <div className="rounded-xl bg-sky-blue/10 h-14 w-14 flex items-center justify-center mb-6">
                <Building className="h-7 w-7 text-hyundai-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Company</h3>
              <p className="text-gray-700 mb-6">Learn about our vision, mission, and values that guide our operations and innovation.</p>
              <Link href="/about/company" className="flex items-center font-medium text-hyundai-blue group">
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-hover rounded-[2rem] bg-white p-8 shadow-sm border border-gray-100"
            >
              <div className="rounded-xl bg-sky-blue/10 h-14 w-14 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-hyundai-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Leadership</h3>
              <p className="text-gray-700 mb-6">Meet our executive team and board members who lead our company's strategy and growth.</p>
              <Link href="/about/leadership" className="flex items-center font-medium text-hyundai-blue group">
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-hover rounded-[2rem] bg-white p-8 shadow-sm border border-gray-100"
            >
              <div className="rounded-xl bg-sky-blue/10 h-14 w-14 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-hyundai-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-gray-700 mb-6">Explore our global presence with offices and operations across key technology hubs worldwide.</p>
              <Link href="/about/global-network" className="flex items-center font-medium text-hyundai-blue group">
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-hyundai-blue to-active-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Contact our team to learn how we can help drive your digital transformation journey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary-light">
                Contact Us
              </Link>
              <Link href="/services" className="btn-outline-light">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}