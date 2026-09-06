import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, XCircle, Hotel, Bus, Plus, MessageSquare, ShieldCheck, FileText } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const PackageDetailsModal = () => {
  const { selectedPackage, setSelectedPackage, addTripItem } = useTrip();
  const [activeTab, setActiveTab] = useState('itinerary');

  if (!selectedPackage) return null;

  const pkg = selectedPackage;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080B10]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#11151C] text-[#F5F7FA] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative border border-white/15">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedPackage(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Hero Header */}
        <div className="relative h-64 sm:h-80 shrink-0">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-black/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-[#D9A85C] text-[#080B10] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {pkg.destination}
              </span>
              <span className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#D9A85C]" /> {pkg.duration}
              </span>
              {pkg.dates && (
                <span className="bg-amber-500 text-[#080B10] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {pkg.dates}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit leading-tight drop-shadow-md">
              {pkg.name}
            </h2>

            <div className="flex items-baseline gap-3 mt-2">
              <span className="text-3xl font-extrabold font-outfit text-[#E7C98B]">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-gray-300">per person</span>
              {pkg.excludeFlights && (
                <span className="text-xs text-amber-300 font-semibold bg-amber-900/60 border border-amber-500/30 px-2 py-0.5 rounded">
                  Excludes Flights
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#171B22] border-b border-white/10 px-6 flex space-x-4 overflow-x-auto shrink-0 scrollbar-none">
          {[
            { id: 'itinerary', label: 'Day-by-Day Itinerary' },
            { id: 'inclusions', label: 'Inclusions & Exclusions' },
            { id: 'hotels', label: 'Hotels & Transfers' },
            { id: 'info', label: 'Important Info' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#D9A85C] text-[#D9A85C]'
                  : 'border-transparent text-[#AAB2BC] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-[#11151C]">
          
          {/* Tab 1: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <h3 className="text-lg font-extrabold text-white font-outfit flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#D9A85C]" /> Tour Schedule & Daily Itinerary
              </h3>

              <div className="relative border-l-2 border-[#D9A85C]/30 ml-4 space-y-8 pl-6">
                {pkg.itinerary?.map((dayItem, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Pin */}
                    <div className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full bg-[#D9A85C] text-[#080B10] text-[10px] font-extrabold flex items-center justify-center border-2 border-[#11151C] shadow-md">
                      {idx + 1}
                    </div>

                    <span className="text-xs font-extrabold text-[#D9A85C] uppercase tracking-wider block mb-1">
                      {dayItem.day}
                    </span>
                    <h4 className="text-base font-bold text-white font-outfit">
                      {dayItem.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#AAB2BC] mt-1.5 leading-relaxed bg-[#171B22] p-4 rounded-xl border border-white/8">
                      {dayItem.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-[#171B22] p-5 rounded-2xl border border-emerald-500/20">
                <h4 className="text-base font-bold text-[#55C878] font-outfit mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#55C878]" /> Package Inclusions
                </h4>
                <ul className="space-y-2.5">
                  {pkg.inclusions?.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                      <CheckCircle className="w-4 h-4 text-[#55C878] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-[#171B22] p-5 rounded-2xl border border-rose-500/20">
                <h4 className="text-base font-bold text-rose-400 font-outfit mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500" /> Package Exclusions
                </h4>
                <ul className="space-y-2.5">
                  {pkg.exclusions?.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Hotels & Transfers */}
          {activeTab === 'hotels' && (
            <div className="space-y-6">
              <div className="bg-[#171B22] p-5 rounded-2xl border border-white/10">
                <h4 className="text-base font-bold text-white font-outfit mb-2 flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-[#D9A85C]" /> Accommodation Details
                </h4>
                <p className="text-sm text-[#AAB2BC] font-medium">
                  {pkg.hotels || "Handpicked 4-star hotel accommodation with daily buffet breakfast included."}
                </p>
              </div>

              <div className="bg-[#171B22] p-5 rounded-2xl border border-white/10">
                <h4 className="text-base font-bold text-white font-outfit mb-2 flex items-center gap-2">
                  <Bus className="w-5 h-5 text-[#D9A85C]" /> Sightseeing & Airport Transfers
                </h4>
                <p className="text-sm text-[#AAB2BC] font-medium">
                  {pkg.transfers || "All transfers in air-conditioned deluxe tourist coach / private vehicles."}
                </p>
              </div>
            </div>
          )}

          {/* Tab 4: Important Info */}
          {activeTab === 'info' && (
            <div className="bg-[#171B22] p-5 rounded-2xl border border-amber-500/30 space-y-3">
              <h4 className="text-base font-bold text-[#E7C98B] font-outfit flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> TQ Fly Travels Guarantee & Terms
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#AAB2BC]">
                <li>• Prices are subject to availability at the time of confirmed booking.</li>
                <li>• Complete passport copy with minimum 6 months validity required for international travel.</li>
                <li>• Visa assistance is handled by dedicated TQ Fly Travels documentation officers.</li>
                <li>• 24x7 local destination helpline support throughout your tour.</li>
              </ul>
            </div>
          )}

        </div>

        {/* Modal Bottom Fixed Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#171B22] border-t border-white/10 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Total Starting Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-[#E7C98B] font-outfit">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-gray-400">/ traveller</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                addTripItem(pkg);
                setSelectedPackage(null);
              }}
              className="flex-1 sm:flex-initial py-3 px-5 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add to My Trip</span>
            </button>

            <button
              onClick={() => openWhatsAppEnquiry(`Hello TQ Fly Travels, I want to book ${pkg.name} (${pkg.duration}) priced at ₹${pkg.price.toLocaleString('en-IN')}. Please contact me.`)}
              className="flex-1 sm:flex-initial py-3 px-5 rounded-xl bg-[#D9A85C]/10 hover:bg-[#D9A85C]/20 text-[#E7C98B] border border-[#D9A85C]/30 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#D9A85C]" />
              <span>Enquire WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
