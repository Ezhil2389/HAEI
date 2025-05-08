"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, ArrowRight, ChevronDown } from 'lucide-react';

// Leadership team data
const executives = [
  {
    id: 'ceo',
    name: 'Rajiv Mehta',
    title: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio: "Rajiv brings over 25 years of experience in the automotive and IT sectors. Prior to joining Hyundai AutoEver India, he held senior leadership positions at global technology companies and played a key role in digital transformation initiatives for automotive clients.",
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'coo',
    name: 'Priya Sharma',
    title: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    bio: "With extensive operations experience across manufacturing and IT services, Priya oversees the company's operational strategy and delivery excellence. She is known for implementing innovative processes that have significantly improved efficiency and client satisfaction.",
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'cfo',
    name: 'Arjun Kapoor',
    title: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio: "Arjun leads Hyundai AutoEver India's financial strategy and operations. His expertise in financial planning and analysis has been instrumental in driving sustainable growth and optimizing resource allocation across the organization.",
    linkedin: 'https://linkedin.com/'
  }
];

const departmentHeads = [
  {
    id: 'tech',
    name: 'Dr. Vikram Singh',
    title: 'Head of Technology',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: "Dr. Singh leads our technology initiatives with a focus on innovation and research. With a Ph.D. in Computer Science and multiple patents to his name, he drives our R&D efforts in connected vehicles and AI-powered solutions.",
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'delivery',
    name: 'Ananya Patel',
    title: 'Head of Delivery',
    image: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio: "Ananya ensures excellence in project delivery and client satisfaction across all our engagement models. Her leadership has been key to establishing our reputation for delivering high-quality solutions on time and within budget.",
    linkedin: 'https://linkedin.com/'
  }
];

const sectionHeads = [
  {
    id: 'automotive',
    name: 'Rahul Verma',
    title: 'Head of Automotive Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: 'Rahul specializes in automotive software solutions with expertise in ADAS and connected vehicle technologies.'
  },
  {
    id: 'cloud',
    name: 'Neha Gupta',
    title: 'Head of Cloud Services',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    bio: 'Neha leads our cloud transformation practice, helping clients optimize their infrastructure and implement modern cloud architectures.'
  },
  {
    id: 'data',
    name: 'Sanjay Kumar',
    title: 'Head of Data Analytics',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: 'With deep expertise in big data and analytics, Sanjay helps clients transform their data into actionable insights.'
  },
  {
    id: 'enterprise',
    name: 'Meera Iyer',
    title: 'Head of Enterprise Solutions',
    image: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: 'Meera oversees our enterprise application portfolio, specializing in SAP implementations and digital workplace solutions.'
  },
  {
    id: 'mobility',
    name: 'Amit Sharma',
    title: 'Head of Mobility Solutions',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: 'Amit focuses on next-generation mobility solutions, including EV infrastructure and sustainable transportation technologies.'
  },
  {
    id: 'qa',
    name: 'Divya Reddy',
    title: 'Head of Quality Assurance',
    image: 'https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
    bio: 'Divya ensures our solutions meet the highest quality standards through robust testing and validation methodologies.'
  },
  {
    id: 'security',
    name: 'Karthik Raghavan',
    title: 'Head of Cybersecurity',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: 'Karthik leads our cybersecurity practice, protecting client systems and data through advanced security solutions and best practices.'
  }
];

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);

  const toggleLeader = (id: string) => {
    if (selectedLeader === id) {
      setSelectedLeader(null);
    } else {
      setSelectedLeader(id);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-hyundai-blue via-hyundai-blue/90 to-hyundai-blue/80 z-0"></div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 z-0" 
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "80px 80px"
          }}
        ></div>
        
        <div className="absolute top-0 left-0 w-1/3 h-screen bg-gradient-radial from-sky-blue/20 to-transparent opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-active-blue/10 to-transparent opacity-40 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-5"
            >
              <span className="bg-white/10 backdrop-blur-md text-white text-sm font-medium py-1.5 px-4 rounded-full border border-white/20">
                Our Leadership Team
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            >
              Meet Our <span className="text-active-blue">Leaders</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10"
            >
              Our leadership team brings decades of experience in automotive technology, IT services, and digital innovation to drive our company's mission forward.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-gradient mb-6">Executive Leadership</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our executive team sets the strategic direction for Hyundai AutoEver India, driving innovation and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {executives.map((leader, index) => (
              <motion.div 
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card rounded-[2rem] overflow-hidden card-hover"
              >
                <div className="relative h-[320px] w-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-white text-2xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-white/80 text-lg">{leader.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-5">
                    {leader.bio}
                  </p>
                  <Link href={leader.linkedin} className="flex items-center text-hyundai-blue font-medium hover:text-active-blue transition-colors">
                    <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="py-24 relative overflow-hidden bg-hyundai-light-sand">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-gradient mb-6">Department Heads</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Leading our key business functions with expertise and vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {departmentHeads.map((leader, index) => (
              <motion.div 
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row glass-card rounded-[2rem] overflow-hidden card-hover"
              >
                <div className="relative md:w-2/5 h-[240px] md:h-auto">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <h3 className="text-hyundai-blue text-2xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-gray-700 font-medium mb-4">{leader.title}</p>
                  <p className="text-gray-700 mb-5">
                    {leader.bio}
                  </p>
                  <Link href={leader.linkedin} className="flex items-center text-hyundai-blue font-medium hover:text-active-blue transition-colors">
                    <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Heads */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-gradient mb-6">Section Heads</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized leaders who drive excellence across our technology domains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionHeads.map((leader, index) => (
              <motion.div 
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                className="glass-card rounded-[2rem] overflow-hidden card-hover"
              >
                <div 
                  className="cursor-pointer group"
                  onClick={() => toggleLeader(leader.id)}
                >
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-hyundai-blue/70 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-5 w-full flex items-end justify-between">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-1">{leader.name}</h3>
                        <p className="text-white/80 text-sm">{leader.title}</p>
                      </div>
                      <ChevronDown 
                        className={`h-6 w-6 text-white transition-transform duration-300 ${selectedLeader === leader.id ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedLeader === leader.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5">
                    <p className="text-gray-700">{leader.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-hyundai-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl md:text-5xl font-bold mb-6"
            >
              Join Our Team
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/80 text-xl mb-10"
            >
              Be part of an innovative company that's shaping the future of automotive technology and digital solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/careers" className="btn-primary">
                Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 