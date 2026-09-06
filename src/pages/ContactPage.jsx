import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { openWhatsAppEnquiry, TQ_PHONE } from '../utils/whatsapp';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Tour Package Enquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D9A85C] bg-[#D9A85C]/10 border border-[#D9A85C]/20 px-3.5 py-1 rounded-full">
            24/7 Dedicated Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit mt-3">
            Get In Touch With TQ Fly Travels
          </h1>
          <p className="text-[#AAB2BC] mt-3 text-base">
            Have questions about Thailand Songkran, Dubai visas, or custom holiday packages? Our team is available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#11151C] text-white rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold font-outfit text-white">
                  TQ FLY TRAVELS
                </h2>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-[#D9A85C]/15 text-[#E7C98B] border border-[#D9A85C]/30 rounded-full">
                  Demo Contact
                </span>
              </div>
              <p className="text-[#AAB2BC] text-xs sm:text-sm leading-relaxed">
                Your premier travel partner for international holidays, passport applications, tourist visas, flights, and hotel reservations.
              </p>

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 flex items-center justify-center text-[#D9A85C] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 uppercase font-semibold block">Phone / WhatsApp</span>
                      <span className="text-[9px] bg-white/10 text-[#D9A85C] px-1.5 py-0.5 rounded font-bold uppercase">Demo Contact</span>
                    </div>
                    <a href="tel:+14155550123" className="text-lg font-bold text-white hover:text-[#D9A85C]">
                      +1 (415) 555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 flex items-center justify-center text-[#D9A85C] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold block">Official Website</span>
                    <a href="https://tqflytravels.com" target="_blank" rel="noreferrer" className="text-base font-bold text-white hover:text-[#D9A85C]">
                      tqflytravels.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D9A85C]/15 border border-[#D9A85C]/30 flex items-center justify-center text-[#D9A85C] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold block">Operating Hours</span>
                    <span className="text-sm font-semibold text-white">Monday - Saturday: 9:30 AM - 8:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 relative z-10 pt-6 border-t border-white/10">
              <a
                href="tel:+14155550123"
                className="w-full py-3.5 px-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now (+1 (415) 555-0123)</span>
              </a>

              <button
                onClick={() => openWhatsAppEnquiry("Hello TQ Fly Travels, I have a general enquiry.")}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/15"
              >
                <MessageSquare className="w-4 h-4 text-[#D9A85C]" />
                <span>WhatsApp Us (+1 (415) 555-0123)</span>
              </button>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-[#171B22] rounded-3xl p-8 border border-white/10 shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-extrabold text-white font-outfit">
                  Send Us an Enquiry
                </h3>
                <p className="text-xs text-[#AAB2BC]">
                  Fill in the details below and our travel desk will reach out within 30 minutes.
                </p>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#11151C] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] text-sm font-semibold text-white"
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
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#11151C] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] text-sm font-semibold text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#11151C] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] text-sm font-semibold text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Subject / Service Needed *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#11151C] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] text-sm font-semibold text-white cursor-pointer"
                  >
                    <option value="Thailand Songkran Special" className="bg-[#171B22] text-white">Thailand Songkran Special Package</option>
                    <option value="International Tour Package" className="bg-[#171B22] text-white">International Tour Package</option>
                    <option value="Domestic Tour Package" className="bg-[#171B22] text-white">Domestic Tour Package</option>
                    <option value="Passport Assistance" className="bg-[#171B22] text-white">Passport Assistance (New/Tatkal/Renewal)</option>
                    <option value="Visa Assistance" className="bg-[#171B22] text-white">Visa Assistance</option>
                    <option value="Flight & Hotel Booking" className="bg-[#171B22] text-white">Flight & Hotel Booking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your preferred travel dates, number of travellers, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#11151C] focus:bg-[#1f242d] focus:ring-2 focus:ring-[#D9A85C] text-sm text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#D9A85C] hover:bg-[#E7C98B] text-[#080B10] font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#55C878]/20 border border-[#55C878]/30 text-[#55C878] flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-extrabold text-white font-outfit">
                  Message Sent Successfully
                </h3>

                <p className="text-sm text-[#AAB2BC] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>! Our TQ Fly Travels team will get back to you shortly regarding <span className="font-bold text-[#E7C98B]">{formData.subject}</span>.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      const msg = `Hello TQ Fly Travels, I submitted an enquiry. Name: ${formData.name}, Phone: ${formData.phone}, Service: ${formData.subject}`;
                      openWhatsAppEnquiry(msg);
                    }}
                    className="py-3 px-6 rounded-xl bg-[#D9A85C] text-[#080B10] font-bold text-sm hover:bg-[#E7C98B] transition-colors"
                  >
                    Direct Chat on WhatsApp (+1 (415) 555-0123)
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
