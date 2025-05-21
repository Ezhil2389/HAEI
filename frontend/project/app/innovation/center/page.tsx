"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Lightbulb, 
  Rocket, 
  Cpu, 
  Target, 
  Users,
  Microscope,
  Zap,
  Check,
  ArrowRight,
  Brain
} from 'lucide-react';

export default function InnovationCenterPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const focusAreasRef = useRef(null);
  const facilitiesRef = useRef(null);
  const teamRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const isFocusAreasInView = useInView(focusAreasRef, { once: true, amount: 0.2 });
  const isFacilitiesInView = useInView(facilitiesRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  // Focus areas data
  const focusAreasData = [
    {
      title: "Artificial Intelligence",
      description: "Researching and developing advanced AI solutions for automotive, manufacturing, and enterprise applications.",
      icon: Brain,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Connected Mobility",
      description: "Creating next-generation solutions for connected vehicles, smart transportation, and mobility services.",
      icon: Cpu,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Cloud Innovation",
      description: "Developing cloud-native architectures and solutions for scalable, resilient enterprise applications.",
      icon: Rocket,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Data Analytics",
      description: "Harnessing the power of big data, advanced analytics, and machine learning for business insights.",
      icon: Target,
      color: "from-emerald-500 to-green-600"
    }
  ];

  // Team members data
  const teamData = [
    {
      name: "Dr. Rahul Sharma",
      position: "Director of Innovation",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Ph.D. in Computer Science with 15+ years of experience in technology innovation and R&D leadership.",
      expertise: ["Artificial Intelligence", "Strategic Innovation", "Technology Roadmapping"]
    },
    {
      name: "Dr. Priya Nair",
      position: "Lead Researcher, AI",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Machine learning expert with specialization in deep learning and computer vision for automotive applications.",
      expertise: ["Deep Learning", "Computer Vision", "Neural Networks"]
    },
    {
      name: "Vikram Mehta",
      position: "Head of Connected Mobility",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Experienced technology leader focused on connected vehicle solutions and mobility technologies.",
      expertise: ["IoT", "Vehicle Telematics", "Mobility Services"]
    },
    {
      name: "Aisha Patel",
      position: "Senior Cloud Architect",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80",
      bio: "Cloud architecture expert specializing in distributed systems and microservices architectures.",
      expertise: ["Cloud Architecture", "Kubernetes", "Serverless Computing"]
    }
  ];

  // Facilities data
  const facilitiesData = [
    {
      title: "AI & Machine Learning Lab",
      description: "State-of-the-art lab equipped with advanced GPU clusters for deep learning research and model training.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Connected Vehicle Testbed",
      description: "Simulation environment and hardware testbed for developing and testing connected vehicle technologies.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Innovation Workshop",
      description: "Collaborative workspace designed for ideation, design thinking sessions, and prototyping new concepts.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
            alt="Innovation Center Background"
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
                Innovation Center
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Where Ideas <br/>
              <span className="text-purple-400">Shape the Future</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Our Innovation Center is the hub for cutting-edge research, technology development, and creative solutions that drive the future of mobility and enterprise technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#about" className="btn-primary">
                Discover Our Center
              </Link>
              <Link href="/innovation/research" className="btn-outline-hero">
                Research Areas
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Innovation Center Section */}
      <section 
        id="about"
        ref={aboutRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isAboutInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  <span className="badge">About Our Center</span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gradient mb-6 heading-2xl"
                >
                  Innovation at the Core
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Established in 2015, the Hyundai AutoEver Innovation Center serves as the R&D hub for our organization, focused on creating breakthrough technologies and solutions for the automotive and enterprise IT sectors.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Our team of researchers, engineers, and domain experts collaborate to explore emerging technologies, develop proof-of-concepts, and create innovative solutions that address real-world challenges.
                </motion.p>
                
                <div className="space-y-4 mt-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700">50+ researchers with advanced degrees</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700">30+ patents filed in the last 5 years</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700">Partnerships with leading universities and research institutions</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Hyundai AutoEver Innovation Center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex space-x-4">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Innovation Center</p>
                      <p className="text-white/80 text-sm">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlapping stats card */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl p-6 shadow-xl max-w-[260px]">
                <h4 className="text-indigo-700 font-semibold mb-2">Innovation Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-bold">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time to Market</span>
                    <span className="font-bold">-35%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section 
        ref={focusAreasRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFocusAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Research Focus</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isFocusAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Key Focus Areas
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isFocusAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our innovation efforts are concentrated in these strategic areas that align with industry trends and business priorities.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreasData.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isFocusAreasInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${area.color}`}></div>
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${area.color} text-white`}>
                    <area.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-gray-700">{area.description}</p>
                  
                  <Link 
                    href={`/innovation/research#${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-indigo-600 font-medium mt-4 hover:text-indigo-700 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section 
        ref={facilitiesRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Our Spaces</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              State-of-the-Art Facilities
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our innovation center is equipped with cutting-edge technologies and purpose-built spaces to facilitate research, experimentation, and collaboration.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {facilitiesData.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-60">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-bold">{facility.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Team Section */}
      <section 
        ref={teamRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Our Experts</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              The Innovation Team
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Meet our talented team of researchers, technologists, and innovators driving cutting-edge research and development.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                  
                  <div className="space-y-1">
                    <p className="text-gray-600 text-sm font-medium">Expertise:</p>
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></div>
                        <p className="text-sm text-gray-700">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/careers" className="btn-primary">
              Join Our Team
            </Link>
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
              Collaborate with Our Innovation Center
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Partner with us to explore new technologies, develop innovative solutions, or collaborate on research initiatives.
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
              <Link href="/innovation/research" className="btn-outline-light">
                Research Areas
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 