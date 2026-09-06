import React from 'react';
import { Plane, Clock, Plus, Luggage, ShieldCheck } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const FlightCard = ({ flight }) => {
  const { addTripItem } = useTrip();

  return (
    <div className="bg-[#171B22] rounded-2xl border border-white/10 p-5 shadow-lg hover:border-[#D9A85C]/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      
      {/* Airline Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 text-[#D9A85C] flex items-center justify-center font-bold text-sm shrink-0">
          <Plane className="w-6 h-6 transform -rotate-45" />
        </div>
        <div>
          <h4 className="text-base font-extrabold text-white font-outfit">
            {flight.airline}
          </h4>
          <span className="text-xs text-[#AAB2BC] font-semibold">{flight.code} • {flight.class}</span>
        </div>
      </div>

      {/* Flight Timings & Route */}
      <div className="flex items-center gap-6 text-center">
        <div>
          <span className="text-lg font-extrabold text-white block">{flight.departureTime}</span>
          <span className="text-xs text-[#AAB2BC] font-semibold">{flight.from}</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-[11px] text-gray-400 font-medium mb-1">{flight.duration}</span>
          <div className="w-24 h-0.5 bg-white/20 relative flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#D9A85C]" />
          </div>
          <span className="text-[10px] font-bold text-[#55C878] mt-1">{flight.type}</span>
        </div>

        <div>
          <span className="text-lg font-extrabold text-white block">{flight.arrivalTime}</span>
          <span className="text-xs text-[#AAB2BC] font-semibold">{flight.to}</span>
        </div>
      </div>

      {/* Baggage info */}
      <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#AAB2BC] bg-[#11151C] px-3 py-1.5 rounded-lg border border-white/8">
        <Luggage className="w-4 h-4 text-gray-400" />
        <span>{flight.baggage}</span>
      </div>

      {/* Price & Book Button */}
      <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
        <div className="text-left md:text-right">
          <span className="text-[10px] text-gray-400 font-semibold uppercase block">Demo Fare</span>
          <span className="text-xl font-extrabold text-[#E7C98B] font-outfit">
            ₹{flight.price.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-gray-400 block">per seat</span>
        </div>

        <button
          onClick={() => addTripItem({
            id: flight.id,
            name: `${flight.airline} (${flight.from} → ${flight.to})`,
            price: flight.price,
            travellers: 1,
            type: 'Flight'
          })}
          className="py-2.5 px-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-xs transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add to Trip</span>
        </button>
      </div>

    </div>
  );
};
