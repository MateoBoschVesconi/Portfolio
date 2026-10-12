import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  ExternalLink,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'E-commerce (Tiendanube)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    // Prepare WhatsApp redirect with encoded message
    const waText = encodeURIComponent(
      `Hola Mateo! Mi nombre es ${formData.name || 'un visitante'}. Me interesa conversar sobre: ${formData.projectType}. Mensaje: ${formData.message || 'Me gustaría recibir más información.'}`
    );
    const waUrl = `https://wa.me/5493624549120?text=${waText}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="contacto" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#9A031E]/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6] text-xs font-mono font-medium mb-3">
            <Send className="w-3.5 h-3.5 text-[#9A031E]" />
            <span>TRABAJEMOS JUNTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EFF7F6] tracking-tight mb-4">
            ¿Listo para construir tu <span className="text-gradient">Próximo Proyecto?</span>
          </h2>
          <p className="text-[#EFF7F6]/70 text-base leading-relaxed">
            Ya sea una tienda en Tiendanube a medida, una web institucional de alto impacto, o una posición Front-End para tu equipo: hablemos hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Direct Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 border border-[#EFF7F6]/10 hover:border-[#9A031E]/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#9A031E] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-[#EFF7F6]/60">CORREO ELECTRÓNICO</p>
                  <p className="text-sm font-bold text-[#EFF7F6] truncate">{personalData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#0C1618] hover:bg-[#9A031E]/20 text-[#EFF7F6]/80 hover:text-[#EFF7F6] border border-[#EFF7F6]/10 transition-colors"
                  title="Copiar email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#9A031E]" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-xl bg-[#9A031E] hover:bg-[#b50424] text-[#EFF7F6] transition-colors"
                  title="Enviar correo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card rounded-2xl p-5 border border-[#EFF7F6]/10 hover:border-[#9A031E]/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#9A031E] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-[#EFF7F6]/60">WHATSAPP / TELÉFONO</p>
                  <p className="text-sm font-bold text-[#EFF7F6] truncate">{personalData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-xl bg-[#0C1618] hover:bg-[#9A031E]/20 text-[#EFF7F6]/80 hover:text-[#EFF7F6] border border-[#EFF7F6]/10 transition-colors"
                  title="Copiar número"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#9A031E]" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={personalData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#9A031E] hover:bg-[#b50424] text-[#EFF7F6] transition-colors"
                  title="Abrir chat de WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="glass-card rounded-2xl p-5 border border-[#EFF7F6]/10 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#9A031E] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-[#EFF7F6]/60">UBICACIÓN & DISPONIBILIDAD</p>
                <p className="text-sm font-bold text-[#EFF7F6]">{personalData.location}</p>
                <p className="text-xs text-[#EFF7F6]/60 mt-0.5">Trabajo Remoto para Argentina y el exterior</p>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="p-4 rounded-2xl bg-[#0C1618]/50 border border-[#EFF7F6]/10 flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#9A031E] shrink-0" />
              <p className="text-xs text-[#EFF7F6]/80">
                Respuesta ágil habitual en menos de 24 horas hábiles.
              </p>
            </div>

          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#EFF7F6]/10 shadow-glass">
              
              <h3 className="text-xl font-bold text-[#EFF7F6] mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#9A031E]" />
                <span>Envíame un Mensaje Directo</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#EFF7F6]/70 mb-6">
                Completa este formulario y serás redirigido directamente a WhatsApp con el mensaje estructurado listo para enviar.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#EFF7F6]/60 mb-1.5">
                      Tu Nombre / Empresa:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Martín López"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0C1618]/60 border border-[#EFF7F6]/10 text-[#EFF7F6] placeholder-[#EFF7F6]/30 focus:outline-none focus:border-[#9A031E] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#EFF7F6]/60 mb-1.5">
                      Tipo de Proyecto:
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0C1618] border border-[#EFF7F6]/10 text-[#EFF7F6] focus:outline-none focus:border-[#9A031E] text-sm transition-all"
                    >
                      <option value="E-commerce (Tiendanube)">Tienda E-commerce (Tiendanube)</option>
                      <option value="Integración de Inventario ZNube">Integración de Stock / ZNube</option>
                      <option value="Sitio Web Institucional (WordPress/Wix)">Sitio Institucional (WordPress / Wix)</option>
                      <option value="Desarrollo Front-End a Medida">Desarrollo Front-End a Medida</option>
                      <option value="Oportunidad Laboral / Equipo">Oportunidad Laboral / Contratación</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#EFF7F6]/60 mb-1.5">
                    Cuéntame los detalles del proyecto:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe qué necesitas, funcionalidades clave o si ya tienes una tienda en marcha..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0C1618]/60 border border-[#EFF7F6]/10 text-[#EFF7F6] placeholder-[#EFF7F6]/30 focus:outline-none focus:border-[#9A031E] text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-[#EFF7F6] bg-[#9A031E] hover:bg-[#b50424] shadow-glow-crimson transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-[#EFF7F6]" />
                      <span>¡Abriendo WhatsApp con tu consulta...!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Consulta vía WhatsApp</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
