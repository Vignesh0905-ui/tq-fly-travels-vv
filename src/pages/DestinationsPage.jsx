import React from 'react';
import { DESTINATIONS } from '../data/travelData';
import { ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const DestinationsPage = () => {
  const { setCurrentPage, setSearchFilter } = useTrip();

  const handleSelect = (destName) => {
    setSearchFilter(prev => ({ ...prev, destination: destName }));
    setCurrentPage('packages');
  };

  return (
    <div className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3.5 py-1 rounded-full">
            Global Destination Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit mt-3">
            Explore World Destinations
          </h1>
          <p className="text-[#AAB2BC] mt-3 text-base">
            From tropical beaches in Thailand & Bali to futuristic Dubai skylines and sacred Indian pilgrimage circuits.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleSelect(dest.name)}
              className="bg-[#171B22] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-[#D9A85C]/50 flex flex-col justify-between group hover-lift cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B22] via-black/30 to-transparent" />

                <div className="absolute top-4 right-4 bg-[#11151C]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-[#E7C98B] border border-[#D9A85C]/30 shadow-md">
                  Starting ₹{dest.startingPrice.toLocaleString('en-IN')}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-extrabold font-outfit drop-shadow-md">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium">
                    {dest.title}
                  </p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#AAB2BC] leading-relaxed mb-4">
                    {dest.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.popularFor.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-semibold bg-[#D9A85C]/10 text-[#E7C98B] border border-[#D9A85C]/20 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-between font-bold text-xs sm:text-sm text-[#D9A85C] group-hover:text-[#E7C98B]">
                  <span>Explore {dest.name} Packages</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
