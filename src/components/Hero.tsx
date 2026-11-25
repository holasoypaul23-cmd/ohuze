import React, { Suspense } from 'react';
import { ArrowDownRight, ShieldCheck, Check, Globe } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

const HolographicScene = React.lazy(() =>
  import('./HolographicScene').then((mod) => ({ default: mod.HolographicScene }))
);

interface HeroProps {
  currentLang: Language;
  theme?: 'dark' | 'light';
  onOpenServiceModal: (divisionId: 'legales') => void;
  onScrollTo: (elementId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, theme = 'dark', onOpenServiceModal, onScrollTo }) => {
  const t = translations[currentLang];

  return (
    <section id="ecosistema" className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-visible">
      
      {/* Background Matrix Glow Aura (GPU Accelerated) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] lg:w-[900px] h-[300px] sm:h-[500px] rounded-full pointer-events-none -z-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.25) 0%, rgba(236, 72, 153, 0.15) 35%, rgba(0, 240, 255, 0.08) 60%, transparent 75%)',
          transform: 'translate(-50%, -50%) translateZ(0)',
        }}
      />

      {/* Clean Unboxed Metadata Kicker */}
      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-[11px] sm:text-xs font-mono text-pink-400 mb-5 sm:mb-6 tracking-wide shadow-lg shadow-purple-950/40 max-w-full truncate">
        <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping mr-0.5 shrink-0" />
        <span className="truncate">{t.hero.kicker}</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] mb-4 sm:mb-6 max-w-5xl text-wrap-balance">
        {t.hero.headlinePart1}{' '}
        <span className="text-gradient-cosmic block sm:inline">{t.hero.headlinePart2}</span>
      </h1>

      {/* Subtitle */}
      <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 font-normal leading-relaxed px-2">
        {t.hero.subtitle}
      </p>

      {/* Two Prominent Glow Buttons (Responsive Mobile & Desktop) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 z-10 w-full sm:w-auto px-2 sm:px-0">
        <button
          onClick={() => onScrollTo('divisiones')}
          className="btn-theta-primary w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
        >
          <span>{t.hero.btnExplore}</span>
          <ArrowDownRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onOpenServiceModal('legales')}
          className="btn-theta-secondary w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>{t.hero.btnAudit}</span>
        </button>
      </div>

      {/* 3D HOLOGRAPHIC GLOBE & ENERGY RINGS SCENE (Lazy Loaded Chunk) */}
      <div className="relative w-full max-w-5xl -my-2 sm:-my-8 lg:-my-12 z-0 px-1 sm:px-4 min-h-[380px] sm:min-h-[500px]">
        <Suspense
          fallback={
            <div className="w-full h-[380px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-cyan-500/25 animate-pulse bg-cyan-950/20" />
            </div>
          }
        >
          <HolographicScene showGlobe={true} showWaveTube={false} theme={theme} />
        </Suspense>
      </div>

      {/* 2-COLUMN METRICS STRIP */}
      <div className="relative z-10 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-5 pb-5 text-center border border-purple-500/20 bg-slate-950/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 mb-8 sm:mb-12 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
        <div className="space-y-1 pb-4 md:pb-0 px-2">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-gradient-stat-cyan tabular-nums">
            Global LatAm
          </div>
          <div className="text-xs sm:text-sm font-mono text-slate-200">
            {t.hero.statNodes}
          </div>
          <p className="text-[11px] text-slate-400">
            {t.hero.statNodesDesc}
          </p>
        </div>

        <div className="space-y-1 pt-4 md:pt-0 px-2">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-gradient-stat-purple tabular-nums">
            100%
          </div>
          <div className="text-xs sm:text-sm font-mono text-slate-200">
            {t.hero.statContracts}
          </div>
          <p className="text-[11px] text-slate-400">
            {t.hero.statContractsDesc}
          </p>
        </div>
      </div>

      {/* Mandated Holding Mission Text Box */}
      <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl max-w-4xl border border-purple-500/30 relative overflow-hidden group hover:border-pink-500/50 transition-all duration-300 text-left">
        <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
          {t.hero.missionQuote}
        </p>
        
        {/* Adjacency proof points */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400 font-mono border-t border-slate-800/80 pt-4">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.hero.riskMitigation}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{t.hero.multiJurisdiction}</span>
          </div>
        </div>
      </div>

    </section>
  );
};
