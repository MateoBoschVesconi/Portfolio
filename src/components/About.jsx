import React from 'react';
import { 
  User, 
  Target, 
  TrendingUp, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Code2,
  BarChart3,
  Layout
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Enfoque Comercial & Datos",
      description: "Combino la solidez técnica con análisis de datos para impulsar métricas de retención, tasa de conversión y ventas reales."
    },
    {
      icon: Users,
      title: "Liderazgo & Delegación",
      description: "Habilidades de coordinación de tareas, fomento del crecimiento mutuo del equipo y alineación con metas estratégicas."
    },
    {
      icon: ShieldCheck,
      title: "Arquitecturas Limpias & Seguras",
      description: "Mitigación de vulnerabilidades en entornos web, migraciones controladas y optimización de código para máxima velocidad."
    },
    {
      icon: Layout,
      title: "Diseño Responsive & Adaptabilidad",
      description: "Interfaces meticulosamente construidas para lucir y operar perfectamente en computadoras, tablets y dispositivos móviles."
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6] text-xs font-mono font-medium mb-3">
            <User className="w-3.5 h-3.5 text-[#9A031E]" />
            <span>PERFIL PROFESIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EFF7F6] tracking-tight mb-4">
            Compromiso Técnico con <span className="text-gradient">Visión de Negocio</span>
          </h2>
          <p className="text-[#EFF7F6]/70 text-base leading-relaxed">
            Más que escribir código: construyo puentes tecnológicos que impulsan los objetivos comerciales de cada marca.
          </p>
        </div>

        {/* Two-column layout: Bio & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Bio Card (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-[#EFF7F6]/10 shadow-glass flex flex-col justify-between">
            <div>
              {/* Monogram / Profile Graphic */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#EFF7F6] to-[#9A031E] p-[2px] shadow-glow-crimson">
                  <div className="w-full h-full bg-[#0C1618] rounded-2xl flex items-center justify-center font-bold text-[#EFF7F6] text-2xl font-mono">
                    MB
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EFF7F6]">{personalData.name}</h3>
                  <p className="text-xs text-[#9A031E] font-mono font-semibold">{personalData.role}</p>
                  <p className="text-xs text-[#EFF7F6]/60">{personalData.location}</p>
                </div>
              </div>

              <blockquote className="text-sm text-[#EFF7F6]/85 leading-relaxed italic border-l-2 border-[#9A031E] pl-4 mb-6">
                "{personalData.summary}"
              </blockquote>

              <p className="text-xs text-[#EFF7F6]/70 leading-relaxed mb-4">
                Mi experiencia en agencias me ha permitido desarrollar una alta adaptabilidad frente a diferentes industrias (PL Deco, Maison Latana, Rusc), logrando que cada sitio web transmita confianza y solidez comercial.
              </p>
            </div>

            <div className="pt-4 border-t border-[#EFF7F6]/10">
              <a
                href="#proyectos"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#9A031E] hover:bg-[#b50424] text-[#EFF7F6] shadow-glow-crimson transition-all text-center"
              >
                <span>Explorar Mis Proyectos</span>
              </a>
            </div>
          </div>

          {/* Right Pillars Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-[#EFF7F6]/10 hover:border-[#9A031E]/40 hover:bg-[#0C1618]/90 transition-all flex flex-col justify-between group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#9A031E] group-hover:bg-[#9A031E]/25 transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#EFF7F6] mb-2 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#EFF7F6]/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
