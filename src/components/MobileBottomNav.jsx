import React from 'react';
import { Home, Briefcase, ShoppingBag, Send, MessageCircle } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function MobileBottomNav() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-3 left-4 right-4 z-40">
      <div className="bg-[#0C1618]/95 backdrop-blur-xl border border-[#EFF7F6]/15 rounded-2xl p-1.5 shadow-2xl flex items-center justify-around">
        
        {/* Inicio */}
        <button
          onClick={() => scrollTo('#hero')}
          className="flex flex-col items-center gap-1 p-2 text-[#EFF7F6]/60 hover:text-[#EFF7F6] active:text-[#9A031E] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-medium">Inicio</span>
        </button>

        {/* Experiencia */}
        <button
          onClick={() => scrollTo('#experiencia')}
          className="flex flex-col items-center gap-1 p-2 text-[#EFF7F6]/60 hover:text-[#EFF7F6] active:text-[#9A031E] transition-colors"
        >
          <Briefcase className="w-4 h-4" />
          <span className="text-[10px] font-medium">Trayectoria</span>
        </button>

        {/* Center WhatsApp Button */}
        <a
          href={personalData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 -mt-4 rounded-full bg-[#9A031E] hover:bg-[#b50424] text-[#EFF7F6] font-bold shadow-glow-crimson border-2 border-[#0C1618] hover:scale-105 active:scale-95 transition-transform"
          aria-label="Contactar por WhatsApp"
        >
          <Send className="w-5 h-5 text-[#EFF7F6]" />
        </a>

        {/* Proyectos */}
        <button
          onClick={() => scrollTo('#proyectos')}
          className="flex flex-col items-center gap-1 p-2 text-[#EFF7F6]/60 hover:text-[#EFF7F6] active:text-[#9A031E] transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-[10px] font-medium">Proyectos</span>
        </button>

        {/* Contacto */}
        <button
          onClick={() => scrollTo('#contacto')}
          className="flex flex-col items-center gap-1 p-2 text-[#EFF7F6]/60 hover:text-[#EFF7F6] active:text-[#9A031E] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] font-medium">Contacto</span>
        </button>

      </div>
    </div>
  );
}
