# OM WORKSHOP website

React + Vite + Tailwind CSS + Framer Motion + React Icons.

## Run
    npm install
    npm run dev        # local preview
    npm run build      # production build in /dist

## Before launch — the only things you must edit
1. `src/config/businessInfo.js` — WhatsApp number, phone number, Facebook URL (used everywhere).
2. `public/images/` — add your real photos using the same file names (see `public/images/README.md`).
3. `src/data/content.js` → `testimonials` — add real customer reviews when you have them (empty = placeholder cards).
4. Update the `og:image` / site URL in `index.html` after deploying.

## Structure
    src/components/  one file per section (Navbar, Hero, Stats, About, Services, Gallery, ...)
    src/data/        services.js, gallery.js, images.js, content.js (all copy/lists)
    src/config/      businessInfo.js (single source for contact details)
    src/utils/       links.js (WhatsApp / phone link builders)
