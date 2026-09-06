import React from 'react';
import { Tag, Sparkles, ArrowRight, Eye, Plus } from 'lucide-react';
import { OFFERS, FEATURED_PACKAGE, TOUR_PACKAGES } from '../data/travelData';
import { useTrip } from '../context/TripContext';

export const OffersSection = () => {
  const { setSelectedPackage, addTripItem, setCurrentPage } = useTrip();

  return (
    <section className="py-16 sm:py-24 bg-[#11151C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full mb-2">
              <Tag className="w-3.5 h-3.5" /> Special Promotional Rates
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
              Exclusive Travel Offers
            </h2>
            <p className="text-[#AAB2BC] mt-2 text-sm sm:text-base">
              Handpicked holiday deals with limited seat availability. Book before prices surge!
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('offers')}
            className="inline-flex items-center gap-2 font-bold text-sm text-[#D9A85C] hover:text-[#E7C98B] group cursor-pointer"
          >
            <span>View All Deals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERS.map((off) => {
            const targetPkg = TOUR_PACKAGES.find(p => p.id === off.packageId) || FEATURED_PACKAGE;

            return (
              <div
                key={off.id}
                className="bg-[#171B22] rounded-2xl border border-white/10 hover:border-[#D9A85C]/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover-lift"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={off.image}
                    alt={off.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171B22] via-black/30 to-transparent opacity-80" />

                  <span className={`absolute top-3 left-3 ${off.tagColor || 'bg-rose-600'} text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider`}>
                    {off.badge}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-emerald-300 font-semibold block">{off.validTill}</span>
                    <h3 className="text-lg font-extrabold font-outfit line-clamp-1 drop-shadow-md">
                      {off.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#AAB2BC] line-clamp-2">
                    {off.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/8 flex items-baseline gap-2">
                    <span className="text-xs text-gray-500 line-through">
                      ₹{off.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-2xl font-extrabold text-[#E7C98B] font-outfit">
                      ₹{off.offerPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#AAB2BC]">/ person</span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedPackage(targetPkg)}
                      className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D9A85C]" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => addTripItem(targetPkg)}
                      className="py-2.5 px-3 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-md cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>+ My Trip</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
