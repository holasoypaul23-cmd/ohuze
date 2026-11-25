import React, { useState, useEffect, Suspense } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DivisionsSection } from './components/DivisionsSection';
import { ServicesSection } from './components/ServicesSection';
import { PartnersAndNewsSection } from './components/PartnersAndNewsSection';
import { HoldingArchitecture } from './components/HoldingArchitecture';
import { Footer } from './components/Footer';
import type { DivisionId, ServiceSubmission } from './types';
import { Language } from './i18n/translations';

const DashboardView = React.lazy(() => import('./components/DashboardView'));
const ServiceModal = React.lazy(() =>
  import('./components/ServiceModal').then((mod) => ({ default: mod.ServiceModal }))
);

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('ohuze-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore storage errors
    }
    return 'dark';
  });
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<DivisionId | null>(null);
  const [serviceDetails, setServiceDetails] = useState<string>('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('ohuze-theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenServiceModal = (division: DivisionId, customDetails?: string) => {
    setSelectedDivision(division);
    if (customDetails) {
      setServiceDetails(customDetails);
    } else {
      setServiceDetails('');
    }
    setServiceModalOpen(true);
  };

  const handleCloseServiceModal = () => {
    setServiceModalOpen(false);
    setSelectedDivision(null);
    setServiceDetails('');
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSubmit = (data: ServiceSubmission) => {
    console.log('Submission received:', data);
  };

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#02040a] bg-digital-matrix selection:bg-pink-500 selection:text-black overflow-x-hidden">
      {/* Background Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Atmospheric Aurora Glowing Spheres - GPU Hardware-Accelerated Single Layer */}
      <div
        className="fixed inset-0 pointer-events-none -z-1 will-change-transform"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 8%, rgba(147, 51, 234, 0.16) 0%, transparent 48%),
            radial-gradient(circle at 88% 28%, rgba(236, 72, 153, 0.12) 0%, transparent 44%),
            radial-gradient(circle at 15% 82%, rgba(0, 240, 255, 0.08) 0%, transparent 42%),
            radial-gradient(circle at 85% 88%, rgba(49, 46, 129, 0.22) 0%, transparent 48%)
          `,
          transform: 'translateZ(0)',
        }}
      />

      {/* Top Bar Header with OHUZE GROUP, Theme Switcher & Language Switcher */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenDashboard={() => setDashboardOpen(!dashboardOpen)}
        dashboardOpen={dashboardOpen}
      />

      {dashboardOpen ? (
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#070b1a] text-white font-mono text-sm py-32">
              <div className="flex items-center gap-3 glass-panel px-6 py-4 rounded-2xl border border-purple-500/40 shadow-xl">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-pink-300 font-bold uppercase tracking-wider">Cargando OHUZE Terminal & Dashboard...</span>
              </div>
            </div>
          }
        >
          <DashboardView
            currentLang={currentLang}
            onClose={() => setDashboardOpen(false)}
            onOpenServiceModal={(div) => handleOpenServiceModal(div)}
          />
        </Suspense>
      ) : (
        /* Main Content Flow */
        <main className="relative overflow-hidden">
          {/* Imagen de fondo en tono bien bajo en main (optimizada sin mix-blend para máxima fluidez) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] sm:opacity-[0.08]"
              style={{
                backgroundImage: 'url(/assets/aistudio/image_a4bab8c7.webp)',
                transform: 'translateZ(0)',
              }}
            />
            {/* Degradado para integración suave en extremos de main */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-transparent to-[#02040a]" />
          </div>

          {/* Hero Section with Mobile-Optimized 3D Globe */}
          <Hero
            currentLang={currentLang}
            theme={theme}
            onOpenServiceModal={(div) => handleOpenServiceModal(div)}
            onScrollTo={handleScrollTo}
          />

          {/* 4 Core Global Divisions */}
          <DivisionsSection
            currentLang={currentLang}
            onOpenServiceModal={(div) => handleOpenServiceModal(div)}
          />

          {/* Nuestros Servicios: Agencia de Marketing & Desarrollo de Software */}
          <ServicesSection currentLang={currentLang} theme={theme} />

          {/* Socios, Alianzas y Noticias Recientes */}
          <PartnersAndNewsSection currentLang={currentLang} />

          {/* Holding Architecture (3 Clean Pillars) */}
          <HoldingArchitecture currentLang={currentLang} />
        </main>
      )}

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Interactive Service Request Modal (Carga bajo demanda) */}
      {serviceModalOpen && (
        <Suspense fallback={null}>
          <ServiceModal
            isOpen={serviceModalOpen}
            divisionId={selectedDivision}
            initialDetails={serviceDetails}
            onClose={handleCloseServiceModal}
            onSubmit={handleServiceSubmit}
            currentLang={currentLang}
          />
        </Suspense>
      )}
    </div>
  );
}
