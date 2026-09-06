import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import { useTrip } from '../context/TripContext';

export const PopularDestinations = () => {
  const { setCurrentPage, setSearchFilter } = useTrip();

  const handleDestinationClick = (destName) => {
    setSearchFilter(prev => ({ ...prev, destination: destName }));
    setCurrentPage('packages');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A85C] bg-[#D9A85C]/10 px-3 py-1 rounded-full border border-[#D9A85C]/20 mb-2">
              <Compass className="w-4 h-4 text-[#D9A85C]" /> Top Trending Escapes
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
              Explore Popular Destinations
            </h2>
            <p className="text-[#AAB2BC] mt-2 max-w-xl text-sm sm:text-base">
              Choose from exotic tropical beaches, futuristic city skylines, and pristine mountain snowscapes.
            </p>
          </div>

          <button
            onClick={() => {
              setSearchFilter({ destination: '', travelType: '', date: '' });
              setCurrentPage('packages');
            }}
            className="inline-flex items-center gap-2 font-bold text-sm text-[#D9A85C] hover:text-[#E7C98B] group cursor-pointer"
          >
            <span>View All Destinations</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleDestinationClick(dest.name)}
              className="group relative rounded-2xl overflow-hidden bg-[#171B22] border border-white/10 hover:border-[#D9A85C]/50 shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-[360px] hover-lift"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B22] via-black/30 to-transparent opacity-80" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-[#11151C]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D9A85C]/30 text-xs font-extrabold text-[#E7C98B]">
                  From ₹{dest.startingPrice.toLocaleString('en-IN')}
                </div>

                {/* Destination Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-extrabold font-outfit drop-shadow-md">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium line-clamp-1">
                    {dest.tagline}
                  </p>
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-[#171B22]">
                <p className="text-xs text-[#AAB2BC] line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/8">
                  <div className="flex flex-wrap gap-1">
                    {dest.popularFor.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-[#D9A85C]/10 text-[#E7C98B] px-2 py-0.5 rounded-md border border-[#D9A85C]/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-[#D9A85C] group-hover:text-[#E7C98B] flex items-center gap-1">
                    Explore <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
