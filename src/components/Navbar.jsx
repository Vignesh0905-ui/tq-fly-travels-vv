import React, { useState } from 'react';
import { Plane, Compass, Menu, X, ShoppingBag, PhoneCall, ChevronRight } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const Navbar = () => {
  const { currentPage, setCurrentPage, myTripItems, setIsMyTripOpen } = useTrip();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'flights', label: 'Flights' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'visapassport', label: 'Visa & Passport' },
    { id: 'services', label: 'Services' },
    { id: 'offers', label: 'Offers' }
  ];

  const totalTripCount = myTripItems.length;

  return (
    <header className="sticky top-0 z-40 bg-[#080B10]/95 backdrop-blur-md shadow-2xl py-3.5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9A85C] to-[#b8853b] flex items-center justify-center text-[#080B10] shadow-md group-hover:scale-105 transition-transform duration-300">
              <Plane className="w-5 h-5 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-xl tracking-tight text-white font-outfit">TQ FLY</span>
                <span className="font-bold text-xl tracking-tight text-[#D9A85C]">TRAVELS</span>
              </div>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-[#AAB2BC] block -mt-1">
                Aviation & Luxury Travel
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-[#D9A85C]/15 text-[#D9A85C] border border-[#D9A85C]/30 font-bold shadow-xs' 
                      : 'text-[#F5F7FA]/80 hover:text-[#D9A85C] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* My Trip Button */}
            <button
              onClick={() => setIsMyTripOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all border border-white/15 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#D9A85C]" />
              <span>My Trip</span>
              {totalTripCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-[#D9A85C] text-[#080B10] text-xs font-bold rounded-full animate-pulse">
                  {totalTripCount}
                </span>
              )}
            </button>

            {/* Quick Contact / WhatsApp */}
            <button
              onClick={() => openWhatsAppEnquiry("Hello TQ Fly Travels, I would like to plan a trip with you.")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsMyTripOpen(true)}
              className="relative p-2 rounded-lg bg-white/10 text-[#D9A85C]"
              aria-label="My Trip"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalTripCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D9A85C] text-[#080B10] text-xs font-bold flex items-center justify-center rounded-full">
                  {totalTripCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#080B10]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4 px-6 z-50 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? 'bg-[#D9A85C]/15 text-[#D9A85C] border border-[#D9A85C]/30 font-bold'
                    : 'text-[#F5F7FA]/80 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-white/10 font-semibold text-white text-center cursor-pointer"
              >
                Contact Details
              </button>

              <button
                onClick={() => {
                  openWhatsAppEnquiry("Hello TQ Fly Travels, I would like to plan a trip.");
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-[#D9A85C] text-[#080B10] font-bold text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp Us (+1 (415) 555-0123)</span>
                <span className="text-[9px] bg-[#080B10]/20 px-1.5 py-0.5 rounded font-extrabold uppercase">Demo Contact</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
