import React, { useState, useEffect } from 'react';
import { Plane, Sparkles } from 'lucide-react';

export const AviationIntroScreen = ({ onComplete }) => {
  const [statusText, setStatusText] = useState('Preparing your journey...');
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Progress counter
    const startTime = Date.now();
    const totalDuration = 3600; // 3.6 seconds progress

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / totalDuration) * 100), 100);
      setProgress(pct);

      // Status text updates based on elapsed time
      if (elapsed < 1200) {
        setStatusText('Preparing your journey...');
      } else if (elapsed < 2400) {
        setStatusText('Checking travel services...');
      } else if (elapsed < 3300) {
        setStatusText('Your journey is ready.');
      } else {
        setStatusText('Welcome to TQ Fly Travels');
      }

      if (elapsed >= 3600) {
        clearInterval(interval);
        // Start smooth fade out
        setIsFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600); // 600ms fade transition
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#080B10] flex flex-col items-center justify-between py-12 px-4 overflow-hidden transition-opacity duration-600 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="TQ Fly Travels Loading Intro"
    >
      {/* Background Image: Master Runway Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-runway.jpg"
          alt="TQ Fly Travels Cinematic Airport Runway"
          className="w-full h-full object-cover object-[center_35%] filter brightness-75 contrast-110 scale-105 transform animate-pulse-subtle"
        />
        {/* Layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/85 via-[#080B10]/60 to-[#080B10]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#080B10]/50 to-[#080B10]/95" />
      </div>

      {/* Top Brand Logo */}
      <div className="relative z-10 text-center pt-6 animate-in fade-in duration-500">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9A85C] to-[#b8853b] flex items-center justify-center text-[#080B10] shadow-lg">
            <Plane className="w-5 h-5 transform -rotate-12" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <span className="font-extrabold text-2xl tracking-tight text-white font-outfit">TQ FLY</span>
          <span className="font-bold text-2xl tracking-tight text-[#D9A85C]">TRAVELS</span>
        </div>
        <span className="text-[10px] tracking-widest uppercase font-semibold text-[#AAB2BC] block mt-1">
          Aviation & Luxury Travel
        </span>
      </div>

      {/* Center Status Text */}
      <div className="relative z-10 text-center max-w-md mx-auto my-auto py-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11151C]/90 border border-[#D9A85C]/30 text-xs font-bold text-[#E7C98B] shadow-xl mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#55C878] animate-spin" />
          <span>Processing Your Departure</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-outfit h-10 flex items-center justify-center transition-all duration-300">
          {statusText}
        </h2>
      </div>

      {/* Lower Portion: Airplane Takeoff Animation & Runway Lights */}
      <div className="relative z-10 w-full max-w-2xl mx-auto space-y-6 pb-6">
        
        {/* Moving Airplane Silhouette */}
        <div className="relative h-16 w-full overflow-hidden">
          {/* Glowing Runway Light Line */}
          <div className="absolute bottom-2 left-0 right-0 h-0.5 animate-runway-lights opacity-70" />

          {/* Animated Airplane */}
          <div className="absolute bottom-2 left-0 animate-plane-takeoff flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#D9A85C]/20 border border-[#D9A85C]/50 flex items-center justify-center text-[#D9A85C] shadow-[0_0_15px_rgba(217,168,92,0.4)]">
              <Plane className="w-7 h-7 transform -rotate-12" />
            </div>
            {/* Jet Thrust Trail */}
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D9A85C]/50 to-transparent rounded-full -ml-3 blur-xs" />
          </div>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="space-y-2">
          <div className="w-full bg-[#171B22] border border-white/10 rounded-full h-2 p-0.5 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-[#D9A85C] via-[#E7C98B] to-[#55C878] h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_#D9A85C]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold text-[#AAB2BC] px-1">
            <span>FLIGHT PREPARATION</span>
            <span className="text-[#E7C98B]">{progress}%</span>
          </div>
        </div>

      </div>

    </div>
  );
};
