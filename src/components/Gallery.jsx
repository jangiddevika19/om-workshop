import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaTimes,
} from 'react-icons/fa';
import SmartImage from './SmartImage';
import SectionHead from './SectionHead';
import { gallery, galleryCategories } from '../data/gallery';

const aspects = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[16/10]',
  square: 'aspect-square',
  standard: 'aspect-[4/3]',
};

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [current, setCurrent] = useState(null);

  const items = useMemo(
    () =>
      filter === 'All'
        ? gallery
        : gallery.filter((g) => g.category === filter),
    [filter]
  );

  const available = useMemo(
    () =>
      galleryCategories.filter(
        (c) => c === 'All' || gallery.some((g) => g.category === c)
      ),
    []
  );

  return (
    <section
      id="work"
      className="section bg-bone"
      aria-labelledby="work-title"
    >
      <div className="wrap">
        <SectionHead
          id="work-title"
          title="Our Work"
          sub="Real craftsmanship. Made for real spaces."
        />

        <div
          role="group"
          aria-label="Filter our work by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          {available.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`min-h-[44px] border px-4 font-display text-lg font-semibold transition-colors ${
                filter === c
                  ? 'border-ink bg-ink text-bone'
                  : 'border-ink/20 text-ink hover:border-bronze hover:text-bronze-dark'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.ul
          key={filter}
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.06 }}
          className="columns-1 gap-4 min-[480px]:columns-2 lg:columns-3"
        >
          {items.map((g, i) => (
            <motion.li
              key={g.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`View larger: ${g.title}`}
                className="group relative block w-full overflow-hidden text-left shadow-card"
              >
                <SmartImage
                  src={g.src}
                  alt={g.alt}
                  zoom
                  eager
                  className={`w-full ${
                    aspects[g.aspect] || aspects.standard
                  }`}
                />

                <span
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <span className="absolute left-3 top-3 bg-ink/85 px-3 py-1 text-xs font-medium text-bone backdrop-blur-sm">
                  {g.category}
                </span>

                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-bone">
                  <span className="font-display text-2xl font-bold leading-none">
                    {g.title}
                  </span>

                  <span className="flex h-10 w-10 translate-y-2 items-center justify-center bg-bronze opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <FaSearchPlus aria-hidden="true" />
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <AnimatePresence>
        {current !== null && (
          <Lightbox
            items={items}
            index={current}
            setIndex={setCurrent}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Lightbox({ items, index, setIndex }) {
  const closeRef = useRef(null);
  const item = items[index];

  const close = useCallback(() => {
    setIndex(null);
  }, [setIndex]);

  const step = useCallback(
    (d) =>
      setIndex(
        (i) => (i + d + items.length) % items.length
      ),
    [items.length, setIndex]
  );

  const touch = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;

    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevFocus?.focus?.();
    };
  }, [close, step]);

  const nav =
    'absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-ink/70 text-bone transition-colors hover:bg-bronze';

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — ${item.category}`}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink/95 p-3 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={close}
      onTouchStart={(e) => {
        touch.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const dx =
          e.changedTouches[0].clientX - touch.current;

        if (Math.abs(dx) > 60) {
          step(dx < 0 ? 1 : -1);
        }
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={close}
        aria-label="Close image"
        className="absolute right-3 top-3 z-20 flex h-12 w-12 items-center justify-center bg-bronze text-xl text-white hover:bg-bronze-light sm:right-6 sm:top-6"
      >
        <FaTimes aria-hidden="true" />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            className={`${nav} left-2 sm:left-6`}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            className={`${nav} right-2 sm:right-6`}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </>
      )}

      <motion.figure
        key={item.id}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <SmartImage
          src={item.src}
          alt={item.alt}
          fit="contain"
          eager
          className="!bg-none !bg-transparent h-[68svh] w-full sm:h-[74vh]"
        />

        <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-bone">
          <span className="font-display text-2xl font-bold">
            {item.title}

            <span className="ml-2 font-body text-sm font-normal text-steel">
              {item.category}
            </span>
          </span>

          <span className="text-sm text-steel">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}