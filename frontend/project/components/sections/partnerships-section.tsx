"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

// Define the partner category type
type PartnerCategory = 'automotive' | 'manufacturing' | 'technology' | 'financial' | 'mobility';

// Interface for partnership data
interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: PartnerCategory;
  relationship: string;
  website?: string;
  yearEstablished?: number;
  collaborations?: string[];
}

interface PartnershipsSectionProps {
  title: string;
  subtitle?: string;
  partners: Partner[];
}

// Category colors
const categoryColors: Record<PartnerCategory, string> = {
  automotive: '#002C5F',   // Hyundai blue
  manufacturing: '#6366F1', // Indigo
  technology: '#10B981',    // Emerald
  financial: '#F59E0B',     // Amber
  mobility: '#8B5CF6'       // Violet
};

// Updated logos
const updatedLogos: Record<string, string> = {
  'Hyundai Motor Company': 'https://www.carlogos.org/car-logos/hyundai-logo-2011-download.png',
  'Kia Corporation': 'https://www.carlogos.org/car-logos/kia-logo-2021-2560.png',
  'Hyundai Mobis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Hyundai_Mobis_logo.svg/1200px-Hyundai_Mobis_logo.svg.png',
  'Hyundai KEFICO': 'https://www.kefico.com/sites/korea_en/files/kefico_symbol.png',
  'Hyundai Rotem': 'https://www.hyundai-rotem.co.kr/resources/front/images/content/img_rotem_logo_04.png',
  'Hyundai Card': 'https://www.hyundaicard.com/resources/images/ui/pc/common/logo_hyundaicard.svg',
  'Hyundai Glovis': 'https://www.hglovis.com/content/sites/hglovis_com/img/common/logo_glovis_big.png',
  'Hyundai Transys': 'https://www.hyundai-transys.com/resources/img/common/header-logo.png'
};

export default function PartnershipsSection({
  title,
  subtitle,
  partners
}: PartnershipsSectionProps) {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [filter, setFilter] = useState<PartnerCategory | 'all'>('all');

  const filteredPartners = filter === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === filter);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              filter === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          
          {Object.keys(categoryColors).map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === category ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={filter === category ? { backgroundColor: categoryColors[category as PartnerCategory] } : undefined}
              onClick={() => setFilter(category as PartnerCategory)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-md shadow-sm overflow-hidden transition-all hover:shadow-md"
              onClick={() => setSelectedPartner(partner)}
            >
              <div 
                className="h-1.5" 
                style={{ backgroundColor: categoryColors[partner.category] }} 
              />
              <div className="p-4 cursor-pointer">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={updatedLogos[partner.name] || partner.logo}
                    alt={partner.name}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-medium text-gray-800">{partner.name}</h3>
                <div className="text-center mt-1">
                  <span 
                    className="inline-block px-2 py-0.5 text-xs rounded-full" 
                    style={{ 
                      backgroundColor: `${categoryColors[partner.category]}20`,
                      color: categoryColors[partner.category]
                    }}
                  >
                    {partner.relationship}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Partner Details */}
        {selectedPartner && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 mr-4 relative">
                      <Image
                        src={updatedLogos[selectedPartner.name] || selectedPartner.logo}
                        alt={selectedPartner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{selectedPartner.name}</h3>
                      <div className="flex items-center mt-1">
                        <span 
                          className="inline-block px-2 py-0.5 text-xs rounded-full mr-2" 
                          style={{ 
                            backgroundColor: `${categoryColors[selectedPartner.category]}20`,
                            color: categoryColors[selectedPartner.category]
                          }}
                        >
                          {selectedPartner.category.charAt(0).toUpperCase() + selectedPartner.category.slice(1)}
                        </span>
                        <span className="text-sm text-gray-500">{selectedPartner.relationship}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setSelectedPartner(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700">{selectedPartner.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {selectedPartner.yearEstablished && (
                    <div>
                      <div className="text-sm font-medium text-gray-500">Established</div>
                      <div>{selectedPartner.yearEstablished}</div>
                    </div>
                  )}
                </div>

                {selectedPartner.collaborations && selectedPartner.collaborations.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Collaborations</h4>
                    <ul className="space-y-1">
                      {selectedPartner.collaborations.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPartner.website && (
                  <div className="mt-6">
                    <Link 
                      href={selectedPartner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Visit Website
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 