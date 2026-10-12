import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Send, Sparkles, Download } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0C1618]/90 backdrop-blur-md border-b border-[#EFF7F6]/10 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => handleLinkClick(e, '#hero')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EFF7F6] to-[#9A031E] p-[1px] shadow-glow-crimson transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0C1618] rounded-xl flex items-center justify-center font-bold text-[#EFF7F6] font-mono text-sm group-hover:bg-[#0C1618]/80 transition-colors">
                MB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-[#EFF7F6] flex items-center gap-1.5 text-base sm:text-lg">
                Mateo Bosch <span className="text-[#9A031E] font-mono text-xs hidden sm:inline">&lt;dev/&gt;</span>
              </span>
              <span className="text-[11px] text-[#EFF7F6]/60 font-medium">Front-End & E-Commerce</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#0C1618]/60 border border-[#EFF7F6]/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-[#EFF7F6]/80 hover:text-[#EFF7F6] hover:bg-[#9A031E]/20 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-[#EFF7F6] bg-[#9A031E] hover:bg-[#b50424] rounded-xl shadow-glow-crimson transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hablemos</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#EFF7F6]/80 hover:text-[#EFF7F6] hover:bg-[#9A031E]/20 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#9A031E]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0C1618]/95 border-b border-[#EFF7F6]/10 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-[#EFF7F6]/80 hover:text-[#EFF7F6] hover:bg-[#9A031E]/20 font-medium text-sm transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#EFF7F6]/40 font-mono">→</span>
              </a>
            ))}
            
            <div className="pt-3 border-t border-[#EFF7F6]/10 flex flex-col gap-2.5">

              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-[#EFF7F6] bg-[#9A031E] hover:bg-[#b50424] shadow-glow-crimson"
              >
                <Send className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
