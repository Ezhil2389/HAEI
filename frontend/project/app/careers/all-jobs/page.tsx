"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Briefcase, 
  MapPin, 
  Users,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';

export default function AllJobsPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Job openings data (expanded from the careers page)
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
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Build and maintain our CI/CD pipelines, infrastructure automation, and monitoring systems to support rapid product development."
    },
    {
      id: "frontend-developer",
      title: "Frontend Developer",
      location: "Berlin, Germany",
      type: "Full-time",
      department: "Engineering",
      description: "Build modern, responsive user interfaces for our digital products using React, Next.js, and other cutting-edge technologies."
    },
    {
      id: "backend-engineer",
      title: "Backend Engineer",
      location: "Bangalore, India",
      type: "Full-time",
      department: "Engineering",
      description: "Design and develop scalable backend services and APIs to power our mobility and automotive solutions."
    },
    {
      id: "machine-learning-engineer",
      title: "Machine Learning Engineer",
      location: "Detroit, USA",
      type: "Full-time",
      department: "Research",
      description: "Implement and deploy machine learning models to improve our autonomous driving capabilities and connected mobility services."
    },
    {
      id: "automotive-systems-engineer",
      title: "Automotive Systems Engineer",
      location: "Stuttgart, Germany",
      type: "Full-time",
      department: "Automotive",
      description: "Design and integrate electronic systems for next-generation vehicles, focusing on safety, connectivity, and autonomous capabilities."
    },
    {
      id: "cloud-solutions-architect",
      title: "Cloud Solutions Architect",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Design and architect cloud-native solutions for our global enterprise customers, leveraging AWS, Azure, and Google Cloud."
    }
  ];

  // Unique locations and departments for filters
  const locations = Array.from(new Set(jobOpeningsData.map(job => job.location)));
  const departments = Array.from(new Set(jobOpeningsData.map(job => job.department)));

  // Filter jobs based on search term and filters
  const filteredJobs = jobOpeningsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === '' || job.location === locationFilter;
    const matchesDepartment = departmentFilter === '' || job.department === departmentFilter;
    
    return matchesSearch && matchesLocation && matchesDepartment;
  });

  // Reset filters
  const resetFilters = () => {
    setLocationFilter('');
    setDepartmentFilter('');
    setSearchTerm('');
  };

  return (
    <>
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative py-20 bg-gradient-to-br from-blue-700 to-sky-800 text-white"
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h1>
            <p className="text-xl text-white/90 mb-10">
              Explore all current job openings and find your perfect role in our global team.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search jobs by title, skill or keyword..." 
                className="w-full px-5 py-4 pr-12 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs Listing Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div className="flex items-center">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-gray-700"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {showFilters ? 
                    <ChevronUp className="h-4 w-4" /> : 
                    <ChevronDown className="h-4 w-4" />
                  }
                </button>
                
                {(locationFilter || departmentFilter) && (
                  <button 
                    onClick={resetFilters}
                    className="ml-3 flex items-center gap-1 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-4 w-4" />
                    <span>Clear filters</span>
                  </button>
                )}
              </div>
              
              <div className="text-gray-600">
                Showing {filteredJobs.length} of {jobOpeningsData.length} jobs
              </div>
            </div>
            
            {showFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    >
                      <option value="">All Locations</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={departmentFilter}
                      onChange={(e) => setDepartmentFilter(e.target.value)}
                    >
                      <option value="">All Departments</option>
                      {departments.map((department) => (
                        <option key={department} value={department}>{department}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Jobs List */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
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
                      <p className="text-gray-700 md:pr-8">
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
              ))
            ) : (
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="mx-auto w-20 h-20 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={resetFilters}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
          
          {/* Back to careers link */}
          <div className="mt-12 text-center">
            <Link 
              href="/careers" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              <span>Back to Careers Page</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See the Right Position?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll contact you when a suitable position opens up.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Our Recruiting Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 