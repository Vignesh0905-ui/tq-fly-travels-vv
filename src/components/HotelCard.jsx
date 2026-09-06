import React from 'react';
import { Star, MapPin, CheckCircle2, Plus } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const HotelCard = ({ hotel }) => {
  const { addTripItem } = useTrip();

  return (
    <div className="bg-[#171B22] rounded-2xl border border-white/10 hover:border-[#D9A85C]/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover-lift">
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171B22] via-black/30 to-transparent opacity-80" />

        {hotel.tag && (
          <span className="absolute top-3 left-3 bg-[#D9A85C] text-[#080B10] text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
            {hotel.tag}
          </span>
        )}

        <div className="absolute top-3 right-3 bg-[#11151C]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/10">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{hotel.rating}</span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-extrabold font-outfit line-clamp-1 drop-shadow-md">
            {hotel.name}
          </h3>
          <span className="text-xs text-[#AAB2BC] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#D9A85C]" /> {hotel.location}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {hotel.amenities.slice(0, 3).map((am, i) => (
              <span key={i} className="text-[10px] font-semibold bg-white/5 text-[#AAB2BC] px-2 py-0.5 rounded-md border border-white/8">
                {am}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-gray-400 font-semibold uppercase block">Nightly Fare</span>
            <span className="text-xl font-extrabold text-[#E7C98B] font-outfit">
              ₹{hotel.pricePerNight.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] text-gray-400 font-medium"> / night</span>
          </div>

          <button
            onClick={() => addTripItem({
              id: hotel.id,
              name: `Hotel: ${hotel.name}`,
              price: hotel.pricePerNight,
              travellers: 1,
              type: 'Hotel Reservation'
            })}
            className="py-2.5 px-3.5 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-xs transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add to My Trip</span>
          </button>
        </div>
      </div>

    </div>
  );
};
