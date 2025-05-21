"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Cpu, 
  Shield, 
  Cloud, 
  Layers,
  Database,
  Smartphone,
  Check,
  ArrowRight
} from 'lucide-react';

export default function TechnologyPage() {
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const platformsRef = useRef(null);
  const casesRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.2 });
  const isPlatformsInView = useInView(platformsRef, { once: true, amount: 0.2 });
  const isCasesInView = useInView(casesRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  // Technology solutions data
  const technologySolutionsData = [
    {
      id: "cloud-solutions",
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions designed for modern enterprises with advanced security, high availability, and seamless integration capabilities.",
      icon: Cloud,
      benefits: [
        "Hybrid and Multi-cloud Architectures",
        "Container Orchestration with Kubernetes",
        "Infrastructure as Code (IaC)",
        "Enterprise-grade Security"
      ],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: "data-analytics",
      title: "Data & Analytics",
      description: "Comprehensive data solutions that enable organizations to collect, process, analyze, and visualize data for actionable insights.",
      icon: Database,
      benefits: [
        "Real-time Data Processing",
        "Advanced Analytics & Machine Learning",
        "Data Visualization Dashboards",
        "Data Governance & Compliance"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: "mobility-solutions",
      title: "Connected Mobility",
      description: "Intelligent mobility solutions that transform transportation through connectivity, automation, and advanced analytics.",
      icon: Smartphone,
      benefits: [
        "Vehicle Telematics & Fleet Management",
        "Mobility-as-a-Service Platforms",
        "Smart Navigation Systems",
        "Connected Vehicle Applications"
      ],
      image: "https://images.unsplash.com/photo-1566055909643-a51b4271d2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: "cybersecurity",
      title: "Enterprise Security",
      description: "Comprehensive security solutions that protect digital assets, infrastructure, and data from evolving cyber threats.",
      icon: Shield,
      benefits: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Identity & Access Management",
        "Data Protection & Privacy"
      ],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  // Technology platforms data
  const platformsData = [
    {
      title: "Enterprise Integration Platform",
      description: "A unified platform for seamless integration of enterprise applications, data sources, and systems with pre-built connectors and APIs.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      features: ["API Management", "Event-driven Architecture", "Data Transformation", "Monitoring & Analytics"]
    },
    {
      title: "Cloud-native Application Platform",
      description: "Accelerate application development and delivery with our containerized, microservices-based application platform.",
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      features: ["Microservices", "DevOps Automation", "Service Mesh", "Observability"]
    },
    {
      title: "Advanced Analytics Platform",
      description: "Extract insights from your data with our comprehensive analytics platform featuring AI/ML capabilities and visualization tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      features: ["Predictive Analytics", "Real-time Processing", "Business Intelligence", "Data Visualization"]
    }
  ];

  // Case studies data
  const caseStudiesData = [
    {
      title: "Global Automotive Manufacturer",
      description: "Implemented a connected vehicle platform enabling real-time telematics, predictive maintenance, and enhanced driver experience across 5 million vehicles.",
      results: [
        "60% reduction in vehicle downtime",
        "35% increase in service efficiency",
        "25% improvement in customer satisfaction"
      ],
      industry: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Leading Financial Institution",
      description: "Delivered a cloud-native digital banking platform with enhanced security, scalability, and personalized customer experiences.",
      results: [
        "99.99% system availability",
        "40% reduction in operational costs",
        "3x faster time-to-market for new features"
      ],
      industry: "Banking",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "International Logistics Company",
      description: "Built an integrated supply chain visibility platform with real-time tracking, predictive analytics, and automated dispatching.",
      results: [
        "30% improvement in fleet utilization",
        "25% reduction in delivery times",
        "45% decrease in operational exceptions"
      ],
      industry: "Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Technology Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-950/95"></div>
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
                Enterprise Technology
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Powering <br/>
              <span className="text-blue-400">Digital Transformation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Our enterprise-grade technology solutions enable organizations to innovate, scale, and transform their operations for the digital age.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#solutions" className="btn-primary">
                Explore Solutions
              </Link>
              <Link href="#platforms" className="btn-outline-hero">
                Our Platforms
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Solutions Section */}
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
              <span className="badge">Technology Portfolio</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Our Technology Solutions
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We deliver enterprise-grade solutions across key technology domains to address your most critical business challenges.
            </motion.p>
          </div>
          
          {/* Technology Solutions */}
          <div className="space-y-16">
            {technologySolutionsData.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px]">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg inline-block">
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{solution.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-teal-600 flex items-center justify-center mt-1 mr-3">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    <span>Learn more about {solution.title}</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platforms Section */}
      <section 
        id="platforms"
        ref={platformsRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Enterprise Platforms</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Our Technology Platforms
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our enterprise platforms provide the foundation for digital transformation with scalable, secure, and flexible capabilities.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {platformsData.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={platform.image}
                    alt={platform.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.title}</h3>
                  <p className="text-gray-700 mb-4">{platform.description}</p>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        id="case-studies"
        ref={casesRef}
        className="py-20 bg-white"
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
              Case Studies
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Discover how our technology solutions have transformed operations and driven business value for our clients across industries.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudiesData.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-blue-800">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{caseStudy.title}</h3>
                  <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Key Results:</p>
                    <div className="space-y-2">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-600 flex items-center justify-center mt-1 mr-2">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <p className="text-sm text-gray-700">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="#" className="btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-teal-800 text-white">
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
              Connect with our technology experts to explore how our solutions can address your business challenges and drive innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary-light">
                Request a Consultation
              </Link>
              <Link href="/innovation/research" className="btn-outline-light">
                Explore Our Research
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 