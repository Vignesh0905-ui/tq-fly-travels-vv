import React from 'react';
import { Calendar, Clock, CheckCircle, Plus, Eye, Sparkles, AlertCircle, MessageSquare } from 'lucide-react';
import { FEATURED_PACKAGE } from '../data/travelData';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const FeaturedPackage = () => {
  const { setSelectedPackage, addTripItem } = useTrip();
  const pkg = FEATURED_PACKAGE;

  return (
    <section className="py-16 bg-[#101923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Exclusive Festival Offer
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Featured Festival Experience
          </h2>
          <p className="text-[#AAB2BC] mt-3 text-base">
            Celebrate Thailand's world-famous water festival with our curated luxury holiday package.
          </p>
        </div>

        {/* Featured Card Banner */}
        <div className="bg-[#171B22] rounded-3xl shadow-2xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          
          {/* Left Column: Rich Photo Collage */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px]">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171B22] via-black/40 to-transparent" />
            
            {/* Top Badges */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span className="bg-rose-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md animate-pulse">
                🔥 {pkg.badge}
              </span>
              <span className="bg-[#11151C] text-[#E7C98B] border border-[#D9A85C]/30 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                {pkg.travelType}
              </span>
            </div>

            {/* Price Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[#E7C98B] text-xs font-bold tracking-wider uppercase block">
                Exclusive Deal Price
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-outfit text-white">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-gray-300 font-medium">/ person</span>
              </div>
              <p className="text-xs text-amber-300 font-medium mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" /> Excludes international flight tickets
              </p>
            </div>
          </div>

          {/* Right Column: Package Specs & CTAs */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#171B22]">
            <div>
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-300 mb-3">
                <span className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-white">
                  <Calendar className="w-3.5 h-3.5 text-[#D9A85C]" /> {pkg.dates}
                </span>
                <span className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-white">
                  <Clock className="w-3.5 h-3.5 text-[#D9A85C]" /> {pkg.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit leading-snug">
                {pkg.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#AAB2BC] mt-2 leading-relaxed">
                Experience Pattaya nightlife, Alcazar Show, SriRacha Tiger Topia, Coral Island speedboats, and Bangkok City temples.
              </p>

              {/* Highlights Grid */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Package Key Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pkg.highlights.slice(0, 8).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-200">
                      <CheckCircle className="w-4 h-4 text-[#55C878] shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#D9A85C]" />
                  <span>View Package</span>
                </button>

                <button
                  onClick={() => addTripItem(pkg)}
                  className="py-3 px-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add to My Trip</span>
                </button>
              </div>

              {/* Instant WhatsApp Enquiry */}
              <button
                onClick={() => openWhatsAppEnquiry(`Hello TQ Fly Travels, I am interested in booking the ${pkg.name} (${pkg.dates}) for ₹${pkg.price.toLocaleString('en-IN')} per person. Please send more details.`)}
                className="w-full py-3 px-4 rounded-xl bg-[#D9A85C]/10 hover:bg-[#D9A85C]/20 text-[#E7C98B] border border-[#D9A85C]/30 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#D9A85C]" />
                <span>Enquire on WhatsApp (+1 (415) 555-0123)</span>
                <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-[#D9A85C] uppercase">Demo Contact</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
