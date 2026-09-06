/**
 * TQ Fly Travels Demo Contact Helper
 * Fictional Demo Number: +1 (415) 555-0123
 */

export const TQ_PHONE = "+1 (415) 555-0123";
export const TQ_PHONE_RAW = "14155550123";

export const openWhatsAppEnquiry = (message) => {
  const defaultText = "Hello TQ Fly Travels, I would like to enquire about your travel services.";
  const textToSend = message || defaultText;
  const encodedText = encodeURIComponent(textToSend);
  const whatsappUrl = `https://wa.me/${TQ_PHONE_RAW}?text=${encodedText}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};
