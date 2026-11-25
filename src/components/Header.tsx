import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check, Menu, X, Sun, Moon } from 'lucide-react';
import { Language, LANGUAGES, translations } from '../i18n/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenDashboard?: () => void;
  dashboardOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  theme,
  onToggleTheme,
  onOpenDashboard,
  dashboardOpen,
}) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLangModalOpen, setMobileLangModalOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  const t = translations[currentLang];
  const activeLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (langCode: Language) => {
    onLanguageChange(langCode);
    setLangMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 border border-slate-800">
        
        {/* Zone 1: Single Wordmark */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 xl:gap-3.5 shrink-0 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 xl:w-12 xl:h-12 rounded-xl sm:rounded-2xl overflow-hidden bg-[#070b19] border border-amber-500/40 p-0.5 transition-transform duration-300 group-hover:scale-105 shadow-md sm:shadow-lg shadow-amber-950/40 shrink-0">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.58.21_PM_301cb26f.jpeg"
              alt="OHUZE GROUP"
              className="w-full h-full object-cover rounded-[10px] sm:rounded-[13px]"
            />
          </div>
          <span className="text-sm sm:text-base lg:text-lg xl:text-2xl font-bold tracking-normal sm:tracking-wide xl:tracking-widest text-white font-mono whitespace-nowrap">
            OHUZE GROUP
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links (optimizados para tablet y desktop) */}
        <nav className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-6 text-xs xl:text-sm font-medium text-slate-300 shrink">
          <a
            href="#ecosistema"
            className="hover:text-pink-400 transition-colors whitespace-nowrap px-1 md:px-1.5 lg:px-2 py-1"
          >
            {t.nav.ecosystem}
          </a>
          <a
            href="#divisiones"
            className="hover:text-pink-400 transition-colors whitespace-nowrap px-1 md:px-1.5 lg:px-2 py-1"
          >
            {t.nav.divisions}
          </a>
          <a
            href="#servicios"
            className="hover:text-pink-400 transition-colors whitespace-nowrap px-1 md:px-1.5 lg:px-2 py-1"
          >
            {currentLang === 'es' ? 'Servicios' : currentLang === 'en' ? 'Services' : currentLang === 'fr' ? 'Services' : currentLang === 'pt' ? 'Serviços' : 'Servizi'}
          </a>
          <a
            href="#noticias"
            className="hover:text-pink-400 transition-colors whitespace-nowrap px-1 md:px-1.5 lg:px-2 py-1"
          >
            {currentLang === 'es' ? 'Noticias' : currentLang === 'en' ? 'News' : currentLang === 'fr' ? 'Actualités' : currentLang === 'pt' ? 'Notícias' : 'Notizie'}
          </a>
          <a
            href="#holding"
            className="hover:text-pink-400 transition-colors whitespace-nowrap px-1 md:px-1.5 lg:px-2 py-1"
          >
            Holding
          </a>
          <a
            href="https://wa.me/593963018699"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors whitespace-nowrap px-1 md:px-1.5 lg:px-2 py-1"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: Theme Switcher + Botón de Cambio de Idiomas & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 shrink-0" ref={langDropdownRef}>
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-switch-btn h-9 sm:h-10 xl:h-11 px-2.5 sm:px-3 xl:px-3.5 rounded-full font-sans text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap cursor-pointer active:scale-95 touch-manipulation shrink-0"
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span className="hidden xl:inline">
                  {currentLang === 'es' ? 'Claro' : currentLang === 'en' ? 'Light' : currentLang === 'fr' ? 'Clair' : currentLang === 'pt' ? 'Claro' : 'Chiaro'}
                </span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 shrink-0" />
                <span className="hidden xl:inline">
                  {currentLang === 'es' ? 'Oscuro' : currentLang === 'en' ? 'Dark' : currentLang === 'fr' ? 'Sombre' : currentLang === 'pt' ? 'Escuro' : 'Scuro'}
                </span>
              </>
            )}
          </button>

          {/* Desktop & Tablet Dropdown Switcher */}
          <div className="relative hidden sm:block shrink-0">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="lang-switch-btn h-9 sm:h-10 xl:h-11 px-2.5 sm:px-3 xl:px-3.5 rounded-xl font-mono text-xs font-semibold tracking-wider flex items-center gap-1.5 sm:gap-2 transition whitespace-nowrap cursor-pointer shrink-0 glass-panel border border-purple-500/45 hover:border-pink-500/70 text-slate-100 hover:text-white shadow-md sm:shadow-lg shadow-purple-950/30 active:scale-95 touch-manipulation"
              aria-label="Seleccionar idioma / Select language"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-sm sm:text-base leading-none shrink-0">{activeLangObj.flag}</span>
              <span className="font-sans font-medium hidden xl:inline">{activeLangObj.name}</span>
              <span className="lang-code font-mono font-bold uppercase text-pink-300 text-xs xl:hidden">{activeLangObj.code}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
                  langMenuOpen ? 'rotate-180 text-pink-400' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu con los idiomas */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-52 sm:w-56 rounded-2xl glass-panel border border-purple-500/50 py-2 shadow-2xl shadow-black/90 backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 border-b border-slate-800/80 text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Idioma · Language</span>
                  <span className="text-cyan-400 font-bold">{activeLangObj.code.toUpperCase()}</span>
                </div>
                
                <div className="py-1">
                  {LANGUAGES.map((lang) => {
                    const isSelected = lang.code === currentLang;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleSelectLanguage(lang.code)}
                        className={`w-full px-3.5 py-2.5 text-left text-xs flex items-center justify-between transition cursor-pointer active:bg-purple-900/40 ${
                          isSelected
                            ? 'bg-purple-900/30 text-pink-300 font-semibold'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg leading-none">{lang.flag}</span>
                          <div>
                            <span className="block font-medium">{lang.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              {lang.nativeName}
                            </span>
                          </div>
                        </div>

                        {isSelected && (
                          <Check className="w-4 h-4 text-pink-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Direct Header Button: Opens independent modal */}
          <button
            onClick={() => setMobileLangModalOpen(true)}
            className="sm:hidden h-10 px-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider flex items-center gap-1.5 transition whitespace-nowrap cursor-pointer glass-panel border border-purple-500/40 text-slate-100 hover:text-white shadow-md active:scale-95 touch-manipulation"
            aria-label="Seleccionar idioma"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-sm leading-none">{activeLangObj.flag}</span>
            <span className="font-mono font-bold uppercase text-pink-300 text-[11px]">{activeLangObj.code}</span>
          </button>

          {/* Mobile & Tablet hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-slate-300 hover:text-white rounded-xl glass-panel border border-slate-700/60 active:scale-95 transition cursor-pointer shadow-md shrink-0"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer (Adaptado para orientación vertical y horizontal / landscape) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-1.5 sm:mt-2 max-w-7xl mx-auto glass-panel rounded-2xl p-3 sm:p-4 border border-slate-800 space-y-2.5 landscape:space-y-2 max-h-[calc(100dvh-4.5rem)] landscape:max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain touch-pan-y shadow-2xl">
          {/* Enlaces de navegación con distribución responsiva: 1 columna en vertical, 2 columnas en horizontal */}
          <div className="grid grid-cols-1 landscape:grid-cols-2 sm:grid-cols-2 gap-1 landscape:gap-1.5">
            <a
              href="#ecosistema"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 sm:py-2 text-sm text-slate-300 hover:text-pink-400 rounded-lg hover:bg-slate-800/40 font-medium transition-colors"
            >
              {t.nav.ecosystem}
            </a>
            <a
              href="#divisiones"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 sm:py-2 text-sm text-slate-300 hover:text-pink-400 rounded-lg hover:bg-slate-800/40 font-medium transition-colors"
            >
              {t.nav.divisions}
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 sm:py-2 text-sm text-slate-300 hover:text-pink-400 rounded-lg hover:bg-slate-800/40 font-medium transition-colors"
            >
              {currentLang === 'es' ? 'Servicios' : currentLang === 'en' ? 'Services' : currentLang === 'fr' ? 'Services' : currentLang === 'pt' ? 'Serviços' : 'Servizi'}
            </a>
            <a
              href="#noticias"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 sm:py-2 text-sm text-slate-300 hover:text-pink-400 rounded-lg hover:bg-slate-800/40 font-medium transition-colors"
            >
              {currentLang === 'es' ? 'Noticias' : currentLang === 'en' ? 'News' : currentLang === 'fr' ? 'Actualités' : currentLang === 'pt' ? 'Notícias' : 'Notizie'}
            </a>
            <a
              href="#holding"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 sm:py-2 text-sm text-slate-300 hover:text-pink-400 rounded-lg hover:bg-slate-800/40 font-medium transition-colors"
            >
              Holding
            </a>
            <a
              href="https://wa.me/593963018699"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 sm:py-2 text-sm text-slate-300 hover:text-pink-400 rounded-lg hover:bg-slate-800/40 font-medium transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Selector de idioma integrado dentro del menú móvil (adaptado horizontalmente) */}
          <div className="pt-2 landscape:pt-1.5 border-t border-slate-800/80 space-y-2 landscape:space-y-1.5">
            <div className="flex items-center justify-between px-1 text-[11px] font-mono uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                {currentLang === 'es' ? 'Idioma' : currentLang === 'en' ? 'Language' : currentLang === 'fr' ? 'Langue' : currentLang === 'pt' ? 'Idioma' : 'Lingua'}
              </span>
              <span className="text-pink-300 font-bold uppercase">{activeLangObj.name} ({activeLangObj.code})</span>
            </div>

            <div className="grid grid-cols-1 landscape:grid-cols-2 gap-2 items-center">
              {/* Botón táctil para abrir selector modal de idioma */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileLangModalOpen(true);
                }}
                className="w-full flex items-center justify-between px-3 py-2 landscape:py-1.5 rounded-xl glass-panel bg-slate-900/80 border border-purple-500/50 hover:border-pink-500 text-slate-100 shadow-md active:scale-[0.98] transition touch-manipulation cursor-pointer"
                aria-label="Cambiar idioma"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{activeLangObj.flag}</span>
                  <div className="text-left">
                    <div className="font-semibold text-xs text-white leading-tight">{activeLangObj.name}</div>
                    <div className="text-[10px] font-mono text-slate-400">{activeLangObj.nativeName}</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/40 text-pink-300 flex items-center gap-1">
                  {currentLang === 'es' ? 'Cambiar' : currentLang === 'en' ? 'Change' : currentLang === 'fr' ? 'Changer' : currentLang === 'pt' ? 'Mudar' : 'Cambia'}
                  <ChevronDown className="w-3 h-3 text-pink-300" />
                </span>
              </button>

              {/* Accesos directos de 1 toque a los idiomas */}
              <div className="grid grid-cols-5 gap-1.5">
                {LANGUAGES.map((lang) => {
                  const isSelected = lang.code === currentLang;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        handleSelectLanguage(lang.code);
                      }}
                      className={`py-1 landscape:py-1 px-1 rounded-lg flex flex-col items-center justify-center transition touch-manipulation cursor-pointer border text-center ${
                        isSelected
                          ? 'bg-purple-900/60 border-pink-500 text-pink-200 shadow-[0_0_10px_rgba(236,72,153,0.3)] font-bold'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                      title={lang.name}
                    >
                      <span className="text-sm sm:text-base leading-none mb-0.5">{lang.flag}</span>
                      <span className="font-mono text-[10px] uppercase font-semibold">{lang.code}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal independiente de selección de idioma en móvil (adaptado para horizontal y vertical) */}
      {mobileLangModalOpen && (
        <div
          className="fixed inset-0 z-50 sm:hidden flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto overscroll-contain touch-pan-y"
          onClick={() => setMobileLangModalOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl glass-panel border border-purple-500/60 p-3 sm:p-4 shadow-2xl shadow-purple-950/90 bg-[#070b1a]/98 text-slate-100 animate-in zoom-in-95 duration-200 max-h-[92dvh] flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Indicador de arrastre táctil */}
            <div className="w-12 h-1 rounded-full bg-slate-700/80 mx-auto -mt-0.5 mb-2 shrink-0" />

            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  Seleccionar Idioma
                </span>
              </div>
              <button
                onClick={() => setMobileLangModalOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer active:scale-95"
                aria-label="Cerrar modal de idioma"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Lista scrollable de idiomas con soporte táctil fluido */}
            <div
              className="space-y-1.5 overflow-y-auto overscroll-contain pr-1 py-1 max-h-[60dvh] landscape:max-h-[50dvh] touch-pan-y"
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
            >
              {LANGUAGES.map((lang) => {
                const isSelected = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleSelectLanguage(lang.code);
                      setMobileLangModalOpen(false);
                    }}
                    className={`w-full px-3 py-2 rounded-xl flex items-center justify-between border transition cursor-pointer active:scale-[0.98] touch-manipulation ${
                      isSelected
                        ? 'bg-purple-900/40 border-pink-500/60 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                        : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl leading-none">{lang.flag}</span>
                      <div className="text-left">
                        <div className="font-semibold text-xs text-white">{lang.name}</div>
                        <div className="text-[10px] font-mono text-slate-400">{lang.nativeName}</div>
                      </div>
                    </div>
                    {isSelected ? (
                      <Check className="w-4 h-4 text-pink-400 shrink-0" />
                    ) : (
                      <span className="font-mono text-[10px] uppercase text-slate-500 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 shrink-0">
                        {lang.code}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
