import React, { useState } from 'react';
import { Plane, Search, Calendar, Users, ChevronDown, Info, ShieldCheck } from 'lucide-react';
import { DEMO_FLIGHTS } from '../data/travelData';
import { FlightCard } from '../components/FlightCard';

export const FlightsPage = () => {
  const [fromCity, setFromCity] = useState('Chennai (MAA)');
  const [toCity, setToCity] = useState('Bangkok (BKK)');
  const [depDate, setDepDate] = useState('2026-04-13');
  const [retDate, setRetDate] = useState('');
  const [passengers, setPassengers] = useState('1 Passenger');
  const [travelClass, setTravelClass] = useState('Economy');
  const [isSearched, setIsSearched] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearched(true);
  };

  return (
    <div className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-[#11151C] border border-white/10 text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3 py-1 rounded-full">
              Flight Ticketing Engine
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit mt-3">
              Fly Anywhere With Confidence
            </h1>
            <p className="text-[#AAB2BC] mt-2 text-sm sm:text-base">
              Book domestic and international airline tickets with instant seat selection, meal preferences & baggage support.
            </p>
          </div>
        </div>

        {/* Search Widget */}
        <div className="bg-[#171B22] rounded-2xl p-6 shadow-md border border-white/10 mb-10">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            
            {/* From */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                From City
              </label>
              <input
                type="text"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                placeholder="Origin city"
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C]"
              />
            </div>

            {/* To */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                To City
              </label>
              <input
                type="text"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                placeholder="Destination city"
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C]"
              />
            </div>

            {/* Departure */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Departure Date
              </label>
              <input
                type="date"
                value={depDate}
                onChange={(e) => setDepDate(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C]"
              />
            </div>

            {/* Return */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Return (Optional)
              </label>
              <input
                type="date"
                value={retDate}
                onChange={(e) => setRetDate(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C]"
              />
            </div>

            {/* Class */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Cabin Class
              </label>
              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] cursor-pointer"
              >
                <option value="Economy" className="bg-[#171B22] text-white">Economy</option>
                <option value="Premium Economy" className="bg-[#171B22] text-white">Premium Economy</option>
                <option value="Business" className="bg-[#171B22] text-white">Business</option>
              </select>
            </div>

            {/* Submit CTA */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Flights</span>
              </button>
            </div>

          </form>
        </div>

        {/* Demo Notice Banner */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mb-8 flex items-center gap-3 text-xs sm:text-sm text-amber-300">
          <Info className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            <strong>Client Demo Notice:</strong> Below are realistic demo flight search results. TQ Fly Travels issues tickets across all major IATA member airlines.
          </span>
        </div>

        {/* Flight Results List */}
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-white font-outfit mb-4">
            Available Flights ({DEMO_FLIGHTS.length})
          </h3>

          {DEMO_FLIGHTS.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>

      </div>
    </div>
  );
};
