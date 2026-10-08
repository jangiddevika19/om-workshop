import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaFacebookF } from 'react-icons/fa';
import { businessInfo } from '../config/businessInfo';
import { navLinks } from '../data/content';
import { whatsappLink } from '../utils/links';

const ease = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  /* =========================================================
     SCROLL
  ========================================================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */
  useEffect(() => {
    const els = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
      }
    );

    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  /* =========================================================
     ESCAPE CLOSE
  ========================================================= */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const solid = scrolled || open;

  const bar =
    'block h-px w-6 origin-center bg-ink transition-all duration-300';

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease,
        }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
          solid
            ? 'border-line bg-cream/95 shadow-soft backdrop-blur-md'
            : 'border-line/60 bg-cream/95'
        }`}
      >
        <div
          className={`wrap flex items-center justify-between gap-3 transition-[height] duration-500 h-[4.5rem] ${
            scrolled ? 'xl:h-[4.25rem]' : 'xl:h-24'
          }`}
        >
          {/* =================================================
              LOGO
          ================================================= */}
          <a
            href="#home"
            className="flex min-w-0 flex-none flex-col leading-none"
            aria-label={`${businessInfo.businessName} — home`}
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-[1.35rem] font-medium tracking-[0.12em] text-ink sm:text-[1.55rem]">
              OM WORKSHOP
            </span>

            <span className="mt-1.5 hidden text-[0.6rem] font-medium tracking-[0.24em] text-stone min-[400px]:block">
              {businessInfo.tagline}
            </span>
          </a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}
          <nav
            aria-label="Primary"
            className="hidden min-w-0 flex-1 xl:block"
          >
            <ul className="flex items-center justify-center gap-4 2xl:gap-7">
              {navLinks.map((l) => (
                <li key={l.href} className="min-w-0">
                  <a
                    href={l.href}
                    aria-current={
                      active === l.href ? 'true' : undefined
                    }
                    className={`link-draw whitespace-nowrap py-2 text-[0.76rem] font-medium tracking-[0.02em] transition-colors duration-300 hover:text-bronze-dark ${
                      active === l.href
                        ? 'text-bronze-dark'
                        : 'text-ink/80'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}
          <div className="flex flex-none items-center gap-2 sm:gap-2.5">
            {/* =================================================
                FACEBOOK
            ================================================= */}
            <a
              href={businessInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OM WORKSHOP on Facebook"
              className="hidden h-10 w-10 flex-none items-center justify-center border border-line text-ink/70 transition-colors duration-300 hover:border-bronze hover:text-bronze-dark xl:flex"
            >
              <FaFacebookF
                aria-hidden="true"
                className="text-sm"
              />
            </a>

            {/* =================================================
                DESKTOP QUOTE
            ================================================= */}
            <a
              href={whatsappLink(
                businessInfo.messages.quote
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-bronze hidden !min-h-[42px] !whitespace-nowrap !px-4 !py-2 xl:inline-flex"
            >
              Discuss Your Project
            </a>

            {/* =================================================
                MOBILE MENU
            ================================================= */}
            <button
              type="button"
              className="-mr-2 flex h-11 w-11 flex-none flex-col items-center justify-center gap-[7px] xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span
                className={`${bar} ${
                  open
                    ? 'translate-y-[4px] rotate-45'
                    : ''
                }`}
              />

              <span
                className={`${bar} ${
                  open
                    ? '-translate-y-[4px] -rotate-45'
                    : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              className="overflow-hidden border-t border-line bg-cream xl:hidden"
              initial={{ height: 0 }}
              animate={{
                height: 'calc(100dvh - 4.5rem)',
              }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.45,
                ease,
              }}
            >
              <ul className="wrap flex h-full flex-col overflow-y-auto pb-6 pt-1">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.08 + i * 0.035,
                      duration: 0.45,
                      ease,
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        active === l.href
                          ? 'true'
                          : undefined
                      }
                      className={`flex items-center justify-between border-b border-line py-[0.72rem] font-display text-[1.35rem] leading-tight min-[380px]:text-[1.45rem] ${
                        active === l.href
                          ? 'text-bronze-dark'
                          : 'text-ink'
                      }`}
                    >
                      {l.label}

                      {active === l.href && (
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-bronze"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </motion.li>
                ))}

                {/* =================================================
                    MOBILE ACTIONS
                ================================================= */}
                <motion.li
                  className="mt-5 flex flex-col gap-2.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.45,
                  }}
                >
                  <a
                    href={whatsappLink(
                      businessInfo.messages.quote
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-bronze w-full"
                    onClick={() => setOpen(false)}
                  >
                    Discuss Your Project
                  </a>

                  <a
                    href={businessInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark w-full"
                  >
                    <FaFacebookF aria-hidden="true" />
                    Facebook
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}