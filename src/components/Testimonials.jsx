import { FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import { businessInfo } from '../config/businessInfo';
import { whatsappLink } from '../utils/links';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section bg-bone"
      aria-labelledby="testi-title"
    >
      <div className="wrap">
        <SectionHead
          id="testi-title"
          title="Built Through Experience"
          sub="25+ years of practical experience, custom fabrication and work delivered according to customer requirements."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Experience block */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between bg-ink p-8 text-bone sm:p-10">
              <div>
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-bronze-light">
                  Since 25+ Years
                </span>

                <div className="mt-6 font-display text-6xl font-bold leading-none text-bone sm:text-7xl">
                  25+
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                  Years of Practical Experience
                </h3>

                <p className="mt-4 max-w-md leading-relaxed text-steel">
                  Experience built through real fabrication work, custom
                  requirements and projects made with practical attention to
                  strength, design and finishing.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <FaCheckCircle
                    className="mt-1 flex-none text-bronze-light"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-bone/80">
                    Custom work can be discussed according to your design,
                    measurements and requirements.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Trust / feedback area */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="flex h-full flex-col border border-ink/10 bg-white p-8 shadow-card sm:p-10">
              <FaQuoteLeft
                className="text-3xl text-bronze"
                aria-hidden="true"
              />

              <blockquote className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-relaxed text-ink sm:text-3xl">
                “Every project is different. The work starts with
                understanding what the customer needs and turning that
                requirement into practical ironwork.”
              </blockquote>

              <p className="mt-6 max-w-xl text-ink/65">
                From gates and railings to furniture, swings and custom
                fabrication, OM WORKSHOP has delivered a wide range of
                ironwork over the years.
              </p>

              <div className="mt-auto border-t border-ink/10 pt-6">
                <p className="font-display text-lg font-bold text-ink">
                  {businessInfo.businessName}
                </p>

                <p className="mt-1 text-sm text-ink/55">
                  Iron Works & Custom Fabrication
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 border border-ink/10 bg-paper p-6 sm:flex-row sm:items-center sm:p-7">
            <div>
              <p className="font-display text-xl font-bold text-ink">
                Have a project in mind?
              </p>

              <p className="mt-1 text-sm text-ink/60">
                Share your requirement and discuss your design directly.
              </p>
            </div>

            <a
              href={whatsappLink(
                'Hello OM WORKSHOP, I would like to discuss a project.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-full sm:w-auto"
            >
              Discuss Your Project →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}