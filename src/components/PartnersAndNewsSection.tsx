import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Language } from '../i18n/translations';

interface PartnersAndNewsSectionProps {
  currentLang: Language;
}

interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  imageUrl: string;
  altText: string;
  summary: string;
}

interface PartnerItem {
  name: string;
  logoUrl?: string;
  logoClass?: string;
}

const PARTNER_ITEMS: PartnerItem[] = [
  {
    name: 'NEXORA LEGAL',
    logoUrl: '/assets/aistudio/WhatsApp_Image_2026-07-14_at_8.19.15_PM_15dc91aa.jpeg',
    logoClass: 'object-cover bg-slate-950',
  },
  {
    name: 'NEXORA TRUST',
    logoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.39.32_PM_835da723.jpeg',
    logoClass: 'object-contain bg-white p-1',
  },
  {
    name: 'FOZZ',
    logoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.39.32_PM_d95a4d87.jpeg',
    logoClass: 'object-cover bg-slate-950',
  },
  {
    name: 'BELGRAVIA GROUP',
    logoUrl: '/assets/aistudio/WhatsApp_Image_2026-103-30_at_9.39.32_PM_2b46d225.jpeg',
    logoClass: 'object-contain bg-white p-1',
  },
  {
    name: 'THE VISAGE',
    logoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.58.27_PM_b1ff0f77.jpeg',
    logoClass: 'object-contain bg-white p-1',
  },
];

const newsData: Record<
  Language,
  {
    partnersTitle: string;
    partnersSubtitle: string;
    newsTitle: string;
    closeText: string;
    items: NewsItem[];
  }
