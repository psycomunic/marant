
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Factory, 
  HardHat, 
  Leaf, 
  Phone, 
  Mail, 
  Instagram, 
  ArrowRight, 
  CheckCircle2, 
  MapPin,
  Menu,
  X,
  MessageCircle,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Differentiators from './components/Differentiators';
import Sustainability from './components/Sustainability';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5547996409909', '_blank');
  };

  return (
    <div className="relative min-h-screen">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero onCtaClick={handleWhatsApp} />
        <About />
        <Services />
        <Differentiators />
        <Gallery />
        <Sustainability />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button for High Conversion */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-semibold">
          Fale conosco no WhatsApp
        </span>
        <MessageCircle size={28} fill="currentColor" />
      </button>
    </div>
  );
};

export default App;
