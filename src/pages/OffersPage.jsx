import React from 'react';
import { Tag, Sparkles } from 'lucide-react';
import { OffersSection } from '../components/OffersSection';

export const OffersPage = () => {
  return (
    <div className="py-12 bg-[#F7F8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OffersSection />
      </div>
    </div>
  );
};
