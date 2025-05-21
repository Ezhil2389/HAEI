"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Brain, 
  Cpu, 
  Lightbulb,
  Rocket,
  Link as LinkIcon,
  ArrowRight,
  Users,
  Globe,
  Award
} from 'lucide-react';

export default function InnovationPage() {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const areasRef = useRef(null);
  const achievementsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const isAreasInView = useInView(areasRef, { once: true, amount: 0.2 });
  const isAchievementsInView = useInView(achievementsRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  // Innovation areas data
  const innovationAreasData = [
    {
      title: "Research & Development",
      description: "Our research team explores cutting-edge technologies and develops innovative solutions across multiple domains, from artificial intelligence to connected mobility.",
      icon: Brain,
      link: "/innovation/research",
      color: "from-indigo-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Technology Solutions",
      description: "Our enterprise-grade technology solutions enable organizations to innovate, scale, and transform their operations for the digital age.",
      icon: Cpu,
      link: "/innovation/technology",
      color: "from-blue-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Innovation Center",
      description: "Our state-of-the-art innovation centers provide collaborative spaces for ideation, experimentation, and the development of next-generation solutions.",
      icon: Lightbulb,
      link: "/innovation/center",
      color: "from-amber-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      title: "Future Initiatives",
      description: "Explore our forward-looking initiatives and strategic investments that are shaping the future of mobility, connectivity, and sustainable technologies.",
      icon: Rocket,
      link: "/innovation/future",
      color: "from-emerald-500 to-green-600",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80"
    }
  ];

  // Innovation achievements data
  const achievementsData = [
    {
      title: "Global Recognition",
      description: "Recognized as a leader in innovation by industry analysts and received multiple awards for our cutting-edge solutions.",
      icon: Award,
      stat: "25+",
      statLabel: "Innovation Awards"
    },
    {
      title: "Research Publications",
      description: "Our research teams regularly publish in top-tier scientific journals and conferences, contributing to the advancement of technology.",
      icon: Brain,
      stat: "200+",
      statLabel: "Research Publications"
    },
    {
      title: "Global Innovation Centers",
      description: "We operate innovation centers across the globe, fostering collaboration with local ecosystems and talent.",
      icon: Globe,
      stat: "12",
      statLabel: "Innovation Hubs"
    },
    {
      title: "Innovation Community",
      description: "Our innovation community brings together employees, partners, and academia to solve complex challenges.",
      icon: Users,
      stat: "5,000+",
      statLabel: "Innovation Community Members"
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
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Innovation Background"
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
                Innovation Hub
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Shaping <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400">The Future</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Discover our innovation ecosystem where we develop breakthrough technologies and solutions that are transforming industries and creating new possibilities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#innovation-areas" className="btn-primary">
                Explore Innovation Areas
              </Link>
              <Link href="#achievements" className="btn-outline-hero">
                Our Achievements
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Overview Section */}
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
              <span className="badge">Our Approach</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Innovation Philosophy
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 mb-6"
            >
              At the heart of our organization lies a deep commitment to innovation. We believe that transformative ideas emerge when we combine diverse perspectives, embrace bold thinking, and maintain a relentless focus on solving real-world challenges.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-700 mb-10"
            >
              Our innovation ecosystem spans research labs, technology centers, startup partnerships, and collaborative initiatives. Through this integrated approach, we're able to accelerate the journey from initial concept to market-ready solution.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 text-white mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ideas</h3>
                <p className="text-gray-700">Fostering a culture of creativity and idea generation across all levels.</p>
              </div>
              
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research</h3>
                <p className="text-gray-700">Advancing knowledge through rigorous scientific research and experimentation.</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white mb-4">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-700">Creating breakthrough solutions that deliver meaningful impact for our customers and society.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Areas Section */}
      <section 
        id="innovation-areas"
        ref={areasRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Innovation Ecosystem</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Explore Our Innovation Areas
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Discover the key areas where we're pushing boundaries and creating the next generation of transformative solutions.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {innovationAreasData.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isAreasInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px]"
              >
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:via-black/40 transition-all duration-300"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-gradient-to-r mb-5 p-3 rounded-lg inline-block w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md">
                    <area.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-white/90 mb-6 max-w-md">{area.description}</p>
                  
                  <Link 
                    href={area.link}
                    className="inline-flex items-center text-white font-medium group-hover:text-white/90 transition-colors"
                  >
                    <span>Explore {area.title}</span>
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Achievements Section */}
      <section 
        id="achievements"
        ref={achievementsRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Innovation Impact</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Our Achievements
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We're proud of the impact our innovation initiatives have made across industries and communities worldwide.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 text-white mb-6">
                  <achievement.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-1">{achievement.stat}</h3>
                <p className="text-blue-600 font-medium mb-4">{achievement.statLabel}</p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h4>
                <p className="text-gray-700">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Partners Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Collaborative Innovation</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Innovation Partners
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-10"
            >
              We collaborate with leading universities, research institutions, startups, and industry partners to accelerate innovation and solve complex challenges.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70"
            >
              {/* Partner logos would go here - using placeholder shapes */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-16 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"
                ></div>
              ))}
            </motion.div>
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
              Ready to Innovate With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Whether you're interested in our research, technology solutions, or exploring collaboration opportunities, we're here to help you drive innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary-light">
                Contact Our Innovation Team
              </Link>
              <Link href="/innovation/research" className="btn-outline-light">
                Explore Research Areas
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 