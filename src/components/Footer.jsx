import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { businessInfo } from '../config/businessInfo';
import { whatsappLink } from '../utils/links';

const quick = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Our Work', '#work'], ['Custom Designs', '#custom'], ['Contact', '#contact']];
const services = [['Gates', '#services'], ['Doors', '#services'], ['Railings', '#services'], ['Staircases', '#services'], ['Furniture', '#services'], ['Custom Fabrication', '#custom']];

const linkCls = 'text-steel transition-colors hover:text-bronze-light';
const Col = ({ title, children }) => (
  <div>
    <h3 className="font-display text-xl font-bold text-bone">{title}</h3>
    <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#0F1113] text-bone">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-5">
          <p className="font-display text-4xl font-extrabold tracking-wider">OM <span className="text-bronze-light">WORKSHOP</span></p>
          <p className="mt-1 text-[11px] font-semibold tracking-[0.2em] text-steel">{businessInfo.tagline}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">
            Experienced iron fabrication and custom metal work by {businessInfo.ownerName}, creating gates, doors, railings, staircases, furniture, swings and customized ironwork.
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-7">
          <Col title="Quick Links">{quick.map(([l, h]) => <li key={l}><a href={h} className={linkCls}>{l}</a></li>)}</Col>
        </div>
        <div className="lg:col-span-2">
          <Col title="Services">{services.map(([l, h]) => <li key={l}><a href={h} className={linkCls}>{l}</a></li>)}</Col>
        </div>
        <div className="lg:col-span-2">
          <Col title="Social">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-2`}><FaWhatsapp aria-hidden="true" /> WhatsApp</a></li>
            <li><a href={businessInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-2`}><FaFacebookF aria-hidden="true" /> Facebook</a></li>
          </Col>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 pb-24 text-xs text-steel sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>© 2026 {businessInfo.businessName}. All Rights Reserved.</p>
          <p>Iron Works • Custom Fabrication • Custom Designs</p>
        </div>
      </div>
    </footer>
  );
}
