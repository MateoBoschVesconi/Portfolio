import React, { useState } from 'react';
import {
  Send,
  Copy,
  Check,
  MapPin,
  Sparkles,
  ArrowRight,
  Layers,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Code2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const techBadges = [
    { name: "React", bg: "bg-[#0C1618] text-[#EFF7F6] border-[#EFF7F6]/15 hover:border-[#9A031E] hover:bg-[#9A031E]/20" },
    { name: "Tailwind CSS", bg: "bg-[#0C1618] text-[#EFF7F6] border-[#EFF7F6]/15 hover:border-[#9A031E] hover:bg-[#9A031E]/20" },
    { name: "JavaScript ES6+", bg: "bg-[#0C1618] text-[#EFF7F6] border-[#EFF7F6]/15 hover:border-[#9A031E] hover:bg-[#9A031E]/20" },
    { name: "Tiendanube", bg: "bg-[#0C1618] text-[#EFF7F6] border-[#EFF7F6]/15 hover:border-[#9A031E] hover:bg-[#9A031E]/20" },
    { name: "WordPress & Wix", bg: "bg-[#0C1618] text-[#EFF7F6] border-[#EFF7F6]/15 hover:border-[#9A031E] hover:bg-[#9A031E]/20" },
    { name: "ZNube (Inventario)", bg: "bg-[#0C1618] text-[#EFF7F6] border-[#EFF7F6]/15 hover:border-[#9A031E] hover:bg-[#9A031E]/20" },
    { name: "Pasarelas de Pago", bg: "bg-[#0C1618] text-[#EFF7F6] border-[#EFF7F6]/15 hover:border-[#9A031E] hover:bg-[#9A031E]/20" },
    { name: "Figma UI/UX", bg: "bg-[#0C1618] text-[#EFF7F6] border-[#EFF7F6]/15 hover:border-[#9A031E] hover:bg-[#9A031E]/20" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#9A031E]/20 via-[#9A031E]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Intro & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6] text-xs font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#9A031E] animate-pulse" />
                <span>Disponible para proyectos y posiciones Front-End</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C1618]/70 border border-[#EFF7F6]/10 text-[#EFF7F6]/70 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#9A031E]" />
                <span>Resistencia, Chaco, Argentina</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#EFF7F6] mb-4 leading-[1.1]">
              Hola, soy <span className="text-gradient">Mateo Bosch</span>
              <br />
              <span className="text-[#EFF7F6]/90 text-3xl sm:text-4xl lg:text-5xl font-bold">
                Desarrollador Web Front-End
              </span>
            </h1>

            {/* Subheading / Bio */}
            <p className="text-base sm:text-lg text-[#EFF7F6]/80 leading-relaxed mb-6 max-w-2xl font-normal">
              Soy especialista en la <strong className="text-[#EFF7F6] font-semibold">creación y optimización de plataformas e-commerce y negocios digitales</strong>.
              Transformo identidades comerciales en interfaces web ultrarrápidas, seguras y de alta conversión utilizando <span className="text-[#EFF7F6] font-medium">React, Tailwind CSS, JavaScript</span> y CMS líderes como <span className="text-[#9A031E] font-semibold">Tiendanube</span> y <span className="text-[#9A031E] font-semibold">WordPress</span>.
            </p>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-2xl">
              {techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition-transform hover:scale-105 ${badge.bg}`}
                >
                  {badge.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#EFF7F6] bg-[#9A031E] hover:bg-[#b50424] shadow-glow-crimson transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base text-center"
              >
                <span>Ver Mis Trabajos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#EFF7F6] bg-[#0C1618] hover:bg-[#9A031E]/20 border border-[#9A031E]/40 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base text-center"
              >
                <Send className="w-4 h-4 text-[#9A031E]" />
                <span>WhatsApp Directo</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-[#EFF7F6]/80 bg-[#0C1618]/70 border border-[#EFF7F6]/10 hover:border-[#EFF7F6]/30 hover:bg-[#9A031E]/15 hover:text-[#EFF7F6] transition-all text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#9A031E]" />
                    <span className="text-[#EFF7F6]">¡Email Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#EFF7F6]/60" />
                    <span>Copiar Email</span>
                  </>
                )}
              </button>
            </div>


          </div>

          {/* Right Column: Interactive Code & Feature Showcase Widget */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative glow backdrops */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9A031E] via-[#b50424] to-[#730216] rounded-2xl blur-lg opacity-30 animate-pulse-subtle" />

              <div className="relative glass-card rounded-2xl p-5 sm:p-6 border border-[#EFF7F6]/10 shadow-glass">

                {/* Window header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EFF7F6]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#9A031E]" />
                    <span className="w-3 h-3 rounded-full bg-[#9A031E]/60" />
                    <span className="w-3 h-3 rounded-full bg-[#EFF7F6]/30" />
                    <span className="ml-2 font-mono text-xs text-[#EFF7F6]/60">mateo-developer.config.js</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6] text-[11px] font-mono">
                    <Sparkles className="w-3 h-3 text-[#9A031E]" />
                    <span>Front-End Dev</span>
                  </div>
                </div>

                {/* Simulated Code Body */}
                <div className="font-mono text-xs leading-relaxed text-[#EFF7F6]/80 space-y-1.5 bg-[#0C1618] p-4 rounded-xl border border-[#EFF7F6]/10 overflow-x-auto">
                  <p className="text-[#EFF7F6]/40">// Perfil y Enfoque Profesional</p>
                  <p>
                    <span className="text-[#9A031E]">const</span>{' '}
                    <span className="text-[#EFF7F6]">desarrollador</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EFF7F6]/60">nombre:</span>{' '}
                    <span className="text-[#EFF7F6]">"Mateo Bosch Vesconi"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EFF7F6]/60">rol:</span>{' '}
                    <span className="text-[#EFF7F6]">"Desarrollador Web Front-End"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EFF7F6]/60">enfoque:</span>{' '}
                    <span className="text-[#EFF7F6]/90">["E-commerce", "CRO", "Rendimiento"]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EFF7F6]/60">tecnologias:</span> [
                  </p>
                  <p className="pl-8 text-[#EFF7F6]">
                    "React", "Tailwind CSS", "JavaScript",
                  </p>
                  <p className="pl-8 text-[#EFF7F6]">
                    "Tiendanube", "WordPress", "Wix", "SQL"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-[#EFF7F6]/60">integracionesClave:</span> [
                  </p>
                  <p className="pl-8 text-[#EFF7F6]/90">
                    "ZNube Stock Sync", "Mercado Pago", "OCA/Andreani"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-[#EFF7F6]/60">formacion:</span>{' '}
                    <span className="text-[#EFF7F6]">"UTN FRRE (Programación)"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EFF7F6]/60">disponible:</span>{' '}
                    <span className="text-[#9A031E] font-bold">true</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Quick Interactive Metrics Inside Widget */}
                <div className="grid grid-cols-2 gap-3 mt-4 pt-2">
                  <div className="p-3 rounded-xl bg-[#0C1618]/60 border border-[#EFF7F6]/10 hover:border-[#9A031E]/40 transition-all">
                    <div className="flex items-center gap-2 text-[#9A031E] text-xs font-semibold mb-1">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>E-commerce</span>
                    </div>
                    <p className="text-lg font-bold text-[#EFF7F6]">4+ Tiendas</p>
                    <p className="text-[11px] text-[#EFF7F6]/60">PL Deco, Deporfan, Industry House</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0C1618]/60 border border-[#EFF7F6]/10 hover:border-[#9A031E]/40 transition-all">
                    <div className="flex items-center gap-2 text-[#9A031E] text-xs font-semibold mb-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Agencias</span>
                    </div>
                    <p className="text-lg font-bold text-[#EFF7F6]">Rusc & Bloop</p>
                    <p className="text-[11px] text-[#EFF7F6]/60">Clientes Corporativos</p>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>

        {/* Highlights Bar */}
        <div className="mt-16 pt-8 border-t border-[#EFF7F6]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {personalData.highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-4 border border-[#EFF7F6]/5 hover:border-[#9A031E]/30 transition-all text-center sm:text-left"
            >
              <span className="block text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EFF7F6] to-[#9A031E]">
                {item.value}
              </span>
              <span className="text-xs text-[#EFF7F6]/60 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
