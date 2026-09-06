import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, AlertCircle } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { PASSPORT_SERVICES } from '../data/travelData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const PassportModal = () => {
  const { activePassportModal, setActivePassportModal, addTripItem } = useTrip();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    serviceId: '',
    dob: '',
    city: '',
    processing: 'Normal',
    requirements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (activePassportModal) {
      setFormData(prev => ({
        ...prev,
        serviceId: activePassportModal.title || 'New Passport Application'
      }));
      setIsSubmitted(false);
    }
  }, [activePassportModal]);

  if (!activePassportModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTripItem({
      id: `passport-req-${Date.now()}`,
      name: `Passport Assistance: ${formData.serviceId}`,
      price: formData.processing === 'Tatkal' ? 3500 : 2000,
      travellers: 1,
      type: 'Passport Service',
      processing: formData.processing,
      clientName: formData.fullName
    });
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080B10]/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#11151C] text-[#F5F7FA] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-white/15">
        
        {/* Close Button */}
        <button
          onClick={() => setActivePassportModal(null)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 text-[#D9A85C] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white font-outfit">
                  Passport Assistance Form
                </h3>
                <p className="text-xs text-[#AAB2BC] font-medium">
                  {activePassportModal.title}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Full Name (As per Aadhar / ID) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white"
                />
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
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
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white"
                  />
                </div>
              </div>

              {/* Service & DOB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Passport Service *
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white cursor-pointer"
                  >
                    {PASSPORT_SERVICES.map(s => (
                      <option key={s.id} value={s.title} className="bg-[#171B22] text-white">{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white cursor-pointer"
                  />
                </div>
              </div>

              {/* City & Preferred Processing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chennai, Bangalore, Trichy"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm font-semibold text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Preferred Processing *
                  </label>
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, processing: 'Normal' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.processing === 'Normal'
                          ? 'bg-[#D9A85C]/20 border-[#D9A85C] text-[#E7C98B]'
                          : 'bg-[#171B22] border-white/15 text-gray-400'
                      }`}
                    >
                      Normal (10-15 Days)
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, processing: 'Tatkal' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.processing === 'Tatkal'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-[#171B22] border-white/15 text-gray-400'
                      }`}
                    >
                      ⚡ Tatkal (3-5 Days)
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Additional Requirements / Queries
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify any special document assistance needed..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/15 bg-[#171B22] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] focus:border-[#D9A85C] focus:outline-none text-sm text-white"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit Application</span>
              </button>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#55C878]/20 border border-[#55C878]/40 text-[#55C878] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-white font-outfit">
              Application Request Submitted
            </h3>

            <p className="text-sm text-[#AAB2BC] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-white">{formData.fullName}</span>. Our travel documentation expert will contact you shortly regarding <span className="font-bold text-[#E7C98B]">{formData.serviceId}</span>.
            </p>

            {/* Note banner */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-300 flex items-center justify-center gap-2 max-w-md mx-auto">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Frontend Demo Mode: Your application has been logged to "My Trip".</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  const msg = `Hello TQ Fly Travels, I submitted an application request for ${formData.serviceId} (${formData.processing} Processing). Name: ${formData.fullName}, Mobile: ${formData.mobile}`;
                  openWhatsAppEnquiry(msg);
                }}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#D9A85C] text-[#080B10] font-bold text-sm hover:bg-[#E7C98B] transition-colors"
              >
                Fast-Track via WhatsApp (+1 (415) 555-0123)
              </button>

              <button
                onClick={() => setActivePassportModal(null)}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
