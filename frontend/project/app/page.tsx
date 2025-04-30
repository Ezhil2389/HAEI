"use client";

import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import StatsSection from '@/components/sections/stats-section';
import NewsSection from '@/components/sections/news-section';
import CTASection from '@/components/sections/cta-section';
import TechnologiesSection from '@/components/sections/technologies-section';
import CareersSection from '@/components/sections/careers-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import GlobalPresenceSection from '@/components/sections/global-presence-section';
import PartnershipsSection from '@/components/sections/partnerships-section';

// Sample data - would be fetched from CMS
const servicesData = [
  {
    id: '1',
    title: 'IT Solutions',
    description: 'Enterprise-level IT solutions tailored for the automotive industry and beyond.',
    icon: '/icons/it-solutions.svg',
    href: '/services/it-solutions',
  },
  {
    id: '2',
    title: 'Automotive',
    description: 'Cutting-edge technologies for connected cars and smart mobility solutions.',
    icon: '/icons/automotive.svg',
    href: '/services/automotive',
  },
  {
    id: '3',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and services for digital transformation.',
    icon: '/icons/cloud.svg',
    href: '/services/cloud',
  },
  {
    id: '4',
    title: 'Consulting',
    description: 'Strategic IT consulting to drive innovation and business growth.',
    icon: '/icons/consulting.svg',
    href: '/services/consulting',
  },
];

const statsData = [
  { value: '20+', label: 'Years of Experience', description: 'Delivering excellence since 2000' },
  { value: '500+', label: 'Global Clients', description: 'Trusted by industry leaders' },
  { value: '45+', label: 'Countries', description: 'Global presence and impact' },
  { value: '2000+', label: 'Professionals', description: 'Expert team worldwide' },
];

const newsData = [
  {
    id: '1',
    title: 'Hyundai AutoEver Launches New AI-Powered Solutions',
    excerpt: 'Introducing cutting-edge AI solutions to transform automotive manufacturing and enhance efficiency.',
    date: '2023-10-15T10:00:00Z',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'hyundai-autoever-launches-new-ai-solutions',
    category: 'Innovation'
  },
  {
    id: '2',
    title: 'Strategic Partnership with Leading Cloud Provider',
    excerpt: 'Hyundai AutoEver India announces strategic partnership to enhance cloud service offerings and capabilities.',
    date: '2023-09-28T08:30:00Z',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'strategic-partnership-cloud-provider',
    category: 'Partnership'
  },
  {
    id: '3',
    title: 'Expanding Operations in Bangalore',
    excerpt: 'New state-of-the-art development center in Bangalore to accelerate innovation and support growth.',
    date: '2023-09-12T09:15:00Z',
    image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'expanding-operations-bangalore',
    category: 'Growth'
  },
];

// Hero slides data
const heroSlides = [
  {
    title: "Driving Digital Transformation & Innovation",
    subtitle: "We deliver cutting-edge IT solutions that empower businesses for tomorrow's technology challenges with precision, innovation, and excellence.",
    primaryCta: { text: "Discover Our Solutions", href: "/services" },
    secondaryCta: { text: "Get in Touch", href: "/contact" },
    backgroundImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayColor: 'rgba(0, 44, 95, 0.7)'
  },
  {
    title: "Accelerating Automotive Excellence",
    subtitle: "Experience the future of mobility with our advanced automotive IT solutions designed to enhance connectivity, safety, and efficiency.",
    primaryCta: { text: "Explore Automotive", href: "/services/automotive" },
    secondaryCta: { text: "Case Studies", href: "/case-studies" },
    backgroundImage: "https://images.unsplash.com/photo-1592840062661-a5f6ef9c07ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    overlayColor: 'rgba(25, 25, 62, 0.7)'
  },
  {
    title: "Enterprise Solutions For Tomorrow",
    subtitle: "Streamline operations and maximize efficiency with our comprehensive enterprise solutions tailored for your business needs.",
    primaryCta: { text: "View Enterprise Solutions", href: "/services/it-solutions" },
    secondaryCta: { text: "Our Approach", href: "/about" },
    backgroundImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    overlayColor: 'rgba(44, 62, 80, 0.7)'
  }
];

