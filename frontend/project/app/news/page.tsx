"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Newspaper, 
  Calendar, 
  Tag, 
  ArrowRight,
  Globe,
  Award,
  Users,
  Link as LinkIcon
} from 'lucide-react';

export default function NewsPage() {
  const heroRef = useRef(null);
  const latestRef = useRef(null);
  const eventsRef = useRef(null);
  const pressRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isLatestInView = useInView(latestRef, { once: true, amount: 0.2 });
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.2 });
  const isPressInView = useInView(pressRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  // News articles data
  const newsArticlesData = [
    {
      title: "Introducing Our New AI-Powered Customer Experience Platform",
      summary: "We're excited to announce the launch of our new AI-powered customer experience platform that helps businesses deliver personalized interactions at scale.",
      date: "June 15, 2023",
      category: "Product Launch",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "ai-powered-customer-experience-platform"
    },
    {
      title: "Strategic Partnership with Global Cloud Provider Announced",
      summary: "We've joined forces with a leading global cloud provider to enhance our capabilities and offer even more powerful cloud solutions to our enterprise customers.",
      date: "May 22, 2023",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "strategic-partnership-cloud-provider"
    },
    {
      title: "Expansion into European Markets with New Regional Office",
      summary: "We're excited to announce our expansion into European markets with the opening of our new regional headquarters in Berlin, Germany.",
      date: "April 10, 2023",
      category: "Company Growth",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      slug: "european-market-expansion"
    },
    {
      title: "Company Recognized as Leader in Industry Innovation",
      summary: "We're honored to be recognized as a leader in industry innovation by a prestigious technology advisory firm for the third consecutive year.",
      date: "March 5, 2023",
      category: "Award",
      image: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      slug: "leader-industry-innovation-award"
    },
    {
      title: "Quarterly Financial Results Show Strong Growth",
      summary: "Our latest quarterly financial results show strong growth across all business units, with a notable increase in cloud services adoption.",
      date: "February 15, 2023",
      category: "Financial",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      slug: "quarterly-financial-results-growth"
    },
    {
      title: "New Study Reveals Increasing Demand for Connected Vehicle Solutions",
      summary: "A new market study commissioned by our research team highlights the growing demand for connected vehicle solutions across global markets.",
      date: "January 22, 2023",
      category: "Research",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "study-connected-vehicle-demand"
    }
  ];

  // Upcoming events data
  const upcomingEventsData = [
    {
      title: "Global Technology Summit 2023",
      description: "Join us at the Global Technology Summit where our executives will discuss emerging technology trends and showcase our latest innovations.",
      date: "August 10-12, 2023",
      location: "Dubai, UAE",
      type: "Conference",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Future of Mobility Webinar Series",
      description: "A three-part webinar series exploring the future of mobility, autonomous vehicles, and connected transportation ecosystems.",
      date: "July 5, 15, and 25, 2023",
      location: "Virtual Event",
      type: "Webinar",
      image: "https://images.unsplash.com/photo-1565017228812-8c2da44a8885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Enterprise Cloud Innovation Workshop",
      description: "A hands-on workshop for enterprise architects and technology leaders focused on cloud migration and modernization strategies.",
      date: "June 28, 2023",
      location: "New York, USA",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    }
  ];

  // Press releases data
  const pressReleasesData = [
    {
      title: "Company Announces Carbon Neutrality Commitment by 2025",
      summary: "As part of our ongoing commitment to sustainability, we've announced our plan to achieve carbon neutrality across all global operations by 2025.",
      date: "June 5, 2023",
      source: "Company Press Office",
      link: "#"
    },
    {
      title: "New Artificial Intelligence Research Center Launches in Bangalore",
      summary: "We're expanding our research capabilities with the opening of a new AI research center in Bangalore, focused on developing cutting-edge AI technologies.",
      date: "May 18, 2023",
      source: "Company Press Office",
      link: "#"
    },
    {
      title: "Appointment of New Chief Technology Officer Announced",
      summary: "We're pleased to announce the appointment of Dr. Sarah Chen as our new Chief Technology Officer, bringing over 20 years of industry experience.",
      date: "April 30, 2023",
      source: "Company Press Office",
      link: "#"
    },
    {
      title: "Company Completes Acquisition of Leading Data Analytics Firm",
      summary: "We've successfully completed the acquisition of DataSphere Analytics, strengthening our capabilities in advanced data analytics and AI solutions.",
      date: "March 25, 2023",
      source: "Company Press Office",
      link: "#"
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
            src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="News Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-950/95"></div>
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
                Company News & Updates
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Stay <br/>
              <span className="text-emerald-400">Informed</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-xl max-w-3xl leading-relaxed mb-10"
            >
              Get the latest news, announcements, and updates about our company, products, and initiatives that are shaping the future of technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#latest-news" className="btn-primary">
                Latest News
              </Link>
              <Link href="#upcoming-events" className="btn-outline-hero">
                Upcoming Events
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section 
        id="latest-news"
        ref={latestRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLatestInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">News & Announcements</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isLatestInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Latest News
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLatestInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Stay updated with the latest announcements, achievements, and developments from our company.
            </motion.p>
          </div>
          
          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticlesData.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isLatestInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-emerald-800">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-emerald-600 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  
                  <Link href={`/news/${article.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-700 mb-4">
                    {article.summary}
                  </p>
                  
                  <Link 
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                  >
                    <span>Read more</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/news/archive" className="btn-primary">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section 
        id="upcoming-events"
        ref={eventsRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Events & Webinars</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Upcoming Events
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Join us at these upcoming events where we'll share insights, showcase innovations, and connect with industry partners.
            </motion.p>
          </div>
          
          <div className="space-y-8">
            {upcomingEventsData.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="relative h-full min-h-[200px] md:min-h-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:col-span-2 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-emerald-600 mb-2">
                      <Tag className="h-4 w-4" />
                      <span>{event.type}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 flex-grow">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-emerald-100">
                          <Calendar className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Date</p>
                          <p className="text-gray-800">{event.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-emerald-100">
                          <Globe className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Location</p>
                          <p className="text-gray-800">{event.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      href="#"
                      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      <span>Register for this event</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section 
        id="press-releases"
        ref={pressRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPressInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="badge">Media Coverage</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isPressInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gradient mb-6 heading-2xl"
            >
              Press Releases
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isPressInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Official company announcements and press releases covering major milestones, achievements, and strategic initiatives.
            </motion.p>
          </div>
          
          <div className="space-y-6">
            {pressReleasesData.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isPressInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 rounded-full p-3 mt-1 flex-shrink-0">
                    <Newspaper className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <Link href={release.link} className="group">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {release.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 text-sm text-emerald-600">
                        <Calendar className="h-4 w-4" />
                        <span>{release.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{release.summary}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">{release.source}</p>
                      <Link 
                        href={release.link}
                        className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                      >
                        <span>Read full release</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/press" className="btn-primary">
              View Press Kit
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-teal-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-10"
            >
              Subscribe to our newsletter to receive the latest news, event announcements, and company updates directly to your inbox.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="btn-primary-light whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-white/70 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 