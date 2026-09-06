import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const Toast = () => {
  const { toastMessage } = useTrip();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#171B22] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#D9A85C]/40 animate-bounce transition-all duration-300">
      <CheckCircle2 className="w-5 h-5 text-[#55C878] shrink-0" />
      <span className="text-sm font-medium">{toastMessage}</span>
    </div>
  );
};
