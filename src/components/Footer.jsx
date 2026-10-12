import React from 'react';
import { 
  ArrowUp, 
  Send, 
  Mail, 
  Code2
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#EFF7F6]/10 bg-[#0C1618] pt-16 pb-24 md:pb-12 text-[#EFF7F6]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#EFF7F6]/10">
          
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#EFF7F6] to-[#9A031E] p-[1px] shadow-glow-crimson">
                <div className="w-full h-full bg-[#0C1618] rounded-xl flex items-center justify-center font-bold text-[#EFF7F6] font-mono text-sm">
                  MB
                </div>
              </div>
              <span className="font-bold text-[#EFF7F6] text-base">Mateo Bosch Vesconi</span>
            </div>

            <p className="text-xs text-[#EFF7F6]/70 leading-relaxed max-w-sm">
              Desarrollador Web Front-End especializado en plataformas e-commerce (Tiendanube), aplicaciones con React, Tailwind CSS y sitios institucionales.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0C1618] hover:bg-[#9A031E] text-[#EFF7F6] border border-[#EFF7F6]/10 transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp Directo"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-lg bg-[#0C1618] hover:bg-[#9A031E] text-[#EFF7F6] border border-[#EFF7F6]/10 transition-colors"
                aria-label="Email"
                title="Enviar Correo"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0C1618] hover:bg-[#9A031E] text-[#EFF7F6] border border-[#EFF7F6]/10 transition-colors"
                aria-label="LinkedIn"
                title="Perfil de LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#EFF7F6]">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sobre-mi" className="hover:text-[#9A031E] transition-colors">Sobre Mí</a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#9A031E] transition-colors">Experiencia Profesional</a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-[#9A031E] transition-colors">Proyectos & E-commerce</a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-[#9A031E] transition-colors">Habilidades Técnicas</a>
              </li>
              <li>
                <a href="#educacion" className="hover:text-[#9A031E] transition-colors">Educación & Idiomas</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#9A031E] transition-colors">Contacto Directo</a>
              </li>
            </ul>
          </div>

          {/* Technical Stack Note (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#EFF7F6]">Tecnologías del Portafolio</h4>
            <p className="text-xs text-[#EFF7F6]/70 leading-relaxed">
              Desarrollado con <strong className="text-[#EFF7F6]">React</strong> y estilizado con <strong className="text-[#EFF7F6]">Tailwind CSS v3</strong>. Diseñado con arquitectura responsive, dark mode nativo, efectos glassmorphism y optimización móvil.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0C1618] text-[#EFF7F6] border border-[#EFF7F6]/10">React 19</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0C1618] text-[#EFF7F6] border border-[#EFF7F6]/10">Tailwind CSS v3</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0C1618] text-[#EFF7F6] border border-[#EFF7F6]/10">Vite</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0C1618] text-[#EFF7F6] border border-[#EFF7F6]/10">Mobile-First</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright and scroll top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFF7F6]/60">
          <p>
            © {new Date().getFullYear()} Mateo Bosch Vesconi. Todos los derechos reservados. Resistencia, Chaco.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0C1618] hover:bg-[#9A031E] text-[#EFF7F6] border border-[#EFF7F6]/10 transition-all"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
