"use client";

import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Briefcase, 
  MapPin, 
  Users,
  Calendar,
  Check,
  ChevronRight,
  ArrowLeft,
  Send
} from 'lucide-react';

// Form state type definition
interface FormState {
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
  linkedIn: string;
}

// Job data type definition
interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
}

interface JobDetailContentProps {
  job: Job;
  relatedJobs: Job[];
}

export default function JobDetailContent({ job, relatedJobs }: JobDetailContentProps) {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  
  // Form state
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    linkedIn: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
        linkedIn: ''
      });
    }, 1500);
  };
  
  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle file upload
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-blue-700 to-sky-800 text-white"
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="mb-8">
            <Link 
              href="/careers/all-jobs" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to All Jobs</span>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-6 text-white/90">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Posted 2 weeks ago</span>
              </div>
            </div>
            
            <p className="text-lg text-white/90 mb-8">
              {job.description}
            </p>
            
            <Link href="#apply-now" className="btn-primary-light">
              Apply for this Position
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                    </div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferred Qualifications</h2>
              <ul className="space-y-3">
                {job.preferred.map((qualification, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                    </div>
                    <span className="text-gray-700">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Company</h2>
              <p className="text-gray-700 mb-4">
                We are a global technology leader with a focus on innovation in mobility, automotive technology, and digital solutions. Our diverse team works together to create the future of transportation and connectivity.
              </p>
              <p className="text-gray-700 mb-6">
                We offer competitive compensation, comprehensive benefits, and a collaborative work environment that supports professional growth and development.
              </p>
              <Link href="/about" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                <span>Learn more about our company</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section 
        id="apply-now"
        ref={formRef}
        className="py-16 bg-gray-50"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for This Position</h2>
              <p className="text-gray-700">
                Please complete the form below to apply for the {job.title} position.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted</h3>
                <p className="text-gray-700 mb-6">
                  Thank you for your interest in joining our team! We have received your application and will review it shortly. 
                  Our recruiting team will contact you if your qualifications match our requirements.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/careers/all-jobs" className="btn-primary">
                    View More Jobs
                  </Link>
                  <Link href="/" className="btn-outline">
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      id="linkedIn"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    accept=".pdf,.doc,.docx"
                  />
                  <p className="mt-1 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us why you're interested in this position and what makes you a great candidate."
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Related Jobs Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Similar Positions</h2>
              <p className="text-gray-700">
                Explore other opportunities that might match your skills and interests.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {relatedJobs.slice(0, 2).map((relatedJob) => (
                <Link 
                  key={relatedJob.id}
                  href={`/careers/job/${relatedJob.id}`}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{relatedJob.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                      <span>{relatedJob.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-blue-500" />
                      <span>{relatedJob.department}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 line-clamp-2 mb-4">
                    {relatedJob.description}
                  </p>
                  <div className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors inline-flex items-center">
                    View Position <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/careers/all-jobs" className="btn-primary">
                View All Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 