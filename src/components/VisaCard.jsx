import React from 'react';
import { Globe, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const VisaCard = ({ visa }) => {
  const { setActiveVisaModal } = useTrip();

  return (
    <div className="bg-[#171B22] rounded-2xl border border-white/10 hover:border-[#D9A85C]/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover-lift">
      <div className="relative h-44 overflow-hidden">
        <img
          src={visa.image}
          alt={visa.country}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171B22] via-black/30 to-transparent" />
        
        <div className="absolute top-3 left-3 bg-[#11151C]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/10">
          <span className="text-base">{visa.flag}</span>
          <span>{visa.country}</span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-xl font-extrabold font-outfit drop-shadow-md">
            {visa.country} Tourist Visa
          </h3>
          <span className="text-xs text-[#55C878] font-medium">
            ⏱ {visa.processingTime}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#E7C98B] uppercase tracking-wider bg-[#D9A85C]/15 border border-[#D9A85C]/30 px-2.5 py-1 rounded-md inline-block">
            {visa.type}
          </div>

          <p className="text-xs text-[#AAB2BC] mt-2">
            Validity: <span className="font-semibold text-white">{visa.validity}</span>
          </p>

          <div className="mt-3 space-y-1">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Document Checklist</span>
            {visa.requirements.slice(0, 2).map((req, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-[#AAB2BC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55C878] shrink-0" />
                <span className="line-clamp-1">{req}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/8">
          <button
            onClick={() => setActiveVisaModal(visa)}
            className="w-full py-3 px-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Get Visa Assistance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
