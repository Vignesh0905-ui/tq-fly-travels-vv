/**
 * Wanderly Travels Demo Contact Helper & Brand Configuration
 * Fictional Demo Number: +1 (415) 555-0123
 */

export const BRAND = {
  name: "Wanderly Travels",
  tagline: "Your Journey, Our Passion.",
  phone: "+1 (415) 555-0123",
  phoneRaw: "14155550123",
  website: "wanderlytravels.demo",
  websiteUrl: "https://wanderlytravels.demo"
};

export const BRAND_PHONE = BRAND.phone;
export const BRAND_PHONE_RAW = BRAND.phoneRaw;

export const openWhatsAppEnquiry = (message) => {
  const defaultText = "Hello Wanderly Travels, I would like to enquire about your travel services.";
  const textToSend = message || defaultText;
  const encodedText = encodeURIComponent(textToSend);
  const whatsappUrl = `https://wa.me/${BRAND.phoneRaw}?text=${encodedText}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};