// Technology data
const technologiesData = [
  {
    name: 'SAP',
    logo: '/logos/sap-logo.svg',
    description: 'Enterprise-grade ERP solutions for business process management and operations'
  },
  {
    name: 'Salesforce',
    logo: '/logos/salesforce-logo.svg',
    description: 'Leading CRM platform for sales, service, marketing, and customer relationship management'
  },
  {
    name: 'AWS',
    logo: '/logos/aws-logo.svg',
    description: 'Comprehensive cloud platform with 200+ services for infrastructure, databases, and machine learning'
  },
  {
    name: 'Spring Boot',
    logo: '/logos/springboot-logo.svg',
    description: 'Java framework for creating stand-alone, production-grade applications with minimal configuration'
  },
  {
    name: 'Java',
    logo: '/logos/java-logo.svg',
    description: 'Platform-independent programming language for enterprise systems and applications'
  },
  {
    name: 'React',
    logo: '/logos/react-logo.svg',
    description: 'JavaScript library for building dynamic user interfaces with component-based architecture'
  },
  {
    name: 'Angular',
    logo: '/logos/angular-logo.svg',
    description: 'Robust framework for building single-page client applications with TypeScript'
  },
  {
    name: 'Gatsby.js',
    logo: '/logos/gatsby-logo.svg',
    description: 'React-based framework for building fast, secure, and powerful websites and applications'
  },
  {
    name: 'Node.js',
    logo: '/logos/nodejs-logo.svg',
    description: 'JavaScript runtime for scalable server-side and networking applications'
  },
  {
    name: 'Jira',
    logo: '/logos/jira-logo.svg',
    description: 'Project management tool for agile teams to plan, track, and manage software development'
  },
  {
    name: 'Jenkins',
    logo: '/logos/jenkins-logo.svg',
    description: 'Open-source automation server for building, testing, and deploying code reliably'
  },
  {
    name: 'GitLab',
    logo: '/logos/gitlab-logo.svg',
    description: 'Complete DevOps platform for software development, security, and operations'
  }
];

