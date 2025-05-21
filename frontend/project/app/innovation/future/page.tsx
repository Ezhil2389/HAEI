"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Rocket, 
  ArrowRight,
  ChevronRight,
  Globe,
  Cpu,
  Zap,
  Leaf
} from 'lucide-react';

export default function InnovationFuturePage() {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const initiativesRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const isInitiativesInView = useInView(initiativesRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  // Future initiatives data
  const futureInitiativesData = [
    {
      title: "Sustainable Mobility",
      description: "Leading the transformation towards carbon-neutral transportation through electric mobility, hydrogen technology, and circular economy principles.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1593941707882-a5bfcf637ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      title: "Connected Ecosystem",
      description: "Building an integrated digital ecosystem that connects vehicles, infrastructure, and services to create seamless mobility experiences.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Advanced Computing",
      description: "Leveraging quantum computing and advanced algorithms to solve complex mobility challenges and optimize transportation systems.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Energy Innovation",
      description: "Developing next-generation energy storage, charging infrastructure, and grid integration solutions to power the future of mobility.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1618567057180-6bf3e32da881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Future projects data
  const futureProjectsData = [
    {
      title: "Quantum Mobility Optimization",
      description: "Harnessing quantum computing to optimize traffic flow, reduce congestion, and minimize energy consumption across urban transportation systems.",
      status: "Research Phase",
      completion: "30%"
    },
    {
      title: "Circular Materials Lab",
      description: "Developing biodegradable and recyclable materials for vehicle components to minimize environmental impact and promote circular economy principles.",
      status: "Development Phase",
      completion: "60%"
    },
    {
      title: "Autonomous Mobility Platform",
      description: "Creating an open platform for autonomous vehicle development that accelerates innovation while ensuring safety and regulatory compliance.",
      status: "Pilot Phase",
      completion: "75%"
    }
  ];

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Future Innovation Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800/80 via-blue-900/80 to-blue-950/95"></div>
        </motion.div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-white/10 backdrop-blur-md rounded-full"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-5"
            >
              <span className="bg-white/10 backdrop-blur-md text-white text-sm font-medium py-1.5 px-4 rounded-full border border-white/20">
                Future Initiatives
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Inventing <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400">Tomorrow</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Discover our forward-looking initiatives that are shaping the future of mobility, connectivity, and sustainable technologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#future-initiatives" className="btn-primary">
                Explore Future Initiatives
              </Link>
              <Link href="/innovation" className="btn-outline-hero">
                Innovation Overview
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section 
        ref={overviewRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Our Vision</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Shaping the Future
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 mb-6"
            >
              Our Future Initiatives division is dedicated to exploring emerging technologies and trends that will define the next decade of innovation. We invest in breakthrough ideas that have the potential to transform industries and create positive impact at scale.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-700 mb-10"
            >
              Through strategic investments, research collaborations, and internal innovation labs, we're building the technologies and solutions that will address tomorrow's greatest challenges in mobility, sustainability, and digital transformation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden h-[400px] mt-12"
            >
              <Image
                src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Future Technologies"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Strategic Innovation</h3>
                <p className="text-white/90 max-w-md">Our strategic innovation framework guides our exploration of emerging technologies and future trends.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Initiatives Section */}
      <section 
        id="future-initiatives"
        ref={initiativesRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInitiativesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Strategic Focus Areas</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInitiativesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Future Initiatives
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInitiativesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Explore our forward-looking initiatives that are shaping the future of technology and creating new possibilities for tomorrow.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {futureInitiativesData.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInitiativesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px]"
              >
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:via-black/40 transition-all duration-300"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-gradient-to-r mb-5 p-3 rounded-lg inline-block w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md">
                    <initiative.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{initiative.title}</h3>
                  <p className="text-white/90 mb-6 max-w-md">{initiative.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">In Progress</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Future Projects
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Get a glimpse of the groundbreaking projects we're currently developing that will shape the future.
            </motion.p>
          </div>
          
          <div className="space-y-6">
            {futureProjectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-8 border border-blue-100/50 shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium">Status:</span>
                      <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{project.status}</span>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/4">
                    <div className="relative pt-1">
                      <div className="text-right mb-2">
                        <span className="text-sm font-semibold inline-block text-blue-600">
                          {project.completion}
                        </span>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div style={{ width: project.completion }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-sky-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Partner With Us to Shape the Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Join our ecosystem of partners, researchers, and innovators as we build the technologies that will power tomorrow's world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary-light">
                Contact Our Future Initiatives Team
              </Link>
              <Link href="/innovation" className="btn-outline-light">
                Innovation Overview
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 