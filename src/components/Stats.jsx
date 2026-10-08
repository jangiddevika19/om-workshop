import { motion } from 'framer-motion';

const stats = [
  { big: '15+', label: 'Years of Experience' },
  { big: 'Since', sub: '2010', label: 'Working in Iron Fabrication' },
  { big: 'Custom', label: 'Design & Fabrication' },
  { big: 'Built', label: 'Around Your Requirements' },
];

export default function Stats() {
  return (
    <section aria-label="Experience at a glance" className="relative bg-bone">
      <div className="wrap">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          transition={{ staggerChildren: 0.12 }}
          className="-mt-px grid grid-cols-2 border-x border-ink/10 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className={`min-w-0 border-b border-ink/10 px-5 py-9 sm:px-8 sm:py-12 ${
                i % 2 === 0 ? 'border-r' : ''
              } lg:border-b-0 lg:border-r ${
                i === 3 ? 'lg:border-r-0' : ''
              }`}
            >
              <p
                className="
                  min-w-0
                  max-w-full
                  whitespace-nowrap
                  font-display
                  text-[1.75rem]
                  font-extrabold
                  leading-none
                  tracking-[-0.03em]
                  text-ink
                  min-[400px]:text-5xl
                  sm:text-6xl
                "
              >
                {s.big}
              </p>

              {s.sub && (
                <p
                  className="
                    mt-1
                    font-display
                    text-[1.75rem]
                    font-extrabold
                    leading-none
                    tracking-[-0.03em]
                    text-ink
                    min-[400px]:text-5xl
                    sm:text-6xl
                  "
                >
                  {s.sub}
                </p>
              )}

              <div
                className="my-4 h-[3px] w-8 bg-bronze"
                aria-hidden="true"
              />

              <p className="text-sm font-medium leading-snug text-ink/65 sm:text-base">
                {s.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}