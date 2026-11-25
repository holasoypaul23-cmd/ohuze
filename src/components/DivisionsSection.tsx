import React from 'react';
import {
  Scale,
  GraduationCap,
  Building2,
  ShieldCheck,
  Building,
  Receipt,
  Briefcase,
  Sparkles,
  ArrowRight,
  Heart,
  Activity,
  Car,
  Lock,
  Cpu,
  Check
} from 'lucide-react';
import { DivisionId } from '../types';
import { Language, translations } from '../i18n/translations';

interface DivisionsSectionProps {
  currentLang: Language;
  onOpenServiceModal: (division: DivisionId) => void;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({ currentLang, onOpenServiceModal }) => {
  const t = translations[currentLang];

  return (
    <section id="divisiones" className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Imagen de fondo fluida abstracta en tono bien bajo optimizada */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] sm:opacity-[0.10]"
          style={{
            backgroundImage: 'url(/assets/aistudio/image_a4bab8c7.webp)',
            transform: 'translateZ(0)',
          }}
        />
        {/* Degradado para integración suave con los bordes de la sección */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-transparent to-[#02040a]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-purple-400 mb-3 uppercase tracking-wider">
            <span>{t.divisions.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.divisions.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
            {t.divisions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CARD 1: SERVICIOS LEGALES - WEB3 NEON STYLE */}
        <div className="relative rounded-[28px] p-7 sm:p-9 lg:p-9 flex flex-col justify-between overflow-hidden backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 bg-[#0c1226]/80 border border-[#00F0FF]/20 shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(0,240,255,0.06)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(0,240,255,0.15)] hover:border-[#00F0FF]/40 group/card">
          
          {/* Top Neon Ambient Light Strip */}
          <div className="absolute top-0 left-[15%] w-[70%] h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-[#A855F7] pointer-events-none" />

          <div>
            {/* Header Row */}
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#00F0FF]/15 to-[#A855F7]/15 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF] shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <Scale className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold tracking-[2px] uppercase bg-gradient-to-r from-[#00F0FF] to-[#A855F7] bg-clip-text text-transparent font-sans">
                    {t.divisions.legalCategory}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                    {t.divisions.legalTitle}
                  </h3>
                </div>
              </div>
              <span className="text-[13px] font-bold text-[#00F0FF] bg-[#00F0FF]/[0.08] border border-[#00F0FF]/20 px-3.5 py-1.5 rounded-xl font-mono shadow-sm">
                01
              </span>
            </div>

            {/* Services Stack (Lista de Servicios) */}
            <div className="flex flex-col gap-3.5 mb-7">
              <div
                onClick={() => onOpenServiceModal('legales')}
                className="flex items-center justify-between bg-[#121a35]/60 hover:bg-[#162142]/85 border border-white/[0.06] hover:border-[#00F0FF]/40 p-4 sm:px-5 sm:py-4 rounded-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,240,255,0.12)] cursor-pointer group/row"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[#00F0FF] flex items-center">
                    <Building className="w-5 h-5 stroke-[2]" />
                  </span>
                  <span className="text-[15px] font-semibold text-white tracking-wide">
                    {t.divisions.legalRealEstate}
                  </span>
                </div>
                <span className="w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center text-slate-400 text-xs transition-all duration-300 group-hover/row:bg-[#00F0FF] group-hover/row:text-[#060919] group-hover/row:translate-x-1 font-sans">
                  ➔
                </span>
              </div>

              <div
                onClick={() => onOpenServiceModal('legales')}
                className="flex items-center justify-between bg-[#121a35]/60 hover:bg-[#162142]/85 border border-white/[0.06] hover:border-[#00F0FF]/40 p-4 sm:px-5 sm:py-4 rounded-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,240,255,0.12)] cursor-pointer group/row"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[#00F0FF] flex items-center">
                    <Receipt className="w-5 h-5 stroke-[2]" />
                  </span>
                  <span className="text-[15px] font-semibold text-white tracking-wide">
                    {t.divisions.legalTax}
                  </span>
                </div>
                <span className="w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center text-slate-400 text-xs transition-all duration-300 group-hover/row:bg-[#00F0FF] group-hover/row:text-[#060919] group-hover/row:translate-x-1 font-sans">
                  ➔
                </span>
              </div>

              <div
                onClick={() => onOpenServiceModal('legales')}
                className="flex items-center justify-between bg-[#121a35]/60 hover:bg-[#162142]/85 border border-white/[0.06] hover:border-[#00F0FF]/40 p-4 sm:px-5 sm:py-4 rounded-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,240,255,0.12)] cursor-pointer group/row"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[#00F0FF] flex items-center">
                    <Briefcase className="w-5 h-5 stroke-[2]" />
                  </span>
                  <span className="text-[15px] font-semibold text-white tracking-wide">
                    {t.divisions.legalCorporate}
                  </span>
                </div>
                <span className="w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center text-slate-400 text-xs transition-all duration-300 group-hover/row:bg-[#00F0FF] group-hover/row:text-[#060919] group-hover/row:translate-x-1 font-sans">
                  ➔
                </span>
              </div>
            </div>

            {/* Bloque Destacado Ecuatorial (Featured Banner) */}
            <div className="bg-gradient-to-br from-[#181237]/90 to-[#0c1830]/90 border border-[#A855F7]/30 rounded-[20px] p-6 mb-7 shadow-[0_10px_30px_rgba(168,85,247,0.08)]">
              <div className="flex items-start gap-2.5 mb-2.5">
                <span className="text-[#A855F7] mt-0.5 shrink-0">
                  <Sparkles className="w-4.5 h-4.5 stroke-[2]" />
                </span>
                <h4 className="text-[15px] font-bold text-white leading-snug">
                  {t.divisions.legalStartupQuestion}
                </h4>
              </div>
              <p className="text-[13.5px] text-slate-300 leading-relaxed pl-7">
                {t.divisions.legalStartupDesc}
              </p>
            </div>
          </div>

          {/* Botón Neón Principal (CTA) */}
          <button
            onClick={() => onOpenServiceModal('legales')}
            className="w-full bg-gradient-to-r from-[#00F0FF] to-[#A855F7] hover:opacity-95 text-white font-extrabold text-[13px] tracking-[2px] uppercase py-[18px] px-6 rounded-[18px] flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group/btn"
          >
            <span>{t.divisions.btnContinue}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 stroke-[2.5]" />
          </button>
        </div>

        {/* CARD 2: EDUCACIÓN */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-7 lg:p-8 flex flex-col justify-between border border-slate-800">
          <div>
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                    {t.divisions.eduCategory}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{t.divisions.eduTitle}</h3>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700">
                02
              </span>
            </div>

            {/* Highlighted Program Banner */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-900/80 border border-cyan-500/30 mb-8">
              <div className="flex items-center gap-2.5 text-cyan-400 text-xs sm:text-[13px] font-mono font-semibold mb-4">
                <Cpu className="w-4 h-4 shrink-0" />
                <span>{t.divisions.eduBadge}</span>
              </div>
              <h4 className="text-2xl sm:text-[26px] font-extrabold text-white leading-snug mb-3.5">
                {t.divisions.eduHeadline}
              </h4>
              <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed mb-7">
                {t.divisions.eduDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-300 font-mono">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 stroke-[2.5]" />
                  <span>{t.divisions.eduItem1}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 stroke-[2.5]" />
                  <span>{t.divisions.eduItem2}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 stroke-[2.5]" />
                  <span>{t.divisions.eduItem3}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 stroke-[2.5]" />
                  <span>{t.divisions.eduItem4}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <a
            href="https://push-rho-six.vercel.app/#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-cyan w-full py-3.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.divisions.btnContinue}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* CARD 3: REAL ESTATE */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-7 lg:p-8 flex flex-col justify-between border border-slate-800">
          <div>
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                    {t.divisions.reCategory}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{t.divisions.reTitle}</h3>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700">
                03
              </span>
            </div>

            {/* Special Offer Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/30 to-slate-900/80 border border-emerald-500/30 mb-8">
              <h4 className="text-lg font-bold text-white mb-2">
                {t.divisions.reQuestion}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                {t.divisions.reDesc}
              </p>
              
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/80">
                  {t.divisions.reTag1}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/80">
                  {t.divisions.reTag2}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={() => onOpenServiceModal('realestate')}
            className="relative group overflow-hidden w-full py-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500/15 via-[#00FF9D]/10 to-cyan-500/15 border border-[#00FF9D]/60 hover:border-[#00FF9D] text-[#00FF9D] hover:text-black shadow-[0_0_20px_rgba(0,255,157,0.22)] hover:shadow-[0_0_35px_rgba(0,255,157,0.65)] transition-all duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#00FF9D] via-[#00E5FF] to-[#00FF9D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D] group-hover:bg-black group-hover:shadow-none transition-colors relative z-10 shrink-0" />
            <span className="relative z-10 tracking-widest font-black">{t.divisions.btnContinue}</span>
            <ArrowRight className="w-4 h-4 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

        {/* CARD 4: SEGUROS */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-7 lg:p-8 flex flex-col justify-between border border-slate-800">
          <div>
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">
                    {t.divisions.insCategory}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{t.divisions.insTitle}</h3>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700">
                04
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              {t.divisions.insDesc}
            </p>

            {/* Grid of coverages */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <Heart className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">{t.divisions.insLife}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <Activity className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">{t.divisions.insHealth}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <Car className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">{t.divisions.insVehicle}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <Lock className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">{t.divisions.insAsset}</span>
              </div>
            </div>

            {/* U.S. Retirement Highlight Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-950/45 to-slate-900/80 border border-purple-500/35 mb-7">
              <div className="flex items-center gap-2 text-purple-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>{t.divisions.insRetirementBadge}</span>
              </div>
              <h4 className="text-base sm:text-[17px] font-extrabold text-white leading-snug mb-1.5">
                {t.divisions.insRetirementTitle}
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                {t.divisions.insRetirementDesc}
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={() => onOpenServiceModal('seguros')}
            className="relative group overflow-hidden w-full py-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/15 to-pink-500/20 border border-purple-400/60 hover:border-fuchsia-300 text-purple-200 hover:text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(217,70,239,0.65)] transition-all duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#d946ef] group-hover:bg-white group-hover:shadow-none transition-colors relative z-10 shrink-0" />
            <span className="relative z-10 tracking-widest font-black">{t.divisions.btnContinue}</span>
            <ArrowRight className="w-4 h-4 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

        </div>
      </div>
    </section>
  );
};
