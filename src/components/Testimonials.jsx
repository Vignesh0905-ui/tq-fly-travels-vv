import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#101923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3 py-1 rounded-full">
            Real Traveller Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit mt-3">
            What Our Customers Say
          </h2>
          <p className="text-[#AAB2BC] mt-2 text-sm">
            Read stories from travelers who experienced seamless journeys with TQ Fly Travels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#171B22] rounded-2xl p-6 border border-white/10 shadow-lg hover:border-[#D9A85C]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#D9A85C]/30 mb-2" />

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/8">
                <h4 className="text-sm font-bold text-white font-outfit">
                  {t.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D9A85C]" /> {t.location}
                  </span>
                  <span className="font-semibold text-[#E7C98B]">{t.trip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
