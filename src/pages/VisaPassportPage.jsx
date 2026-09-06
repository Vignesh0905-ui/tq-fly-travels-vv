import React, { useState } from 'react';
import { BookOpen, Globe, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { PASSPORT_SERVICES, VISA_SERVICES } from '../data/travelData';
import { PassportCard } from '../components/PassportCard';
import { VisaCard } from '../components/VisaCard';

export const VisaPassportPage = () => {
  const [activeTab, setActiveTab] = useState('passport'); // 'passport' or 'visa'

  return (
    <div className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-[#11151C] border border-white/10 text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3 py-1 rounded-full">
              Government Documentation & Visa Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit mt-3">
              Passport & Visa Assistance Made Simple
            </h1>
            <p className="text-[#AAB2BC] mt-3 text-sm sm:text-base leading-relaxed">
              Get your passport processed with complete document guidance, Tatkal appointment booking, and expert tourist visa application support for 50+ countries.
            </p>

            {/* Quick Toggle Tabs */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => setActiveTab('passport')}
                className={`py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'passport'
                    ? 'bg-[#D9A85C] text-[#080B10] shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Passport Assistance</span>
              </button>

              <button
                onClick={() => setActiveTab('visa')}
                className={`py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'visa'
                    ? 'bg-[#D9A85C] text-[#080B10] shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Visa Assistance</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: Passport Services */}
        {activeTab === 'passport' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A85C] mb-1">
                <ShieldCheck className="w-4 h-4" /> Official Document Support
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
                Passport Assistance Made Simple
              </h2>
              <p className="text-[#AAB2BC] text-sm mt-1">
                Get your passport processed with complete document guidance and professional assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PASSPORT_SERVICES.map((srv) => (
                <PassportCard key={srv.id} service={srv} />
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Visa Services */}
        {activeTab === 'visa' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                <Globe className="w-4 h-4" /> Global Travel Support
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
                Tourist & Express Visa Assistance
              </h2>
              <p className="text-[#AAB2BC] text-sm mt-1">
                Complete document checklists, online submission, and VFS appointment slot booking for key destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VISA_SERVICES.map((v) => (
                <VisaCard key={v.id} visa={v} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
