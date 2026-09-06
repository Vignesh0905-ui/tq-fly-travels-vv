import React, { useState } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, Send, CheckCircle2, MessageSquare, ArrowLeft, Calendar, ShieldCheck, AlertCircle } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const MyTripPage = () => {
  const { 
    myTripItems, 
    removeTripItem, 
    updateItemTravellers, 
    clearMyTrip, 
    tripTotal, 
    setCurrentPage 
  } = useTrip();

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    departureCity: 'Chennai',
    travelDate: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    let msg = `Hello TQ Fly Travels, I would like to book/enquire about my trip:\n\n`;
    msg += `Customer Name: ${customerDetails.name || 'Valued Customer'}\n`;
    msg += `Mobile: ${customerDetails.phone}\n`;
    msg += `Departure City: ${customerDetails.departureCity}\n`;
    if (customerDetails.travelDate) msg += `Travel Date: ${customerDetails.travelDate}\n`;
    msg += `\n--- SELECTED ITINERARY ITEMS ---\n`;

    myTripItems.forEach((item, idx) => {
      const price = item.price || item.offerPrice || item.pricePerNight || 0;
      const travellers = item.travellers || 1;
      msg += `${idx + 1}. ${item.name || item.title}\n   ${travellers} traveller(s) @ ₹${price.toLocaleString('en-IN')} = ₹${(price * travellers).toLocaleString('en-IN')}\n`;
    });

    msg += `\nESTIMATED TOTAL: ₹${tripTotal.toLocaleString('en-IN')}\n`;
    if (customerDetails.notes) msg += `Notes: ${customerDetails.notes}\n`;

    openWhatsAppEnquiry(msg);
  };

  return (
    <div className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3.5 py-1 rounded-full">
              Your Customized Itinerary
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit mt-2">
              MY TRIP
            </h1>
          </div>

          <button
            onClick={() => setCurrentPage('packages')}
            className="inline-flex items-center gap-2 font-bold text-sm text-[#D9A85C] hover:text-[#E7C98B] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Planning</span>
          </button>
        </div>

        {myTripItems.length === 0 ? (
          <div className="bg-[#171B22] rounded-3xl p-12 text-center shadow-lg border border-white/10 space-y-4 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#D9A85C]/10 text-[#D9A85C] flex items-center justify-center mx-auto border border-[#D9A85C]/20">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white font-outfit">
              No Items in My Trip
            </h3>
            <p className="text-sm text-[#AAB2BC]">
              Select tour packages, passport services, visa support, or hotel stays to build your personalized travel plan.
            </p>
            <button
              onClick={() => setCurrentPage('packages')}
              className="py-3.5 px-8 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              Browse Tour Packages
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Selected Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-outfit">
                  Selected Packages & Services ({myTripItems.length})
                </h3>

                <button
                  onClick={clearMyTrip}
                  className="text-xs font-bold text-rose-400 hover:underline"
                >
                  Clear All
                </button>
              </div>

              {myTripItems.map((item) => {
                const unitPrice = item.price || item.offerPrice || item.pricePerNight || 0;
                const travellers = item.travellers || 1;
                const subtotal = unitPrice * travellers;

                return (
                  <div key={item.id} className="bg-[#171B22] rounded-2xl p-5 border border-white/10 shadow-md space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 bg-[#D9A85C]/15 text-[#E7C98B] border border-[#D9A85C]/20 rounded-md inline-block mb-1">
                          {item.type || item.destination || 'Selected Item'}
                        </span>
                        <h4 className="text-base font-bold text-white font-outfit">
                          {item.name || item.title}
                        </h4>
                        {item.dates && (
                          <span className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                            <Calendar className="w-3.5 h-3.5 text-[#D9A85C]" /> {item.dates}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => removeTripItem(item.id)}
                        className="text-gray-400 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-500/10 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/8">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-400">Travellers:</span>
                        <div className="flex items-center gap-2 bg-[#11151C] p-1 rounded-xl border border-white/10">
                          <button
                            onClick={() => updateItemTravellers(item.id, travellers - 1)}
                            className="w-7 h-7 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center shadow-xs hover:bg-white/20"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-extrabold text-white">{travellers}</span>
                          <button
                            onClick={() => updateItemTravellers(item.id, travellers + 1)}
                            className="w-7 h-7 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center shadow-xs hover:bg-white/20"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-gray-400 font-medium block">
                          ₹{unitPrice.toLocaleString('en-IN')} × {travellers}
                        </span>
                        <span className="text-xl font-extrabold text-[#E7C98B] font-outfit">
                          ₹{subtotal.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Customer Details & Booking Form */}
            <div className="lg:col-span-5">
              <div className="bg-[#171B22] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl sticky top-24 space-y-6">
                
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-xl font-extrabold text-white font-outfit">
                    Trip Summary & Booking
                  </h3>
                  <p className="text-xs text-[#AAB2BC] mt-1">
                    Fill in your details to receive customized itinerary quote & payment link.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                    
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={customerDetails.name}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#11151C] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] text-sm font-semibold text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (415) 555-0123"
                        value={customerDetails.phone}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#11151C] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] text-sm font-semibold text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Departure City *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerDetails.departureCity}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, departureCity: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-[#11151C] text-xs font-semibold text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          value={customerDetails.travelDate}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, travelDate: e.target.value })}
                          className="w-full px-3 py-2 text-xs font-semibold border border-white/15 rounded-xl bg-[#11151C] text-white"
                        />
                      </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="bg-[#11151C] rounded-2xl p-4 border border-white/10 space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-gray-400">
                        <span>Items Count</span>
                        <span>{myTripItems.length} Services</span>
                      </div>
                      <div className="flex justify-between items-baseline pt-2 border-t border-white/10">
                        <span className="text-sm font-bold text-white">Estimated Total</span>
                        <span className="text-2xl font-extrabold text-[#E7C98B] font-outfit">
                          ₹{tripTotal.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Proceed to Enquiry</span>
                    </button>

                  </form>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#55C878]/20 border border-[#55C878]/30 text-[#55C878] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h4 className="text-xl font-extrabold text-white font-outfit">
                      Trip Enquiry Logged
                    </h4>

                    <p className="text-xs text-[#AAB2BC] leading-relaxed">
                      Thank you <span className="font-bold text-white">{customerDetails.name}</span>. Click below to instantly send this itinerary to TQ Fly Travels WhatsApp support desk.
                    </p>

                    <button
                      onClick={handleSendWhatsApp}
                      className="w-full py-4 rounded-xl bg-[#D9A85C] text-[#080B10] font-bold text-sm hover:bg-[#E7C98B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Send Complete Trip to WhatsApp</span>
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
