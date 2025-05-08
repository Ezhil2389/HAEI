"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Car, 
  Shield, 
  Gauge, 
  Cog, 
  Code, 
  BarChart, 
  Layers, 
  Cpu, 
  Globe, 
  Smartphone, 
  Zap, 
  Check,
  ArrowRight,
  ChevronRight,
  Users,
  Settings,
  Factory,
  Truck,
  Activity,
  TrendingUp
} from 'lucide-react';

// Define types for the TechIcon component
interface TechIconProps {
  icon: React.ElementType;
  name: string;
  description: string;
  className?: string;
}

// Custom components for the Automotive page
const TechIcon: React.FC<TechIconProps> = ({ icon: Icon, name, description, className = "" }) => {
  return (
    <div className={`flex flex-col items-center text-center p-5 rounded-xl transition-all duration-300 ${className}`}>
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-blue to-active-blue mb-4 text-white">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Define the Automotive solutions data
const solutionsData = [
  {
    id: 1,
    title: "Connected Vehicle Solutions",
    description: "Advanced connectivity solutions that enhance vehicle functionality, safety, and user experience through seamless digital integration.",
    icon: Car,
    features: [
      "Telematics & Vehicle Tracking",
      "In-Vehicle Infotainment Systems",
      "Smartphone Integration",
      "OTA Update Management"
    ],
    image: "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Automotive Software Development",
    description: "Custom software solutions for automotive systems, from embedded systems to advanced driver assistance solutions and vehicle management platforms.",
    icon: Code,
    features: [
      "Embedded Systems Development",
      "ADAS Software Solutions",
      "Vehicle Diagnostic Tools",
      "ECU Programming & Integration"
    ],
    image: "https://images.unsplash.com/photo-1581092921461-39b788113ae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 3,
    title: "Automotive Data Analytics",
    description: "Transform vehicle and operational data into actionable insights for improved performance, safety, and customer experience.",
    icon: BarChart,
    features: [
      "Vehicle Performance Analytics",
      "Predictive Maintenance",
      "Driver Behavior Analysis",
      "Fleet Management Insights"
    ],
    image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 4,
    title: "Manufacturing Excellence",
    description: "Digital solutions that optimize automotive manufacturing processes, enhance quality control, and improve operational efficiency.",
    icon: Factory,
    features: [
      "Smart Factory Implementation",
      "Production Line Optimization",
      "Quality Management Systems",
      "Supply Chain Visibility"
    ],
    image: "https://images.unsplash.com/photo-1589535215328-4d276fb0dca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 5,
    title: "Automotive Cybersecurity",
    description: "Comprehensive security solutions that protect vehicles, systems, and data from cyber threats in the connected automotive ecosystem.",
    icon: Shield,
    features: [
      "Vehicle Cybersecurity Assessment",
      "Secure Software Development",
      "Intrusion Detection Systems",
      "Security Operations Center"
    ],
    image: "https://images.unsplash.com/photo-1630501482851-a0e2b4b6b1d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 6,
    title: "Mobility Solutions",
    description: "Innovative mobility solutions that address the evolving transportation needs of individuals and organizations in the digital age.",
    icon: Truck,
    features: [
      "Fleet Management Systems",
      "Ride-Sharing Platforms",
      "Mobility-as-a-Service",
      "Last-Mile Delivery Solutions"
    ],
    image: "https://images.unsplash.com/photo-1619079382648-7436168d8785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

// Tech stack data
const techStackData = [
  {
    category: "Vehicle Systems",
    technologies: [
      { name: "AUTOSAR", description: "Automotive Open System Architecture" },
      { name: "QNX", description: "Real-time operating system" },
      { name: "Android Automotive", description: "Vehicle-optimized Android OS" },
      { name: "ADAS platforms", description: "Advanced driver assistance systems" }
    ]
  },
  {
    category: "Connectivity & IoT",
    technologies: [
      { name: "V2X", description: "Vehicle-to-everything communication" },
      { name: "5G Telematics", description: "High-speed vehicle connectivity" },
      { name: "IoT Platforms", description: "Connected vehicle ecosystems" },
      { name: "OTA", description: "Over-the-air update systems" },
      { name: "CAN/LIN/FlexRay", description: "Vehicle network protocols" }
    ]
  },
  {
    category: "Data & Analytics",
    technologies: [
      { name: "Vehicle Data Platform", description: "Unified data collection and analysis" },
      { name: "Predictive Analytics", description: "Forward-looking insights" },
      { name: "Telematics Analytics", description: "Usage and behavior analysis" },
      { name: "Machine Learning", description: "Intelligent vehicle systems" }
    ]
  },
  {
    category: "Manufacturing Tech",
    technologies: [
      { name: "Digital Twin", description: "Virtual manufacturing models" },
      { name: "IIoT", description: "Industrial Internet of Things" },
      { name: "MES", description: "Manufacturing Execution Systems" },
      { name: "Quality Management", description: "Automated quality control" }
    ]
  }
];

export default function AutomotivePage() {
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const processRef = useRef(null);
  const techStackRef = useRef(null);
  const casesRef = useRef(null);
  
  // State for active solution
  const [activeSolution, setActiveSolution] = useState(1);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.2 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 });
  const isTechStackInView = useInView(techStackRef, { once: true, amount: 0.2 });
  const isCasesInView = useInView(casesRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-hyundai-blue via-hyundai-blue/90 to-hyundai-blue/80 z-0"></div>
        
        {/* Tech background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-hyundai-blue to-transparent"></div>
        </div>
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Automotive Solutions Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-5"
            >
              <span className="bg-white/10 backdrop-blur-md text-white text-sm font-medium py-1.5 px-4 rounded-full border border-white/20">
                Automotive Solutions
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Driving the Future of <br />
              <span className="text-active-blue">Automotive</span> Technology
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-2xl leading-relaxed mb-10"
            >
              Delivering innovative automotive technology solutions that enhance vehicle performance, connectivity, and manufacturing excellence while shaping the future of mobility.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
              <Link href="#solutions" className="btn-outline-hero">
                Explore Solutions
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center"
          >
            <motion.div 
              animate={{ height: [6, 12, 6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 bg-white rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-gradient mb-6">Innovative Automotive Solutions for the Connected Era</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Hyundai AutoEver India, we deliver comprehensive automotive technology solutions designed to address the complex challenges of the modern automotive industry. Our team of experts combines deep industry knowledge with technical expertise to create customized solutions that drive digital transformation.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  From connected vehicle systems and software development to data analytics and manufacturing excellence, our solutions are tailored to meet the unique needs of automotive OEMs, suppliers, and mobility providers, ensuring maximum efficiency and innovation.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Connected Vehicles", 
                    "Automotive Software", 
                    "Data Analytics", 
                    "Smart Manufacturing",
                    "Cybersecurity",
                    "Mobility Solutions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="text-hyundai-blue mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className="btn-primary inline-flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                alt="Automotive Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <h3 className="text-white text-xl font-bold mb-2">Industry-Leading Expertise</h3>
                  <p className="text-white/80">
                    Our solutions are backed by decades of experience in the automotive industry, providing unparalleled value to our clients across the mobility ecosystem.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Showcase Section */}
      <section 
        id="solutions"
        ref={solutionsRef}
        className="py-20 bg-gray-50"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="bg-hyundai-blue/10 text-hyundai-blue text-sm font-medium py-1 px-3 rounded-full">
                Our Services
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6"
            >
              Comprehensive Automotive Solutions
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Explore our range of automotive solutions designed to help businesses leverage technology for innovation and competitive advantage in the mobility sector.
            </motion.p>
          </div>
          
          {/* Solution tabs */}
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {solutionsData.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution.id)}
                  className={`px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all flex items-center gap-2 ${
                    activeSolution === solution.id
                      ? 'bg-hyundai-blue text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <solution.icon className="h-4 w-4" />
                  {solution.title}
                </button>
              ))}
            </motion.div>
          </div>
          
          {/* Solution details */}
          {solutionsData.map((solution) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionsInView && activeSolution === solution.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className={`${activeSolution === solution.id ? 'block' : 'hidden'}`}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                    <p className="text-lg text-gray-700 mb-8">{solution.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1 mr-4 bg-hyundai-blue/10 rounded-full p-1">
                            <Check className="h-4 w-4 text-hyundai-blue" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                      <Link href="/contact" className="btn-primary">
                        Get Started
                      </Link>
                      <Link href="/case-studies" className="btn-outline inline-flex items-center">
                        Case Studies <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative h-60 md:h-auto">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-hyundai-blue/60 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section 
        ref={techStackRef}
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-sky-blue/5 to-transparent opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-active-blue/5 to-transparent opacity-70 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="bg-hyundai-blue/10 text-hyundai-blue text-sm font-medium py-1 px-3 rounded-full">
                Technology Expertise
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6"
            >
              Cutting-Edge Automotive Technologies
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We leverage the latest automotive technologies to deliver innovative solutions that keep our clients at the forefront of the industry.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStackData.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-5">{category.category}</h3>
                <ul className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-start">
                      <div className="mt-1 mr-3 bg-hyundai-blue/10 rounded-full p-1">
                        <Check className="h-3 w-3 text-hyundai-blue" />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-900">{tech.name}</span>
                        <span className="text-sm text-gray-600">{tech.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-hyundai-blue/5 to-active-blue/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="bg-hyundai-blue/10 text-hyundai-blue text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-gradient mb-6">The Hyundai AutoEver Advantage</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the difference of working with a global technology leader dedicated to advancing the automotive industry through innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gauge,
                title: "Industry Experience",
                description: "Decades of automotive expertise across the global mobility ecosystem."
              },
              {
                icon: Globe,
                title: "Global Presence",
                description: "Local support backed by our worldwide network of automotive technology centers."
              },
              {
                icon: Users,
                title: "Specialized Teams",
                description: "Dedicated automotive technology experts with deep domain knowledge."
              },
              {
                icon: Zap,
                title: "Rapid Innovation",
                description: "Agile development methodologies that accelerate time-to-market."
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                description: "Flexible systems that grow with your business needs and market demands."
              },
              {
                icon: Settings,
                title: "End-to-End Support",
                description: "Comprehensive services from strategy and development to implementation and maintenance."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-blue to-active-blue mb-6 text-white">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-hyundai-blue to-active-blue rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-10"></div>
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute right-20 bottom-0 w-80 h-80 bg-active-blue/20 rounded-full filter blur-3xl translate-y-1/3"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 p-12 md:p-16 items-center relative z-10">
              <div>
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium py-1.5 px-4 rounded-full border border-white/20 mb-6">
                  Drive Innovation Forward
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Revolutionize Your Automotive Technology?
                </h2>
                <p className="text-white/90 text-xl mb-8 max-w-lg leading-relaxed">
                  Partner with Hyundai AutoEver India to accelerate digital transformation and gain a competitive edge in the rapidly evolving mobility landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-white group">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn-outline-white">
                    View Success Stories
                  </Link>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <div className={`w-full h-full bg-gradient-to-br from-sky-blue to-active-blue opacity-${i*20}`}></div>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm">
                    Trusted by leading automotive companies worldwide
                  </p>
                </div>
              </div>
              
              <div className="relative h-60 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1577494242542-f9821fcc9db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Automotive Future"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-hyundai-blue/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 max-w-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <Gauge className="text-white h-5 w-5" />
                      <h4 className="text-white font-semibold">Results That Matter</h4>
                    </div>
                    <p className="text-white/90 text-sm">
                      Our automotive solutions deliver measurable improvements in efficiency, performance, and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 