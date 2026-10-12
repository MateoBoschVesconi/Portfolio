import React, { useState } from 'react';
import { 
  Code2, 
  ShoppingBag, 
  Layers, 
  Database, 
  Users, 
  Sparkles, 
  Check, 
  Palette,
  Server,
  Workflow
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Front-End Dev', icon: Code2, count: skillsData.frontend.length },
    { id: 'ecommerce', label: 'E-commerce & CMS', icon: ShoppingBag, count: skillsData.ecommerce.length },
    { id: 'designAndData', label: 'Diseño & Datos', icon: Database, count: skillsData.designAndData.length },
    { id: 'softSkills', label: 'Habilidades Blandas', icon: Users, count: skillsData.softSkills.length },
  ];

  return (
    <section id="habilidades" className="py-20 relative">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#9A031E]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6] text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5 text-[#9A031E]" />
            <span>STACK TECNOLÓGICO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EFF7F6] tracking-tight mb-4">
            Habilidades Técnicas & <span className="text-gradient">Herramientas</span>
          </h2>
          <p className="text-[#EFF7F6]/70 text-base leading-relaxed">
            Dominio de tecnologías web modernas, plataformas comerciales líderes e integración de sistemas para potenciar marcas y negocios.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#9A031E] text-[#EFF7F6] border-[#9A031E] shadow-glow-crimson'
                    : 'bg-[#0C1618]/60 border-[#EFF7F6]/10 text-[#EFF7F6]/60 hover:text-[#EFF7F6] hover:bg-[#9A031E]/15'
                }`}
              >
                <Icon className="w-4 h-4 text-[#EFF7F6]" />
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/30 text-[#EFF7F6]' : 'bg-[#EFF7F6]/10 text-[#EFF7F6]/60'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills Display */}
        <div className="glass-card rounded-2xl border border-[#EFF7F6]/10 p-6 sm:p-8 lg:p-10 shadow-glass">
          
          {/* Front-End, E-commerce, Design and Data categories */}
          {activeCategory !== 'softSkills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData[activeCategory]?.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#0C1618]/50 border border-[#EFF7F6]/5 hover:border-[#9A031E]/30 hover:bg-[#0C1618]/80 transition-all group flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9A031E] group-hover:scale-125 transition-transform" />
                    <span className="font-bold text-[#EFF7F6] text-sm sm:text-base group-hover:text-[#EFF7F6] transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  <p className="text-xs text-[#EFF7F6]/70 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Soft Skills Section */}
          {activeCategory === 'softSkills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.softSkills.map((soft, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0C1618]/50 border border-[#EFF7F6]/10 hover:border-[#9A031E]/40 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#9A031E] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#EFF7F6] mb-1.5">
                      {soft.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#EFF7F6]/70 leading-relaxed">
                      {soft.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
