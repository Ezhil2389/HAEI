"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Briefcase, 
  MapPin,
  GraduationCap,
  Heart,
  Clock,
  Coffee,
  Award,
  ChevronRight,
  Search
} from 'lucide-react';

export default function CareersPage() {
  const heroRef = useRef(null);
  const cultureRef = useRef(null);
  const benefitsRef = useRef(null);
  const jobsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isCultureInView = useInView(cultureRef, { once: true, amount: 0.2 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });
  const isJobsInView = useInView(jobsRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  // Company culture data
  const culturePillarsData = [
    {
      title: "Innovation",
      description: "We push boundaries and challenge the status quo, fostering a culture where bold ideas thrive and innovation flourishes.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and create an environment where diverse perspectives come together to solve complex challenges.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Excellence",
      description: "We pursue excellence in everything we do, setting high standards and continuously striving to exceed expectations.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Growth",
      description: "We invest in personal and professional growth, providing opportunities for our people to learn, develop, and reach their full potential.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Benefits data
  const benefitsData = [
    {
      title: "Comprehensive Healthcare",
      description: "We offer comprehensive medical, dental, and vision plans for employees and their families.",
      icon: Heart
    },
    {
      title: "Flexible Work Options",
      description: "Enjoy flexible work arrangements including remote work and flexible hours to maintain a healthy work-life balance.",
      icon: Clock
    },
    {
      title: "Professional Development",
      description: "Access to continuous learning opportunities, training programs, and career advancement pathways.",
      icon: GraduationCap
    },
    {
      title: "Global Opportunities",
      description: "Exciting opportunities to work on global projects and potential for international assignments.",
      icon: MapPin
    },
    {
      title: "Competitive Compensation",
      description: "Competitive salary packages with performance bonuses and equity options.",
      icon: Briefcase
    },
    {
      title: "Wellness Programs",
      description: "Comprehensive wellness initiatives including fitness subsidies, mental health resources, and wellness events.",
      icon: Coffee
    }
  ];

  // Job openings data
  const jobOpeningsData = [
    {
      id: "sr-software-engineer-cloud-infrastructure",
      title: "Sr. Software Engineer, Cloud Infrastructure",
      location: "Bangalore, India",
      type: "Full-time",
      department: "Engineering",
      description: "Join our Cloud Infrastructure team to design and implement scalable, resilient cloud solutions for enterprise applications."
    },
    {
      id: "product-manager-connected-mobility",
      title: "Product Manager, Connected Mobility",
      location: "Detroit, USA",
      type: "Full-time",
      department: "Product",
      description: "Lead the product development for our connected mobility solutions, working at the intersection of automotive and digital technologies."
    },
    {
      id: "data-scientist-ai-research",
      title: "Data Scientist, AI Research",
      location: "Berlin, Germany",
      type: "Full-time",
      department: "Research",
      description: "Develop cutting-edge machine learning models and algorithms to solve complex problems in the automotive and mobility domains."
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      location: "Munich, Germany",
      type: "Full-time",
      department: "Engineering",
      description: "Join our DevOps team to build and maintain our CI/CD pipelines, infrastructure, and deployment automation for our cutting-edge mobility solutions."
    },
    {
      id: "ux-ui-designer",
      title: "UX/UI Designer",
      location: "Bangalore, India",
      type: "Full-time",
      department: "Design",
      description: "Create intuitive and engaging user experiences for our enterprise software products and mobility applications."
    },
    {
      id: "technical-program-manager",
      title: "Technical Program Manager",
      location: "Tokyo, Japan",
      type: "Full-time",
      department: "Engineering",
      description: "Coordinate complex technical programs across multiple teams and ensure successful delivery of strategic initiatives."
    }
  ];

  // Testimonials data
  const testimonialsData = [
    {
      quote: "Working here has been transformative for my career. The challenging projects and supportive environment have helped me grow both professionally and personally.",
      name: "Anita Sharma",
      title: "Senior Product Manager",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      quote: "What I value most is the culture of innovation and the freedom to explore new ideas. The collaborative environment makes it exciting to come to work every day.",
      name: "Michael Chen",
      title: "Software Architect",
      location: "Detroit",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
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
            src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Careers Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800/80 to-blue-950/95"></div>
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
                Join Our Team
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Build Your <br/>
              <span className="text-blue-400">Future With Us</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Join a team of innovators, creators, and problem-solvers who are shaping the future of mobility and technology. Discover exciting career opportunities that make an impact.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#open-positions" className="btn-primary">
                Explore Opportunities
              </Link>
              <Link href="#culture" className="btn-outline-hero">
                Our Culture
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section 
        id="culture"
        ref={cultureRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCultureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Our Culture</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isCultureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Life at Our Company
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isCultureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our culture is built on core values that inspire innovation, foster collaboration, and create an environment where people thrive.
            </motion.p>
          </div>
          
          {/* Culture Pillars */}
          <div className="grid md:grid-cols-2 gap-8">
            {culturePillarsData.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCultureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-60">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg inline-block">
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-700">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isCultureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Hear From Our Team
              </motion.h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCultureInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (0.1 * index) }}
                  className="bg-blue-50 rounded-2xl p-8 relative"
                >
                  <div className="absolute top-6 left-6 text-5xl text-blue-300">"</div>
                  <div className="relative z-10">
                    <p className="text-lg text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                    
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits"
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
              <span className="badge">Employee Benefits</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              What We Offer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We provide a comprehensive benefits package designed to support your health, wellbeing, and professional growth.
            </motion.p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 bg-blue-100 rounded-xl inline-block mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section 
        id="open-positions"
        ref={jobsRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Open Positions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Current Opportunities
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
            >
              Explore our current job openings and find your perfect role at our company.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-3xl mx-auto mb-12 relative"
            >
              <input 
                type="text" 
                placeholder="Search for jobs by title, skill, or location..." 
                className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-5">
            {jobOpeningsData.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{job.department}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-3 md:pr-8">
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="md:flex-shrink-0">
                    <Link 
                      href={`/careers/job/${job.id}`}
                      className="btn-primary w-full md:w-auto whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/careers/all-jobs" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
              <span>View all open positions</span>
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
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
              Ready to Make an Impact?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Join our team of talented professionals who are passionate about innovation and making a difference. Explore exciting career opportunities today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#open-positions" className="btn-primary-light">
                Explore Job Openings
              </Link>
              <Link href="/contact" className="btn-outline-light">
                Contact Recruiting Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 