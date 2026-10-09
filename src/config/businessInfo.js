/**
 * SINGLE SOURCE OF TRUTH for all business / contact details.
 * Replace the placeholder values below — nothing else in the project
 * hard-codes a phone number, WhatsApp number or social link.
 */
export const businessInfo = {
  businessName: 'OM WORKSHOP',
  tagline: 'IRON WORKS & CUSTOM FABRICATION',
  ownerName: 'Omprakash Jangid',
  foundedYear: 2001,

  // WhatsApp: country code + number, digits only (e.g. "919876543210")
  whatsappNumber: '9460837072',
  // Shown on the site and used for tel: links
  phoneNumber: '+91 9460837072',
  facebookUrl: 'https://www.facebook.com/share/1DhAHigXXq/',

  // Pre-filled WhatsApp messages
  messages: {
    general: 'Hello, I would like to enquire about iron work/custom fabrication from OM WORKSHOP.',
    quote: 'Hello OM WORKSHOP, I would like to get a quote for iron work. My requirement is:',
    custom: 'Hello OM WORKSHOP, I have a custom design in mind and would like to discuss it. I can share dimensions and reference images.',
  },
};
