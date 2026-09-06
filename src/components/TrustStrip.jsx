import React from 'react';
import { Plane, Building2, Globe2, ShieldAlert, BookOpen, Car } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const TrustStrip = () => {
  const { setCurrentPage } = useTrip();

  const services = [
    { icon: Plane, label: 'Flights', page: 'flights', color: 'text-[#D9A85C]', bg: 'bg-[#D9A85C]/10 border border-[#D9A85C]/20' },
    { icon: Building2, label: 'Hotels', page: 'hotels', color: 'text-amber-300', bg: 'bg-amber-400/10 border border-amber-400/20' },
    { icon: Globe2, label: 'Tour Packages', page: 'packages', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border border-emerald-400/20' },
    { icon: ShieldAlert, label: 'Visa Assistance', page: 'visapassport', color: 'text-purple-400', bg: 'bg-purple-400/10 border border-purple-400/20' },
    { icon: BookOpen, label: 'Passport Assistance', page: 'visapassport', color: 'text-[#55C878]', bg: 'bg-[#55C878]/10 border border-[#55C878]/20' },
    { icon: Car, label: 'Transfers & Cabs', page: 'services', color: 'text-blue-400', bg: 'bg-blue-400/10 border border-blue-400/20' }
  ];

  return (
    <div className="bg-[#11151C] border-y border-white/10 py-6 sm:py-8 shadow-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <button
                key={idx}
                onClick={() => setCurrentPage(srv.page)}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#171B22] hover:bg-[#1f242d] border border-white/8 hover:border-[#D9A85C]/40 transition-all duration-200 text-left group cursor-pointer"
              >
                <div className={`w-11 h-11 rounded-xl ${srv.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${srv.color}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#D9A85C] transition-colors leading-tight">
                    {srv.label}
                  </h4>
                  <span className="text-[11px] font-medium text-[#AAB2BC]">Explore & Book</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
