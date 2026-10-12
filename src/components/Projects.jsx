import React, { useState } from 'react';
import { 
  ShoppingBag, 
  ExternalLink, 
  Globe,
  Layers, 
  CheckCircle, 
  Sparkles, 
  Building2, 
  Zap
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'Todos los Trabajos' },
    { id: 'ecommerce', label: 'E-commerce (Tiendanube)' },
    { id: 'integrations', label: 'Integraciones & ZNube' },
    { id: 'corporate', label: 'Institucionales & CMS' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="py-20 relative">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#9A031E]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6] text-xs font-mono font-medium mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-[#9A031E]" />
            <span>PORTAFOLIO DE PROYECTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EFF7F6] tracking-tight mb-4">
            Trabajos & <span className="text-gradient">Plataformas E-commerce</span>
          </h2>
          <p className="text-[#EFF7F6]/70 text-base leading-relaxed">
            Casos reales desarrollados para agencias y marcas comerciales: personalización avanzada en Tiendanube, tiendas responsive, integraciones de stock y sitios institucionales.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                filter === opt.id
                  ? 'bg-[#9A031E] text-[#EFF7F6] font-bold border-[#9A031E] shadow-glow-crimson'
                  : 'bg-[#0C1618]/60 border-[#EFF7F6]/10 text-[#EFF7F6]/60 hover:text-[#EFF7F6] hover:bg-[#9A031E]/15 hover:border-[#9A031E]/30'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-[#EFF7F6]/10 overflow-hidden shadow-glass group flex flex-col justify-between hover:border-[#9A031E]/50 transition-all duration-300"
            >
              {/* Image Preview & Direct Link */}
              <a
                href={project.url || '#'}
                target={project.url && project.url !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="relative aspect-[16/10] overflow-hidden bg-[#0C1618] border-b border-[#EFF7F6]/10 block group/img"
                title={`Abrir ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1618] via-transparent to-black/30" />

                {/* Company / Client Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0C1618]/90 backdrop-blur-md border border-[#EFF7F6]/15 text-[#EFF7F6] flex items-center gap-1.5 shadow-md">
                    <Building2 className="w-3 h-3 text-[#9A031E]" />
                    <span>{project.company}</span>
                  </span>
                </div>

                {/* Quick Link Badge on Top-Right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C1618]/90 backdrop-blur-md border border-[#9A031E]/40 text-[#EFF7F6] text-xs font-medium shadow-md group-hover:bg-[#9A031E] transition-colors">
                    <ExternalLink className="w-3 h-3 text-[#9A031E] group-hover:text-[#EFF7F6]" />
                    <span>Ver Sitio</span>
                  </span>
                </div>
              </a>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#EFF7F6] mb-2 group-hover:text-[#EFF7F6] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#EFF7F6]/70 text-sm leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#EFF7F6]/80">
                        <CheckCircle className="w-3.5 h-3.5 text-[#9A031E] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer tags and action button */}
                <div className="pt-4 border-t border-[#EFF7F6]/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0C1618]/60 border border-[#EFF7F6]/10 text-[#EFF7F6]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button that redirects to the project / website */}
                  <a
                    href={project.url || '#'}
                    target={project.url && project.url !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#9A031E] hover:bg-[#b50424] text-[#EFF7F6] text-xs sm:text-sm font-bold transition-all duration-200 shadow-glow-crimson group/btn shrink-0"
                  >
                    <span>Visitar Sitio Web</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 glass-card rounded-2xl p-6 sm:p-8 border border-[#9A031E]/30 bg-gradient-to-r from-[#0C1618] via-[#9A031E]/10 to-[#0C1618] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glow-crimson">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#9A031E]/20 border border-[#9A031E]/40 flex items-center justify-center shrink-0 text-[#EFF7F6]">
              <Zap className="w-6 h-6 text-[#9A031E]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#EFF7F6]">¿Tienes un proyecto de E-commerce o Web en mente?</h4>
              <p className="text-xs sm:text-sm text-[#EFF7F6]/70">
                Optimizo tiempos de carga, configuro pasarelas de pago y creo interfaces adaptadas a móvil y desktop.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#9A031E] hover:bg-[#b50424] text-[#EFF7F6] font-bold shadow-glow-crimson transition-all text-xs sm:text-sm shrink-0 text-center"
          >
            Iniciar Conversación
          </a>
        </div>

      </div>
    </section>
  );
}