// Testimonials data
const testimonialsData = [
  {
    id: '1',
    quote: 'Hyundai AutoEver India has been a key technology partner in our digital transformation journey. Their expertise in automotive IT solutions helped us streamline operations and reduce costs by 30%.',
    author: 'Rajiv Mehta',
    position: 'CIO',
    company: 'Global Automotive Manufacturer',
    logo: 'https://www.vectorlogo.zone/logos/toyota/toyota-ar21.svg',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    id: '2',
    quote: 'The team at HAEI delivered exceptional results with their cloud migration solution. Their deep knowledge of both automotive processes and advanced technology made them the perfect partner.',
    author: 'Priya Sharma',
    position: 'Head of Digital',
    company: 'Leading Auto Components Supplier',
    logo: 'https://www.vectorlogo.zone/logos/bosch/bosch-ar21.svg',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: '3',
    quote: "HAEI's custom SAP implementation transformed our business processes. Their industry expertise and commitment to innovation have made them our trusted technology partner for over a decade.",
    author: 'Thomas Chen',
    position: 'CEO',
    company: 'Mobility Solutions Provider',
    logo: 'https://www.vectorlogo.zone/logos/continental/continental-ar21.svg',
    image: 'https://images.unsplash.com/photo-1574767783046-b5425aec0226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  }
];

// Global presence data with properly typed coordinates as tuples
const locationsData = [
  {
    id: '1',
    name: 'Hyundai AutoEver India HQ',
    country: 'India',
    coordinates: [28.6139, 77.2090] as [number, number], // Delhi
    description: 'Our headquarters in India houses core development teams focused on automotive software and enterprise solutions.',
    employeeCount: 1200,
    image: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    establishedYear: 2006,
    specializations: ['SAP', 'Enterprise Solutions', 'Mobility', 'Cloud Infrastructure'],
  },
  {
    id: '2',
    name: 'Hyundai AutoEver Korea',
    country: 'South Korea',
    coordinates: [37.5665, 126.9780] as [number, number], // Seoul
    description: 'Our global headquarters coordinates worldwide operations and drives innovation in automotive technology.',
    employeeCount: 2800,
    establishedYear: 2000,
    specializations: ['R&D', 'Automotive Systems', 'Connected Vehicles'],
  },
  {
    id: '3',
    name: 'Hyundai AutoEver America',
    country: 'United States',
    coordinates: [33.7490, -84.3880] as [number, number], // Atlanta
    description: 'Our North American hub specializes in connected vehicle technologies and enterprise solutions.',
    employeeCount: 950,
    establishedYear: 2003,
    specializations: ['Connected Vehicles', 'Data Analytics', 'Cloud Solutions'],
  },
  {
    id: '4',
    name: 'Hyundai AutoEver Europe',
    country: 'Germany',
    coordinates: [48.1351, 11.5820] as [number, number], // Munich
    description: 'Our European center delivers cutting-edge solutions for automotive manufacturers and suppliers.',
    employeeCount: 750,
    establishedYear: 2008,
    specializations: ['Manufacturing Systems', 'Supply Chain', 'IoT'],
  },
  {
    id: '5',
    name: 'Hyundai AutoEver China',
    country: 'China',
    coordinates: [31.2304, 121.4737] as [number, number], // Shanghai
    description: 'Our China operations focus on localized solutions for the world\'s largest automotive market.',
    employeeCount: 1100,
    establishedYear: 2004,
    specializations: ['Manufacturing', 'Dealer Systems', 'Logistics'],
  },
  {
    id: '6',
    name: 'Hyundai AutoEver Singapore',
    country: 'Singapore',
    coordinates: [1.3521, 103.8198] as [number, number], // Singapore
    description: 'Our innovation hub in Singapore leads research in smart mobility and urban transportation solutions.',
    employeeCount: 350,
    establishedYear: 2012,
    specializations: ['Smart Mobility', 'Urban Solutions', 'R&D'],
  }
];

// Partnership data (Hyundai subsidiaries) with properly typed categories
const partnershipsData = [
  {
    id: '1',
    name: 'Hyundai Motor Company',
    logo: 'https://www.vectorlogo.zone/logos/hyundai/hyundai-ar21.svg',
    description: 'One of the world\'s largest automotive manufacturers producing passenger cars, commercial vehicles, and innovative mobility solutions.',
    category: 'automotive' as 'automotive',
    relationship: 'Parent Company',
    website: 'https://www.hyundai.com',
    yearEstablished: 1967,
    collaborations: [
      'Connected car technology integration',
      'Manufacturing systems optimization',
      'Global supply chain management'
    ]
  },
  {
    id: '2',
    name: 'Kia Corporation',
    logo: 'https://www.vectorlogo.zone/logos/kia/kia-ar21.svg',
    description: 'South Korean multinational automotive manufacturer producing a wide range of vehicles from SUVs to electric cars.',
    category: 'automotive' as 'automotive',
    relationship: 'Sister Company',
    website: 'https://www.kia.com',
    yearEstablished: 1944,
    collaborations: [
      'Shared IT infrastructure',
      'Joint technology development',
      'Unified dealer management systems'
    ]
  },
  {
    id: '3',
    name: 'Hyundai Mobis',
    logo: 'https://www.mobis.co.kr/resources/en/img/logo.svg',
    description: 'Global tier-1 automotive supplier specializing in automotive modules, parts, and advanced automotive technologies.',
    category: 'manufacturing' as 'manufacturing',
    relationship: 'Sister Company',
    website: 'https://www.mobis.co.kr',
    yearEstablished: 1977,
    collaborations: [
      'Advanced driver assistance systems',
      'Manufacturing analytics platforms',
      'Quality control systems'
    ]
  },
  {
    id: '4',
    name: 'Hyundai KEFICO',
    logo: 'https://kefico.com/theme/basic/img/main/logo.png',
    description: 'Specialized in automotive electronic control systems including engine control units and powertrain control systems.',
    category: 'technology' as 'technology',
    relationship: 'Subsidiary',
    yearEstablished: 1987,
    collaborations: [
      'Electronic control unit development',
      'Diagnostic system integration',
      'Calibration tools'
    ]
  },
  {
    id: '5',
    name: 'Hyundai Rotem',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Hyundai_Rotem_Logo.svg/1200px-Hyundai_Rotem_Logo.svg.png',
    description: 'Manufacturer of rolling stock, defense products, and plant equipment for various industrial applications.',
    category: 'manufacturing' as 'manufacturing',
    relationship: 'Affiliate',
    website: 'https://www.hyundai-rotem.co.kr',
    yearEstablished: 1999
  },
  {
    id: '6',
    name: 'Hyundai Card',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hyundai_Card_logo.svg/2560px-Hyundai_Card_logo.svg.png',
    description: 'Financial services company providing credit cards, loans, and digital payment solutions.',
    category: 'financial' as 'financial',
    relationship: 'Sister Company',
    yearEstablished: 2001,
    collaborations: [
      'Payment processing systems',
      'Customer relationship management',
      'Fraud detection systems'
    ]
  },
  {
    id: '7',
    name: 'Hyundai Glovis',
    logo: 'https://www.glovis.net/Uploads/About/en/company/img-ci-meaning4-en.jpg',
    description: 'Logistics service provider specializing in supply chain management for automotive and other industries.',
    category: 'mobility' as 'mobility',
    relationship: 'Sister Company',
    website: 'https://www.glovis.net',
    yearEstablished: 2001,
    collaborations: [
      'Logistics management systems',
      'Fleet tracking solutions',
      'Supply chain visibility platforms'
    ]
  },
  {
    id: '8',
    name: 'Hyundai Transys',
    logo: 'https://www.hyundai-transys.com/resources/img/common/header-logo.png',
    description: 'Global auto parts company specializing in transmissions, axles, and seats for various vehicle types.',
    category: 'manufacturing' as 'manufacturing',
    relationship: 'Subsidiary',
    yearEstablished: 1994
  }
];

export default function Home() {
  return (
    <>
      <HeroSection 
        slides={heroSlides}
        textPosition="left"
      />

      <AboutSection 
        title="Leading IT Solutions Provider"
        subtitle="About Hyundai AutoEver India"
        description="Hyundai AutoEver India is a leading IT service provider with over two decades of experience delivering innovative solutions for automotive and enterprise businesses. As a subsidiary of Hyundai Motor Group, we combine deep industry knowledge with technological expertise to drive digital transformation and business success for our clients."
        image="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        stats={[
          { value: '2000+', label: 'Employees' },
          { value: '24+', label: 'Years' },
          { value: '500+', label: 'Clients' },
          { value: '10+', label: 'Locations' },
        ]}
        imagePosition="right"
      />

      <ServicesSection 
        title="Our Services"
        subtitle="Discover how our comprehensive range of services can help drive your business forward."
        services={servicesData}
      />
      
      <StatsSection 
        title="Delivering Excellence Globally"
        subtitle="Our track record speaks for itself"
        stats={statsData}
      />

      <TestimonialsSection
        title="Client Success Stories"
        subtitle="Hear what our clients have to say about working with Hyundai AutoEver India"
        testimonials={testimonialsData}
      />

      <TechnologiesSection
        title="Our Technology Stack"
        subtitle="We leverage cutting-edge technologies to deliver innovative solutions"
        technologies={technologiesData}
      />

      <GlobalPresenceSection
        title="Global Presence"
        subtitle="Our worldwide network enables us to deliver solutions at scale across continents"
        locations={locationsData}
        stats={{
          countries: 15,
          offices: 24,
          employees: 8500
        }}
      />

      <PartnershipsSection
        title="Hyundai Group Ecosystem"
        subtitle="We work closely with Hyundai Motor Group companies to deliver integrated solutions"
        partners={partnershipsData}
      />

      <CareersSection
        title="Automotive IT Positions"
        subtitle="Make an impact every day. At HAEI, you can develop your skillset and see results that enhance hundreds of millions of people's lives."
        ctaText="Join Us"
        ctaLink="/careers"
      />

      <NewsSection 
        title="Latest News & Updates"
        subtitle="Stay informed about our latest developments, innovations, and company news."
        news={newsData}
      />

      <CTASection 
        title="Ready to Transform Your Business?"
        description="Get in touch with our team to learn how Hyundai AutoEver's solutions can help your business thrive in the digital era."
        primaryCtaText="Contact Us Today"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Services"
        secondaryCtaLink="/services"
      />
    </>
  );
}