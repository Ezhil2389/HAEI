"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Brain, 
  Cpu, 
  Database, 
  Globe, 
  Car,
  Microscope,
  Check,
  ArrowRight
} from 'lucide-react';

export default function ResearchPage() {
  const heroRef = useRef(null);
  const areasRef = useRef(null);
  const projectsRef = useRef(null);
  const publicationsRef = useRef(null);
  const partnershipsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isAreasInView = useInView(areasRef, { once: true, amount: 0.2 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.2 });
  const isPublicationsInView = useInView(publicationsRef, { once: true, amount: 0.2 });
  const isPartnershipsInView = useInView(partnershipsRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  // Research areas data
  const researchAreasData = [
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description: "Advancing the state-of-the-art in artificial intelligence and machine learning, with a focus on applications in automotive and mobility domains.",
      icon: Brain,
      subAreas: [
        "Deep Learning for Autonomous Systems",
        "Computer Vision & Object Recognition",
        "Natural Language Processing",
        "Reinforcement Learning"
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "connected-mobility",
      title: "Connected Mobility",
      description: "Researching and developing technologies for connected vehicles, intelligent transportation systems, and smart mobility solutions.",
      icon: Car,
      subAreas: [
        "Vehicle-to-Everything (V2X) Communication",
        "In-vehicle Information Systems",
        "Mobility-as-a-Service Platforms",
        "Smart Traffic Management"
      ],
      image: "https://images.unsplash.com/photo-1566055909643-a51b4271d2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      description: "Exploring advanced cloud architectures, distributed systems, and cloud-native technologies for enterprise and automotive applications.",
      icon: Globe,
      subAreas: [
        "Edge Computing for Automotive",
        "Distributed Systems",
        "Serverless Architectures",
        "Hybrid Cloud Solutions"
      ],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: "big-data-analytics",
      title: "Big Data Analytics",
      description: "Developing advanced analytics techniques for processing and analyzing massive datasets from vehicles, manufacturing, and enterprise systems.",
      icon: Database,
      subAreas: [
        "Real-time Analytics",
        "Predictive Maintenance",
        "Consumer Behavior Analysis",
        "Supply Chain Optimization"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  // Featured research projects
  const featuredProjectsData = [
    {
      title: "Autonomous Driving System",
      description: "Developing an end-to-end autonomous driving platform with advanced perception, planning, and control capabilities.",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Computer Vision", "Deep Learning", "Sensor Fusion", "Control Systems"]
    },
    {
      title: "Smart Manufacturing Analytics",
      description: "Creating a real-time analytics platform to optimize manufacturing processes, predict equipment failures, and improve quality control.",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1565017228812-8c2da44a8885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Industrial IoT", "Machine Learning", "Time Series Analysis", "Digital Twin"]
    },
    {
      title: "Cloud-Native Enterprise Platform",
      description: "Designing a scalable, microservices-based platform for enterprise applications with advanced security and observability.",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      technologies: ["Kubernetes", "Microservices", "Service Mesh", "DevSecOps"]
    }
  ];

  // Recent publications
  const publicationsData = [
    {
      title: "Advances in Deep Reinforcement Learning for Autonomous Vehicle Control",
      authors: "Sharma, R., Patel, A., Kim, J.",
      conference: "IEEE International Conference on Intelligent Transportation Systems",
      year: 2023,
      type: "Conference Paper",
      link: "#"
    },
    {
      title: "Real-time Analytics Framework for Connected Vehicle Data Streams",
      authors: "Mehta, V., Rodriguez, M., Chen, L.",
      conference: "ACM International Conference on Distributed Event-Based Systems",
      year: 2023,
      type: "Journal Article",
      link: "#"
    },
    {
      title: "Scalable Edge Computing Architecture for Automotive Applications",
      authors: "Nair, P., Johnson, K., Garcia, S.",
      conference: "IEEE Transactions on Cloud Computing",
      year: 2022,
      type: "Journal Article",
      link: "#"
    },
    {
      title: "Predictive Maintenance in Smart Manufacturing: A Case Study",
      authors: "Lee, H., Patel, A., Gupta, R.",
      conference: "International Journal of Production Research",
      year: 2022,
      type: "Journal Article",
      link: "#"
    }
  ];

  // Research partnerships
  const partnershipsData = [
    {
      name: "Indian Institute of Technology",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg",
      collaboration: "Joint AI research lab focusing on autonomous systems for Indian road conditions."
    },
    {
      name: "Stanford University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stanford_Cardinal_logo.svg/2000px-Stanford_Cardinal_logo.svg.png",
      collaboration: "Research initiative on next-generation mobility solutions and transportation systems."
    },
    {
      name: "CSIR - Central Road Research Institute",
      logo: "https://www.crridom.gov.in/sites/default/files/CRRI_0.png",
      collaboration: "Smart transportation infrastructure development and testing."
    },
    {
      name: "Industry Consortium for Advanced Manufacturing",
      logo: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      collaboration: "Joint research on smart manufacturing technologies and Industry 4.0 implementation."
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
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Research Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-indigo-950/95"></div>
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
                Research & Development
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Pioneering <br/>
              <span className="text-purple-400">Tomorrow's Technologies</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Our research team explores cutting-edge technologies and develops innovative solutions across multiple domains, from artificial intelligence to connected mobility.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#research-areas" className="btn-primary">
                Research Areas
              </Link>
              <Link href="#projects" className="btn-outline-hero">
                Featured Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section 
        id="research-areas"
        ref={areasRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Research Focus</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Our Research Areas
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We focus our research efforts on these key areas that align with industry trends and drive innovation in the automotive and enterprise domains.
            </motion.p>
          </div>
          
          {/* Research Areas */}
          <div className="space-y-16">
            {researchAreasData.map((area, index) => (
              <motion.div
                key={area.id}
                id={area.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isAreasInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px]">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg inline-block">
                        <area.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{area.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{area.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {area.subAreas.map((subArea, subIndex) => (
                      <div key={subIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700">{subArea}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/innovation/center"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                  >
                    <span>Learn about our Innovation Center</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section 
        id="projects"
        ref={projectsRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Our Work</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Featured Research Projects
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Explore some of our key research initiatives that showcase our expertise and drive innovation across various domains.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed" 
                        ? "bg-emerald-100 text-emerald-700" 
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium"
                        >
                          {tech}
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

      {/* Publications Section */}
      <section 
        ref={publicationsRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPublicationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Knowledge Sharing</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isPublicationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Recent Publications
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isPublicationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our researchers regularly publish their findings in top-tier journals and conferences, contributing to the advancement of scientific knowledge.
            </motion.p>
          </div>
          
          <div className="space-y-4">
            {publicationsData.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isPublicationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-full p-3 mt-1">
                    <Microscope className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <Link href={publication.link} className="group">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {publication.title}
                      </h3>
                    </Link>
                    <p className="text-indigo-600 mb-1">{publication.authors}</p>
                    <p className="text-gray-700 text-sm">{publication.conference}, {publication.year}</p>
                    <div className="mt-2">
                      <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium">
                        {publication.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="#" className="btn-primary">
              View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Research Partnerships Section */}
      <section 
        ref={partnershipsRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPartnershipsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Collaboration</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isPartnershipsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Research Partnerships
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isPartnershipsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We collaborate with leading universities, research institutions, and industry partners to advance knowledge and develop innovative solutions.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipsData.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isPartnershipsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 flex-shrink-0 relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-gray-700">{partner.collaboration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 to-purple-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Interested in Research Collaboration?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Connect with our research team to explore potential collaborations or learn more about our research initiatives.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary-light">
                Contact Our Research Team
              </Link>
              <Link href="/innovation/technology" className="btn-outline-light">
                Explore Our Technologies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 