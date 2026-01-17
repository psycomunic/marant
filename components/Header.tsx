
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Expertise', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Impacto', href: '#sustentabilidade' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <nav className={`container mx-auto transition-all duration-500 rounded-2xl ${isScrolled ? 'glass-dark py-3 px-8 shadow-2xl' : 'bg-transparent py-4 px-4'
        }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src="/logo-marant.png"
              alt="Marant Construtora"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest uppercase transition-colors text-gray-300 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-black hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95"
            >
              FALE CONOSCO
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 glass rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden glass-dark absolute top-full left-0 w-full mt-2 rounded-2xl py-8 px-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 font-bold text-lg tracking-wide border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center py-4 rounded-xl font-black mt-4 shadow-xl"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