> = {
  es: {
    partnersTitle: 'Socios y Alianzas Estratégicas',
    partnersSubtitle: 'Asegurado por líderes empresariales globales',
    newsTitle: 'Noticias Recientes',
    closeText: 'Cerrar Comunicado',
    items: [
      {
        id: 'news-1',
        date: '25/10/2026',
        category: 'LEGALTECH & EXPANSIÓN INTERNACIONAL',
        title:
          'Expansión fiduciaria y societaria multijurisdiccional junto a Nexora Legal.',
        imageUrl:
          '/assets/aistudio/image_4b839c06.webp',
        altText: 'Expansión fiduciaria y societaria',
        summary:
          'Fortalecemos nuestra presencia en el ámbito jurídico corporativo mediante el desarrollo de estructuras fiduciarias y societarias con alcance multijurisdiccional, junto a Nexora Legal.\n\nNuestra visión: impulsar soluciones jurídicas estratégicas que acompañen el crecimiento empresarial, la protección patrimonial y la expansión internacional.',
      },
      {
        id: 'news-2',
        date: '18/10/2026',
        category: 'BLOCKCHAIN & EXPANSIÓN EMPRESARIAL',
        title:
          'Nuevas oportunidades de expansión para nuestras empresas mediante Blockchain',
        imageUrl:
          '/assets/aistudio/image_745c611b.webp',
        altText: 'Blockchain y expansión empresarial',
        summary:
          'Apostamos por la tecnología Blockchain como una herramienta para impulsar la innovación, explorar nuevos modelos de negocio y abrir oportunidades de expansión para nuestras empresas en la economía digital.',
      },
      {
        id: 'news-3',
        date: '10/10/2026',
        category: 'MARKETING & CRECIMIENTO',
        title:
          'Nuevas estrategias de posicionamiento digital logran récord de crecimiento en clientes',
        imageUrl:
          '/assets/aistudio/image_8d3635cd.webp',
        altText: 'Marketing digital e interfaces inmersivas',
        summary:
          'La división de marketing estratégico alcanza métricas sobresalientes en atracción de audiencias calificadas, posicionamiento SEO de alto impacto y campañas de conversión para las distintas unidades de negocio del holding.',
      },
      {
        id: 'news-4',
        date: '04/10/2026',
        category: 'REAL ESTATE & NEGOCIOS INMOBILIARIOS',
        title:
          'Conectamos compradores y vendedores para crear negociaciones exitosas. Y desarrollo de proyectos inmobiliarios.',
        imageUrl:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
        altText: 'Inversión inmobiliaria y tokenización',
        summary:
          'OHUZE GROUP incorpora un portafolio de activos inmobiliarios premium en puntos estratégicos, habilitando esquemas de participación fraccionada y rentabilidad proyectada respaldada con títulos de propiedad legalmente verificados.',
      },
      {
        id: 'news-5',
        date: '28/09/2026',
        category: 'SOLUCIONES ASEGURADORAS & PROTECCIÓN FAMILIAR',
        title:
          'Nuestro broker de seguros protege cada día a más familias y tus bienes.',
        imageUrl:
          '/assets/aistudio/image_11f3118a.webp',
        altText: 'Broker de seguros y protección integral',
        summary:
          'Trabajamos para acercar alternativas de protección y respaldo, ayudando a nuestros clientes a identificar opciones aseguradoras de acuerdo con sus necesidades personales, familiares y empresariales.',
      },
      {
        id: 'news-6',
        date: '20/09/2026',
        category: 'EXPANSIÓN & NUEVOS MERCADOS',
        title:
          'Proyectamos ingresar a nuevos mercados e incorporar cuatro líneas de negocio en los próximos tres años.',
        imageUrl:
          '/assets/aistudio/image_6ec71440.webp',
        altText: 'Expansión estratégica y nuevos mercados',
        summary:
          'Nuestra holding prepara una nueva etapa de crecimiento con la incorporación progresiva de cuatro servicios. Entre las áreas que exploramos están la formación en idiomas y el estilo de vida saludable, con propuestas relacionadas con mentalidad, actividad física, salud y bienestar.\n\nLa oportunidad es significativa: el mercado mundial de aprendizaje de idiomas fue estimado en USD 16.000 millones para 2026, mientras que la economía global del bienestar alcanzó USD 6,8 billones en 2024. Nuestro objetivo es identificar oportunidades y desarrollar propuestas de valor en estos sectores.',
      },
    ],
  },
  en: {
    partnersTitle: 'Strategic Partners & Alliances',
    partnersSubtitle: 'Backed by global corporate leaders',
    newsTitle: 'Recent News',
    closeText: 'Close Article',
    items: [
      {
        id: 'news-1',
        date: '25/10/2026',
        category: 'LEGALTECH & INTERNATIONAL EXPANSION',
        title:
          'Multi-jurisdictional fiduciary and corporate expansion alongside Nexora Legal.',
        imageUrl:
          '/assets/aistudio/image_4b839c06.webp',
        altText: 'Fiduciary and corporate expansion',
        summary:
          'We strengthen our presence in corporate legal services through the development of multi-jurisdictional fiduciary and corporate structures alongside Nexora Legal.\n\nOur vision: to drive strategic legal solutions that support enterprise growth, asset protection, and international expansion.',
      },
      {
        id: 'news-2',
        date: '18/10/2026',
        category: 'BLOCKCHAIN & BUSINESS EXPANSION',
        title:
          'New expansion opportunities for our companies through Blockchain',
        imageUrl:
          '/assets/aistudio/image_745c611b.webp',
        altText: 'Blockchain and business expansion',
        summary:
          'We bet on Blockchain technology as a catalyst to drive innovation, explore new business models, and unlock expansion opportunities for our companies in the digital economy.',
      },
      {
        id: 'news-3',
        date: '10/10/2026',
        category: 'MARKETING & GROWTH',
        title:
          'New digital positioning strategies achieve record-breaking client acquisition',
        imageUrl:
          '/assets/aistudio/image_8d3635cd.webp',
        altText: 'Digital marketing and immersive interfaces',
        summary:
          'The growth marketing team delivers record outcomes in high-intent audience expansion, premium organic ranking, and multi-channel conversion funnels across our holding branches.',
      },
      {
        id: 'news-4',
        date: '04/10/2026',
        category: 'REAL ESTATE & REAL ESTATE BUSINESS',
        title:
          'Connecting buyers and sellers for successful negotiations and real estate project development.',
        imageUrl:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
        altText: 'Real Estate and Tokenization',
        summary:
          'OHUZE GROUP incorporates a prime real estate portfolio across strategic hubs, enabling fractional ownership frameworks and audited projected yield with verified legal deeds.',
      },
      {
        id: 'news-5',
        date: '28/09/2026',
        category: 'INSURANCE SOLUTIONS & FAMILY PROTECTION',
        title:
          'Our insurance broker protects more families and your assets every day.',
        imageUrl:
          '/assets/aistudio/image_11f3118a.webp',
        altText: 'Insurance broker and asset protection',
        summary:
          'We work to provide protection and coverage alternatives, helping our clients identify insurance options tailored to their personal, family, and business needs.',
      },
      {
        id: 'news-6',
        date: '20/09/2026',
        category: 'EXPANSION & NEW MARKETS',
        title:
          'We project entering new markets and incorporating four business lines over the next three years.',
        imageUrl:
          '/assets/aistudio/image_6ec71440.webp',
        altText: 'Strategic expansion and new markets',
        summary:
          'Our holding is preparing for a new stage of growth with the progressive incorporation of four services. Among the areas we explore are language training and a healthy lifestyle, with proposals related to mindset, physical activity, health, and wellness.\n\nThe opportunity is significant: the global language learning market was estimated at USD 16 billion for 2026, while the global wellness economy reached USD 6.8 trillion in 2024. Our goal is to identify opportunities and develop value propositions in these sectors.',
      },
    ],
  },
  fr: {
    partnersTitle: 'Partenaires & Alliances Stratégiques',
    partnersSubtitle: 'Soutenu par des leaders industriels mondiaux',
    newsTitle: 'Actualités Récentes',
    closeText: 'Fermer le Communiqué',
    items: [
      {
        id: 'news-1',
        date: '25/10/2026',
        category: 'LEGALTECH & EXPANSION INTERNATIONALE',
        title:
          'Expansion fiduciaire et d’entreprises multijuridictionnelle avec Nexora Legal.',
        imageUrl:
          '/assets/aistudio/image_4b839c06.webp',
        altText: 'Expansion fiduciaire et d’entreprises',
        summary:
          'Nous renforçons notre présence dans le domaine juridique d’entreprise grâce au développement de structures fiduciaires et sociétaires à portée multijuridictionnelle, aux côtés de Nexora Legal.\n\nNotre vision: promouvoir des solutions juridiques stratégiques qui soutiennent la croissance des entreprises, la protection patrimoniale et l’expansion internationale.',
      },
      {
        id: 'news-2',
        date: '18/10/2026',
        category: 'BLOCKCHAIN & EXPANSION D’ENTREPRISE',
        title:
          'Nouvelles opportunités d’expansion pour nos entreprises grâce à la Blockchain',
        imageUrl:
          '/assets/aistudio/image_745c611b.webp',
        altText: 'Blockchain et expansion d’entreprise',
        summary:
          'Nous misons sur la technologie Blockchain comme outil pour stimuler l’innovation, explorer de nouveaux modèles économiques et ouvrir des opportunités d’expansion pour nos entreprises dans l’économie numérique.',
      },
      {
        id: 'news-3',
        date: '10/10/2026',
        category: 'MARKETING & CROISSANCE',
        title:
          'De nouvelles stratégies de positionnement numérique génèrent une croissance record de clients',
        imageUrl:
          '/assets/aistudio/image_8d3635cd.webp',
        altText: 'Marketing digital et interfaces immersives',
        summary:
          'La division marketing stratégique enregistre des performances exceptionnelles dans l’attraction d’audiences qualifiées, le référencement naturel à fort impact et les campagnes de conversion pour les différentes entités du holding.',
      },
      {
        id: 'news-4',
        date: '04/10/2026',
        category: 'IMMOBILIER & AFFAIRES IMMOBILIÈRES',
        title:
          'Nous connectons acheteurs et vendeurs pour des transactions réussies et développons des projets immobiliers.',
        imageUrl:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
        altText: 'Investissement immobilier et tokenisation',
        summary:
          'OHUZE GROUP intègre un portefeuille d’actifs immobiliers premium dans des zones stratégiques, facilitant des schémas de participation fractionnée et des rendements projetés garantis par des titres de propriété vérifiés.',
      },
      {
        id: 'news-5',
        date: '28/09/2026',
        category: 'SOLUTIONS D’ASSURANCE & PROTECTION FAMILIALE',
        title:
          'Notre courtier d’assurance protège chaque jour davantage de familles et vos biens.',
        imageUrl:
          '/assets/aistudio/image_11f3118a.webp',
        altText: 'Courtier d’assurance et protection intégrale',
        summary:
          'Nous œuvrons pour proposer des alternatives de protection et de garantie, aidant nos clients à identifier les options d’assurance adaptées à leurs besoins personnels, familiaux et professionnels.',
      },
      {
        id: 'news-6',
        date: '20/09/2026',
        category: 'EXPANSION & NOUVEAUX MARCHÉS',
        title:
          'Nous prévoyons d’aborder de nouveaux marchés et d’intégrer quatre lignes d’activité d’ici trois ans.',
        imageUrl:
          '/assets/aistudio/image_6ec71440.webp',
        altText: 'Expansion stratégique et nouveaux marchés',
        summary:
          'Notre holding amorce une nouvelle phase de croissance avec l’intégration progressive de quatre services. Parmi les domaines explorés figurent l’apprentissage des langues et le bien-être, incluant le développement personnel, l’activité physique et la santé.\n\nL’opportunité est majeure: le marché mondial de l’apprentissage des langues est estimé à 16 milliards USD d’ici 2026, tandis que l’économie globale du bien-être a atteint 6,8 billions USD en 2024. Notre objectif est de valoriser ces secteurs.',
      },
    ],
  },
  it: {
    partnersTitle: 'Partner e Alleanze Strategiche',
    partnersSubtitle: 'Supportato da leader aziendali globali',
    newsTitle: 'Notizie Recenti',
    closeText: 'Chiudi Comunicato',
    items: [
      {
        id: 'news-1',
        date: '25/10/2026',
        category: 'LEGALTECH & ESPANSIONE INTERNAZIONALE',
        title:
          'Espansione fiduciaria e societaria multigiurisdizionale con Nexora Legal.',
        imageUrl:
          '/assets/aistudio/image_4b839c06.webp',
        altText: 'Espansione fiduciaria e societaria',
        summary:
          'Rafforziamo la nostra presenza nell’ambito legale d’impresa attraverso lo sviluppo di strutture fiduciarie e societarie con portata multigiurisdizionale, insieme a Nexora Legal.\n\nLa nostra visione: promuovere soluzioni legali strategiche che accompagnino la crescita aziendale, la tutela del patrimonio e l’espansione globale.',
      },
      {
        id: 'news-2',
        date: '18/10/2026',
        category: 'BLOCKCHAIN & ESPANSIONE AZIENDALE',
        title:
          'Nuove opportunità di espansione per le nostre imprese attraverso la Blockchain',
        imageUrl:
          '/assets/aistudio/image_745c611b.webp',
        altText: 'Blockchain ed espansione aziendale',
        summary:
          'Puntiamo sulla tecnologia Blockchain come catalizzatore per promuovere l’innovazione, esplorare nuovi modelli di business e aprire opportunità di espansione per le nostre aziende nell’economia digitale.',
      },
      {
        id: 'news-3',
        date: '10/10/2026',
        category: 'MARKETING & CRESCITA',
        title:
          'Nuove strategie di posizionamento digitale registrano una crescita record di clienti',
        imageUrl:
          '/assets/aistudio/image_8d3635cd.webp',
        altText: 'Marketing digitale e interfacce immersive',
        summary:
          'Il dipartimento di marketing strategico raggiunge risultati straordinari nell’attrazione di pubblico qualificato, posizionamento organico di rilievo e percorsi di conversione per le unità di business della holding.',
      },
      {
        id: 'news-4',
        date: '04/10/2026',
        category: 'REAL ESTATE & BUSINESS IMMOBILIARE',
        title:
          'Connettiamo acquirenti e venditori per trattative di successo e sviluppo di progetti immobiliari.',
        imageUrl:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
        altText: 'Investimento immobiliare e tokenizzazione',
        summary:
          'OHUZE GROUP incorpora un portafoglio immobiliare prestigioso in nodi strategici, consentendo quote di partecipazione frazionata e rendimenti previsti certificati da atti notarili verificati.',
      },
      {
        id: 'news-5',
        date: '28/09/2026',
        category: 'SOLUZIONI ASSICURATIVE & PROTEZIONE FAMILIARE',
        title:
          'Il nostro broker assicurativo protegge ogni giorno più famiglie e i tuoi beni.',
        imageUrl:
          '/assets/aistudio/image_11f3118a.webp',
        altText: 'Broker assicurativo e protezione patrimoniale',
        summary:
          'Lavoriamo per offrire alternative di protezione e tutela, aiutando i clienti a selezionare soluzioni assicurative calibrate sulle loro necessità personali, familiari e d’impresa.',
      },
      {
        id: 'news-6',
        date: '20/09/2026',
        category: 'ESPANSIONE & NUOVI MERCATI',
        title:
          'Prevediamo di entrare in nuovi mercati e integrare quattro linee di business nei prossimi tre anni.',
        imageUrl:
          '/assets/aistudio/image_6ec71440.webp',
        altText: 'Espansione strategica e nuovi mercati',
        summary:
          'La holding prepara una nuova fase di sviluppo introducendo progressivamente quattro rami di attività, tra cui formazione linguistica e benessere, con focus su salute, sport e crescita personale.\n\nIl mercato globale delle lingue è stimato a 16 miliardi USD entro il 2026, mentre l’economia del benessere ha superato 6,8 trilioni USD nel 2024. Il nostro obiettivo è sviluppare valore concreto in questi comparti.',
      },
    ],
  },
  pt: {
    partnersTitle: 'Parceiros e Alianças Estratégicas',
    partnersSubtitle: 'Apoiado por líderes corporativos globais',
    newsTitle: 'Notícias Recentes',
    closeText: 'Fechar Comunicado',
    items: [
      {
        id: 'news-1',
        date: '25/10/2026',
        category: 'LEGALTECH & EXPANSÃO INTERNACIONAL',
        title:
          'Expansão fiduciária e societária multijurisdicional com a Nexora Legal.',
        imageUrl:
          '/assets/aistudio/image_4b839c06.webp',
        altText: 'Expansão fiduciária e societária',
        summary:
          'Fortalecemos nossa atuação no cenário jurídico corporativo desenvolvendo estruturas fiduciárias e societárias de alcance transfronteiriço, ao lado da Nexora Legal.\n\nNossa visão: impulsionar soluções jurídicas estratégicas que sustentem o crescimento das empresas, a proteção de patrimônio e a expansão global.',
      },
      {
        id: 'news-2',
        date: '18/10/2026',
        category: 'BLOCKCHAIN & EXPANSÃO EMPRESARIAL',
        title:
          'Novas oportunidades de expansão para nossas empresas por meio da Blockchain',
        imageUrl:
          '/assets/aistudio/image_745c611b.webp',
        altText: 'Blockchain e expansão empresarial',
        summary:
          'Apostamos na tecnologia Blockchain como ferramenta indispensável para fomentar inovação, desenvolver novos modelos de negócio e abrir frentes de expansão para nossas empresas na economia digital.',
      },
      {
        id: 'news-3',
        date: '10/10/2026',
        category: 'MARKETING & CRESCIMENTO',
        title:
          'Novas estratégias de posicionamento digital atingem recorde de atração de clientes',
        imageUrl:
          '/assets/aistudio/image_8d3635cd.webp',
        altText: 'Marketing digital e interfaces imersivas',
        summary:
          'Nossa divisão de marketing estratégico alcança números recordes em audiência qualificada, posicionamento de marca de alto impacto e funis de conversão para as empresas do grupo.',
      },
      {
        id: 'news-4',
        date: '04/10/2026',
        category: 'REAL ESTATE & NEGÓCIOS IMOBILIÁRIOS',
        title:
          'Conectamos compradores e vendedores para negociações de sucesso e desenvolvimento imobiliário.',
        imageUrl:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
        altText: 'Investimento imobiliário e tokenização',
        summary:
          'O OHUZE GROUP incorpora um portfólio de imóveis premium em locais estratégicos, viabilizando esquemas de propriedade fracionada tokenizada e rentabilidade respaldada por escrituras públicas.',
      },
      {
        id: 'news-5',
        date: '28/09/2026',
        category: 'SOLUÇÕES DE SEGUROS & PROTEÇÃO FAMILIAR',
        title:
          'Nossa corretora de seguros protege cada dia mais famílias e seu patrimônio.',
        imageUrl:
          '/assets/aistudio/image_11f3118a.webp',
        altText: 'Corretora de seguros e proteção patrimonial',
        summary:
          'Trabalhamos para aproximar alternativas de proteção e respaldo, auxiliando nossos clientes a identificar apólices adequadas às suas necessidades pessoais, familiares e corporativas.',
      },
      {
        id: 'news-6',
        date: '20/09/2026',
        category: 'EXPANSÃO & NOVOS MERCADOS',
        title:
          'Projetamos ingressar em novos mercados e incorporar quatro linhas de negócio nos próximos três anos.',
        imageUrl:
          '/assets/aistudio/image_6ec71440.webp',
        altText: 'Expansão estratégica e novos mercados',
        summary:
          'Nossa holding prepara uma nova etapa de crescimento com a integração gradual de quatro verticais. Entre as áreas exploradas estão o ensino de idiomas e o bem-estar, com iniciativas de saúde, condicionamento físico e mentalidade.\n\nO mercado de idiomas foi avaliado em USD 16 bilhões até 2026, enquanto o ecossistema do bem-estar movimentou USD 6,8 trilhões em 2024. Nosso objetivo é criar valor expressivo nesses setores.',
      },
    ],
  },
};

