"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { 
    label: 'About Us', 
    href: '/about',
    submenu: [
      { label: 'Our Company', href: '/about/company' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Global Network', href: '/about/global-network' }
    ]
  },
  { 
    label: 'Services', 
    href: '/services',
    submenu: [
      { label: 'IT Solutions', href: '/services/it-solutions' },
      { label: 'Automotive', href: '/services/automotive' },
      { label: 'Cloud Services', href: '/services/cloud' },
      { label: 'Consulting', href: '/services/consulting' }
    ]
  },
  { 
    label: 'R&D', 
    href: '/innovation',
    submenu: [
      { label: 'Innovation Center', href: '/innovation/center' },
      { label: 'Technology', href: '/innovation/technology' },
      { label: 'Research', href: '/innovation/research' }
    ]
  },
  { label: 'News', href: '/news' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4',
        isScrolled 
          ? 'py-3' 
          : 'py-5'
      )}
    >
      <div className={cn(
        "container-custom flex justify-between items-center mx-auto rounded-full transition-all duration-300",
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2 px-6' 
          : 'bg-black/20 backdrop-blur-sm py-3 px-6'
      )}>
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="relative h-[35px] sm:h-[40px] w-[200px] sm:w-[260px] flex items-center pl-2 sm:pl-5">
            <div className="flex items-center">
              <Image
                src={isScrolled ? "/haei-blue.svg" : "/haei-white.svg"}
                alt="Hyundai AutoEver India Logo"
                width={110}
                height={22}
                className="object-contain"
                priority
              />
              <div 
                className={cn(
                  "ml-3 border-l pl-3 flex items-center h-[20px]",
                  isScrolled ? 'border-l-gray-300' : 'border-l-white/30'
                )}
              >
                <span 
                  className={cn(
                    "text-base sm:text-lg uppercase tracking-[0.15em] relative group",
                    isScrolled ? 'text-gray-700' : 'text-white'
                  )}
                  style={{ fontWeight: 200 }}
                >
                  INDIA
                  <span className="absolute bottom-0 left-0 w-full h-[2px] flex opacity-90">
                    <span className="w-1/3 bg-[#FF9933]"></span>
                    <span className="w-1/3 bg-white" style={{ boxShadow: '0 0 2px rgba(0,0,0,0.1)' }}></span>
                    <span className="w-1/3 bg-[#138808]"></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link 
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors py-2 px-3 rounded-full relative group',
                  pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/') 
                    ? isScrolled ? 'text-hyundai-blue font-semibold' : 'text-white font-semibold' 
                    : isScrolled ? 'text-gray-800 hover:text-hyundai-blue' : 'text-white hover:text-white/80'
                )}
              >
                <div className="flex items-center">
                  {item.label}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </div>
              </Link>
              
              {/* Dropdown Menu */}
              {item.submenu && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-52 bg-white/95 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1 border border-gray-100">
                  {/* Arrow indicator */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rotate-45 border-t border-l border-gray-100"></div>
                  <div className="py-2">
                    {item.submenu.map((subItem) => (
                      <Link 
                        key={subItem.label} 
                        href={subItem.href}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-hyundai-blue transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary rounded-full px-6">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "lg:hidden flex items-center justify-center focus:outline-none rounded-full w-10 h-10 transition-colors",
            isScrolled ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-black/20 text-white hover:bg-black/30'
          )}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'lg:hidden fixed inset-x-4 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out rounded-3xl shadow-2xl overflow-hidden',
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 top-20 max-h-[calc(100vh-100px)]'
            : 'opacity-0 -translate-y-10 top-16 max-h-0 pointer-events-none'
        )}
      >
        <nav className="h-full overflow-y-auto py-8 px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.submenu ? (
                  <div>
                    <button 
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex justify-between items-center py-2 text-lg font-medium text-gray-900 focus:outline-none"
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "h-5 w-5 transition-transform",
                        activeSubmenu === item.label ? 'rotate-180' : ''
                      )} />
                    </button>
                    
                    {activeSubmenu === item.label && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block py-2 text-base text-gray-700 hover:text-hyundai-blue"
                              onClick={toggleMobileMenu}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-lg font-medium text-gray-900 hover:text-hyundai-blue"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-4">
              <Link 
                href="/contact"
                className="btn-primary w-full rounded-full" 
                onClick={toggleMobileMenu}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}