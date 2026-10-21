import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Languages as LanguagesIcon, 
  CheckCircle2, 
  BookOpen,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { education, languages } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="educacion" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6] text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#9A031E]" />
            <span>CRECIMIENTO CONTINUO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EFF7F6] tracking-tight mb-4">
            Educación & <span className="text-gradient">Certificaciones</span>
          </h2>
          <p className="text-[#EFF7F6]/70 text-base leading-relaxed">
            Formación universitaria sólida, certificaciones oficiales acreditadas en desarrollo web y comercio electrónico, y dominio de idiomas para entornos de alto rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#EFF7F6] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#9A031E]" />
                <span>Formación Académica & Certificaciones</span>
              </h3>
            </div>

            {education.map((item, idx) => {
              const isClickable = Boolean(item.hasCertificate && item.certificatePdf);

              const CardContent = (
                <>
                  {/* Icon badge */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                    isClickable 
                      ? 'bg-[#9A031E]/15 border-[#9A031E]/30 text-[#9A031E] group-hover:bg-[#9A031E] group-hover:text-[#EFF7F6] group-hover:scale-105' 
                      : 'bg-[#9A031E]/15 border-[#9A031E]/30 text-[#9A031E]'
                  }`}>
                    {item.icon === 'GraduationCap' ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>

                  <div className="flex-1 w-full min-w-0">
                    {/* Status & Period pill row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono text-[#EFF7F6] font-semibold px-2.5 py-0.5 rounded-full bg-[#9A031E]/15 border border-[#9A031E]/30 flex items-center gap-1.5">
                        {isClickable && <Sparkles className="w-3 h-3 text-[#9A031E]" />}
                        <span>{item.status}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#EFF7F6]/50">
                          {item.period}
                        </span>
                        {isClickable && (
                          <span className="text-xs text-[#EFF7F6]/40 group-hover:text-[#9A031E] transition-colors" title="Abrir PDF en nueva pestaña">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Degree / Certificate Title */}
                    <h4 className="text-lg font-bold text-[#EFF7F6] mb-1 group-hover:text-gradient transition-colors">
                      {item.degree}
                    </h4>
                    
                    {/* Institution */}
                    <p className="text-sm font-semibold text-[#EFF7F6]/80 mb-2">
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#EFF7F6]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </>
              );

              return isClickable ? (
                <a
                  key={item.id || idx}
                  href={item.certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Abrir certificado de ${item.degree} (PDF) en una nueva pestaña`}
                  className="glass-card rounded-2xl p-6 border transition-all flex flex-col sm:flex-row gap-5 items-start block border-[#EFF7F6]/10 hover:border-[#9A031E]/60 hover:bg-[#0C1618]/95 cursor-pointer group shadow-sm hover:shadow-glow-crimson focus:outline-none focus:ring-2 focus:ring-[#9A031E]/60 text-inherit no-underline"
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={item.id || idx}
                  className="glass-card rounded-2xl p-6 border transition-all flex flex-col sm:flex-row gap-5 items-start border-[#EFF7F6]/10"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* Right Column: Languages & Communication (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-[#EFF7F6] flex items-center gap-2 mb-4">
              <LanguagesIcon className="w-5 h-5 text-[#9A031E]" />
              <span>Idiomas & Comunicación</span>
            </h3>

            <div className="glass-card rounded-2xl p-6 border border-[#EFF7F6]/10 space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0C1618]/50 border border-[#EFF7F6]/5 hover:border-[#9A031E]/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-[#EFF7F6]">
                      {lang.language}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#9A031E]/20 border border-[#9A031E]/40 text-[#EFF7F6] font-medium">
                      {lang.level}
                    </span>
                  </div>

                  <p className="text-xs text-[#EFF7F6]/70">
                    {lang.details}
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t border-[#EFF7F6]/10 flex items-start gap-3 bg-[#0C1618]/30 p-3.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#9A031E] shrink-0 mt-0.5" />
                <p className="text-xs text-[#EFF7F6]/80 leading-relaxed">
                  Capacidad comprobada para colaborar en equipos multidisciplinarios remotos, lectura fluida de documentación técnica en inglés y redacción clara de código estructurado.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
