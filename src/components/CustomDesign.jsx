import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';
import SmartImage from './SmartImage';
import Reveal from './Reveal';
import { images } from '../data/images';
import { customTopics } from '../data/content';
import { businessInfo } from '../config/businessInfo';
import { whatsappLink } from '../utils/links';

export default function CustomDesign() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

  return (
    <section id="custom" ref={ref} className="section relative overflow-hidden bg-graphite text-bone" aria-labelledby="custom-title">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="weld mb-6" aria-hidden="true" />
          <h2 id="custom-title" className="h-section">Have Your Own Design in Mind?</h2>
          <p className="mt-6 max-w-xl font-display text-2xl font-semibold leading-snug text-bronze-light sm:text-3xl">
            Bring your idea. We'll help turn it into custom ironwork.
          </p>
          <p className="mt-5 max-w-xl text-steel">Things you can discuss with {businessInfo.businessName}:</p>
          <ul className="mt-4 grid max-w-xl gap-x-6 gap-y-3 min-[480px]:grid-cols-2">
            {customTopics.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-bone/90 sm:text-base">
                <span className="flex h-5 w-5 flex-none items-center justify-center bg-bronze text-[10px] text-white"><FaCheck aria-hidden="true" /></span>
                {t}
              </li>
            ))}
          </ul>
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href={whatsappLink(businessInfo.messages.custom)} target="_blank" rel="noopener noreferrer" className="btn btn-bronze mt-10 w-full min-[480px]:w-auto">
            <FaWhatsapp className="text-xl" aria-hidden="true" /> Discuss Your Custom Design
          </motion.a>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border-2 border-bronze/70 sm:-left-5 sm:-top-5" aria-hidden="true" />
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lift sm:aspect-[5/6]">
            <motion.div style={{ y, scale: 1.18 }} className="absolute inset-0">
              <SmartImage src={images.customDesign.src} alt={images.customDesign.alt} className="h-full w-full" />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
