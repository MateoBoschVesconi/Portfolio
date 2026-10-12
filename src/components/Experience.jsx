import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Building2, 
  ExternalLink,
  Sparkles,
  TrendingUp,
  Shield,
  Layers
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const selectedExp = experiences.find(exp => exp.id === activeTab) || experiences[0];

  return (
    <section id="experiencia" className="py-20 relative">
      {/* Decorative gradient sphere */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#9A031E]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6] text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#9A031E]" />
            <span>TRAYECTORIA PROFESIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EFF7F6] tracking-tight mb-4">
            Experiencia con <span className="text-gradient">Empresas & Agencias</span>
          </h2>
          <p className="text-[#EFF7F6]/70 text-base leading-relaxed">
            Colaboraciones estratégicas con consultoras y agencias digitales, liderando desarrollos e-commerce, maquetación personalizada, integraciones de stock y despliegues seguros.
          </p>
        </div>

        {/* Company Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(exp.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                activeTab === exp.id
                  ? 'bg-[#9A031E] border-[#9A031E] text-[#EFF7F6] shadow-glow-crimson'
                  : 'bg-[#0C1618]/60 border-[#EFF7F6]/10 text-[#EFF7F6]/60 hover:text-[#EFF7F6] hover:bg-[#9A031E]/15'
              }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-[#EFF7F6] animate-pulse' : 'bg-[#EFF7F6]/40'}`} />
              <span className="font-semibold">{exp.company}</span>
              <span className="text-xs opacity-75 hidden sm:inline">({exp.period})</span>
            </button>
          ))}
        </div>

        {/* Detailed Experience Card */}
        <div className="glass-card rounded-2xl border border-[#EFF7F6]/10 p-6 sm:p-8 lg:p-10 shadow-glass transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EFF7F6]/10 pb-6 lg:pb-0 lg:pr-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${selectedExp.badgeColor} text-[#EFF7F6]`}>
                    {selectedExp.type}
                  </span>
                  {selectedExp.current && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#9A031E]/20 text-[#EFF7F6] border border-[#9A031E]/30">
                      Rol Actual
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#EFF7F6] mb-2">
                  {selectedExp.role}
                </h3>
                
                <p className="text-lg font-semibold text-[#9A031E] mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#9A031E]" />
                  <span>{selectedExp.company}</span>
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-[#EFF7F6]/60 font-mono mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#9A031E]" />
                    <span>{selectedExp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#9A031E]" />
                    <span>Modalidad: {selectedExp.location}</span>
                  </div>
                </div>

                <p className="text-[#EFF7F6]/80 text-sm leading-relaxed mb-6 font-normal">
                  {selectedExp.description}
                </p>
              </div>

              {/* Technologies chip tags */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#EFF7F6]/60 mb-3">
                  Tecnologías & Herramientas Aplicadas:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedExp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0C1618]/70 border border-[#EFF7F6]/10 text-[#EFF7F6]/80 hover:border-[#9A031E]/40 hover:text-[#EFF7F6] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Achievements Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#9A031E] mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Impacto, Responsabilidades y Logros Clave:</span>
              </h4>

              <div className="space-y-4">
                {selectedExp.achievements.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#0C1618]/50 border border-[#EFF7F6]/5 hover:border-[#9A031E]/30 transition-all flex items-start gap-3.5 group"
                  >
                    <div className="p-1 rounded-md bg-[#9A031E]/15 text-[#9A031E] group-hover:bg-[#9A031E]/25 transition-colors mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-[#EFF7F6]/80 leading-relaxed group-hover:text-[#EFF7F6] transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Context Callout Box for specific experiences */}
              {selectedExp.id === 'bloop' && (
                <div className="mt-6 p-4 rounded-xl bg-[#0C1618] border border-[#9A031E]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#9A031E]/20 text-[#9A031E]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#EFF7F6]">Proyectos E-commerce destacados:</p>
                      <p className="text-xs text-[#EFF7F6]/70">PL Deco (Muebles y decoración de diseño)</p>
                    </div>
                  </div>
                  <a
                    href="#proyectos"
                    className="text-xs font-semibold text-[#EFF7F6] hover:text-[#9A031E] flex items-center gap-1 shrink-0 ml-2"
                  >
                    <span>Ver proyectos</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {selectedExp.id === 'latana' && (
                <div className="mt-6 p-4 rounded-xl bg-[#0C1618] border border-[#9A031E]/30 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#9A031E]/20 text-[#9A031E] shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#EFF7F6]">Integración de Stock & Transporte</p>
                    <p className="text-xs text-[#EFF7F6]/70">
                      Sincronización en tiempo real ZNube + checkout con OCA y Andreani sin fricción.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