export const PartnersAndNewsSection: React.FC<PartnersAndNewsSectionProps> = ({
  currentLang,
}) => {
  const content = newsData[currentLang] || newsData.es;
  const items =
    content.items && content.items.length >= 6
      ? content.items
      : newsData.es.items;

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Sync selected modal item when currentLang changes
  useEffect(() => {
    if (selectedNews) {
      const updatedItem = items.find((it) => it.id === selectedNews.id);
      if (updatedItem) {
        setSelectedNews(updatedItem);
      }
    }
  }, [currentLang, items]);

  // Repeat partners array for continuous, smooth infinite marquee loop
  const marqueeList = [...PARTNER_ITEMS, ...PARTNER_ITEMS];

  return (
    <div className="main-container max-w-[1100px] w-full mx-auto px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden rounded-3xl">
      {/* Imagen de fondo fluida abstracta en tono bien bajo optimizada */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      {/* -------------------------------------- */}
      {/* SECCIÓN 1: SOCIOS Y ALIANZAS (SLIDER)  */}
      {/* -------------------------------------- */}
      <section id="alianzas" className="partners-section relative z-10">
        <h2>{content.partnersTitle}</h2>
        <p className="partners-subtitle">{content.partnersSubtitle}</p>

        <div className="partners-carousel">
          <div className="partners-track">
            {marqueeList.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="partner-card">
                {partner.logoUrl ? (
                  <div className="flex items-center gap-3.5 h-full">
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-slate-700/80 shrink-0 shadow-md ${partner.logoClass || 'object-cover'}`}
                    />
                    <span className="font-semibold text-slate-100 text-sm sm:text-base tracking-wide">{partner.name}</span>
                  </div>
                ) : (
                  <span className="font-semibold text-slate-100 text-sm sm:text-base tracking-wide">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* SECCIÓN 2: NOTICIAS RECIENTES (6 GRIDS)*/}
      {/* -------------------------------------- */}
      <section id="noticias" className="news-section relative z-10">
        <h2>{content.newsTitle}</h2>

        <div className="news-grid">
          {items.map((item) => (
            <article
              key={item.id}
              className="news-card"
              onClick={() => setSelectedNews(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedNews(item);
                }
              }}
            >
              <div className="news-image-wrapper">
                <span className="date-badge">{item.date}</span>
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="news-content">
                <span className="news-category">{item.category}</span>
                <h3 className="news-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal Popup with Full Article Details */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="glass-panel max-w-xl w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
              <img
                src={selectedNews.imageUrl}
                alt={selectedNews.altText}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
              <span className="date-badge">{selectedNews.date}</span>
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 text-left">
              <span className="news-category block mb-1">
                {selectedNews.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                {selectedNews.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans whitespace-pre-line">
                {selectedNews.summary}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 rounded-lg font-mono text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer shadow-md shadow-blue-500/20"
                >
                  {content.closeText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
