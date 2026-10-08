import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import CustomDesign from './components/CustomDesign';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Craftsmanship from './components/Craftsmanship';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-bronze focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Gallery />
        <CustomDesign />
        <Process />
        <WhyChooseUs />
        <Craftsmanship />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}