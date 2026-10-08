import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { faqs } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <section id="faq" className="section bg-paper" aria-labelledby="faq-title">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHead id="faq-title" title="Frequently Asked Questions" />
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-ink/15 first:border-t">
                <h3>
                  <button type="button" id={`${base}-b${i}`} aria-expanded={isOpen} aria-controls={`${base}-p${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-5 py-5 text-left font-display text-xl font-semibold leading-snug transition-colors hover:text-bronze-dark sm:text-2xl">
                    {f.q}
                    <FaChevronDown aria-hidden="true" className={`flex-none text-base text-bronze transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`${base}-p${i}`} role="region" aria-labelledby={`${base}-b${i}`}
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <p className="max-w-2xl pb-6 leading-relaxed text-ink/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
