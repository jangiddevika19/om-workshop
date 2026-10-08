import Reveal from './Reveal';

export default function SectionHead({ title, sub, dark = false, id }) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="weld mb-6" aria-hidden="true" />
      <h2 id={id} className={`h-section ${dark ? 'text-bone' : 'text-ink'}`}>{title}</h2>
      {sub && <p className={`lede mt-5 ${dark ? 'text-steel' : 'text-ink/65'}`}>{sub}</p>}
    </Reveal>
  );
}
