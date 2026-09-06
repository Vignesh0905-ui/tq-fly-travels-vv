import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Compass, ChevronDown } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const SearchPanel = () => {
  const { setSearchFilter, setCurrentPage } = useTrip();

  const [destination, setDestination] = useState('');
  const [travelType, setTravelType] = useState('Holiday');
  const [date, setDate] = useState('');
  const [travellers, setTravellers] = useState('2 Travellers');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchFilter({
      destination,
      travelType,
      date,
      travellers
    });
    setCurrentPage('packages');
  };

  return (
    <div className="bg-[#11151C]/90 rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/10 backdrop-blur-xl">
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        
        {/* Destination */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D9A85C]" /> Where to go?
          </label>
          <div className="relative">
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-[#171B22] hover:bg-[#1f242d] border border-white/15 rounded-xl px-3.5 py-3 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#171B22] text-white">All Destinations</option>
              <option value="Thailand" className="bg-[#171B22] text-white">Thailand 🇹🇭</option>
              <option value="Dubai" className="bg-[#171B22] text-white">Dubai 🇦🇪</option>
              <option value="Singapore" className="bg-[#171B22] text-white">Singapore 🇸🇬</option>
              <option value="Malaysia" className="bg-[#171B22] text-white">Malaysia 🇲🇾</option>
              <option value="Bali" className="bg-[#171B22] text-white">Bali 🇮🇩</option>
              <option value="Vietnam" className="bg-[#171B22] text-white">Vietnam 🇻🇳</option>
              <option value="Europe" className="bg-[#171B22] text-white">Europe 🇪🇺</option>
              <option value="India" className="bg-[#171B22] text-white">India (Kashmir/Kerala) 🇮🇳</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Travel Type */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#D9A85C]" /> Travel Type
          </label>
          <div className="relative">
            <select
              value={travelType}
              onChange={(e) => setTravelType(e.target.value)}
              className="w-full bg-[#171B22] hover:bg-[#1f242d] border border-white/15 rounded-xl px-3.5 py-3 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="Holiday" className="bg-[#171B22] text-white">Holiday</option>
              <option value="Honeymoon" className="bg-[#171B22] text-white">Honeymoon</option>
              <option value="Family" className="bg-[#171B22] text-white">Family</option>
              <option value="Adventure" className="bg-[#171B22] text-white">Adventure</option>
              <option value="Spiritual" className="bg-[#171B22] text-white">Spiritual</option>
              <option value="International" className="bg-[#171B22] text-white">International</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Travel Date */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#D9A85C]" /> Departure Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#171B22] hover:bg-[#1f242d] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none transition-all cursor-pointer"
          />
        </div>

        {/* Travellers */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#D9A85C]" /> Travellers
          </label>
          <div className="relative">
            <select
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full bg-[#171B22] hover:bg-[#1f242d] border border-white/15 rounded-xl px-3.5 py-3 text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="1 Traveller" className="bg-[#171B22] text-white">1 Traveller</option>
              <option value="2 Travellers" className="bg-[#171B22] text-white">2 Travellers</option>
              <option value="3 Travellers" className="bg-[#171B22] text-white">3 Travellers</option>
              <option value="4+ Travellers" className="bg-[#171B22] text-white">4+ Travellers</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Search Trips</span>
          </button>
        </div>

      </form>
    </div>
  );
};
