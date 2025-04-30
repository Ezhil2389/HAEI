"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Clock, Users, Zap } from 'lucide-react';
import CaseStudiesSection from '@/components/sections/case-studies-section';

// Case studies data
const caseStudiesData = [
  {
    id: '1',
    title: 'Enterprise SAP Implementation',
    description: 'Streamlining operations for a leading automotive manufacturer with a comprehensive SAP S/4HANA implementation.',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    slug: 'enterprise-sap-implementation',
    logo: 'https://www.vectorlogo.zone/logos/sap/sap-icon.svg',
    metrics: [
      { label: 'Implementation Time', value: '18 Months', icon: 'time' },
      { label: 'Efficiency Gain', value: '32%', icon: 'efficiency' },
      { label: 'Users', value: '5,000+', icon: 'users' },
      { label: 'ROI', value: '125%', icon: 'award' }
    ]
  },
  {
    id: '2',
    title: 'Connected Vehicle Platform',
    description: 'Building a next-generation telematics platform for real-time vehicle monitoring and data analytics.',
    category: 'Mobility',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    slug: 'connected-vehicle-platform',
    metrics: [
      { label: 'Data Points', value: '250M/day', icon: 'efficiency' },
      { label: 'Vehicles', value: '1.2M+', icon: 'users' }
    ]
  },
  {
    id: '3',
    title: 'Manufacturing Analytics Solution',
    description: 'Leveraging advanced analytics and machine learning to optimize production efficiency and quality control.',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1565043589221-2a6a8fbe3d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    slug: 'manufacturing-analytics-solution',
    metrics: [
      { label: 'Defect Reduction', value: '28%', icon: 'efficiency' },
      { label: 'Cost Savings', value: '$4.5M', icon: 'award' }
    ]
  },
  {
    id: '4',
    title: 'Dealer Management System',
    description: 'Comprehensive solution for automotive dealerships to manage sales, service, inventory, and customer relationships.',
    category: 'CRM',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    slug: 'dealer-management-system',
    logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
    metrics: [
      { label: 'Dealers', value: '850+', icon: 'users' },
      { label: 'Transactions', value: '1.2M/day', icon: 'efficiency' }
    ]
  },
  {
    id: '5',
    title: 'Supply Chain Optimization',
    description: 'End-to-end supply chain management solution with real-time visibility and predictive analytics.',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    slug: 'supply-chain-optimization',
    metrics: [
      { label: 'Inventory Reduction', value: '24%', icon: 'efficiency' },
      { label: 'Delivery Time', value: '-35%', icon: 'time' }
    ]
  },
  {
    id: '6',
    title: 'EV Charging Infrastructure',
    description: 'Smart EV charging management system with load balancing, monitoring, and payment integration.',
    category: 'Mobility',
    image: 'https://images.unsplash.com/photo-1648234513060-239aed8a491b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    slug: 'ev-charging-infrastructure',
    metrics: [
      { label: 'Charging Stations', value: '12,000+', icon: 'users' },
      { label: 'Uptime', value: '99.9%', icon: 'efficiency' }
    ]
  },
  {
    id: '7',
    title: 'Autonomous Vehicle Testing Platform',
    description: 'Comprehensive simulation and testing environment for autonomous vehicle development and validation.',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    slug: 'autonomous-vehicle-testing',
    metrics: [
      { label: 'Test Scenarios', value: '25,000+', icon: 'efficiency' },
      { label: 'Development Time', value: '-40%', icon: 'time' }
    ]
  },
  {
    id: '8',
    title: 'Smart Factory Implementation',
    description: 'IoT-driven smart factory solution enabling real-time monitoring, predictive maintenance, and process optimization.',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1416949929422-a1d9c8fe84af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    slug: 'smart-factory-implementation',
    metrics: [
      { label: 'Productivity Gain', value: '27%', icon: 'efficiency' },
      { label: 'Downtime Reduction', value: '43%', icon: 'time' }
    ]
  }
];

// Fixed icon types to match the expected enum
const caseStudiesWithCorrectIconTypes = caseStudiesData.map(study => ({
  ...study,
  metrics: study.metrics?.map(metric => ({
    ...metric,
    icon: metric.icon as 'time' | 'efficiency' | 'users' | 'award' | undefined
  }))
}));

// Hero section for case studies page
function CaseStudiesHero() {
  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900"></div>
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Explore how we've helped leading organizations solve complex challenges with innovative solutions that deliver measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#featured-cases" 
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Cases
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Main case studies page component
export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      
      <div id="featured-cases">
        <CaseStudiesSection
          title="Featured Case Studies"
          subtitle="Discover how we've helped organizations drive digital transformation and achieve measurable results"
          caseStudies={caseStudiesWithCorrectIconTypes}
        />
      </div>
      
      {/* Call to action */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600">
                Contact our team to discuss how we can help you achieve your business objectives with tailored technology solutions.
              </p>
            </div>
            <div>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium transition-colors hover:bg-gray-800 gap-2"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 