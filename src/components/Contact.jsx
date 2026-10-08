import { motion } from 'framer-motion';
import { FaFacebookF, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Reveal from './Reveal';
import { businessInfo } from '../config/businessInfo';
import { phoneLink, whatsappLink } from '../utils/links';

export default function Contact() {
  const cards = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      text: 'Chat with OM WORKSHOP',
      href: whatsappLink(),
      external: true,
      primary: true,
    },
    {
      icon: FaPhoneAlt,
      title: 'Phone',
      text: 'Call for enquiries',
      detail: businessInfo.phoneNumber,
      href: phoneLink(),
    },
    {
      icon: FaFacebookF,
      title: 'Facebook',
      text: 'Follow OM WORKSHOP',
      href: businessInfo.facebookUrl,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="section bg-ink text-bone"
      aria-labelledby="contact-title"
    >
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <div className="weld mb-6" aria-hidden="true" />

          <h2 id="contact-title" className="h-section">
            Let&apos;s Build Something Strong.
          </h2>

          <p className="lede mt-6 text-steel">
            Have a gate, railing, staircase, furniture piece or custom
            ironwork idea in mind? Share your requirement with{' '}
            {businessInfo.businessName} and let&apos;s discuss it.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.55,
                }}
              >
                <a
                  href={c.href}
                  {...(c.external
                    ? {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {})}
                  className={`group flex h-full items-center gap-5 border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                    c.primary
                      ? 'border-bronze bg-bronze hover:bg-bronze-light'
                      : 'border-white/15 bg-graphite hover:border-bronze'
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 flex-none items-center justify-center text-2xl ${
                      c.primary
                        ? 'bg-ink/25 text-white'
                        : 'bg-ink text-bronze-light'
                    }`}
                  >
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-display text-3xl font-bold leading-none">
                      {c.title}
                    </span>

                    <span
                      className={`mt-1 block text-sm ${
                        c.primary ? 'text-white/90' : 'text-steel'
                      }`}
                    >
                      {c.text}
                    </span>

                    {c.detail && (
                      <span className="mt-1 block break-words text-sm font-semibold text-bone">
                        {c.detail}
                      </span>
                    )}
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>

        <p className="mt-8 text-sm text-steel">
          Operated by {businessInfo.ownerName}.
        </p>
      </div>
    </section>
  );
}