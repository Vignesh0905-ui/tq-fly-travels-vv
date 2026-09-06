import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Calendar, Users, MessageSquare, CheckCircle } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const MyTripDrawer = () => {
  const { 
    isMyTripOpen, 
    setIsMyTripOpen, 
    myTripItems, 
    removeTripItem, 
    updateItemTravellers, 
    clearMyTrip, 
    tripTotal,
    setCurrentPage 
  } = useTrip();

  if (!isMyTripOpen) return null;

  const handleProceedEnquiry = () => {
    setIsMyTripOpen(false);
    setCurrentPage('mytrip');
  };

  const handleDirectWhatsApp = () => {
    let summaryText = "Hello TQ Fly Travels, I would like to enquire about my planned trip:\n\n";
    myTripItems.forEach((item, i) => {
      const price = item.price || item.offerPrice || item.pricePerNight || 0;
      summaryText += `${i + 1}. ${item.name || item.title}\n   Travellers: ${item.travellers || 1} | Price: ₹${(price * (item.travellers || 1)).toLocaleString('en-IN')}\n`;
    });
    summaryText += `\nEstimated Total: ₹${tripTotal.toLocaleString('en-IN')}\n\nPlease share booking process and payment details.`;
    openWhatsAppEnquiry(summaryText);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#080B10]/80 backdrop-blur-md flex justify-end animate-in fade-in duration-200">
      <div className="bg-[#11151C] text-[#F5F7FA] max-w-md w-full h-full shadow-2xl flex flex-col justify-between border-l border-white/15 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 bg-[#080B10] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 flex items-center justify-center text-[#D9A85C]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold font-outfit text-white">
                MY TRIP
              </h3>
              <span className="text-xs text-[#AAB2BC]">
                {myTripItems.length} {myTripItems.length === 1 ? 'item' : 'items'} in your itinerary
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsMyTripOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 bg-[#080B10]">
          {myTripItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#D9A85C]/10 border border-[#D9A85C]/20 text-[#D9A85C] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white font-outfit">Your Trip Itinerary is Empty</h4>
              <p className="text-xs text-[#AAB2BC] max-w-xs mx-auto">
                Explore our featured tour packages, passport services, flights, and hotels to build your trip!
              </p>
              <button
                onClick={() => {
                  setIsMyTripOpen(false);
                  setCurrentPage('packages');
                }}
                className="py-3 px-6 rounded-xl bg-[#D9A85C] text-[#080B10] font-bold text-xs hover:bg-[#E7C98B] transition-all cursor-pointer shadow-md"
              >
                Browse Tour Packages
              </button>
            </div>
          ) : (
            myTripItems.map((item) => {
              const unitPrice = item.price || item.offerPrice || item.pricePerNight || 0;
              const travellers = item.travellers || 1;
              const subtotal = unitPrice * travellers;

              return (
                <div key={item.id} className="bg-[#171B22] rounded-2xl p-4 border border-white/10 shadow-md flex flex-col justify-between space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 bg-[#D9A85C]/15 text-[#E7C98B] border border-[#D9A85C]/20 rounded-md inline-block mb-1">
                        {item.type || item.destination || 'Package'}
                      </span>
                      <h4 className="text-sm font-bold text-white font-outfit leading-snug">
                        {item.name || item.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => removeTripItem(item.id)}
                      className="text-gray-400 hover:text-rose-400 transition-colors p-1"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Traveller Quantity Editor */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/8">
                    <div className="flex items-center gap-2 bg-[#11151C] p-1 rounded-xl border border-white/10">
                      <span className="text-[11px] font-bold text-gray-400 px-2">Travellers:</span>
                      <button
                        onClick={() => updateItemTravellers(item.id, travellers - 1)}
                        className="w-6 h-6 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center shadow-xs hover:bg-white/20 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-white">{travellers}</span>
                      <button
                        onClick={() => updateItemTravellers(item.id, travellers + 1)}
                        className="w-6 h-6 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center shadow-xs hover:bg-white/20 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-gray-400 font-medium block">
                        ₹{unitPrice.toLocaleString('en-IN')} × {travellers}
                      </span>
                      <span className="text-base font-extrabold text-[#E7C98B] font-outfit">
                        ₹{subtotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer Summary & CTAs */}
        {myTripItems.length > 0 && (
          <div className="p-5 bg-[#171B22] border-t border-white/10 space-y-3 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Estimated Total</span>
              <span className="text-2xl font-extrabold text-[#E7C98B] font-outfit">
                ₹{tripTotal.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => setIsMyTripOpen(false)}
                className="py-3 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors text-center cursor-pointer"
              >
                Continue Planning
              </button>

              <button
                onClick={handleProceedEnquiry}
                className="py-3 px-3 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Proceed to Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleDirectWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-[#D9A85C]/10 hover:bg-[#D9A85C]/20 text-[#E7C98B] border border-[#D9A85C]/30 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#D9A85C]" />
              <span>Enquire Entire Trip on WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
