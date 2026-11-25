import React from 'react';
import { Code2, Check } from 'lucide-react';
import { Language } from '../i18n/translations';
import { TradingViewTickerTape } from './TradingViewTickerTape';

interface ServicesSectionProps {
  currentLang: Language;
  theme?: 'dark' | 'light';
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

const serviceContent: Record<
  Language,
  {
    liveBadge: string;
    liveTitle: string;
    brandTag: string;
    badge: string;
    title: string;
    subtitle: string;
    marketingTitle: string;
    marketingTag: string;
    marketingBadge: string;
    marketingDesc: string;
    marketingFeatures: string[];
    marketingCta: string;
    softwareTitle: string;
    softwareTag: string;
    softwareDesc: string;
    softwareFeatures: string[];
    softwareCta: string;
  }
> = {
  es: {
    liveBadge: 'LIVE MARKET DATA FEED',
    liveTitle: 'Mercados Financieros en Tiempo Real',
    brandTag: 'OHUZE GLOBAL HUB',
    badge: 'SOLUCIONES DIGITALES',
    title: 'Nuestros Servicios',
    subtitle:
      'Estrategia digital y desarrollo tecnológico a medida para impulsar el crecimiento y la eficiencia operativa de tu negocio.',
    marketingTitle: 'Agencia de Marketing',
    marketingTag: 'ESTRATEGIA & GROWTH',
    marketingBadge: 'MARKETING',
    marketingDesc:
      'Impulsamos tu marca con estrategias digitales enfocadas en resultados: posicionamiento SEO, campañas de publicidad, gestión de redes sociales y crecimiento de audiencia.',
    marketingFeatures: [
      'Posicionamiento SEO orgánico',
      'Campañas de publicidad digital (Google & Meta Ads)',
      'Gestión profesional de redes sociales',
      'Estrategias de conversión y crecimiento de audiencia',
    ],
    marketingCta: 'Cotizar con Agencia de Marketing',
    softwareTitle: 'Desarrollo de Software',
    softwareTag: 'INGENIERÍA & APPS',
    softwareDesc:
      'Diseñamos y programamos soluciones tecnológicas a la medida, desde aplicaciones web y móviles hasta sistemas robustos y escalables para optimizar tus procesos.',
    softwareFeatures: [
      'Aplicaciones web y móviles personalizadas',
      'Arquitecturas cloud robustas y escalables',
      'Integración de APIs y bases de datos',
      'Optimización y automatización de procesos clave',
    ],
    softwareCta: 'Cotizar Desarrollo de Software',
  },
  en: {
    liveBadge: 'LIVE MARKET DATA FEED',
    liveTitle: 'Real-Time Financial Markets',
    brandTag: 'OHUZE GLOBAL HUB',
    badge: 'DIGITAL SOLUTIONS',
    title: 'Our Services',
    subtitle:
      'Custom digital strategy and software engineering designed to accelerate your company’s growth and operational scalability.',
    marketingTitle: 'Marketing Agency',
    marketingTag: 'STRATEGY & GROWTH',
    marketingBadge: 'MARKETING',
    marketingDesc:
      'We boost your brand with results-driven digital strategies: SEO positioning, ad campaigns, social media management, and audience growth.',
    marketingFeatures: [
      'Organic SEO optimization',
      'Paid media campaigns (Google & Meta Ads)',
      'Professional social media management',
      'Audience growth & conversion funnels',
    ],
    marketingCta: 'Inquire Marketing Services',
    softwareTitle: 'Software Development',
    softwareTag: 'ENGINEERING & APPS',
    softwareDesc:
      'We design and develop custom tech solutions, from web and mobile applications to robust, scalable enterprise systems to streamline your processes.',
    softwareFeatures: [
      'Custom web and mobile applications',
      'Scalable & resilient cloud architectures',
      'API integrations & database design',
      'Workflow automation & process optimization',
    ],
    softwareCta: 'Inquire Software Development',
  },
  fr: {
    liveBadge: 'FLUX DE MARCHÉ EN DIRECT',
    liveTitle: 'Marchés Financiers en Temps Réel',
    brandTag: 'OHUZE GLOBAL HUB',
    badge: 'SOLUTIONS NUMÉRIQUES',
    title: 'Nos Services',
    subtitle:
      'Stratégie digitale et ingénierie logicielle sur mesure pour accélérer la croissance et l’efficacité de votre entreprise.',
    marketingTitle: 'Agence de Marketing',
    marketingTag: 'STRATÉGIE & CROISSANCE',
    marketingBadge: 'MARKETING',
    marketingDesc:
      'Nous propulsons votre marque avec des stratégies digitales axées sur les résultats : référencement SEO, campagnes publicitaires, réseaux sociaux et croissance d’audience.',
    marketingFeatures: [
      'Positionnement SEO naturel',
      'Campagnes publicitaires (Google & Meta Ads)',
      'Gestion professionnelle des réseaux sociaux',
      'Stratégies de conversion et d’audience',
    ],
    marketingCta: 'Contacter l’Agence de Marketing',
    softwareTitle: 'Développement de Logiciels',
    softwareTag: 'INGÉNIERIE & APPS',
    softwareDesc:
      'Nous concevons et développons des solutions technologiques sur mesure, des applications web et mobiles aux systèmes robustes pour optimiser vos processus.',
    softwareFeatures: [
      'Applications web et mobiles sur mesure',
      'Architectures cloud robustes et évolutives',
      'Intégration d’APIs et bases de données',
      'Automatisation des processus métier',
    ],
    softwareCta: 'Contacter l’Équipe Logiciel',
  },
  it: {
    liveBadge: 'FEED DATI DI MERCATO LIVE',
    liveTitle: 'Mercati Finanziari in Tempo Reale',
    brandTag: 'OHUZE GLOBAL HUB',
    badge: 'SOLUZIONI DIGITALI',
    title: 'I Nostri Servizi',
    subtitle:
      'Strategia digitale e sviluppo tecnologico su misura per accelerare la crescita e l’efficienza della tua azienda.',
    marketingTitle: 'Agenzia di Marketing',
    marketingTag: 'STRATEGIA & CRESCITA',
    marketingBadge: 'MARKETING',
    marketingDesc:
      'Spingiamo il tuo brand con strategie digitali orientate ai risultati: posizionamento SEO, campagne pubblicitarie, gestione dei social network e crescita del pubblico.',
    marketingFeatures: [
      'Posizionamento SEO organico',
      'Campagne pubblicitarie (Google & Meta Ads)',
      'Gestione professionale dei canali social',
      'Strategie di conversione e crescita del pubblico',
    ],
    marketingCta: 'Richiedi Preventivo Marketing',
    softwareTitle: 'Sviluppo Software',
    softwareTag: 'INGEGNERIA & APPS',
    softwareDesc:
      'Progettiamo e sviluppiamo soluciones tecnologicas su misura, da applicazioni web e mobile a sistemi scalabili per ottimizzare i tuoi processi.',
    softwareFeatures: [
      'Applicazioni web e mobile personalizzate',
      'Architetture cloud scalabili e sicure',
      'Integrazione API e database moderni',
      'Automazione e ottimizzazione dei processi',
    ],
    softwareCta: 'Richiedi Preventivo Software',
  },
  pt: {
    liveBadge: 'FEED DE DADOS DE MERCADO',
    liveTitle: 'Mercados Financeiros em Tempo Real',
    brandTag: 'OHUZE GLOBAL HUB',
    badge: 'SOLUÇÕES DIGITAIS',
    title: 'Nossos Serviços',
    subtitle:
      'Estratégia digital e desenvolvimento tecnológico sob medida para impulsionar o crescimento e a eficiência do seu negócio.',
    marketingTitle: 'Agência de Marketing',
    marketingTag: 'ESTRATÉGIA & CRESCIMENTO',
    marketingBadge: 'MARKETING',
    marketingDesc:
      'Impulsionamos sua marca com estratégias digitais focadas em resultados: posicionamento SEO, campanhas de publicidade, gestão de redes sociais e crescimento de audiência.',
    marketingFeatures: [
      'Posicionamento SEO orgânico',
      'Campanhas de anúncios (Google & Meta Ads)',
      'Gestão profissional de redes sociais',
      'Estratégias de conversão e audiência',
    ],
    marketingCta: 'Solicitar Proposta de Marketing',
    softwareTitle: 'Desenvolvimento de Software',
    softwareTag: 'ENGENHARIA & APPS',
    softwareDesc:
      'Projetamos e programamos soluções tecnológicas sob medida, desde aplicativos web e móveis até sistemas robustos e escaláveis para otimizar seus processos.',
    softwareFeatures: [
      'Aplicativos web e mobile personalizados',
      'Arquiteturas em nuvem robustas e escaláveis',
      'Integração de APIs e bancos de dados',
      'Automação e otimização de processos',
    ],
    softwareCta: 'Solicitar Proposta de Software',
  },
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, theme = 'dark' }) => {
  const data = serviceContent[currentLang] || serviceContent.es;

  return (
    <section id="servicios" className="services-section py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Imagen de fondo en tono bien bajo optimizada */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.09] sm:opacity-[0.11]"
          style={{
            backgroundImage: 'url(/assets/aistudio/image_c8482277.webp)',
            transform: 'translateZ(0)',
          }}
        />
        {/* Degradado para integración suave con los bordes de la sección */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b1a] via-transparent to-[#070b1a]" />
      </div>

      {/* Ambient background glow matching template */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,240,255,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(168,85,247,0.06)_0%,transparent_50%)]" />

      <div className="container max-w-[1100px] mx-auto relative z-10">
        
        {/* Real-Time Financial Markets Ticker Tape Hub Component */}
        <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-6 sm:gap-8 mb-20 sm:mb-24">
          
          {/* Hub Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0 px-2 sm:px-3">
            <div className="flex flex-col gap-2 text-left">
              <div className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-[13px] font-bold tracking-[2.5px] uppercase text-[#00F0FF]">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] inline-block animate-pulse shrink-0"
                  style={{ boxShadow: '0 0 10px #00F0FF' }}
                />
                <span>OHUZE Global Markets</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {data.liveTitle}
              </h2>
            </div>
          </div>

          {/* Glassmorphic Ticker Container */}
          <div className="relative bg-[#0a1023]/80 backdrop-blur-[20px] border border-[#00F0FF]/25 rounded-[24px] p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Top Border Accent Light Line */}
            <div className="absolute top-0 left-[8%] w-[84%] h-[2.5px] bg-gradient-to-r from-transparent via-[#00F0FF] via-[#A855F7] to-transparent pointer-events-none" />

            {/* TradingView Widget Container with Inner Ticker Wrapper */}
            <div className="ticker-frame rounded-xl overflow-hidden bg-[#020617]/90 border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
              <TradingViewTickerTape locale={currentLang} theme={theme} />
            </div>
          </div>
        </div>

        {/* Section Heading for Specialized Services */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-blue-400 mb-3 uppercase tracking-wider">
            <span>{data.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 sm:mb-14 text-sm sm:text-base leading-relaxed">
            {data.subtitle}
          </p>

          {/* Services Grid (Agencia de Marketing & Desarrollo de Software) */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
            
            {/* Card 1: Agencia de Marketing (Exact Web3 Template) */}
            <div className="card-container w-full bg-[#0a1023]/85 backdrop-blur-[24px] border border-cyan-400/25 rounded-[24px] p-7 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.05)] flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/40 group">
              <div>
                {/* Card Header */}
                <div className="card-header flex justify-between items-start mb-5">
                  <div className="icon-badge w-12 h-12 rounded-[14px] bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.15)] group-hover:scale-105 transition-transform shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <span className="tag-category font-mono text-[11px] font-bold tracking-[2px] uppercase text-[#00F0FF] bg-cyan-400/[0.08] border border-cyan-400/20 px-3 py-1.5 rounded-[8px]">
                    {data.marketingBadge}
                  </span>
                </div>

                {/* Title Group */}
                <div className="title-group mb-4">
                  <span className="subtitle font-mono text-[11px] text-[#00F0FF] uppercase tracking-[1.5px] font-bold block mb-1">
                    {data.marketingTag}
                  </span>
                  <h3 className="main-title text-2xl sm:text-[28px] font-bold text-white tracking-[-0.5px]">
                    {data.marketingTitle}
                  </h3>
                </div>

                <p className="description text-[14px] text-[#8E9BAE] leading-[1.6] mb-6 font-sans">
                  {data.marketingDesc}
                </p>

                {/* Features List */}
                <div className="features-list flex flex-col gap-3 mb-8">
                  {data.marketingFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="feature-item flex items-center gap-3 bg-[rgba(15,23,42,0.6)] border border-white/[0.06] p-[14px_18px] rounded-[14px] text-white text-[14px] font-medium transition-all duration-200 hover:border-cyan-400/30 hover:bg-[rgba(20,30,55,0.7)]"
                    >
                      <span className="check-icon text-[#00F0FF] flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón Único de WhatsApp */}
              <a
                href={`https://wa.me/593963018699?text=${encodeURIComponent(
                  '¡Hola OHUZE GROUP! Deseo solicitar asesoría y cotización para el servicio de Agencia de Marketing digital.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full min-h-[52px] py-3.5 px-4 sm:px-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-[#02050E] font-mono font-bold text-[11px] lg:text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 text-center leading-tight shadow-[0_0_24px_rgba(37,211,102,0.3)] hover:shadow-[0_0_36px_rgba(37,211,102,0.45)] border border-emerald-300/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#02050E] shrink-0" />
                <span>{data.marketingCta}</span>
              </a>
            </div>

            {/* Card 2: Desarrollo de Software */}
            <div className="service-card glass-panel rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-slate-800/90 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 group">
              <div>
                {/* Icon & Kicker */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700">
                    SOFTWARE
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-2">
                  {data.softwareTag}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {data.softwareTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {data.softwareDesc}
                </p>

                <div className="space-y-2.5 mb-8">
                  {data.softwareFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                    >
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Consultation CTA */}
              <a
                href={`https://wa.me/593963018699?text=${encodeURIComponent(
                  '¡Hola OHUZE GROUP! Deseo solicitar cotización y consultoría técnica para un proyecto de Desarrollo de Software.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full min-h-[52px] py-3.5 px-4 sm:px-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-[#02050E] font-mono font-bold text-[11px] lg:text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 text-center leading-tight shadow-[0_0_24px_rgba(37,211,102,0.3)] hover:shadow-[0_0_36px_rgba(37,211,102,0.45)] border border-emerald-300/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#02050E] shrink-0" />
                <span>{data.softwareCta}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
