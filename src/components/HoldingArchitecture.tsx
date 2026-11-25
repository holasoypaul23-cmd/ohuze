import React from 'react';
import { Shield, TrendingUp, Cpu } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface HoldingArchitectureProps {
  currentLang: Language;
}

export const HoldingArchitecture: React.FC<HoldingArchitectureProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="holding" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 relative overflow-hidden">
        {/* Imagen de fondo en tono bien bajo optimizada */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] sm:opacity-[0.10]"
            style={{
              backgroundImage: 'url(/assets/aistudio/image_a4bab8c7.webp)',
              transform: 'translateZ(0)',
            }}
          />
          {/* Degradado para integración suave con los bordes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/80 via-transparent to-[#02040a]/80" />
        </div>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
            <span>{t.terminal.badge}</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
            {t.terminal.title}
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.terminal.desc}
          </p>
        </div>

        {/* 3 Pillars Grid (Clean, Responsive, Mobile-friendly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative z-10">
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/40 transition">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 mb-4 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-2">{t.terminal.legalTitle}</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.terminal.legalDesc}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 mb-4 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-2">{t.terminal.diversificationTitle}</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.terminal.diversificationDesc}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between hover:border-purple-500/40 transition">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 mb-4 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-2">{t.terminal.auditTitle}</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.terminal.auditDesc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
