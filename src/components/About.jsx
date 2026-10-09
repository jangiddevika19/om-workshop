import Reveal from './Reveal';
import { businessInfo } from '../config/businessInfo';
import { whatsappLink } from '../utils/links';

const values = [
  {
    number: '01',
    title: 'Made to measure',
    text: 'Every piece is planned around your space, dimensions and requirement.',
  },
  {
    number: '02',
    title: 'Built with purpose',
    text: 'From everyday gates to detailed furniture, the work is made for real use.',
  },
  {
    number: '03',
    title: 'Personal service',
    text: 'You speak directly about your requirement and we build around it.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="
        relative
        overflow-x-clip
        bg-paper
        scroll-mt-24
        pt-24
        pb-16
        sm:pt-28
        sm:pb-20
        lg:pt-28
        lg:pb-28
      "
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          top-20
          h-52
          w-52
          rounded-full
          border
          border-bronze/10
          sm:-right-32
          sm:h-72
          sm:w-72
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-44
          w-44
          rounded-full
          border
          border-line
          sm:h-60
          sm:w-60
        "
        aria-hidden="true"
      />

      <div className="wrap relative min-w-0">
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <div
          className="
            grid
            min-w-0
            gap-6
            lg:grid-cols-[0.55fr_1.45fr]
            lg:items-end
            lg:gap-10
          "
        >
          <Reveal>
            <div className="flex items-center gap-3">
              <span
                className="
                  h-px
                  w-7
                  shrink-0
                  bg-bronze
                  sm:w-9
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-bronze
                  sm:text-[0.58rem]
                  sm:tracking-[0.23em]
                "
              >
                About OM Workshop
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              id="about-title"
              className="
                max-w-[850px]
                font-display
                text-[2.45rem]
                font-medium
                leading-[0.98]
                tracking-[-0.04em]
                text-ink
                sm:text-[3.35rem]
                md:text-[4rem]
                lg:text-[4.7rem]
              "
            >
              Built by hand.
              <br />
              <span className="text-ink/50">
                Built to last.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* =====================================================
            MAIN ABOUT CONTENT
        ===================================================== */}

        <div
          className="
            mt-12
            grid
            min-w-0
            gap-12
            sm:mt-14
            lg:mt-20
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-16
            xl:gap-24
          "
        >
          {/* ===================================================
              LEFT — IMAGE + EXPERIENCE
          =================================================== */}

          <Reveal className="relative min-w-0 max-w-full">
            {/* Bronze offset frame */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-3
                -right-3
                h-full
                w-full
                border
                border-bronze
                sm:-bottom-4
                sm:-right-4
              "
              aria-hidden="true"
            />

            {/* Image */}
            <div
              className="
                relative
                w-full
                max-w-full
                min-w-0
                overflow-hidden
                border
                border-line
                bg-paper
                p-2
                sm:p-2.5
              "
            >
              <img
                src="/images/om-workshop-owner.png"
                alt={`${businessInfo.ownerName}, owner of ${businessInfo.businessName}`}
                loading="lazy"
                decoding="async"
                className="
                  block
                  aspect-[4/5]
                  w-full
                  max-w-full
                  object-cover
                  object-[center_16%]
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </div>

            {/* =================================================
                EXPERIENCE CARD
            ================================================= */}

            <div
              className="
                relative
                left-0
                bottom-0
                mt-3
                box-border
                w-full
                max-w-full
                min-w-0
                overflow-hidden
                bg-ink
                px-4
                py-4
                text-paper
                shadow-soft
                sm:absolute
                sm:bottom-[-1px]
                sm:left-5
                sm:mt-0
                sm:w-[215px]
                sm:max-w-[215px]
                sm:px-5
                sm:py-5
              "
            >
              <div
                className="
                  flex
                  min-w-0
                  items-end
                  justify-between
                  gap-3
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      font-display
                      text-[2.25rem]
                      leading-none
                      tracking-[-0.04em]
                      sm:text-[2.8rem]
                    "
                  >
                    25+
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[0.46rem]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-paper/60
                      sm:text-[0.5rem]
                    "
                  >
                    Years of experience
                  </p>
                </div>

                <span
                  className="
                    mb-1
                    h-7
                    w-7
                    shrink-0
                    rounded-full
                    border
                    border-paper/25
                    sm:h-9
                    sm:w-9
                  "
                  aria-hidden="true"
                />
              </div>

              <div
                className="
                  mt-3
                  h-px
                  w-full
                  bg-paper/15
                "
                aria-hidden="true"
              />

              <p
                className="
                  mt-3
                  max-w-full
                  break-words
                  text-[0.58rem]
                  leading-[1.65]
                  text-paper/60
                  sm:text-[0.63rem]
                "
              >
                Custom iron work shaped around your space and everyday needs.
              </p>
            </div>
          </Reveal>

          {/* ===================================================
              RIGHT — STORY
          =================================================== */}

          <Reveal
            delay={0.1}
            className="min-w-0 max-w-full"
          >
            <div className="min-w-0">
              {/* Intro */}
              <p
                className="
                  max-w-[680px]
                  text-[0.96rem]
                  leading-[1.75]
                  text-ink
                  sm:text-[1.08rem]
                  sm:leading-[1.8]
                  md:text-[1.16rem]
                "
              >
                At{' '}
                <strong className="font-semibold">
                  {businessInfo.businessName}
                </strong>
                , ironwork is not just fabrication. It is about understanding
                what you need, working with the space you have and creating
                something that feels right when it becomes part of your home.
              </p>

              {/* Main story */}
              <p
                className="
                  mt-5
                  max-w-[650px]
                  text-[0.78rem]
                  leading-[1.85]
                  text-ink/65
                  sm:mt-6
                  sm:text-[0.88rem]
                  sm:leading-[1.9]
                  md:text-[0.94rem]
                "
              >
                For more than 25 years, the workshop has worked on custom
                iron gates, doors, windows, grills, balcony and stair
                railings, staircases, jhulas, chairs, seating and other iron
                furniture. Each project starts with your requirement and is
                shaped around the dimensions, function and finish you want.
              </p>

              {/* =================================================
                  OWNER
              ================================================= */}

              <div
                className="
                  mt-7
                  flex
                  min-w-0
                  items-center
                  gap-3
                  border-y
                  border-line
                  py-4
                  sm:mt-9
                  sm:gap-4
                  sm:py-5
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-bronze/35
                    bg-paper
                    sm:h-11
                    sm:w-11
                  "
                >
                  <span
                    className="
                      font-display
                      text-[1rem]
                      text-ink
                      sm:text-[1.1rem]
                    "
                  >
                    O
                  </span>
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-[0.48rem]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-bronze
                      sm:text-[0.52rem]
                      sm:tracking-[0.2em]
                    "
                  >
                    Workshop Owner
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      font-display
                      text-[1.05rem]
                      leading-tight
                      text-ink
                      sm:text-[1.2rem]
                    "
                  >
                    {businessInfo.ownerName}
                  </p>
                </div>
              </div>

              {/* =================================================
                  VALUES
              ================================================= */}

              <div className="mt-7 sm:mt-9">
                {values.map((item) => (
                  <div
                    key={item.number}
                    className="
                      grid
                      min-w-0
                      grid-cols-[32px_minmax(0,1fr)]
                      gap-3
                      border-t
                      border-line
                      py-4
                      sm:grid-cols-[45px_minmax(0,1fr)]
                      sm:gap-5
                      sm:py-5
                    "
                  >
                    <span
                      className="
                        pt-0.5
                        text-[0.5rem]
                        font-semibold
                        tracking-[0.1em]
                        text-bronze
                        sm:text-[0.55rem]
                      "
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className="
                          font-display
                          text-[1rem]
                          leading-tight
                          text-ink
                          sm:text-[1.15rem]
                          md:text-[1.25rem]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          max-w-[500px]
                          text-[0.62rem]
                          leading-[1.7]
                          text-ink/60
                          sm:mt-2
                          sm:text-[0.7rem]
                          sm:leading-[1.75]
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <a
                href={whatsappLink(businessInfo.messages.quote)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn
                  btn-dark
                  mt-7
                  w-full
                  sm:mt-9
                  sm:w-auto
                "
              >
                Discuss Your Requirement →
              </a>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <Reveal delay={0.15}>
          <div
            className="
              mt-14
              border-t
              border-line
              pt-6
              sm:mt-20
              sm:pt-8
              lg:mt-24
            "
          >
            <div
              className="
                flex
                min-w-0
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:gap-8
              "
            >
              <p
                className="
                  shrink-0
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-bronze
                "
              >
                What we make
              </p>

              <p
                className="
                  max-w-[800px]
                  font-display
                  text-[1.25rem]
                  leading-[1.3]
                  tracking-[-0.02em]
                  text-ink
                  sm:text-[1.55rem]
                  md:text-[1.8rem]
                  lg:text-[2rem]
                "
              >
                Gates. Railings. Furniture. Jhulas.
                <span className="text-ink/40">
                  {' '}
                  And custom pieces made around your idea.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}