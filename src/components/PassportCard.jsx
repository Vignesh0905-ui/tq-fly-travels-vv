import React from 'react';
import { FileText, RefreshCw, AlertTriangle, Users, Zap, ShieldCheck, Newspaper, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTrip } from '../context/TripContext';

const iconMap = {
  FileText: FileText,
  RefreshCw: RefreshCw,
  AlertTriangle: AlertTriangle,
  Users: Users,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Newspaper: Newspaper
};

export const PassportCard = ({ service }) => {
  const { setActivePassportModal } = useTrip();
  const IconComponent = iconMap[service.icon] || FileText;

  return (
    <div className="bg-[#171B22] rounded-2xl border border-white/10 hover:border-[#D9A85C]/50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover-lift">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 text-[#D9A85C] flex items-center justify-center group-hover:bg-[#D9A85C] group-hover:text-[#080B10] transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          {service.badge && (
            <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#D9A85C]/15 text-[#E7C98B] border border-[#D9A85C]/30 uppercase tracking-wider">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-extrabold text-white font-outfit group-hover:text-[#D9A85C] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#AAB2BC] mt-2 leading-relaxed">
          {service.description}
        </p>

        <div className="mt-4 pt-3 border-t border-white/8 space-y-1.5 text-xs text-[#55C878]">
          <div className="font-semibold">⏱ {service.processingTime}</div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/8">
        <button
          onClick={() => setActivePassportModal(service)}
          className="w-full py-3 px-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
