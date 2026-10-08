import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../utils/links';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with OM WORKSHOP on WhatsApp" className="group relative flex items-center">
        <span role="tooltip" className="pointer-events-none absolute right-[68px] hidden whitespace-nowrap bg-ink px-3 py-2 text-sm font-medium text-bone opacity-0 shadow-lift transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
          Chat on WhatsApp
        </span>
        <motion.span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.5], opacity: [0.45, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }} />
        <motion.span whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[2rem] text-white shadow-lift sm:h-16 sm:w-16 sm:text-4xl">
          <FaWhatsapp aria-hidden="true" />
        </motion.span>
      </a>
    </div>
  );
}
