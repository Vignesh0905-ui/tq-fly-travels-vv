import React, { useState } from 'react';
import { Building2, Search, Calendar, Users, MapPin } from 'lucide-react';
import { DEMO_HOTELS } from '../data/travelData';
import { HotelCard } from '../components/HotelCard';

export const HotelsPage = () => {
  const [dest, setDest] = useState('Pattaya, Thailand');
  const [checkIn, setCheckIn] = useState('2026-04-13');
  const [checkOut, setCheckOut] = useState('2026-04-16');
  const [guests, setGuests] = useState('2 Guests, 1 Room');

  return (
    <div className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-[#11151C] border border-white/10 text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3 py-1 rounded-full">
              Luxury Hotels & Beach Resorts
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit mt-3">
              Handpicked Accommodations
            </h1>
            <p className="text-[#AAB2BC] mt-2 text-sm sm:text-base">
              Book verified 3-star, 4-star, 5-star hotels and luxury beach villas with complimentary breakfast and early check-in options.
            </p>
          </div>
        </div>

        {/* Search Widget */}
        <div className="bg-[#171B22] rounded-2xl p-6 shadow-md border border-white/10 mb-10">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Destination / Hotel Name
              </label>
              <input
                type="text"
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                placeholder="City or hotel name"
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Check-out Date
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Guests & Rooms
              </label>
              <input
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white"
              />
            </div>

            <div>
              <button
                type="button"
                className="w-full py-3 px-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Hotels</span>
              </button>
            </div>

          </form>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_HOTELS.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

      </div>
    </div>
  );
};
