import React from 'react';
import { Plane, Phone, Globe, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const Footer = () => {
  const { setCurrentPage, setSearchFilter } = useTrip();

  return (
    <footer className="bg-[#080B10] text-[#AAB2BC] pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle aviation runway light accent line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9A85C]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9A85C] to-[#b8853b] flex items-center justify-center text-[#080B10] font-bold">
                <Plane className="w-5 h-5 transform -rotate-12" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-outfit">
                TQ FLY <span className="text-[#D9A85C]">TRAVELS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#AAB2BC] leading-relaxed max-w-sm">
              TQ Fly Travels is your trusted travel marketplace for international & domestic holiday packages, instant passport assistance, tourist visas, flights, and hotels.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#E7C98B] font-semibold">
                <Phone className="w-4 h-4 text-[#D9A85C]" />
                <a href="tel:+14155550123" className="hover:underline">+1 (415) 555-0123</a>
                <span className="text-[9px] bg-white/10 text-[#D9A85C] px-1.5 py-0.5 rounded font-bold uppercase ml-1">Demo Contact</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Globe className="w-4 h-4 text-[#D9A85C]" />
                <a href="https://tqflytravels.com" target="_blank" rel="noreferrer" className="hover:underline">tqflytravels.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 font-outfit">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {['home', 'destinations', 'packages', 'offers', 'contact'].map(linkId => (
                <li key={linkId}>
                  <button
                    onClick={() => setCurrentPage(linkId)}
                    className="hover:text-[#D9A85C] transition-colors capitalize cursor-pointer"
                  >
                    {linkId === 'packages' ? 'Tour Packages' : linkId}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Services */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 font-outfit">
              Travel Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => setCurrentPage('flights')} className="hover:text-[#D9A85C] transition-colors cursor-pointer">
                  Flights Booking
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('hotels')} className="hover:text-[#D9A85C] transition-colors cursor-pointer">
                  Hotel Reservations
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('visapassport')} className="hover:text-[#D9A85C] transition-colors cursor-pointer">
                  Visa Assistance
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('visapassport')} className="hover:text-[#D9A85C] transition-colors cursor-pointer">
                  Passport Assistance
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-[#D9A85C] transition-colors cursor-pointer">
                  Travel Insurance & Cabs
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 font-outfit">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {['Thailand', 'Dubai', 'Singapore', 'Malaysia', 'Bali'].map(dest => (
                <li key={dest}>
                  <button
                    onClick={() => {
                      setSearchFilter({ destination: dest, travelType: '', date: '' });
                      setCurrentPage('packages');
                    }}
                    className="hover:text-[#D9A85C] transition-colors cursor-pointer"
                  >
                    {dest} Holidays
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB2BC]">
          <p>© 2026 TQ Fly Travels. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cancellation Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
