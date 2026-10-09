import { motion } from 'framer-motion';
import SmartImage from './SmartImage';
import SectionHead from './SectionHead';
import { services } from '../data/services';

const serviceImages = {
1: '/images/services/gates.png',
2: '/images/services/doors.png',
3: '/images/services/windows.png',
4: '/images/services/railings.png',
5: '/images/services/staircases.png',
6: '/images/services/grills.png',
7: '/images/services/chairs.png',
8: '/images/services/tables.png',
9: '/images/services/swings.png',
10: '/images/services/balcony-railings.png',
11: '/images/services/decorative-iron.png',
12: '/images/services/custom-fabrication.png',
13: '/images/services/biliya-farma.png',
};

export default function Services() {
return ( <section
   id="services"
   className="section overflow-x-clip bg-ink text-bone"
   aria-labelledby="services-title"
 > <div className="wrap"> <SectionHead
       id="services-title"
       dark
       title="What We Make"
       sub="From everyday ironwork to completely customized designs."
     />


    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((s, i) => {
        const Icon = s.icon;
        const image = serviceImages[s.id];

        return (
          <motion.li
            key={s.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.55,
              delay: (i % 4) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="
              group
              flex
              flex-col
              border
              border-white/10
              bg-graphite
              transition-all
              duration-300
              hover:border-bronze
              hover:shadow-soft
            "
          >
            {/* Image */}
            <div className="relative overflow-visible bg-graphite">
              {image ? (
                <SmartImage
                  src={image}
                  alt={s.alt}
                  zoom
                  className="aspect-[4/3] w-full"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-graphite">
                  <span className="font-display text-sm text-steel">
                    Custom Fabrication
                  </span>
                </div>
              )}

              {/* Dark fade */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-1/4
                  bg-gradient-to-t
                  from-graphite
                  to-transparent
                "
                aria-hidden="true"
              />

              {/* Service Icon */}
              <span
                className="
                  absolute
                  -bottom-6
                  left-5
                  z-20
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  bg-bronze
                  text-2xl
                  text-white
                  shadow-lift
                  transition-colors
                  duration-300
                  group-hover:bg-bronze-light
                "
              >
                <Icon aria-hidden="true" />
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col bg-graphite p-5 pt-10">
              <p className="font-display text-sm font-semibold text-bronze-light">
                {String(s.id).padStart(2, '0')}
              </p>

              <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-bone">
                {s.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-steel">
                {s.text}
              </p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  </div>
</section>


);
}