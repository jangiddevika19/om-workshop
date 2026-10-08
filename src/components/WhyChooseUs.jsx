import { motion } from 'framer-motion';
import SectionHead from './SectionHead';
import { whyCards } from '../data/content';
import { businessInfo } from '../config/businessInfo';

export default function WhyChooseUs() {
  return (
    <section id="why" className="section bg-ink text-bone" aria-labelledby="why-title">
      <div className="wrap">
        <SectionHead id="why-title" dark title={`Why Choose ${businessInfo.businessName}?`} />
        <ul className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.li key={c.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative bg-graphite p-7 transition-colors duration-300 hover:bg-[#2a2e34] sm:p-9">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-bronze transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <Icon className="text-3xl text-bronze-light" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight sm:text-[1.7rem]">{c.title}</h3>
                <p className="mt-2 text-steel">{c.text}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
