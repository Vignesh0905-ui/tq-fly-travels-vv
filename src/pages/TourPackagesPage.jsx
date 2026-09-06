import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, Compass, CheckCircle } from 'lucide-react';
import { TOUR_PACKAGES, DESTINATIONS } from '../data/travelData';
import { PackageCard } from '../components/PackageCard';
import { useTrip } from '../context/TripContext';

export const TourPackagesPage = () => {
  const { searchFilter, setSearchFilter } = useTrip();

  const [query, setQuery] = useState(searchFilter.destination || '');
  const [selectedDestination, setSelectedDestination] = useState(searchFilter.destination || 'All');
  const [selectedType, setSelectedType] = useState(searchFilter.travelType || 'All');
  const [maxBudget, setMaxBudget] = useState(200000);
  const [sortBy, setSortBy] = useState('recommended');

  const filteredPackages = useMemo(() => {
    return TOUR_PACKAGES.filter(pkg => {
      const matchQuery = pkg.name.toLowerCase().includes(query.toLowerCase()) || 
                         pkg.destination.toLowerCase().includes(query.toLowerCase());
      const matchDest = selectedDestination === 'All' || pkg.destination.toLowerCase() === selectedDestination.toLowerCase();
      const matchType = selectedType === 'All' || pkg.travelType.toLowerCase().includes(selectedType.toLowerCase());
      const matchBudget = pkg.price <= maxBudget;

      return matchQuery && matchDest && matchType && matchBudget;
    }).sort((a, b) => {
      if (sortBy === 'price-l2h') return a.price - b.price;
      if (sortBy === 'price-h2l') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // recommended
    });
  }, [query, selectedDestination, selectedType, maxBudget, sortBy]);

  return (
    <div className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="bg-[#11151C] border border-white/10 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-10 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3 py-1 rounded-full">
              Explore 100+ Destinations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit mt-3">
              Find Your Perfect Holiday
            </h1>
            <p className="text-[#AAB2BC] mt-2 text-sm sm:text-base">
              Discover curated international and domestic tour packages with transparent pricing, hotel stays, and transfers.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#171B22] rounded-2xl p-6 shadow-md border border-white/10 mb-10 space-y-4">
          
          {/* Top Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search destination or package name... (e.g. Thailand, Dubai, Kashmir)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#11151C] border border-white/15 rounded-xl text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none transition-all placeholder:text-[#AAB2BC]"
            />
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* Destination Dropdown */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] cursor-pointer"
              >
                <option value="All" className="bg-[#171B22] text-white">All Destinations</option>
                {DESTINATIONS.map(d => (
                  <option key={d.id} value={d.name} className="bg-[#171B22] text-white">{d.name}</option>
                ))}
              </select>
            </div>

            {/* Travel Type Dropdown */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Travel Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] cursor-pointer"
              >
                <option value="All" className="bg-[#171B22] text-white">All Types</option>
                <option value="Holiday" className="bg-[#171B22] text-white">Holiday</option>
                <option value="Honeymoon" className="bg-[#171B22] text-white">Honeymoon</option>
                <option value="Family" className="bg-[#171B22] text-white">Family</option>
                <option value="International" className="bg-[#171B22] text-white">International</option>
                <option value="Spiritual" className="bg-[#171B22] text-white">Spiritual</option>
              </select>
            </div>

            {/* Max Budget Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                <span>Max Budget</span>
                <span className="text-[#E7C98B]">₹{maxBudget.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={10000}
                max={200000}
                step={5000}
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-[#D9A85C] cursor-pointer"
              />
            </div>

            {/* Sort Dropdown */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-[#11151C] border border-white/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-white focus:ring-2 focus:ring-[#D9A85C] cursor-pointer"
              >
                <option value="recommended" className="bg-[#171B22] text-white">Recommended</option>
                <option value="price-l2h" className="bg-[#171B22] text-white">Price: Low to High</option>
                <option value="price-h2l" className="bg-[#171B22] text-white">Price: High to Low</option>
                <option value="rating" className="bg-[#171B22] text-white">Top Rated</option>
              </select>
            </div>

          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-bold text-gray-400">
            Showing <span className="text-[#E7C98B] font-extrabold">{filteredPackages.length}</span> packages
          </span>

          {(query || selectedDestination !== 'All' || selectedType !== 'All' || maxBudget < 200000) && (
            <button
              onClick={() => {
                setQuery('');
                setSelectedDestination('All');
                setSelectedType('All');
                setMaxBudget(200000);
              }}
              className="text-xs font-bold text-rose-400 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#171B22] rounded-2xl border border-white/10 space-y-4">
            <Compass className="w-12 h-12 text-gray-500 mx-auto" />
            <h3 className="text-xl font-bold text-white font-outfit">No packages found</h3>
            <p className="text-sm text-gray-400">Try adjusting your destination or budget filter criteria.</p>
            <button
              onClick={() => {
                setQuery('');
                setSelectedDestination('All');
                setSelectedType('All');
                setMaxBudget(200000);
              }}
              className="py-2.5 px-6 rounded-xl bg-[#D9A85C] text-[#080B10] font-bold text-xs hover:bg-[#E7C98B]"
            >
              Show All Packages
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
