import React from 'react';
import { Language, translations } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer className="border-t border-slate-800/80 py-12 px-4 relative z-10 bg-[#050814]/90">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#070b19] border border-amber-500/30 p-0.5 shadow-md shrink-0">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.58.21_PM_301cb26f.jpeg"
              alt="OHUZE GROUP"
              className="w-full h-full object-cover rounded-[11px]"
            />
          </div>
          <div>
            <span className="text-lg font-bold font-mono tracking-wider text-white">
              OHUZE GROUP
            </span>
            <p className="text-[11px] text-slate-400">
              {t.footer.tagline}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <a href="#ecosistema" className="hover:text-pink-400 transition">
            {t.nav.ecosystem}
          </a>
          <a href="#divisiones" className="hover:text-pink-400 transition">
            {t.nav.divisions}
          </a>
          <a href="#holding" className="hover:text-pink-400 transition">
            Holding
          </a>
          <a
            href="https://wa.me/593963018699"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500 font-mono text-center md:text-right">
          {t.footer.rights}
        </p>

      </div>
    </footer>
  );
};
