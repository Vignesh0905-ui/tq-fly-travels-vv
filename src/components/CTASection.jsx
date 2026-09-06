import React from 'react';
import { Compass, MessageSquare, PhoneCall } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const CTASection = () => {
  const { setCurrentPage } = useTrip();

  return (
    <section className="py-16 bg-gradient-to-b from-[#11151C] to-[#080B10] text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 opacity-20 bg-runway-dots pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 flex items-center justify-center mx-auto mb-6 text-[#D9A85C]">
          <Compass className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Planning Your Next Adventure?
        </h2>

        <p className="text-[#AAB2BC] text-base sm:text-lg mt-4 max-w-xl mx-auto">
          Tell us where you want to go and we'll help you plan the journey with expert guidance and custom itineraries.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openWhatsAppEnquiry("Hello TQ Fly Travels, I want to plan my upcoming trip.")}
            className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-base transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-[#080B10]" />
            <span>Plan My Trip</span>
          </button>

          <button
            onClick={() => setCurrentPage('contact')}
            className="w-full sm:w-auto py-4 px-8 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-[#D9A85C]" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};
