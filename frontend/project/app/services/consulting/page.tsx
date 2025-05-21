"use client";

import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Layers, 
  FileText, 
  TrendingUp, 
  BarChart4, 
  Briefcase, 
  BookOpen,
  Workflow,
  Check,
  ArrowRight,
  ChevronRight,
  Users,
  BarChart,
  Settings,
  PieChart
} from 'lucide-react';

// Define types for the ConsultingIcon component
interface ConsultingIconProps {
  icon: React.ElementType;
  name: string;
  description: string;
  className?: string;
}

// Custom components for the Consulting Services page
const ConsultingIcon: React.FC<ConsultingIconProps> = ({ icon: Icon, name, description, className = "" }) => {
  return (
    <div className={`flex flex-col items-center text-center p-5 rounded-xl transition-all duration-300 ${className}`}>
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 mb-4 text-white">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Define the consulting services data
const consultingServicesData = [
  {
    id: 1,
    title: "IT Strategy",
    description: "Develop comprehensive IT strategies aligned with your business goals, ensuring technology investments deliver maximum value and competitive advantage.",
    icon: Briefcase,
    features: [
      "Digital Transformation Roadmap",
      "IT Investment Planning",
      "Technology Portfolio Assessment",
      "Strategic Technology Alignment"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Business Process Consulting",
    description: "Optimize and redesign business processes to improve efficiency, reduce costs, and enhance customer experience through technology enablement.",
    icon: Workflow,
    features: [
      "Process Analysis & Mapping",
      "Workflow Optimization",
      "Process Automation",
      "Change Management"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 3,
    title: "Technology Assessment",
    description: "Evaluate your current technology environment to identify opportunities for improvement, risk mitigation, and strategic investments.",
    icon: FileText,
    features: [
      "IT Infrastructure Assessment",
      "Application Portfolio Review",
      "Security & Risk Evaluation",
      "Technology Gap Analysis"
    ],
    image: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 4,
    title: "Digital Transformation",
    description: "Guide your organization through digital transformation initiatives, leveraging emerging technologies to create new business models and capabilities.",
    icon: TrendingUp,
    features: [
      "Digital Maturity Assessment",
      "Transformation Strategy",
      "Technology Modernization",
      "Organizational Change Management"
    ],
    image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80"
  },
  {
    id: 5,
    title: "Enterprise Architecture",
    description: "Design and implement scalable, flexible enterprise architecture that supports your business objectives and enables future growth.",
    icon: Layers,
    features: [
      "Architecture Assessment",
      "Reference Architecture Design",
      "Technology Standards",
      "Architecture Governance"
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80"
  },
  {
    id: 6,
    title: "Data & Analytics Strategy",
    description: "Develop strategies to leverage your data assets for business insights, competitive advantage, and improved decision-making.",
    icon: PieChart,
    features: [
      "Data Strategy Development",
      "Analytics Roadmap",
      "Data Governance Framework",
      "Business Intelligence Planning"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

// Industry expertise data
const industryExpertiseData = [
  {
    category: "Automotive",
    expertise: [
      { name: "Automotive Manufacturing", description: "Digital solutions for production" },
      { name: "Connected Vehicles", description: "IoT and telematics systems" },
      { name: "Dealer Management", description: "Sales and service optimization" },
      { name: "Supply Chain", description: "Logistics and inventory management" }
    ]
  },
  {
    category: "Manufacturing",
    expertise: [
      { name: "Smart Factory", description: "Industry 4.0 implementation" },
      { name: "Quality Management", description: "Process and product quality" },
      { name: "Asset Management", description: "Equipment lifecycle optimization" },
      { name: "ERP Implementation", description: "Enterprise systems integration" }
    ]
  },
  {
    category: "Financial Services",
    expertise: [
      { name: "Digital Banking", description: "Online and mobile platforms" },
      { name: "Compliance & Risk", description: "Regulatory requirements" },
      { name: "Fintech Integration", description: "Modern financial technology" },
      { name: "Customer Experience", description: "Omnichannel engagement" }
    ]
  },
  {
    category: "Healthcare",
    expertise: [
      { name: "Health Information Systems", description: "Electronic health records" },
      { name: "Telemedicine", description: "Remote healthcare delivery" },
      { name: "Healthcare Analytics", description: "Clinical data insights" },
      { name: "Regulatory Compliance", description: "HIPAA and other standards" }
    ]
  }
];

// Case study data
const caseStudiesData = [
  {
    id: 1,
    title: "Digital Transformation for Global Manufacturer",
    challenge: "A leading manufacturer needed to modernize legacy systems and implement a digital strategy to improve operational efficiency and customer experience.",
    solution: "Developed a comprehensive digital transformation roadmap, focusing on core process automation, data integration, and customer-facing technologies.",
    results: [
      "30% improvement in operational efficiency",
      "25% reduction in IT operational costs",
      "50% faster time-to-market for new products",
      "Seamless integration across previously siloed systems"
    ],
    image: "https://images.unsplash.com/photo-1565987174304-5907eb785353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "IT Strategy for Financial Services Firm",
    challenge: "A financial services company was struggling with outdated technology infrastructure and needed a strategic plan to modernize while maintaining regulatory compliance.",
    solution: "Developed a three-year IT strategy and implementation roadmap, balancing innovation with security and compliance requirements.",
    results: [
      "40% reduction in security vulnerabilities",
      "Successful cloud migration with zero compliance issues",
      "20% improvement in customer satisfaction scores",
      "$2.5M in annual cost savings through technology consolidation"
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
  }
];

export default function ConsultingServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const approachRef = useRef(null);
  const expertiseRef = useRef(null);
  const casesRef = useRef(null);
  
  // State for active service
  const [activeService, setActiveService] = useState(1);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.2 });
  const isExpertiseInView = useInView(expertiseRef, { once: true, amount: 0.2 });
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
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="Consulting Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-800/80 to-emerald-900/95"></div>
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
                Consulting Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Strategic Guidance for <br/>
              <span className="text-emerald-400">Business Transformation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Our consulting services provide strategic guidance and expertise to help you navigate complex business challenges, optimize operations, and drive digital transformation initiatives.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn-outline-hero">
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
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
              <span className="badge">Our Consulting Services</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Strategic Advisory Services
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We offer a comprehensive range of consulting services designed to help you optimize business processes, implement new technologies, and drive strategic growth.
            </motion.p>
          </div>
          
          {/* Services Navigation */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {consultingServicesData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-5 py-3 rounded-full transition-all duration-300 ${
                    activeService === service.id
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <service.icon className="w-5 h-5 mr-2" />
                    <span>{service.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Service Details */}
          {consultingServicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isServicesInView && activeService === service.id
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20, display: 'none' }
              }
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-emerald-500/10 text-emerald-700 rounded-xl mb-4">
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center mt-1 mr-3">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
                >
                  <span>Talk to our experts</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-white text-xl font-bold drop-shadow-md">{service.title}</h4>
                  <p className="text-white/80">{service.features.length} key capabilities</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section 
        ref={approachRef} 
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Our Methodology</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Our Consulting Approach
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We follow a proven methodology that ensures we deliver measurable results and sustainable value to our clients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full border-t-4 border-emerald-500">
                <div className="absolute -top-6 -left-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Discover</h3>
                <p className="text-gray-700">
                  We begin by understanding your business objectives, challenges, and current state through stakeholder interviews, data analysis, and process assessment.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full border-t-4 border-emerald-600">
                <div className="absolute -top-6 -left-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Analyze</h3>
                <p className="text-gray-700">
                  We analyze findings to identify gaps, opportunities, and potential solutions, creating a comprehensive view of your current state and future possibilities.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full border-t-4 border-emerald-700">
                <div className="absolute -top-6 -left-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Strategize</h3>
                <p className="text-gray-700">
                  We develop tailored strategies and roadmaps with clear priorities, timelines, and expected outcomes aligned with your business objectives.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full border-t-4 border-emerald-800">
                <div className="absolute -top-6 -left-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Implement</h3>
                <p className="text-gray-700">
                  We support implementation with expertise, best practices, and change management to ensure successful execution and sustainable results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section 
        ref={expertiseRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Domain Knowledge</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Industry Expertise
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our consultants bring deep industry knowledge and experience to address your specific challenges and opportunities.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryExpertiseData.map((industry, index) => (
              <motion.div
                key={industry.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-emerald-700">{industry.category}</h3>
                <div className="space-y-4">
                  {industry.expertise.map((area, areaIndex) => (
                    <div key={areaIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center mt-1 mr-3">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{area.name}</p>
                        <p className="text-sm text-gray-700">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        ref={casesRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Success Stories</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Client Success Stories
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              See how our consulting services have helped organizations solve complex challenges and achieve meaningful results.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudiesData.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-2xl font-bold">{study.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center mt-1 mr-3">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-gray-700">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Connect with our consulting team to discuss how we can help you overcome challenges and achieve your business objectives.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary-light">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn-outline-light">
                Explore Other Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 