 "use client";

import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Cloud, 
  Server, 
  Shield, 
  Database, 
  Globe, 
  BarChart, 
  Zap, 
  Layers,
  Check,
  ArrowRight,
  ChevronRight,
  Lock,
  CloudCog,
  CloudRain,
  CloudOff
} from 'lucide-react';

// Define types for the CloudServiceIcon component
interface CloudServiceIconProps {
  icon: React.ElementType;
  name: string;
  description: string;
  className?: string;
}

// Custom components for the Cloud Services page
const CloudServiceIcon: React.FC<CloudServiceIconProps> = ({ icon: Icon, name, description, className = "" }) => {
  return (
    <div className={`flex flex-col items-center text-center p-5 rounded-xl transition-all duration-300 ${className}`}>
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 text-white">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Define the cloud solutions data
const cloudSolutionsData = [
  {
    id: 1,
    title: "Cloud Migration",
    description: "Strategic and efficient migration of on-premises workloads to cloud environments, minimizing disruption and optimizing performance.",
    icon: CloudCog,
    features: [
      "Assessment & Planning",
      "Lift & Shift Migration",
      "Application Refactoring",
      "Database Migration"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Design, implementation, and management of scalable and secure cloud infrastructure tailored to your business needs.",
    icon: Server,
    features: [
      "IaaS Solutions",
      "Virtual Network Design",
      "Compute Optimization",
      "Storage Solutions"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Cloud Security",
    description: "Comprehensive security solutions to protect cloud environments, data, and applications from evolving threats.",
    icon: Shield,
    features: [
      "Security Architecture",
      "Compliance Management",
      "Threat Detection",
      "Identity Management"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 4,
    title: "Cloud-Native Development",
    description: "Building modern, microservices-based applications optimized for cloud environments using containers and serverless architecture.",
    icon: Database,
    features: [
      "Containerization (Docker)",
      "Kubernetes Orchestration",
      "Serverless Architecture",
      "Microservices Design"
    ],
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 5,
    title: "Managed Cloud Services",
    description: "Comprehensive management, monitoring, and optimization of your cloud environments to ensure performance and cost-efficiency.",
    icon: Layers,
    features: [
      "24/7 Monitoring",
      "Performance Optimization",
      "Cost Management",
      "Automated Scaling"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80"
  },
  {
    id: 6,
    title: "Multi-Cloud Strategy",
    description: "Strategic implementation and management of multi-cloud environments to optimize performance, cost, and reliability.",
    icon: Globe,
    features: [
      "Cloud Provider Selection",
      "Workload Distribution",
      "Cross-Cloud Integration",
      "Unified Management"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

// Cloud platform data
const cloudPlatformsData = [
  {
    category: "Public Cloud",
    technologies: [
      { name: "AWS", description: "Amazon Web Services ecosystem" },
      { name: "Microsoft Azure", description: "Microsoft's cloud platform" },
      { name: "Google Cloud", description: "Google's cloud infrastructure" },
      { name: "IBM Cloud", description: "Hybrid cloud solutions" }
    ]
  },
  {
    category: "Cloud Infrastructure",
    technologies: [
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Docker", description: "Containerization platform" },
      { name: "Terraform", description: "Infrastructure as Code" },
      { name: "VMware", description: "Virtualization platform" }
    ]
  },
  {
    category: "Cloud Security",
    technologies: [
      { name: "CloudTrail", description: "AWS activity monitoring" },
      { name: "Azure Security Center", description: "Security management" },
      { name: "GCP Security Command", description: "Threat detection" },
      { name: "HashiCorp Vault", description: "Secrets management" }
    ]
  },
  {
    category: "Cloud-Native",
    technologies: [
      { name: "AWS Lambda", description: "Serverless computing" },
      { name: "Azure Functions", description: "Event-driven computing" },
      { name: "Cloud Run", description: "Managed container platform" },
      { name: "Istio", description: "Service mesh platform" }
    ]
  }
];

// Case study data
const caseStudiesData = [
  {
    id: 1,
    title: "Global Automotive Manufacturer",
    challenge: "Modernize legacy infrastructure and migrate to a scalable cloud platform to support growing data requirements from connected vehicles.",
    solution: "Implemented a hybrid cloud strategy using AWS and on-premises infrastructure with a phased migration approach.",
    results: [
      "50% reduction in operational costs",
      "99.99% uptime for critical systems",
      "60% faster deployment of new applications",
      "Scalable architecture supporting 500,000+ connected vehicles"
    ],
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Financial Services Provider",
    challenge: "Ensure data security and compliance while migrating core banking applications to the cloud to improve scalability and customer experience.",
    solution: "Developed a secure multi-cloud environment with Azure and AWS, implementing advanced security controls and compliance monitoring.",
    results: [
      "100% compliance with financial regulations",
      "Enhanced disaster recovery capabilities",
      "40% improvement in application performance",
      "Reduced time-to-market for new services by 30%"
    ],
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
  }
];

export default function CloudServicesPage() {
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const benefitsRef = useRef(null);
  const platformsRef = useRef(null);
  const casesRef = useRef(null);
  
  // State for active solution
  const [activeSolution, setActiveSolution] = useState(1);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.2 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });
  const isPlatformsInView = useInView(platformsRef, { once: true, amount: 0.2 });
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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
            alt="Cloud Computing Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hyundai-blue/80 to-hyundai-blue/95"></div>
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
                Cloud Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Transform Your Business <br/>
              <span className="text-active-blue">in the Cloud</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Our comprehensive cloud services help businesses of all sizes leverage the power of cloud computing to drive innovation, reduce costs, and achieve greater agility and scalability.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#solutions" className="btn-primary">
                Explore Our Solutions
              </Link>
              <Link href="/contact" className="btn-outline-hero">
                Talk to Our Experts
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions Section */}
      <section 
        id="solutions"
        ref={solutionsRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Our Cloud Solutions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Comprehensive Cloud Services
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              From migration to management, we offer end-to-end cloud solutions designed to transform your business and maximize the benefits of cloud computing.
            </motion.p>
          </div>
          
          {/* Solutions Navigation */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {cloudSolutionsData.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution.id)}
                  className={`px-5 py-3 rounded-full transition-all duration-300 ${
                    activeSolution === solution.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <solution.icon className="w-5 h-5 mr-2" />
                    <span>{solution.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Solution Details */}
          {cloudSolutionsData.map((solution) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isSolutionsInView && activeSolution === solution.id
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20, display: 'none' }
              }
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-cyan-500/10 text-cyan-600 rounded-xl mb-4">
                    <solution.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-700 text-lg mb-6">{solution.description}</p>
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mt-1 mr-3">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
                >
                  <span>Talk to our experts</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-white text-xl font-bold drop-shadow-md">{solution.title}</h4>
                  <p className="text-white/80">{solution.features.length} key capabilities</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        ref={benefitsRef} 
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Why Choose Cloud</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Benefits of Cloud Adoption
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Adopting cloud technology offers numerous advantages that can transform your business operations and drive growth.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scalability & Flexibility</h3>
              <p className="text-gray-700">
                Easily scale resources up or down based on demand, paying only for what you use and adapting quickly to changing business needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cost Optimization</h3>
              <p className="text-gray-700">
                Reduce capital expenditure on hardware and infrastructure maintenance while improving operational efficiency and resource utilization.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
              <p className="text-gray-700">
                Leverage advanced security features and compliance certifications from major cloud providers to protect your critical data and applications.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <CloudOff className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Disaster Recovery</h3>
              <p className="text-gray-700">
                Implement robust disaster recovery solutions with automated backups and geographic redundancy to ensure business continuity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <CloudRain className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation Acceleration</h3>
              <p className="text-gray-700">
                Access cutting-edge technologies like AI, ML, and IoT services to drive innovation and gain competitive advantages.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-gray-700">
                Deploy applications globally in minutes, reducing latency and improving user experience for customers around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section 
        ref={platformsRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Technology Stack</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Cloud Platforms & Technologies
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We work with all major cloud platforms and technologies to deliver the best solutions for your specific needs.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudPlatformsData.map((platform, index) => (
              <motion.div
                key={platform.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-hyundai-blue">{platform.category}</h3>
                <div className="space-y-4">
                  {platform.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mt-1 mr-3">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{tech.name}</p>
                        <p className="text-sm text-gray-700">{tech.description}</p>
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
              Cloud Transformation Case Studies
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Discover how we've helped organizations across industries leverage cloud technologies to achieve their business objectives.
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
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mt-1 mr-3">
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
      <section className="py-20 bg-gradient-to-br from-hyundai-blue to-active-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Transform Your Business in the Cloud?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Contact our cloud experts today to discuss how we can help you leverage the full potential of cloud technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary-light">
                Talk to Our Experts
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