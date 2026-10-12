import React, { useState } from 'react';
import { 
  X, 
  Smartphone, 
  Wifi, 
  Battery, 
  Sparkles, 
  RotateCcw, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Check,
  ShoppingBag,
  Send
} from 'lucide-react';
import { projects, personalData } from '../data/portfolioData';

export default function MobileDeviceSimulator({ isOpen, onClose, initialProject }) {
  if (!isOpen) return null;

  const [activeProject, setActiveProject] = useState(
    initialProject || projects[0]
  );
  const [deviceModel, setDeviceModel] = useState('iphone'); // 'iphone' | 'android'

  const demoItems = [
    { id: 'pldeco', name: 'PL Deco (E-commerce)', img: '/projects/pldeco.jpg', company: 'Bloop Agency' },
    { id: 'latana', name: 'Maison Latana', img: '/projects/latana.jpg', company: 'Maison Latana' },
    { id: 'rusc', name: 'Sitios Institucionales', img: '/projects/pldeco.jpg', company: 'Rusc' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[95vh] bg-[#0C1618] border border-[#EFF7F6]/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFF7F6]/10 bg-[#0C1618]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#9A031E]/15 border border-[#9A031E]/30 text-[#EFF7F6]">
              <Smartphone className="w-5 h-5 text-[#9A031E]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#EFF7F6] flex items-center gap-2">
                Simulador de Visualización Móvil
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#9A031E]/20 text-[#EFF7F6] border border-[#9A031E]/30">
                  Mobile-First Ready
                </span>
              </h3>
              <p className="text-xs text-[#EFF7F6]/60">
                Comprueba cómo se adaptan las tiendas y aplicaciones en smartphones reales
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#EFF7F6]/60 hover:text-[#EFF7F6] hover:bg-[#9A031E]/20 transition-colors"
            aria-label="Cerrar simulador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Left controls, Right Phone Mockup */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls & Architecture explanation */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Native vs Responsive Note for user */}
            <div className="p-4 rounded-2xl bg-[#0C1618] border border-[#9A031E]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#EFF7F6] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#9A031E]" />
                <span>¿Cómo funciona en el celular? (Web vs React Native)</span>
              </div>
              <p className="text-xs text-[#EFF7F6]/80 leading-relaxed">
                Este sitio y todas mis tiendas están desarrollados con <strong className="text-white">React + Tailwind CSS</strong> con arquitectura <span className="text-[#EFF7F6] font-semibold">100% Mobile-First</span>. Se adaptan automáticamente al tamaño de pantalla de cualquier smartphone o tablet.
              </p>
              <p className="text-xs text-[#EFF7F6]/60 leading-relaxed">
                📌 <strong className="text-white">¿Cuándo se usa React Native?</strong> Si el cliente requiere una aplicación nativa descargable desde <strong className="text-[#EFF7F6]">Google Play Store</strong> o <strong className="text-[#EFF7F6]">Apple App Store</strong> (con acceso a cámara, notificaciones push locales o almacenamiento offline), la base de componentes y lógica en React permite compilar aplicaciones nativas con <strong className="text-[#9A031E]">React Native</strong>.
              </p>
            </div>

            {/* Test on Real Phone via Wi-Fi & QR code */}
            <div className="p-4 rounded-2xl bg-[#0C1618]/70 border border-[#EFF7F6]/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#EFF7F6] font-bold flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-[#9A031E]" />
                  <span>Probar en tu celular real (Misma red Wi-Fi):</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#9A031E]/20 text-[#EFF7F6] font-mono">
                  En vivo
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-24 h-24 p-1.5 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://192.168.100.12:5173/&bgcolor=ffffff&color=0C1618"
                    alt="Código QR para abrir en celular"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-xs text-[#EFF7F6]/80 space-y-1.5">
                  <p className="font-semibold text-[#EFF7F6]">Escanea el QR con la cámara de tu teléfono:</p>
                  <p className="text-[#EFF7F6]/70 font-mono text-[11px] bg-black/40 px-2 py-1 rounded border border-[#EFF7F6]/10 select-all">
                    http://192.168.100.12:5173/
                  </p>
                  <p className="text-[11px] text-[#EFF7F6]/60">
                    Abre el navegador en tu celular conectado al mismo Wi-Fi y navega el portafolio en tiempo real.
                  </p>
                </div>
              </div>
            </div>

            {/* Switch Project to preview in phone */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#EFF7F6]/60 block mb-2.5">
                Selecciona la tienda para ver en el simulador:
              </label>
              <div className="space-y-2">
                {demoItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      const found = projects.find(p => p.id.includes(item.id)) || projects[0];
                      setActiveProject({ ...found, image: item.img, title: item.name });
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left text-xs transition-all ${
                      activeProject?.image === item.img
                        ? 'bg-[#9A031E]/20 border-[#9A031E]/60 text-[#EFF7F6] font-semibold shadow-sm'
                        : 'bg-[#0C1618]/50 border-[#EFF7F6]/5 text-[#EFF7F6]/60 hover:text-[#EFF7F6] hover:bg-[#9A031E]/15'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <ShoppingBag className="w-4 h-4 text-[#9A031E]" />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#EFF7F6]/40">{item.company}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#EFF7F6]/60">Modelo de marco:</span>
              <button
                onClick={() => setDeviceModel('iphone')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceModel === 'iphone'
                    ? 'bg-[#EFF7F6] text-[#0C1618] shadow'
                    : 'bg-[#0C1618] text-[#EFF7F6]/60 hover:text-[#EFF7F6] border border-[#EFF7F6]/10'
                }`}
              >
                iPhone 15 Pro
              </button>
              <button
                onClick={() => setDeviceModel('android')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceModel === 'android'
                    ? 'bg-[#EFF7F6] text-[#0C1618] shadow'
                    : 'bg-[#0C1618] text-[#EFF7F6]/60 hover:text-[#EFF7F6] border border-[#EFF7F6]/10'
                }`}
              >
                Galaxy Ultra
              </button>
            </div>

            {/* Direct Contact Button from Modal */}
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#9A031E] hover:bg-[#b50424] text-[#EFF7F6] font-semibold text-xs shadow-glow-crimson transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hablar con Mateo sobre tu proyecto móvil/web</span>
            </a>

          </div>

          {/* Right Column: Realistic Interactive Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone Chassis */}
            <div className={`relative w-[280px] sm:w-[310px] h-[580px] bg-[#0C1618] border-[8px] ${
              deviceModel === 'iphone' ? 'border-[#0C1618] rounded-[50px]' : 'border-[#0C1618] rounded-[36px]'
            } shadow-2xl p-2 flex flex-col justify-between overflow-hidden ring-1 ring-[#EFF7F6]/20`}>
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
                {deviceModel === 'iphone' ? (
                  <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end pr-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
                  </div>
                ) : (
                  <div className="w-3.5 h-3.5 bg-black rounded-full border border-slate-700" />
                )}
              </div>

              {/* Status Bar */}
              <div className="h-6 flex items-center justify-between px-5 text-[10px] font-mono text-[#EFF7F6]/60 z-20 pt-1">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-[#EFF7F6]/80" />
                  <Battery className="w-3.5 h-3.5 text-[#EFF7F6]/80" />
                </div>
              </div>

              {/* Simulated Screen Content with Scroll */}
              <div className="flex-1 rounded-[32px] overflow-y-auto bg-[#0C1618] relative mt-1 custom-phone-screen">
                
                {/* Mini mobile app header */}
                <div className="sticky top-0 z-10 bg-[#0C1618]/90 backdrop-blur-md px-3 py-2 border-b border-[#EFF7F6]/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#EFF7F6] font-mono text-[11px]">
                    {activeProject?.title ? activeProject.title.slice(0, 18) + '...' : 'E-Commerce'}
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#9A031E]/20 text-[#EFF7F6] font-mono">
                    Online
                  </span>
                </div>

                {/* Simulated Web View Image */}
                <div className="p-2 space-y-3">
                  <div className="rounded-xl overflow-hidden border border-[#EFF7F6]/10 shadow-sm">
                    <img 
                      src={activeProject?.image || '/projects/pldeco.jpg'} 
                      alt="Project preview on phone" 
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="p-2 space-y-1.5 bg-[#0C1618] rounded-xl border border-[#EFF7F6]/10">
                    <p className="text-[11px] font-bold text-[#EFF7F6]">
                      {activeProject?.title || 'Tienda E-commerce'}
                    </p>
                    <p className="text-[10px] text-[#EFF7F6]/70 leading-tight">
                      {activeProject?.summary || 'Optimizado con carga rápida, checkout ágil y pasarela de pago.'}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {activeProject?.tags?.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono px-1.5 py-0.5 bg-[#9A031E]/20 text-[#EFF7F6] rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Mobile Checkout Action */}
                  <div className="p-2.5 rounded-xl bg-[#9A031E] text-[#EFF7F6] text-center text-[11px] font-bold shadow-sm">
                    Simulación de Compra Móvil Exitosa ✓
                  </div>
                </div>

              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="h-4 flex items-center justify-center">
                <div className="w-24 h-1 bg-slate-500/60 rounded-full" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
