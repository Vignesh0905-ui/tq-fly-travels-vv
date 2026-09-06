import React from 'react';
import { 
  Plane, Building2, Car, Bus, Train, Ship, ShieldCheck, 
  Compass, Globe, BookOpen, Sun, MapPin, Map, ArrowRight 
} from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

const serviceIcons = {
  Plane, Building2, Car, Bus, Train, Ship, ShieldCheck,
  Compass, Globe, BookOpen, Sun, MapPin, Map
};

export const ServiceCard = ({ service }) => {
  const { setCurrentPage } = useTrip();
  const IconComp = serviceIcons[service.icon] || Compass;

  const handleServiceClick = () => {
    if (service.title.includes('Passport') || service.title.includes('Visa')) {
      setCurrentPage('visapassport');
    } else if (service.title.includes('Flight')) {
      setCurrentPage('flights');
    } else if (service.title.includes('Hotel')) {
      setCurrentPage('hotels');
    } else if (service.title.includes('Package') || service.title.includes('Tour')) {
      setCurrentPage('packages');
    } else {
      openWhatsAppEnquiry(`Hello TQ Fly Travels, I am interested in ${service.title} services. Please share more details.`);
    }
  };

  return (
    <div 
      onClick={handleServiceClick}
      className="bg-[#171B22] rounded-2xl border border-white/10 hover:border-[#D9A85C]/50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover-lift cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 text-[#D9A85C] flex items-center justify-center group-hover:bg-[#D9A85C] group-hover:text-[#080B10] transition-colors duration-300">
            <IconComp className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#AAB2BC] bg-white/5 border border-white/8 px-2.5 py-1 rounded-md">
            {service.category}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-white font-outfit group-hover:text-[#D9A85C] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#AAB2BC] mt-2 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-bold text-[#D9A85C] group-hover:text-[#E7C98B]">
        <span>Explore Service</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
