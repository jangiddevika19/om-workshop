import { motion } from 'framer-motion';
import SectionHead from './SectionHead';
import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section
      id="process"
      className="section bg-bone"
      aria-labelledby="process-title"
    >
      <div className="wrap">
        <SectionHead
          id="process-title"
          title="How It Works"
          sub="From your initial idea to the finished ironwork, the process stays simple and direct."
        />

        <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Vertical connector on mobile */}
          <motion.span
            aria-hidden="true"
            className="absolute bottom-6 left-[27px] top-6 w-[2px] origin-top bg-bronze lg:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 1.2,
              ease: 'easeInOut',
            }}
          />

          {/* Horizontal connector on desktop */}
          <motion.span
            aria-hidden="true"
            className="absolute left-7 right-7 top-[27px] hidden h-[2px] origin-left bg-bronze lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 1.4,
              ease: 'easeInOut',
            }}
          />

          {processSteps.map((s, i) => (
            <motion.li
              key={s.title}
              className="relative pl-[76px] lg:pl-0 lg:pt-[76px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span
                className="
                  absolute
                  left-0
                  top-0
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  bg-ink
                  font-display
                  text-2xl
                  font-bold
                  text-bronze-light
                  ring-8
                  ring-bone
                "
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                {s.title}
              </h3>

              <p className="mt-2 max-w-xs text-ink/65">
                {s.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}