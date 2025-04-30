import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'Global Network', href: '/about/global-network' },
  { label: 'Careers', href: '/careers' },
];

const serviceLinks = [
  { label: 'IT Solutions', href: '/services/it-solutions' },
  { label: 'Automotive', href: '/services/automotive' },
  { label: 'Cloud Services', href: '/services/cloud' },
  { label: 'Consulting', href: '/services/consulting' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookies Policy', href: '/cookies-policy' },
  { label: 'Sitemap', href: '/sitemap' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/HyundaiAutoEverIndia', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/HyundaiAutoEver', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/hyundai-autoever-india', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/hyundaiautoever', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/HyundaiAutoEver', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-hyundai-blue text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 h-[40px] sm:h-[50px] w-[180px] sm:w-[220px] relative flex items-center">
              <Image
                src="/haei-white.svg"
                alt="Hyundai AutoEver India Logo"
                width={150}
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Hyundai AutoEver India provides cutting-edge IT solutions and services for the automotive industry and beyond.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-gray-300 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Tech Park, Sector 21, Gurugram, Haryana 122016, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-300 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 1234 567 890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-300 flex-shrink-0" />
                <a href="mailto:info@hyundaiautoever.in" className="text-gray-300 hover:text-white transition-colors">
                  info@hyundaiautoever.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Hyundai AutoEver India. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}