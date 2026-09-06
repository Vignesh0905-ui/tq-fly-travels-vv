import React, { useState, useEffect } from 'react';
import { X, Globe, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const VisaModal = () => {
  const { activeVisaModal, setActiveVisaModal, addTripItem } = useTrip();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    country: '',
    travelDate: '',
    travellersCount: 1,
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (activeVisaModal) {
      setFormData(prev => ({
        ...prev,
        country: activeVisaModal.country || 'Thailand'
      }));
      setIsSubmitted(false);
    }
  }, [activeVisaModal]);

  if (!activeVisaModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTripItem({
      id: `visa-req-${Date.now()}`,
      name: `Visa Assistance: ${formData.country}`,
      price: 2500,
      travellers: parseInt(formData.travellersCount) || 1,
      type: 'Visa Service',
      country: formData.country,
      clientName: formData.fullName
    });
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080B10]/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#11151C] text-[#F5F7FA] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-white/15">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveVisaModal(null)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xl">
                {activeVisaModal.flag || '🌐'}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white font-outfit">
                  {activeVisaModal.country} Visa Assistance
                </h3>
                <p className="text-xs text-[#AAB2BC] font-medium">
                  {activeVisaModal.type} • {activeVisaModal.processingTime}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name as in passport"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (415) 555-0123"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Intended Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Number of Travellers *
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={formData.travellersCount}
                    onChange={(e) => setFormData({ ...formData, travellersCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Additional Notes / Passport Validity Status
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention if you hold existing visas or specific queries..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit Visa Enquiry</span>
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#55C878]/20 border border-[#55C878]/40 text-[#55C878] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-white font-outfit">
              Visa Enquiry Submitted
            </h3>

            <p className="text-sm text-[#AAB2BC] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-white">{formData.fullName}</span>. Our visa specialist will review your <span className="font-bold text-[#E7C98B]">{formData.country}</span> application requirements and contact you promptly.
            </p>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-300 flex items-center justify-center gap-2 max-w-md mx-auto">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Logged into "My Trip" section for quick review.</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  const msg = `Hello TQ Fly Travels, I submitted a Visa Enquiry for ${formData.country}. Name: ${formData.fullName}, Phone: ${formData.mobile}, Date: ${formData.travelDate}, Travellers: ${formData.travellersCount}`;
                  openWhatsAppEnquiry(msg);
                }}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#D9A85C] text-[#080B10] font-bold text-sm hover:bg-[#E7C98B] transition-colors"
              >
                Chat on WhatsApp (+1 (415) 555-0123)
              </button>

              <button
                onClick={() => setActiveVisaModal(null)}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
