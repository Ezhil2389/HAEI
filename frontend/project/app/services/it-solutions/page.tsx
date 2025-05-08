"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  Globe, 
  Smartphone, 
  Zap, 
  Check,
  ArrowRight,
  ChevronRight,
  Users
} from 'lucide-react';

// Define types for the TechIcon component
interface TechIconProps {
  icon: React.ElementType;
  name: string;
  description: string;
  className?: string;
}

// Custom components for the IT Solutions page
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

// Define the IT solutions data
const solutionsData = [
  {
    id: 1,
    title: "Enterprise Solutions",
    description: "End-to-end enterprise applications and systems that streamline operations, enhance collaboration, and drive business growth.",
    icon: Server,
    features: [
      "SAP Implementation & Support",
      "ERP Solutions",
      "Business Process Management",
      "Digital Workflows"
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and resilient cloud infrastructure solutions that enable digital transformation and business agility.",
    icon: Cloud,
    features: [
      "Cloud Migration & Strategy",
      "Managed Cloud Services",
      "Hybrid & Multi-Cloud Solutions",
      "Cloud Optimization & Security"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Advanced data analytics solutions that transform raw data into actionable insights, enabling data-driven decision making.",
    icon: BarChart,
    features: [
      "Business Intelligence",
      "Predictive Analytics",
      "Big Data Solutions",
      "Data Visualization"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 4,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address specific business challenges and create competitive advantages.",
    icon: Code,
    features: [
      "Application Development",
      "API Integration",
      "Legacy System Modernization",
      "DevOps & CI/CD Implementation"
    ],
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Comprehensive security solutions that protect critical assets, ensure compliance, and mitigate risks in the digital landscape.",
    icon: Shield,
    features: [
      "Security Assessment & Planning",
      "Identity & Access Management",
      "Threat Detection & Response",
      "Security Operations Center"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Strategic IT consulting services that align technology initiatives with business objectives to drive innovation and growth.",
    icon: Layers,
    features: [
      "IT Strategy & Roadmap",
      "Digital Transformation",
      "Technology Assessment",
      "IT Governance & Compliance"
    ],
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

// Tech stack data
const techStackData = [
  {
    category: "Cloud Platforms",
    technologies: [
      { name: "AWS", description: "Amazon Web Services ecosystem" },
      { name: "Azure", description: "Microsoft's cloud computing platform" },
      { name: "Google Cloud", description: "Google's cloud services and infrastructure" },
      { name: "IBM Cloud", description: "Hybrid cloud solutions" }
    ]
  },
  {
    category: "Database & Analytics",
    technologies: [
      { name: "SQL Server", description: "Enterprise database management" },
      { name: "Oracle", description: "Enterprise database solutions" },
      { name: "MongoDB", description: "NoSQL database platform" },
      { name: "Hadoop", description: "Big data processing" },
      { name: "Elasticsearch", description: "Search and analytics engine" }
    ]
  },
  {
    category: "Development",
    technologies: [
      { name: "Java", description: "Enterprise application development" },
      { name: "Python", description: "Data science and backend services" },
      { name: "JavaScript", description: "Web and mobile applications" },
      { name: "React", description: "Frontend development" },
      { name: ".NET", description: "Microsoft application framework" }
    ]
  },
  {
    category: "Enterprise Systems",
    technologies: [
      { name: "SAP", description: "Enterprise resource planning" },
      { name: "Salesforce", description: "Customer relationship management" },
      { name: "Workday", description: "HR and financial management" },
      { name: "Microsoft 365", description: "Productivity and collaboration" }
    ]
  }
];

export default function ITSolutionsPage() {
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
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="IT Solutions Background"
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
                IT Solutions
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Transforming Business <br />
              Through <span className="text-active-blue">Technology</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-2xl leading-relaxed mb-10"
            >
              Delivering cutting-edge IT solutions that drive innovation, efficiency, and growth for businesses across industries. Our expertise spans enterprise systems, cloud infrastructure, data analytics, and custom software development.
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
                <h2 className="text-gradient mb-6">Innovative IT Solutions for the Digital Age</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Hyundai AutoEver India, we deliver comprehensive IT solutions designed to address the complex challenges of modern businesses. Our team of experts combines deep industry knowledge with technical expertise to create customized solutions that drive digital transformation.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  From enterprise systems and cloud infrastructure to data analytics and custom software development, our solutions are tailored to meet the unique needs of each client, ensuring maximum efficiency and ROI.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Enterprise Solutions", 
                    "Cloud Services", 
                    "Data Analytics", 
                    "Custom Development",
                    "Cybersecurity",
                    "IT Consulting"
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
                src="https://images.unsplash.com/photo-1581092335397-9fa73d6e48f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="IT Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <h3 className="text-white text-xl font-bold mb-2">Industry-Leading Expertise</h3>
                  <p className="text-white/80">
                    Our solutions are backed by decades of experience in the automotive and IT industries, providing unparalleled value to our clients.
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
              Comprehensive IT Solutions
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Explore our range of IT solutions designed to help businesses leverage technology for growth and competitive advantage.
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
              Our Technology Stack
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We leverage industry-leading technologies to build robust, scalable, and future-ready solutions for our clients.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {techStackData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center">
                  <span className="bg-gradient-to-r from-hyundai-blue to-active-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">
                    {categoryIndex + 1}
                  </span>
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex flex-col items-start p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="text-lg font-semibold text-hyundai-blue mb-2 flex items-center">
                        <span className="w-2 h-2 bg-hyundai-blue rounded-full mr-2"></span>
                        {tech.name}
                      </div>
                      <p className="text-sm text-gray-600">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center transform transition-transform duration-300 hover:scale-105"
            >
              Discuss Your Technology Needs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section 
        ref={processRef}
        className="py-20 bg-gradient-to-br from-hyundai-blue to-hyundai-dark-blue text-white relative overflow-hidden"
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Floating elements */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }} 
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute top-20 left-[10%] w-16 h-16 bg-active-blue/20 rounded-full backdrop-blur-md"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -7, 0]
          }} 
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute bottom-32 right-[15%] w-24 h-24 bg-sky-blue/10 rounded-full backdrop-blur-md"
        ></motion.div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="bg-white/10 text-white text-sm font-medium py-1 px-3 rounded-full border border-white/20">
                Our Approach
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-4xl md:text-5xl font-bold mb-6"
            >
              Our Implementation Process
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-xl max-w-3xl mx-auto"
            >
              Our proven methodology ensures smooth implementation and successful outcomes for every project.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white/10 via-white/40 to-white/10 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Process steps */}
            <div className="space-y-32 relative">
              {[
                {
                  title: "Discovery & Analysis",
                  description: "We begin by understanding your business objectives, challenges, and requirements. Our team conducts a thorough analysis of your existing systems and processes to identify opportunities for improvement.",
                  icon: <Globe className="w-8 h-8" />,
                  points: [
                    "Business needs assessment",
                    "Technology landscape analysis",
                    "Gap identification",
                    "Stakeholder interviews"
                  ]
                },
                {
                  title: "Strategy & Design",
                  description: "Based on our analysis, we develop a comprehensive strategy and solution design that aligns with your business goals and technical requirements.",
                  icon: <Layers className="w-8 h-8" />,
                  points: [
                    "Solution architecture",
                    "Technology selection",
                    "Implementation roadmap",
                    "ROI assessment"
                  ]
                },
                {
                  title: "Development & Implementation",
                  description: "Our expert team develops and implements the solution according to the agreed-upon design, ensuring high quality and adherence to best practices.",
                  icon: <Code className="w-8 h-8" />,
                  points: [
                    "Agile development methodology",
                    "Continuous integration",
                    "Quality assurance",
                    "Progress tracking"
                  ]
                },
                {
                  title: "Testing & Deployment",
                  description: "We conduct thorough testing to ensure the solution meets all requirements and performs optimally before proceeding with a controlled deployment.",
                  icon: <Shield className="w-8 h-8" />,
                  points: [
                    "Functional testing",
                    "Performance testing",
                    "Security testing",
                    "User acceptance testing"
                  ]
                },
                {
                  title: "Training & Support",
                  description: "We provide comprehensive training and ongoing support to ensure a smooth transition and continued success of the implemented solution.",
                  icon: <Users className="w-8 h-8" />,
                  points: [
                    "User training programs",
                    "Documentation",
                    "24/7 support",
                    "Regular maintenance"
                  ]
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
                >
                  <div className="md:w-1/2 p-6">
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 ${index % 2 === 1 ? 'ml-auto mr-0' : 'mr-auto ml-0'} max-w-lg shadow-xl`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-active-blue rounded-full p-4 mr-4 shadow-glow-blue">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-white/80 mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="text-active-blue mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span className="text-white/80">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 relative hidden md:block">
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="bg-active-blue text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center border-4 border-white shadow-glow-blue">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 text-center"
          >
            <Link 
              href="/contact" 
              className="bg-white text-hyundai-blue font-bold py-3 px-8 rounded-full hover:bg-white/90 transition-all duration-300 inline-flex items-center transform hover:scale-105"
            >
              Start Your Implementation Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        ref={casesRef}
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-radial from-hyundai-blue/5 to-transparent opacity-70 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-radial from-active-blue/5 to-transparent opacity-70 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="bg-hyundai-blue/10 text-hyundai-blue text-sm font-medium py-1 px-3 rounded-full">
                Success Stories
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6"
            >
              Featured Case Studies
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Discover how our IT solutions have helped organizations overcome challenges and achieve their business objectives.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automotive Manufacturing Transformation",
                category: "Enterprise Solutions",
                description: "Implemented an end-to-end ERP solution for a leading automotive manufacturer, resulting in a 30% increase in operational efficiency.",
                image: "https://images.unsplash.com/photo-1581093806997-124204d4f2fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                metrics: {
                  efficiency: "+30%",
                  costs: "-25%",
                  implementation: "6 months"
                }
              },
              {
                title: "Cloud Migration for Financial Services",
                category: "Cloud Infrastructure",
                description: "Migrated a financial services company to a secure cloud infrastructure, reducing IT costs by 40% and improving system reliability.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                metrics: {
                  costs: "-40%",
                  reliability: "+99.9%",
                  scalability: "3x faster"
                }
              },
              {
                title: "Data Analytics for Retail Chain",
                category: "Data Analytics",
                description: "Developed a comprehensive data analytics platform for a retail chain, enabling data-driven decision making and increasing revenue by 25%.",
                image: "https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                metrics: {
                  revenue: "+25%",
                  insights: "Real-time",
                  decisions: "10x faster"
                }
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-hyundai-blue/90 text-white text-xs font-medium py-1 px-2 rounded">
                      {caseStudy.category}
                    </span>
                  </div>
                  
                  {/* Success metrics */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    {Object.entries(caseStudy.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-white text-xl font-bold">{value}</div>
                        <div className="text-white/70 text-xs uppercase tracking-wide">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-hyundai-blue transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {caseStudy.description}
                  </p>
                  <Link 
                    href={`/case-studies/${caseStudy.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-hyundai-blue font-medium group"
                  >
                    <span className="group-hover:underline">Read Case Study</span> 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link href="/case-studies" className="btn-outline inline-flex items-center group">
              <span>View All Case Studies</span> 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-hyundai-blue to-hyundai-dark-blue rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-glow-blue hover:scale-[1.01]"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div className="p-8 md:p-12 lg:w-2/3">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                >
                  Ready to Transform Your Business with Technology?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-white/90 text-lg mb-8 max-w-2xl"
                >
                  Partner with Hyundai AutoEver India to leverage our expertise in IT solutions and drive your business forward. Let's discuss how we can help you achieve your technology goals.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact" 
                    className="bg-white text-hyundai-blue font-bold py-3 px-8 rounded-full hover:bg-white/90 transition-all duration-300 shadow-md flex items-center transform hover:scale-105"
                  >
                    Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/about/company" className="btn-outline-hero">
                    Learn About Us
                  </Link>
                </motion.div>
                
                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-6"
                >
                  <div className="text-center">
                    <div className="text-white text-4xl font-bold mb-1">95%</div>
                    <p className="text-white/70 text-sm">Client satisfaction rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-4xl font-bold mb-1">10+</div>
                    <p className="text-white/70 text-sm">Years of expertise</p>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-4xl font-bold mb-1">100+</div>
                    <p className="text-white/70 text-sm">Projects delivered</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/3 relative">
                <div className="relative h-96 lg:h-full min-h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="IT Collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-hyundai-blue to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 max-w-xs">
                    <div className="flex items-center mb-3">
                      <div className="bg-active-blue rounded-full h-10 w-10 flex items-center justify-center mr-3 shadow-glow-blue">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-white font-bold text-2xl">Fast Track</div>
                    </div>
                    <p className="text-white/90">
                      Get your project started in as little as 2 weeks with our expedited implementation process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 