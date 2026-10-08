/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Warm editorial palette (new) ----
        cream: { DEFAULT: '#F7F3EC', deep: '#EFE9DF', card: '#FFFDF9' },
        line: '#DDD6CA',
        stone: '#6E6961',

        // ---- Legacy token names, retuned so untouched sections stay coherent ----
        ink: '#20201D',       // warm charcoal (primary text; dark sections)
        graphite: '#2C2A26',  // warm dark surface used by legacy dark sections
        steel: '#A39D90',     // muted warm grey (secondary text on dark)
        bone: '#F7F3EC',      // = cream
        paper: '#EFE9DF',     // = cream-deep
        bronze: { DEFAULT: '#85613F', light: '#B08D66', dark: '#664830' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        body: ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(32,32,29,.05), 0 14px 32px -16px rgba(32,32,29,.18)',
        lift: '0 2px 4px rgba(32,32,29,.06), 0 24px 48px -20px rgba(32,32,29,.28)',
        soft: '0 1px 0 rgba(32,32,29,.04), 0 10px 30px -18px rgba(32,32,29,.22)',
      },
    },
  },
  plugins: [],
};
