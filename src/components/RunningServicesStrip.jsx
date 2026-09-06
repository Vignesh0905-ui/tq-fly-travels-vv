import React from 'react';

const SERVICES_LIST = [
  'DESTINATIONS',
  'FLIGHT BOOKINGS',
  'TOUR PACKAGES',
  'HOTEL RESERVATIONS',
  'VISA ASSISTANCE',
  'PASSPORT SERVICES',
  'TRAVEL INSURANCE',
  'CAB BOOKINGS',
  'BUS BOOKINGS',
  'TRAIN BOOKINGS',
  'CRUISE PACKAGES',
  'SPIRITUAL TOURS',
  'INTERNATIONAL TOURS',
  'DOMESTIC TOURS'
];

export const RunningServicesStrip = () => {
  return (
    <div 
      className="bg-[#11151C] border-y border-white/10 h-12 sm:h-14 overflow-hidden relative flex items-center shadow-lg z-20"
      aria-label="TQ Fly Travels Running Services Strip"
    >
      {/* Subtle Side Vignettes for smooth edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#11151C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#11151C] to-transparent z-10 pointer-events-none" />

      {/* Marquee Wrapper */}
      <div className="animate-marquee flex items-center">
        
        {/* Primary Copy */}
        <div className="flex items-center space-x-6 sm:space-x-8 px-3 sm:px-4 shrink-0">
          {SERVICES_LIST.map((service, index) => (
            <React.Fragment key={`orig-${index}`}>
              <span className="text-xs sm:text-sm font-extrabold text-[#F5F7FA] tracking-wider uppercase whitespace-nowrap hover:text-[#D9A85C] transition-colors cursor-default">
                {service}
              </span>
              <span className="text-[#D9A85C] text-xs sm:text-sm font-bold select-none" aria-hidden="true">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicated Copy for Seamless 100% Loop */}
        <div className="flex items-center space-x-6 sm:space-x-8 px-3 sm:px-4 shrink-0" aria-hidden="true">
          {SERVICES_LIST.map((service, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span className="text-xs sm:text-sm font-extrabold text-[#F5F7FA] tracking-wider uppercase whitespace-nowrap hover:text-[#D9A85C] transition-colors cursor-default">
                {service}
              </span>
              <span className="text-[#D9A85C] text-xs sm:text-sm font-bold select-none">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};
