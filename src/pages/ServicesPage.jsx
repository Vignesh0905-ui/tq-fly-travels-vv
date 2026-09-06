import React from 'react';
import { ALL_SERVICES } from '../data/travelData';
import { ServiceCard } from '../components/ServiceCard';

export const ServicesPage = () => {
  return (
    <div className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3.5 py-1 rounded-full">
            Full Spectrum Travel Marketplace
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit mt-3">
            Our Travel Services
          </h1>
          <p className="text-[#AAB2BC] mt-3 text-base">
            TQ Fly Travels handles every aspect of your journey — from flights and hotel stays to passport assistance, cabs, and cruises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>

      </div>
    </div>
  );
};
