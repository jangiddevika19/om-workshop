import { businessInfo } from '../config/businessInfo';

if (import.meta.env.DEV && /X/.test(businessInfo.whatsappNumber + businessInfo.phoneNumber)) {
  console.warn('[OM WORKSHOP] Placeholder phone/WhatsApp number in src/config/businessInfo.js — replace before launch.');
}

/** wa.me link built from businessInfo — never hard-code the number elsewhere. */
export const whatsappLink = (message = businessInfo.messages.general) =>
  `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

export const phoneLink = () => `tel:${businessInfo.phoneNumber.replace(/[^\d+]/g, '')}`;
