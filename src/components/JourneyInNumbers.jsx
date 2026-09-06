import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Compass, Globe2, Sparkles } from 'lucide-react';

// DEMO PLACEHOLDER BUSINESS DATA - Easily editable for verified client figures
const STATS_DATA = [
  {
    id: 'years',
    targetNumber: 10,
    suffix: '+',
    label: 'Years of Travel Experience',
    icon: Award
  },
  {
    id: 'travellers',
    targetNumber: 5000,
    suffix: '+',
    label: 'Happy Travellers',
    icon: Users
  },
  {
    id: 'trips',
    targetNumber: 2500,
    suffix: '+',
    label: 'Trips Successfully Planned',
    icon: Compass
  },
  {
    id: 'destinations',
    targetNumber: 25,
    suffix: '+',
    label: 'Destinations Covered',
    icon: Globe2
  }
];

export const JourneyInNumbers = () => {
  const [counts, setCounts] = useState(STATS_DATA.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts(
        STATS_DATA.map(stat => {
          // Ease-out quad calculation
          const currentCount = Math.floor(stat.targetNumber * (1 - Math.pow(1 - progress, 2)));
          return currentCount > stat.targetNumber ? stat.targetNumber : currentCount;
        })
      );

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(STATS_DATA.map(stat => stat.targetNumber));
      }
    }, stepTime);
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-[#11151C] border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle Aviation Runway Line Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9A85C]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D9A85C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#55C878]" /> Our Journey In Numbers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-outfit">
            Trusted Journeys. Happy Travellers.
          </h2>
          <p className="text-[#AAB2BC] mt-3 text-sm sm:text-base leading-relaxed">
            Every journey we plan is another story worth remembering.
          </p>
        </div>

        {/* 4 Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, index) => {
            const Icon = stat.icon;
            const currentVal = counts[index];

            return (
              <div
                key={stat.id}
                className="bg-[#171B22] rounded-2xl p-6 border border-white/10 hover:border-[#D9A85C]/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between items-center text-center group hover-lift relative"
              >
                {/* Subtle Runway Green Indicator */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#55C878] shadow-[0_0_8px_#55C878]" />

                {/* Subtle Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#D9A85C]/10 border border-[#D9A85C]/20 text-[#D9A85C] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#D9A85C] group-hover:text-[#080B10] transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Animated Count Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#E7C98B] to-[#D9A85C] tracking-tight">
                  {currentVal.toLocaleString('en-IN')}{stat.suffix}
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm font-semibold text-[#AAB2BC] mt-2 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
