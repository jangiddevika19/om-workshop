import SmartImage from './SmartImage';
import Reveal from './Reveal';
import { images } from '../data/images';
import { businessInfo } from '../config/businessInfo';
import { whatsappLink } from '../utils/links';

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="section bg-paper" aria-labelledby="craft-title">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6 lg:order-2">
          <SmartImage src={images.craftsmanship.src} alt={images.craftsmanship.alt} className="aspect-[4/3] w-full shadow-card sm:aspect-[3/2] lg:aspect-[4/5]" />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:order-1">
          <div className="weld mb-6" aria-hidden="true" />
          <h2 id="craft-title" className="h-section">Crafted With Experience</h2>
          <p className="lede mt-6 text-ink/70">
            Every project starts with a requirement and takes shape through practical design, fabrication and attention to detail.
          </p>
          <a href={whatsappLink(businessInfo.messages.quote)} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-9">
            Start Your Project →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
