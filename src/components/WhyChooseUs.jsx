import React from 'react';
import { UserCheck, Compass, FileCheck, Globe2, Smile, Headphones } from 'lucide-react';

export const WhyChooseUs = () => {
  const points = [
    {
      icon: UserCheck,
      title: 'Expert Travel Assistance',
      desc: 'Dedicated destination specialists to guide your itinerary from flight booking to airport drop.'
    },
    {
      icon: Compass,
      title: 'Personalized Itineraries',
      desc: 'Customized holiday packages tailored to your schedule, budget, and travel style.'
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation Support',
      desc: 'End-to-end guidance for passport application, Tatkal slots, and tourist visa documentation.'
    },
    {
      icon: Globe2,
      title: 'International & Domestic Packages',
      desc: 'Curated deals for Thailand, Dubai, Singapore, Bali, Kashmir, Kerala, Europe and beyond.'
    },
    {
      icon: Smile,
      title: 'Hassle-Free Planning',
      desc: 'Transparent pricing with zero hidden charges. Complete peace of mind guaranteed.'
    },
    {
      icon: Headphones,
      title: 'Customer-Focused Service',
      desc: '24/7 direct WhatsApp and phone support throughout your entire journey.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#080B10] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3.5 py-1 rounded-full">
            Why TQ Fly Travels
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit mt-3">
            Why Travel With TQ Fly Travels?
          </h2>
          <p className="text-[#AAB2BC] mt-3 text-sm sm:text-base">
            We simplify travel planning so you can focus on making lifelong memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-[#171B22] rounded-2xl p-6 border border-white/10 hover:border-[#D9A85C]/40 hover:shadow-xl transition-all duration-300 group hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 text-[#D9A85C] flex items-center justify-center mb-5 group-hover:bg-[#D9A85C] group-hover:text-[#080B10] group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-[#D9A85C] transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AAB2BC] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
