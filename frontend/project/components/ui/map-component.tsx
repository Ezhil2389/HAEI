"use client";

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

interface Location {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  description?: string;
  employeeCount?: number;
  image?: string;
  establishedYear?: number;
  specializations?: string[];
}

interface MapComponentProps {
  locations: Location[];
  activeLocation: Location | null;
  setActiveLocation: (location: Location | null) => void;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    light: string;
  };
}

// Component to handle map fly animations when active location changes
function FlyToActiveLocation({ activeLocation }: { activeLocation: Location | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (activeLocation) {
      map.flyTo(activeLocation.coordinates, 5, {
        duration: 1.5
      });
    } else {
      // Reset view if no location is active
      map.flyTo([20, 0], 2);
    }
  }, [activeLocation, map]);
  
  return null;
}

export default function MapComponent({ 
  locations, 
  activeLocation, 
  setActiveLocation,
  brandColors
}: MapComponentProps) {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Fix Leaflet marker icon issue in Next.js
  useEffect(() => {
    // Only fix icons when window is defined (client-side)
    if (typeof window !== "undefined") {
      // Fix marker icons
      // @ts-ignore - Known issue with Leaflet types
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });
      
      // Set map as loaded
      setMapLoaded(true);
    }
  }, []);

  // Run this only on the client side
  if (typeof window === 'undefined') {
    return (
      <div className="w-full h-[500px] relative bg-gray-100">
        <Image
          src="https://www.worldatlas.com/upload/bb/c3/32/world-political-map-3.png"
          alt="World Map (Static)"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 bg-white/80 px-4 py-2 rounded-md">
            Interactive map loading...
          </p>
        </div>
      </div>
    );
  }

  // Create custom marker icons based on the brand colors
  const createMarkerIcon = (isActive: boolean) => {
    return new L.Icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      className: `custom-icon ${isActive ? 'active' : ''}`,
    });
  };

  return (
    <div className="w-full h-[500px] relative z-0">
      {/* Add global styles for the map markers */}
      <style jsx global>{`
        .custom-icon.active {
          filter: hue-rotate(120deg);
          transform: scale(1.2);
          z-index: 40 !important;
        }
        .leaflet-container {
          font-family: inherit;
          z-index: 10;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
        }
        .leaflet-popup-content {
          margin: 12px 16px;
          font-size: 14px;
        }
      `}</style>
      
      <MapContainer
        center={[20, 0]} 
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        minZoom={2}
        maxZoom={8}
        attributionControl={false}
        zoomControl={true}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Component to handle map animations when active location changes */}
        <FlyToActiveLocation activeLocation={activeLocation} />
        
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={createMarkerIcon(activeLocation?.id === location.id)}
            eventHandlers={{
              click: () => {
                setActiveLocation(location);
              }
            }}
          >
            <Popup>
              <div className="font-semibold">{location.name}</div>
              <div className="text-sm text-gray-600">{location.country}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 