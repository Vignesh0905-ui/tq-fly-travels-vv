import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Star, Plane } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { SearchPanel } from './SearchPanel';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const Hero = () => {
  const { setCurrentPage } = useTrip();

  return (
    <div className="relative pt-8 pb-20 lg:pt-14 lg:pb-32 text-white overflow-hidden bg-[#080B10]">
      
      {/* Master Visual Hero Background: Uploaded Runway Airplane Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-runway.jpg"
          alt="TQ Fly Travels Cinematic Aircraft Runway"
          className="w-full h-full object-cover object-[center_35%] scale-105 transform animate-pulse-subtle filter brightness-90 contrast-105"
        />
        {/* Layered Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/70 via-[#080B10]/45 to-[#080B10]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#080B10]/30 to-[#080B10]/80" />
      </div>

      {/* Decorative Runway Light Glow Accents */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#D9A85C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#55C878]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Aviation Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#11151C]/80 backdrop-blur-md border border-[#D9A85C]/30 text-xs sm:text-sm font-semibold text-[#E7C98B] shadow-xl">
            <Plane className="w-4 h-4 text-[#D9A85C]" />
            <span>Cinematic Travel Experience • International & Domestic</span>
            <div className="flex items-center gap-1 ml-1 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.9/5</span>
            </div>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-outfit mb-6 drop-shadow-lg">
            YOUR <span className="text-[#D9A85C]">JOURNEY</span> <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#E7C98B] to-[#D9A85C]">
              STARTS HERE
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#AAB2BC] font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Discover unforgettable destinations, carefully planned holidays and hassle-free travel services with TQ Fly Travels.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage('packages')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-base transition-all duration-200 shadow-xl hover:shadow-[#D9A85C]/20 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-5 h-5 text-[#080B10] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => openWhatsAppEnquiry("Hello TQ Fly Travels, I would like to plan a custom trip.")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/20 font-semibold text-base transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Plan My Trip</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-300 mb-12">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#55C878]" />
            <span>100% Verified Packages</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#55C878]" />
            <span>Complete Visa & Passport Guidance</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#55C878]" />
            <span>24/7 Support (+1 (415) 555-0123) <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-[#D9A85C] font-semibold">Demo Contact</span></span>
          </div>
        </div>

        {/* Floating Search Panel */}
        <div className="mt-4 max-w-5xl mx-auto transform translate-y-4 sm:translate-y-8">
          <SearchPanel />
        </div>

      </div>
    </div>
  );
};
