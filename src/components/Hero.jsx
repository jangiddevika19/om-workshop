import { motion, useReducedMotion } from 'framer-motion';
import { businessInfo } from '../config/businessInfo';
import { whatsappLink } from '../utils/links';

const ease = [0.22, 1, 0.36, 1];

const line = {
  hidden: { y: '112%' },
  show: {
    y: 0,
    transition: {
      duration: 1.1,
      ease,
    },
  },
};

const fadeUp = (delay) => ({
  initial: {
    opacity: 0,
    y: 18,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay,
    duration: 0.9,
    ease,
  },
});

const made = [
  {
    title: 'Gates & doors',
    text: 'Main gates and iron doors',
  },
  {
    title: 'Windows & grills',
    text: 'Made to your measurements',
  },
  {
    title: 'Railings & staircases',
    text: 'Balcony and stair railings, staircases',
  },
  {
    title: 'Furniture & jhulas',
    text: 'Seating, rocking chairs and swings',
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden
        bg-cream
        pt-[6rem]
        xl:pt-28
      "
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          -z-10
          h-px
          w-full
          bg-line
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[18%]
          -z-10
          h-40
          w-40
          rounded-full
          border
          border-bronze/10
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[12%]
          left-[4%]
          -z-10
          h-28
          w-28
          rounded-full
          border
          border-line
        "
        aria-hidden="true"
      />

      {/* =========================================================
          MAIN HERO CONTAINER
      ========================================================= */}

      <div
        className="
          mx-auto
          max-w-[1400px]
          px-5
          pb-16
          sm:px-8
          sm:pb-20
          lg:px-10
          lg:pb-24
          xl:px-12
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="max-w-[620px]">
            {/* Small eyebrow */}
            <motion.div
              {...fadeUp(0.1)}
              className="
                mb-7
                flex
                items-center
                gap-3
                sm:mb-8
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-bronze
                  sm:w-10
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-bronze
                  sm:text-[0.62rem]
                  sm:tracking-[0.24em]
                "
              >
                25+ years of craftsmanship
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden">
              <motion.h1
                variants={line}
                initial={shouldReduceMotion ? false : 'hidden'}
                animate="show"
                className="
                  max-w-[680px]
                  font-display
                  text-[3.45rem]
                  font-medium
                  leading-[0.91]
                  tracking-[-0.045em]
                  text-ink
                  sm:text-[4.5rem]
                  md:text-[5.2rem]
                  lg:text-[4.65rem]
                  xl:text-[5.4rem]
                "
              >
                Iron, crafted
                <br />
                <span className="text-ink/90">
                  for your space.
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.55)}
              className="
                mt-7
                max-w-[530px]
                text-[0.9rem]
                leading-[1.85]
                text-stone
                sm:mt-8
                sm:text-[0.96rem]
                sm:leading-[1.8]
              "
            >
              From gates and doors to windows, railings, furniture and
              custom ironwork — every piece is made to your space, style
              and requirement.
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...fadeUp(0.72)}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:mt-9
                sm:flex-row
                sm:items-center
              "
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  bg-bronze
                  px-7
                  text-[0.68rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-ink
                  hover:shadow-soft
                  sm:h-[52px]
                  sm:px-8
                "
              >
                Get a quote
              </a>

              <a
                href="#our-work"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  border
                  border-line
                  bg-transparent
                  px-7
                  text-[0.68rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-ink
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-ink
                  hover:bg-white
                  sm:h-[52px]
                  sm:px-8
                "
              >
                Explore our work
              </a>
            </motion.div>

            {/* Small bottom label */}
            <motion.div
              {...fadeUp(0.9)}
              className="
                mt-9
                flex
                items-center
                gap-3
                sm:mt-11
              "
            >
              <span
                className="
                  h-px
                  w-6
                  bg-line
                  sm:w-8
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-[0.53rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-stone
                  sm:text-[0.58rem]
                  sm:tracking-[0.23em]
                "
              >
                Custom iron fabrication
              </span>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT IMAGE / OWNER AREA
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 1.1,
              ease,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[650px]
              lg:mx-0
              lg:ml-auto
            "
          >
            {/* =================================================
                25+ PREMIUM SEAL
            ================================================= */}

            <motion.div
              {...fadeUp(0.95)}
              className="
                absolute
                -right-3
                -top-7
                z-30
                hidden
                h-[92px]
                w-[92px]
                items-center
                justify-center
                rounded-full
                border
                border-bronze/40
                bg-cream
                shadow-soft
                md:flex
                lg:-right-5
                lg:-top-8
                lg:h-[102px]
                lg:w-[102px]
              "
            >
              <div
                className="
                  flex
                  h-[74px]
                  w-[74px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-bronze/30
                  bg-cream
                  lg:h-[82px]
                  lg:w-[82px]
                "
              >
                <span
                  className="
                    font-display
                    text-[1.65rem]
                    leading-none
                    tracking-[-0.04em]
                    text-ink
                    lg:text-[1.8rem]
                  "
                >
                  25+
                </span>

                <span
                  className="
                    mt-1
                    text-[0.42rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-bronze
                  "
                >
                  Years
                </span>

                <span
                  className="
                    mt-0.5
                    text-[0.36rem]
                    uppercase
                    tracking-[0.1em]
                    text-stone
                  "
                >
                  Experience
                </span>
              </div>
            </motion.div>

            {/* =================================================
                PHOTO FRAME
            ================================================= */}

            <figure
              className="
                overflow-hidden
                border
                border-line
                bg-cream-card
                p-2
                shadow-soft
                sm:p-2.5
              "
            >
              <div className="group relative overflow-hidden">
                <motion.img
                  src="/images/om-workshop-owner.png"
                  alt={`${businessInfo.ownerName}, owner of ${businessInfo.businessName}`}
                  loading="eager"
                  className="
                    h-[25rem]
                    w-full
                    object-cover
                    object-[center_18%]
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-[1.025]
                    sm:h-[31rem]
                    md:h-[35rem]
                    lg:h-[38rem]
                    xl:h-[41rem]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-ink/10
                    via-transparent
                    to-transparent
                  "
                  aria-hidden="true"
                />
              </div>
            </figure>

            {/* =================================================
                OWNER INFORMATION
            ================================================= */}

            <motion.div
              {...fadeUp(1.15)}
              className="
                mt-4
                flex
                flex-col
                gap-4
                border-b
                border-line
                pb-4
                sm:mt-5
                sm:flex-row
                sm:items-end
                sm:justify-between
                sm:pb-5
              "
            >
              <div>
                <p
                  className="
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-bronze
                    sm:text-[0.54rem]
                  "
                >
                  Workshop Owner
                </p>

                <p
                  className="
                    mt-1
                    font-display
                    text-[1.2rem]
                    leading-tight
                    text-ink
                    sm:text-[1.35rem]
                  "
                >
                  {businessInfo.ownerName}
                </p>

                <div
                  className="
                    mt-2
                    h-px
                    w-7
                    bg-bronze
                    sm:w-8
                  "
                  aria-hidden="true"
                />
              </div>

              <div className="sm:text-right">
                <p
                  className="
                    text-[0.62rem]
                    leading-relaxed
                    text-stone
                    sm:text-[0.66rem]
                  "
                >
                  {businessInfo.businessName}
                </p>

                <p
                  className="
                    mt-0.5
                    text-[0.52rem]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-stone/70
                  "
                >
                  Custom Iron Works
                </p>
              </div>
            </motion.div>

            {/* =================================================
                MOBILE 25+ EXPERIENCE ROW
            ================================================= */}

            <motion.div
              {...fadeUp(1.25)}
              className="
                mt-4
                flex
                items-center
                gap-3
                border-y
                border-line
                py-3.5
                md:hidden
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-bronze/40
                  bg-cream
                "
              >
                <span
                  className="
                    font-display
                    text-[1rem]
                    leading-none
                    text-ink
                  "
                >
                  25+
                </span>
              </div>

              <div>
                <p
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-bronze
                  "
                >
                  Years of experience
                </p>

                <p
                  className="
                    mt-0.5
                    text-[0.65rem]
                    leading-relaxed
                    text-stone
                  "
                >
                  Trusted custom iron craftsmanship
                </p>
              </div>
            </motion.div>

            {/* =================================================
                PHOTO CAPTION
            ================================================= */}

            <figcaption
              className="
                mt-5
                flex
                items-center
                justify-between
                gap-4
                text-[0.65rem]
                text-stone
                sm:mt-7
                sm:text-[0.72rem]
              "
            >
              <span>
                {businessInfo.businessName}
              </span>

              <span
                className="
                  h-px
                  flex-1
                  bg-line
                "
                aria-hidden="true"
              />

              <span
                className="
                  uppercase
                  tracking-[0.14em]
                  sm:tracking-[0.16em]
                "
              >
                Custom craftsmanship
              </span>
            </figcaption>

            {/* Vertical side label */}
            <div
              className="
                pointer-events-none
                absolute
                -right-8
                bottom-16
                hidden
                lg:block
              "
              aria-hidden="true"
            >
              <span
                className="
                  [writing-mode:vertical-rl]
                  rotate-180
                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-stone/80
                "
              >
                Iron works & custom fabrication
              </span>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            PRODUCTS / SERVICES STRIP
        ======================================================= */}

        <motion.div
          {...fadeUp(1.4)}
          className="
            mt-14
            border-t
            border-line
            pt-7
            sm:mt-16
            sm:pt-8
            lg:mt-20
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-x-5
              gap-y-7
              md:grid-cols-4
              md:gap-0
            "
          >
            {made.map((item, index) => (
              <div
                key={item.title}
                className={`
                  ${
                    index > 0
                      ? 'md:border-l md:border-line md:pl-6 lg:pl-8'
                      : ''
                  }
                  ${
                    index < made.length - 1
                      ? 'md:pr-6 lg:pr-8'
                      : ''
                  }
                `}
              >
                <p
                  className="
                    text-[0.66rem]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-ink
                    sm:text-[0.7rem]
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-2
                    max-w-[220px]
                    text-[0.64rem]
                    leading-[1.65]
                    text-stone
                    sm:text-[0.68rem]
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}