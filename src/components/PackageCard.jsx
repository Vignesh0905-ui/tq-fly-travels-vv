import React from 'react';
import { Star, Clock, MapPin, Eye, Plus, CheckCircle2 } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const PackageCard = ({ pkg }) => {
  const { setSelectedPackage, addTripItem } = useTrip();

  return (
    <div className="bg-[#171B22] rounded-2xl border border-white/10 hover:border-[#D9A85C]/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover-lift">
      
      {/* Image Container */}
      <div className="relative h-[210px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171B22] via-black/30 to-transparent opacity-80" />

        {/* Badge */}
        {pkg.badge && (
          <span className="absolute top-3 left-3 bg-[#D9A85C] text-[#080B10] text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
            {pkg.badge}
          </span>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-[#11151C]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 text-xs font-bold text-white">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{pkg.rating}</span>
        </div>

        {/* Destination & Duration Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <span className="flex items-center gap-1 bg-[#11151C]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            <MapPin className="w-3 h-3 text-[#D9A85C]" /> {pkg.destination}
          </span>
          <span className="flex items-center gap-1 bg-[#11151C]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            <Clock className="w-3 h-3 text-[#D9A85C]" /> {pkg.duration}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white font-outfit line-clamp-2 leading-snug group-hover:text-[#D9A85C] transition-colors">
            {pkg.name}
          </h3>

          {/* Key Highlights list */}
          <div className="mt-3 space-y-1.5">
            {pkg.highlights.slice(0, 3).map((hl, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#AAB2BC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55C878] shrink-0" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">Starting from</span>
              <span className="text-2xl font-extrabold text-[#E7C98B] font-outfit">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#AAB2BC] font-medium"> / person</span>
            </div>
            {pkg.excludeFlights && (
              <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold px-2 py-0.5 rounded-md">
                Excl. Flights
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedPackage(pkg)}
              className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#D9A85C]" />
              <span>Details</span>
            </button>

            <button
              onClick={() => addTripItem(pkg)}
              className="py-2.5 px-3 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ My Trip</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
