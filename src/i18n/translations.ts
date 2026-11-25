export type Language = 'es' | 'en' | 'fr' | 'it' | 'pt';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'es', name: 'Español', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'Inglés', nativeName: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Francés', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portugués', nativeName: 'Português', flag: '🇧🇷' },
];

export const translations: Record<Language, {
  nav: {
    ecosystem: string;
    divisions: string;
    tokenization: string;
    simulator: string;
    contact: string;
  };
  hero: {
    kicker: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    btnExplore: string;
    btnAudit: string;
    btnSimulate: string;
    missionQuote: string;
    riskMitigation: string;
    multiJurisdiction: string;
    statAssets: string;
    statAssetsDesc: string;
    statNodes: string;
    statNodesDesc: string;
    statContracts: string;
    statContractsDesc: string;
  };
  divisions: {
    badge: string;
    title: string;
    subtitle: string;
    btnContinue: string;
    legalTitle: string;
    legalCategory: string;
    legalRealEstate: string;
    legalTax: string;
    legalCorporate: string;
    legalStartupQuestion: string;
    legalStartupDesc: string;
    eduTitle: string;
    eduCategory: string;
    eduBadge: string;
    eduHeadline: string;
    eduDesc: string;
    eduItem1: string;
    eduItem2: string;
    eduItem3: string;
    eduItem4: string;
    reTitle: string;
    reCategory: string;
    reQuestion: string;
    reDesc: string;
    reTag1: string;
    reTag2: string;
    reTag3: string;
    insTitle: string;
    insCategory: string;
    insDesc: string;
    insLife: string;
    insHealth: string;
    insVehicle: string;
    insAsset: string;
    insRetirementBadge: string;
    insRetirementTitle: string;
    insRetirementDesc: string;
  };
  tokenization: {
    badge: string;
    title: string;
    desc: string;
    filterAll: string;
    filterRealEstate: string;
    filterLegalTech: string;
    filterInsurance: string;
    totalValue: string;
    estYield: string;
    minFraction: string;
    placementProgress: string;
    participants: string;
    btnFactsheet: string;
    btnInquire: string;
  };
  simulator: {
    badge: string;
    title: string;
    desc: string;
    capitalLabel: string;
    presetBalanced: string;
    presetGrowth: string;
    presetConservative: string;
    btnRequest: string;
    projectedReturn: string;
    monthlyCashFlow: string;
    collateralProtection: string;
    weightedApyLabel: string;
  };
  terminal: {
    badge: string;
    title: string;
    desc: string;
    legalTitle: string;
    legalDesc: string;
    diversificationTitle: string;
    diversificationDesc: string;
    auditTitle: string;
    auditDesc: string;
    networkStatus: string;
    allActive: string;
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    hubEcuador: string;
    hubEcuadorDesc: string;
    hubCorporate: string;
    hubCorporateDesc: string;
    hubPhone: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    emailLabel: string;
    interestLabel: string;
    messageLabel: string;
    btnSend: string;
    optLegal: string;
    optRealEstate: string;
    optEducation: string;
    optInsurance: string;
    optInvestment: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}> = {
  es: {
    nav: {
      ecosystem: 'Ecosistema',
      divisions: 'Divisiones',
      tokenization: 'Tokenización',
      simulator: 'Simulador',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'MULTISECTORIAL HOLDING INFRASTRUCTURE',
      headlinePart1: 'Donde el Futuro Corporativo y Web3',
      headlinePart2: 'Se Sincronizan',
      subtitle: 'Infraestructura institucional de inversión que unifica Real Estate, tecnología blockchain, sector asegurador y soporte legal multi-jurisdiccional.',
      btnExplore: 'EXPLORAR ECOSISTEMA OHUZE',
      btnAudit: 'AUDITORÍA & LEGAL TECH',
      btnSimulate: 'Simular Asignación',
      missionQuote: '«Impulsamos un modelo multisectorial diseñado para mitigar riesgos y maximizar retornos. Unimos el Real Estate, la tecnología blockchain, los seguros y el respaldo legal en un solo holding de inversión, abriendo las puertas a una economía diversificada, sólida y con alto potencial de escalabilidad global.»',
      riskMitigation: 'Maximizamos el valor en los mercados globales de mayor rentabilidad.',
      multiJurisdiction: 'Escalabilidad Multi-Jurisdicción (Ecuador, Panamá, Delaware)',
      statAssets: 'Activos Tokenizados (RWA)',
      statAssetsDesc: 'Bienes raíces y vehículos de co-inversión',
      statNodes: 'Nodos Corporativos Activos',
      statNodesDesc: 'Ecuador Hub, Delaware & Panamá',
      statContracts: 'Contratos Auditados',
      statContractsDesc: 'Protección de contratos en el sistema Blockchain.',
    },
    divisions: {
      badge: 'Ecosistema de Inversión Multi-Eje · 4 Divisiones Estratégicas',
      title: 'Nuestras Divisiones Globales',
      subtitle: 'Infraestructura tradicional corporativa optimizada mediante soluciones descentralizadas, seguridad jurídica y tecnología punta.',
      btnContinue: 'CONTINUAR CON EL SERVICIO',
      legalTitle: 'Servicios Legales',
      legalCategory: 'División Legal Tech',
      legalRealEstate: 'Derecho Inmobiliario',
      legalTax: 'Derecho Tributario',
      legalCorporate: 'Empresarial y Compañías',
      legalStartupQuestion: '¿Tienes una startup o empresa y quieres aperturar en Ecuador legalmente?',
      legalStartupDesc: 'Acompañamiento legal integral, constitución de empresas (S.A.S., S.A / LTDA), estructuración fiscal, registro de marca y cumplimiento regulatorio adaptado a la economía digital y Web3.',
      eduTitle: 'Educación',
      eduCategory: 'Academia Web3',
      eduBadge: 'PROGRAMA DE ALTO IMPACTO',
      eduHeadline: 'Aprende Blockchain y Cripto Activos',
      eduDesc: 'Domina finanzas descentralizadas (DeFi), diseño y auditoría de contratos inteligentes, y regulación cripto para ejecutivos e inversores.',
      eduItem1: 'Módulos Ejecutivos',
      eduItem2: 'Finanzas DeFi Prácticas',
      eduItem3: 'Certificación On-Chain',
      eduItem4: 'Casos Prácticos Reales',
      reTitle: 'Real Estate',
      reCategory: 'INMOBILIARIO Y BIENES RAÍCES',
      reQuestion: '¿Buscas un terreno, casa, departamento o quieres vender?',
      reDesc: 'Te ayudamos en todo el ciclo inmobiliario con asesoría integral, valoración de activos y opciones avanzadas de financiamiento y co-inversión mediante tecnología Web3 y fraccionamiento tokenizado.',
      reTag1: 'Compra y Venta Directa',
      reTag2: 'Desarrollo de Terrenos',
      reTag3: 'Fraccionamiento RWA',
      insTitle: 'Seguros',
      insCategory: 'Protección Patrimonial',
      insDesc: 'Pólizas tradicionales de máxima cobertura integradas con modelos paramétricos de protección patrimonial:',
      insLife: 'Seguros de Vida',
      insHealth: 'Salud Integral',
      insVehicle: 'Vehicular',
      insAsset: 'Patrimonial y más',
      insRetirementBadge: 'PLAN DE RETIRO EN EE.UU.',
      insRetirementTitle: 'Esta es tu oportunidad de jubilarte en EE.UU. y retirarte con un gran capital',
      insRetirementDesc: 'Estrategias de retiro y capitalización en dólares diseñadas para hacer crecer tu patrimonio a largo plazo con respaldo asegurado.',
    },
    tokenization: {
      badge: 'RWA & Smart Contracts · Auditoría Certificada',
      title: 'Portafolio de Activos Tokenizados',
      desc: 'Activos tangibles e instrumentos financieros respaldados legalmente y fraccionados sobre contratos inteligentes.',
      filterAll: 'Todos',
      filterRealEstate: 'Real Estate',
      filterLegalTech: 'Legal Tech',
      filterInsurance: 'Seguros',
      totalValue: 'Valor Total',
      estYield: 'Retorno Est.',
      minFraction: 'Fracción Min.',
      placementProgress: 'Progreso de Colocación',
      participants: 'Participantes',
      btnFactsheet: 'Ver Ficha Técnica',
      btnInquire: 'Consultar',
    },
    simulator: {
      badge: 'Motor Algorítmico · Mitigación de Riesgos',
      title: 'Simulador de Diversificación Multisectorial',
      desc: 'Calcula la proyección estimada de retornos combinando activos tangibles (Real Estate), servicios fiduciarios de alta demanda (Legal Tech), rendimientos cripto y respaldo asegurador.',
      capitalLabel: 'Capital de Inversión Proyectado (USD)',
      presetBalanced: 'Balanceado',
      presetGrowth: 'Crecimiento',
      presetConservative: 'Conservador',
      btnRequest: 'SOLICITAR ESTRUCTURACIÓN',
      projectedReturn: 'Retorno Anual Proyectado',
      monthlyCashFlow: 'Flujo de Caja Mensual',
      collateralProtection: 'Blindaje de Capital Tangible',
      weightedApyLabel: 'Rendimiento Anual Ponderado',
    },
    terminal: {
      badge: 'Arquitectura Multisectorial · Respaldo Global',
      title: 'Sinergia Multisectorial Descentralizada',
      desc: 'Al fusionar el rigor jurídico con las finanzas descentralizadas y los activos tangibles, OHUZE construye un blindaje financiero contra la inflación y la volatilidad de los mercados convencionales.',
      legalTitle: 'Garantía Legal Multijurisdiccional',
      legalDesc: 'Estructuras corporativas adaptadas a normativas locales e internacionales (Ecuador S.A.S., filiales Delaware y fideicomisos Panamá).',
      diversificationTitle: 'Diversificación Inteligente Anti-Cíclica',
      diversificationDesc: 'Equilibrio constante entre flujo de caja inmobiliario predecible y rendimientos acelerados de tecnología Web3.',
      auditTitle: 'Auditoría On-Chain Continua',
      auditDesc: 'Contratos inteligentes con certificación formal que garantizan la propiedad fraccionada y liquidación automática.',
      networkStatus: 'Estado de Red Global:',
      allActive: '100% OPERATIVO',
    },
    contact: {
      badge: 'Atención Institucional · Nodos Globales',
      title: 'Conecta con Nuestro Equipo Directivo',
      desc: 'Ya sea que desees constituir tu startup en Ecuador, tokenizar un desarrollo inmobiliario, estructurar tu portafolio o asegurar tus operaciones, nuestros consultores especializados están a tu disposición.',
      hubEcuador: 'Nodo Principal Ecuador (Quito & Guayaquil)',
      hubEcuadorDesc: 'Av. República de El Salvador · Centro Financiero / Puerto Santa Ana',
      hubCorporate: 'Despacho Corporativo',
      hubCorporateDesc: 'holding@ohuze.com · legal@ohuze.com',
      hubPhone: 'Atención Telefónica & WhatsApp',
      formTitle: 'Solicitud de Consulta Directa',
      formDesc: 'Completa tus datos para agendar una sesión privada con nuestros directores de división.',
      nameLabel: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      interestLabel: 'Área de Interés Primaria',
      messageLabel: 'Mensaje o Especificación',
      btnSend: 'ENVIAR MENSAJE DIRECTO',
      optLegal: 'Servicios Legales & Apertura de Startups en Ecuador',
      optRealEstate: 'Real Estate: Compra / Venta / Fraccionamiento RWA',
      optEducation: 'Educación: Programa Blockchain & Cripto Activos',
      optInsurance: 'Seguros: Cobertura Patrimonial & Modelos Paramétricos',
      optInvestment: 'Inversión Institucional & Holding Partnership',
    },
    footer: {
      tagline: 'Holding Global Multisectorial & Legal Tech Ecosystem',
      rights: '© 2026 OHUZE Holding. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      ecosystem: 'Ecosystem',
      divisions: 'Divisions',
      tokenization: 'Tokenization',
      simulator: 'Simulator',
      contact: 'Contact',
    },
    hero: {
      kicker: 'MULTISECTORIAL HOLDING INFRASTRUCTURE',
      headlinePart1: 'Where Corporate Future and Web3',
      headlinePart2: 'Come Together',
      subtitle: 'Institutional investment infrastructure combining Real Estate, blockchain technology, insurance sector, and multi-jurisdictional legal backing.',
      btnExplore: 'EXPLORE OHUZE ECOSYSTEM',
      btnAudit: 'AUDIT & LEGAL TECH',
      btnSimulate: 'Simulate Allocation',
      missionQuote: '“We drive a multi-sector model designed to mitigate risks and maximize returns. We unite Real Estate, blockchain technology, insurance, and legal support into a single investment holding, opening the doors to a diversified, solid economy with high global scalability potential.”',
      riskMitigation: 'We maximize value in the highest-yield global markets.',
      multiJurisdiction: 'Multi-Jurisdictional Scalability (Ecuador, Panama, Delaware)',
      statAssets: 'Tokenized Assets (RWA)',
      statAssetsDesc: 'Real estate & co-investment vehicles',
      statNodes: 'Active Corporate Nodes',
      statNodesDesc: 'Ecuador Hub, Delaware & Panama',
      statContracts: 'Audited Contracts',
      statContractsDesc: 'Contract protection in the Blockchain system.',
    },
    divisions: {
      badge: 'Multi-Axis Investment Ecosystem · 4 Strategic Divisions',
      title: 'Our Global Divisions',
      subtitle: 'Traditional corporate infrastructure optimized with decentralized solutions, legal certainty, and cutting-edge technology.',
      btnContinue: 'PROCEED WITH SERVICE',
      legalTitle: 'Legal Services',
      legalCategory: 'Legal Tech Division',
      legalRealEstate: 'Real Estate Law',
      legalTax: 'Tax Law',
      legalCorporate: 'Corporate & Companies',
      legalStartupQuestion: 'Do you have a startup or company and want to incorporate legally in Ecuador?',
      legalStartupDesc: 'Comprehensive legal support, company incorporation (S.A.S., foreign branches), tax structuring, trademark registration, and regulatory compliance tailored to the digital and Web3 economy.',
      eduTitle: 'Education',
      eduCategory: 'Web3 Academy',
      eduBadge: 'HIGH IMPACT PROGRAM',
      eduHeadline: 'Learn Blockchain and Crypto Assets',
      eduDesc: 'Master decentralized finance (DeFi), real-world asset tokenization (RWA), smart contract design and auditing, and crypto regulation for executives and investors.',
      eduItem1: 'Executive Modules',
      eduItem2: '1:1 Direct Mentorship',
      eduItem3: 'On-Chain Certification',
      eduItem4: 'Hands-on Real Cases',
      reTitle: 'Real Estate',
      reCategory: 'Real Estate & Properties',
      reQuestion: 'Looking to buy land, a home, an apartment, or looking to sell?',
      reDesc: 'We assist across the entire real estate cycle with full advisory, asset valuation, and advanced financing and co-investment through Web3 technology and tokenized fractionalization.',
      reTag1: 'Direct Purchase & Sale',
      reTag2: 'Land Development',
      reTag3: 'RWA Fractionalization',
      insTitle: 'Insurance',
      insCategory: 'Wealth Protection',
      insDesc: 'Traditional maximum coverage policies integrated with parametric wealth protection models:',
      insLife: 'Life Insurance',
      insHealth: 'Comprehensive Health',
      insVehicle: 'Vehicular',
      insAsset: 'Property & More',
      insRetirementBadge: 'U.S. RETIREMENT PLAN',
      insRetirementTitle: 'Your opportunity to retire in the U.S. with substantial accumulated wealth',
      insRetirementDesc: 'Dollar-denominated retirement and wealth accumulation strategies engineered to grow your long-term capital with insured protection.',
    },
    tokenization: {
      badge: 'RWA & Smart Contracts · Certified Audit',
      title: 'Tokenized Asset Portfolio',
      desc: 'Legally backed tangible assets and financial instruments fractionalized on smart contracts.',
      filterAll: 'All',
      filterRealEstate: 'Real Estate',
      filterLegalTech: 'Legal Tech',
      filterInsurance: 'Insurance',
      totalValue: 'Total Value',
      estYield: 'Est. Yield',
      minFraction: 'Min. Fraction',
      placementProgress: 'Placement Progress',
      participants: 'Participants',
      btnFactsheet: 'View Fact Sheet',
      btnInquire: 'Inquire',
    },
    simulator: {
      badge: 'Algorithmic Engine · Risk Mitigation',
      title: 'Multisector Diversification Simulator',
      desc: 'Calculate estimated return projections combining tangible assets (Real Estate), high-demand fiduciary services (Legal Tech), crypto yields, and insurance backing.',
      capitalLabel: 'Projected Investment Capital (USD)',
      presetBalanced: 'Balanced',
      presetGrowth: 'Growth',
      presetConservative: 'Conservative',
      btnRequest: 'REQUEST STRUCTURING',
      projectedReturn: 'Projected Annual Return',
      monthlyCashFlow: 'Monthly Cash Flow',
      collateralProtection: 'Tangible Capital Shield',
      weightedApyLabel: 'Weighted Annual Yield (APY)',
    },
    terminal: {
      badge: 'Multisector Architecture · Global Backing',
      title: 'Decentralized Multi-Sector Synergy',
      desc: 'By fusing legal rigor with decentralized finance and tangible assets, OHUZE builds a financial shield against inflation and conventional market volatility.',
      legalTitle: 'Multi-Jurisdictional Legal Guarantee',
      legalDesc: 'Corporate structures adapted to local and international regulations (Ecuador S.A.S., Delaware subsidiaries, and Panama trusts).',
      diversificationTitle: 'Smart Counter-Cyclical Diversification',
      diversificationDesc: 'Consistent balance between predictable real estate cash flow and accelerated Web3 technology returns.',
      auditTitle: 'Continuous On-Chain Audit',
      auditDesc: 'Formally verified smart contracts guaranteeing fractional ownership and automated settlement.',
      networkStatus: 'Global Network Status:',
      allActive: '100% OPERATIONAL',
    },
    contact: {
      badge: 'Institutional Inquiries · Global Nodes',
      title: 'Connect with Our Executive Team',
      desc: 'Whether you want to incorporate your startup in Ecuador, tokenize real estate, structure your portfolio, or insure operations, our dedicated specialists are here.',
      hubEcuador: 'Main Ecuador Node (Quito & Guayaquil)',
      hubEcuadorDesc: 'Av. República de El Salvador · Financial Center / Puerto Santa Ana',
      hubCorporate: 'Corporate Office',
      hubCorporateDesc: 'holding@ohuze.com · legal@ohuze.com',
      hubPhone: 'Phone & WhatsApp Inquiries',
      formTitle: 'Direct Consultation Request',
      formDesc: 'Submit your details to schedule a private advisory session with our division directors.',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      interestLabel: 'Primary Area of Interest',
      messageLabel: 'Message or Project Scope',
      btnSend: 'SEND DIRECT MESSAGE',
      optLegal: 'Legal Services & Startup Incorporation in Ecuador',
      optRealEstate: 'Real Estate: Buy / Sell / RWA Tokenization',
      optEducation: 'Education: Blockchain & Crypto Assets Program',
      optInsurance: 'Insurance: Wealth Protection & Parametric Models',
      optInvestment: 'Institutional Investment & Holding Partnership',
    },
    footer: {
      tagline: 'Global Multisector Holding & Legal Tech Ecosystem',
      rights: '© 2026 OHUZE Holding. All rights reserved.',
    },
  },
  fr: {
    nav: {
      ecosystem: 'Écosystème',
      divisions: 'Divisions',
      tokenization: 'Tokenisation',
      simulator: 'Simulateur',
      contact: 'Contact',
    },
    hero: {
      kicker: 'INFRASTRUCTURE DE HOLDING MULTISECTORIEL',
      headlinePart1: 'Où le Futur de l’Entreprise et le Web3',
      headlinePart2: 'Se Synchronisent',
      subtitle: 'Infrastructure d’investissement institutionnel combinant immobilier, technologie blockchain, assurance paramétrique et cadre juridique multi-juridictionnel.',
      btnExplore: 'EXPLORER L’ÉCOSYSTÈME OHUZE',
      btnAudit: 'AUDIT ET LEGAL TECH',
      btnSimulate: 'Simuler l’Allocation',
      missionQuote: '«Nous promouvons un modèle multisectoriel conçu pour atténuer les risques et maximiser les rendements. Nous unissons l’immobilier, la blockchain, les assurances et le soutien juridique au sein d’un même holding d’investissement, ouvrant les portes à une économie diversifiée, solide et à fort potentiel de croissance mondiale.»',
      riskMitigation: 'Nous maximisons la valeur sur les marchés mondiaux les plus rentables.',
      multiJurisdiction: 'Évolutivité Multi-Juridictionnelle (Équateur, Panama, Delaware)',
      statAssets: 'Actifs Tokenisés (RWA)',
      statAssetsDesc: 'Immobilier et véhicules de co-investissement',
      statNodes: 'Nœuds d’Entreprise Actifs',
      statNodesDesc: 'Hub Équateur, Delaware et Panama',
      statContracts: 'Contrats Audités',
      statContractsDesc: 'Protection des contrats dans le système Blockchain.',
    },
    divisions: {
      badge: 'Écosystème d’Investissement Multi-Axes · 4 Divisions Stratégiques',
      title: 'Nos Divisions Mondiales',
      subtitle: 'Infrastructure d’entreprise traditionnelle optimisée par des solutions décentralisées et une sécurité juridique rigoureuse.',
      btnContinue: 'CONTINUER AVEC CE SERVICE',
      legalTitle: 'Services Juridiques',
      legalCategory: 'Division Legal Tech',
      legalRealEstate: 'Droit Immobilier',
      legalTax: 'Droit Fiscal',
      legalCorporate: 'Droit des Sociétés',
      legalStartupQuestion: 'Vous avez une startup et souhaitez vous implanter légalement en Équateur ?',
      legalStartupDesc: 'Accompagnement juridique complet, constitution d’entreprises (S.A.S., filiales), structuration fiscale et conformité réglementaire adaptée au Web3.',
      eduTitle: 'Éducation',
      eduCategory: 'Académie Web3',
      eduBadge: 'PROGRAMME HAUT IMPACT',
      eduHeadline: 'Apprenez la Blockchain et les Crypto-Actifs',
      eduDesc: 'Maîtrisez la DeFi, la tokenisation d’actifs réels (RWA), la conception de smart contracts et la régulation crypto pour dirigeants et investisseurs.',
      eduItem1: 'Modules Exécutifs',
      eduItem2: 'Mentorat Direct 1:1',
      eduItem3: 'Certification On-Chain',
      eduItem4: 'Études de Cas Pratiques',
      reTitle: 'Immobilier',
      reCategory: 'Immobilier & Biens Racines',
      reQuestion: 'Vous cherchez un terrain, une maison ou souhaitez vendre ?',
      reDesc: 'Nous vous accompagnons sur tout le cycle immobilier avec valorisation d’actifs et options de co-investissement fractionné via Web3.',
      reTag1: 'Achat & Vente Directs',
      reTag2: 'Aménagement Foncier',
      reTag3: 'Fractionnement RWA',
      insTitle: 'Assurances',
      insCategory: 'Protection Patrimoniale',
      insDesc: 'Polices traditionnelles à couverture maximale intégrées à des modèles de protection paramétriques intelligents :',
      insLife: 'Assurance Vie',
      insHealth: 'Santé Globale',
      insVehicle: 'Véhicules',
      insAsset: 'Patrimoine & Multi-risques',
      insRetirementBadge: 'PLAN DE RETRAITE AUX É.-U.',
      insRetirementTitle: 'Votre opportunité de prendre votre retraite aux États-Unis avec un capital solide',
      insRetirementDesc: 'Stratégies de retraite et de capitalisation en dollars conçues pour faire fructifier votre patrimoine à long terme avec garantie assurée.',
    },
    tokenization: {
      badge: 'RWA & Smart Contracts · Audit Certifié',
      title: 'Portefeuille d’Actifs Tokenisés',
      desc: 'Actifs tangibles et instruments financiers garantis par le droit et fractionnés sur contrats intelligents.',
      filterAll: 'Tous',
      filterRealEstate: 'Immobilier',
      filterLegalTech: 'Legal Tech',
      filterInsurance: 'Assurance',
      totalValue: 'Valeur Totale',
      estYield: 'Rendement Estimé',
      minFraction: 'Fraction Min.',
      placementProgress: 'Progression du Placement',
      participants: 'Participants',
      btnFactsheet: 'Fiche Technique',
      btnInquire: 'Consulter',
    },
    simulator: {
      badge: 'Moteur Algorithmique · Atténuation des Risques',
      title: 'Simulateur de Diversification Multisectorielle',
      desc: 'Calculez la projection des rendements en combinant actifs réels, services fiduciaires, rendements crypto et protection assurantielle.',
      capitalLabel: 'Capital d’Investissement Projeté (USD)',
      presetBalanced: 'Équilibré',
      presetGrowth: 'Croissance',
      presetConservative: 'Conservateur',
      btnRequest: 'DEMANDER UNE STRUCTURATION',
      projectedReturn: 'Rendement Annuel Projeté',
      monthlyCashFlow: 'Flux de Trésorerie Mensuel',
      collateralProtection: 'Protection par Collatéral Tangible',
      weightedApyLabel: 'Rendement Annuel Pondéré',
    },
    terminal: {
      badge: 'Architecture Multisectorielle · Soutien Mondial',
      title: 'Synergie Multisectorielle Décentralisée',
      desc: 'En associant rigueur juridique, finance décentralisée et actifs tangibles, OHUZE érige un bouclier financier contre l’inflation.',
      legalTitle: 'Garantie Juridique Multi-Juridictionnelle',
      legalDesc: 'Structures d’entreprise conformes aux cadres locaux et internationaux (Équateur S.A.S., Delaware, trusts Panama).',
      diversificationTitle: 'Diversification Intelligente Anti-Cyclique',
      diversificationDesc: 'Équilibre constant entre revenus locatifs prévisibles et croissance technologique Web3.',
      auditTitle: 'Audit On-Chain Continu',
      auditDesc: 'Contrats intelligents formellement vérifiés garantissant la copropriété et le règlement automatisé.',
      networkStatus: 'État du Réseau Global :',
      allActive: '100% OPÉRATIONNEL',
    },
    contact: {
      badge: 'Direction Institutionnelle · Nœuds Mondiaux',
      title: 'Échangez avec Notre Équipe Dirigeante',
      desc: 'Que vous souhaitiez créer votre entreprise en Équateur, tokeniser un projet ou structurer vos actifs, nos experts sont à votre écoute.',
      hubEcuador: 'Nœud Principal Équateur (Quito & Guayaquil)',
      hubEcuadorDesc: 'Av. República de El Salvador · Centre Financier / Puerto Santa Ana',
      hubCorporate: 'Bureau Corporatif',
      hubCorporateDesc: 'holding@ohuze.com · legal@ohuze.com',
      hubPhone: 'Téléphone & WhatsApp',
      formTitle: 'Demande de Consultation Directe',
      formDesc: 'Renseignez vos coordonnées pour planifier un entretien privé avec nos directeurs.',
      nameLabel: 'Nom Complet',
      emailLabel: 'Adresse E-mail',
      interestLabel: 'Domaine d’Intérêt Principal',
      messageLabel: 'Message ou Projet',
      btnSend: 'ENVOYER LE MESSAGE',
      optLegal: 'Services Juridiques & Création de Startups en Équateur',
      optRealEstate: 'Immobilier : Achat / Vente / Tokenisation RWA',
      optEducation: 'Éducation : Programme Blockchain & Crypto',
      optInsurance: 'Assurances : Protection Patrimoniale & Paramétrique',
      optInvestment: 'Investissement Institutionnel & Partenariat',
    },
    footer: {
      tagline: 'Holding Global Multisectoriel & Écosystème Legal Tech',
      rights: '© 2026 OHUZE Holding. Tous droits réservés.',
    },
  },
  it: {
    nav: {
      ecosystem: 'Ecosistema',
      divisions: 'Divisioni',
      tokenization: 'Tokenizzazione',
      simulator: 'Simulatore',
      contact: 'Contatto',
    },
    hero: {
      kicker: 'INFRASTRUTTURA DI HOLDING MULTISETTORIALE',
      headlinePart1: 'Dove il Futuro Aziendale e il Web3',
      headlinePart2: 'Si Sincronizzano',
      subtitle: 'Infrastruttura di investimento istituzionale che unifica Real Estate, tecnologia blockchain, assicurazioni parametriche e tutela legale multi-giurisdizionale.',
      btnExplore: 'ESPLORA L’ECOSISTEMA OHUZE',
      btnAudit: 'AUDIT & LEGAL TECH',
      btnSimulate: 'Simula Allocazione',
      missionQuote: '«Promuoviamo un modello multisettoriale ideato per mitigare i rischi e massimizzare i rendimenti. Uniamo Real Estate, blockchain, assicurazioni e supporto legale in un’unica holding di investimento, aprendo le porte a un’economia solida, diversificata e altamente scalabile.»',
      riskMitigation: 'Massimizziamo il valore nei mercati globali a più alto rendimento.',
      multiJurisdiction: 'Scalabilità Multi-Giurisdizionale (Ecuador, Panama, Delaware)',
      statAssets: 'Asset Tokenizzati (RWA)',
      statAssetsDesc: 'Immobili e veicoli di co-investimento',
      statNodes: 'Nodi Aziendali Attivi',
      statNodesDesc: 'Ecuador Hub, Delaware & Panama',
      statContracts: 'Contratti Certificati',
      statContractsDesc: 'Protezione dei contratti nel sistema Blockchain.',
    },
    divisions: {
      badge: 'Ecosistema di Investimento Multi-Asse · 4 Divisioni Strategiche',
      title: 'Le Nostre Divisioni Globali',
      subtitle: 'Infrastruttura aziendale tradizionale ottimizzata con soluzioni decentralizzate e massima certezza giuridica.',
      btnContinue: 'CONTINUA CON IL SERVIZIO',
      legalTitle: 'Servizi Legali',
      legalCategory: 'Divisione Legal Tech',
      legalRealEstate: 'Diritto Immobiliare',
      legalTax: 'Diritto Tributario',
      legalCorporate: 'Societario & D’Impresa',
      legalStartupQuestion: 'Hai una startup o azienda e vuoi avviare l’attività legalmente in Ecuador?',
      legalStartupDesc: 'Supporto legale completo, costituzione di società (S.A.S., filiali estere), pianificazione fiscale e conformità alle normative Web3.',
      eduTitle: 'Istruzione',
      eduCategory: 'Accademia Web3',
      eduBadge: 'PROGRAMMA AD ALTO IMPATTO',
      eduHeadline: 'Impara Blockchain e Crypto Asset',
      eduDesc: 'Padroneggia la finanza decentralizzata (DeFi), la tokenizzazione RWA, lo sviluppo di smart contract e la regolamentazione cripto per manager e investitori.',
      eduItem1: 'Moduli Esecutivi',
      eduItem2: 'Mentoring Diretto 1:1',
      eduItem3: 'Certificazione On-Chain',
      eduItem4: 'Casi Studio Reali',
      reTitle: 'Real Estate',
      reCategory: 'Immobiliare e Proprietà',
      reQuestion: 'Cerchi un terreno, una casa, un appartamento o vuoi vendere?',
      reDesc: 'Ti supportiamo lungo l’intero ciclo immobiliare con consulenza, perizia degli asset e frazionamento tokenizzato tramite Web3.',
      reTag1: 'Compravendita Diretta',
      reTag2: 'Sviluppo Terreni',
      reTag3: 'Frazionamento RWA',
      insTitle: 'Assicurazioni',
      insCategory: 'Protezione Patrimoniale',
      insDesc: 'Polizze tradizionali di massima copertura integrate con modelli parametrici di tutela patrimoniale:',
      insLife: 'Assicurazioni Vita',
      insHealth: 'Salute Integrale',
      insVehicle: 'Veicoli',
      insAsset: 'Patrimoniale & Altro',
      insRetirementBadge: 'PIANO PENSIONISTICO USA',
      insRetirementTitle: 'La tua opportunità di andare in pensione negli USA con un grande capitale',
      insRetirementDesc: 'Strategie pensionistiche e di accumulo in dollari progettate per far crescere il tuo patrimonio nel lungo periodo con protezione assicurata.',
    },
    tokenization: {
      badge: 'RWA & Smart Contracts · Audit Certificato',
      title: 'Portafoglio di Asset Tokenizzati',
      desc: 'Beni tangibili e strumenti finanziari tutelati legalmente e frazionati su smart contract.',
      filterAll: 'Tutti',
      filterRealEstate: 'Real Estate',
      filterLegalTech: 'Legal Tech',
      filterInsurance: 'Assicurazioni',
      totalValue: 'Valore Totale',
      estYield: 'Rendimento Stim.',
      minFraction: 'Frazione Min.',
      placementProgress: 'Progresso di Collocamento',
      participants: 'Partecipanti',
      btnFactsheet: 'Vedi Scheda Tecnica',
      btnInquire: 'Richiedi Info',
    },
    simulator: {
      badge: 'Motore Algoritmico · Mitigazione dei Rischi',
      title: 'Simulatore di Diversificazione Multisettoriale',
      desc: 'Calcola la proiezione dei rendimenti combinando asset tangibili, servizi fiduciari, rendimenti crypto e garanzia assicurativa.',
      capitalLabel: 'Capitale di Investimento Previsto (USD)',
      presetBalanced: 'Bilanciato',
      presetGrowth: 'Crescita',
      presetConservative: 'Conservativo',
      btnRequest: 'RICHIEDI STRUTTURAZIONE',
      projectedReturn: 'Rendimento Annuo Stimato',
      monthlyCashFlow: 'Flusso di Cassa Mensile',
      collateralProtection: 'Tutela del Capitale Tangibile',
      weightedApyLabel: 'Rendimento Annuo Ponderato',
    },
    terminal: {
      badge: 'Architettura Multisettoriale · Garanzia Globale',
      title: 'Sinergia Multisettoriale Decentralizzata',
      desc: 'Unendo rigore giuridico, finanza decentralizzata e beni tangibili, OHUZE edifica uno scudo finanziario contro l’inflazione.',
      legalTitle: 'Garanzia Legale Multi-Giurisdizionale',
      legalDesc: 'Strutture societarie conformi alle leggi locali e internazionali (Ecuador S.A.S., sussidiarie Delaware e trust Panama).',
      diversificationTitle: 'Diversificazione Intelligente Anti-Ciclica',
      diversificationDesc: 'Equilibrio costante tra entrate immobiliari stabili e rendimenti accelerati del Web3.',
      auditTitle: 'Audit On-Chain Continuo',
      auditDesc: 'Smart contract verificati che garantiscono la proprietà frazionata e liquidazioni automatiche.',
      networkStatus: 'Stato Rete Globale:',
      allActive: '100% OPERATIVO',
    },
    contact: {
      badge: 'Attenzione Istituzionale · Nodi Globali',
      title: 'Contatta il Nostro Team Direttivo',
      desc: 'Che tu voglia costituire la tua startup in Ecuador, tokenizzare un immobile o strutturare il tuo portafoglio, i nostri esperti sono pronti ad assisterti.',
      hubEcuador: 'Nodo Principale Ecuador (Quito & Guayaquil)',
      hubEcuadorDesc: 'Av. República de El Salvador · Centro Finanziario / Puerto Santa Ana',
      hubCorporate: 'Sede Aziendale',
      hubCorporateDesc: 'holding@ohuze.com · legal@ohuze.com',
      hubPhone: 'Telefono & WhatsApp',
      formTitle: 'Richiesta di Consulenza Diretta',
      formDesc: 'Inserisci i tuoi dati per fissare una sessione riservata con i nostri direttori di divisione.',
      nameLabel: 'Nome e Cognome',
      emailLabel: 'Email',
      interestLabel: 'Area di Interesse Principale',
      messageLabel: 'Messaggio o Dettagli del Progetto',
      btnSend: 'INVIA MESSAGGIO DIRETTO',
      optLegal: 'Servizi Legali & Costituzione Startup in Ecuador',
      optRealEstate: 'Real Estate: Compravendita / Tokenizzazione RWA',
      optEducation: 'Istruzione: Programma Blockchain & Crypto Asset',
      optInsurance: 'Assicurazioni: Tutela Patrimoniale & Modelli Parametrici',
      optInvestment: 'Investimento Istituzionale & Holding Partnership',
    },
    footer: {
      tagline: 'Holding Globale Multisettoriale & Ecosistema Legal Tech',
      rights: '© 2026 OHUZE Holding. Tutti i diritti riservati.',
    },
  },
  pt: {
    nav: {
      ecosystem: 'Ecossistema',
      divisions: 'Divisões',
      tokenization: 'Tokenização',
      simulator: 'Simulador',
      contact: 'Contato',
    },
    hero: {
      kicker: 'INFRAESTRUTURA DE HOLDING MULTISSETORIAL',
      headlinePart1: 'Onde o Futuro Corporativo e a Web3',
      headlinePart2: 'Se Sincronizam',
      subtitle: 'Infraestrutura de investimento institucional que integra Real Estate, tecnologia blockchain, seguros paramétricos e suporte jurídico multijurisdicional.',
      btnExplore: 'EXPLORAR ECOSSISTEMA OHUZE',
      btnAudit: 'AUDITORIA & LEGAL TECH',
      btnSimulate: 'Simular Alocação',
      missionQuote: '«Impulsionamos um modelo multissetorial desenhado para mitigar riscos e maximizar retornos. Unimos Real Estate, blockchain, seguros e respaldo jurídico em uma única holding de investimento, abrindo as portas para uma economia diversificada, sólida e com alto potencial de escala global.»',
      riskMitigation: 'Maximizamos o valor nos mercados globais de maior rentabilidade.',
      multiJurisdiction: 'Escalabilidade Multijurisdicional (Equador, Panamá, Delaware)',
      statAssets: 'Ativos Tokenizados (RWA)',
      statAssetsDesc: 'Imóveis e veículos de co-investimento',
      statNodes: 'Nós Corporativos Ativos',
      statNodesDesc: 'Hub Equador, Delaware & Panamá',
      statContracts: 'Contratos Auditados',
      statContractsDesc: 'Proteção de contratos no sistema Blockchain.',
    },
    divisions: {
      badge: 'Ecossistema de Investimento Multi-Eixos · 4 Divisões Estratégicas',
      title: 'Nossas Divisões Globais',
      subtitle: 'Infraestrutura corporativa tradicional otimizada por soluções descentralizadas e rigorosa segurança jurídica.',
      btnContinue: 'CONTINUAR COM O SERVIÇO',
      legalTitle: 'Serviços Jurídicos',
      legalCategory: 'Divisão Legal Tech',
      legalRealEstate: 'Direito Imobiliário',
      legalTax: 'Direito Tributário',
      legalCorporate: 'Empresarial e Societário',
      legalStartupQuestion: 'Tem uma startup ou empresa e quer abrir operações legais no Equador?',
      legalStartupDesc: 'Assessoria jurídica integral, constituição de empresas (S.A.S., filiais estrangeiras), estruturação fiscal e conformidade regulatória para a Web3.',
      eduTitle: 'Educação',
      eduCategory: 'Academia Web3',
      eduBadge: 'PROGRAMA DE ALTO IMPACTO',
      eduHeadline: 'Aprenda Blockchain e Criptoativos',
      eduDesc: 'Domine finanças descentralizadas (DeFi), tokenização de ativos reais (RWA), criação de smart contracts e regulação cripto para executivos e investidores.',
      eduItem1: 'Módulos Executivos',
      eduItem2: 'Mentoria Direta 1:1',
      eduItem3: 'Certificação On-Chain',
      eduItem4: 'Estudos de Casos Reais',
      reTitle: 'Real Estate',
      reCategory: 'Imobiliário e Bens Raízes',
      reQuestion: 'Procura um terreno, casa, apartamento ou quer vender um imóvel?',
      reDesc: 'Apoiamos todo o ciclo imobiliário com avaliação de ativos, financiamento avançado e fracionamento tokenizado com tecnologia Web3.',
      reTag1: 'Compra e Venda Direta',
      reTag2: 'Desenvolvimento de Terrenos',
      reTag3: 'Fracionamento RWA',
      insTitle: 'Seguros',
      insCategory: 'Proteção Patrimonial',
      insDesc: 'Apólices tradicionais de cobertura máxima integradas a modelos paramétricos de proteção de patrimônio:',
      insLife: 'Seguro de Vida',
      insHealth: 'Saúde Integral',
      insVehicle: 'Veicular',
      insAsset: 'Patrimonial e mais',
      insRetirementBadge: 'PLANO DE APOSENTADORIA NOS EUA',
      insRetirementTitle: 'Esta é a sua oportunidade de se aposentar nos EUA com um grande patrimônio',
      insRetirementDesc: 'Estratégias de aposentadoria e acumulação em dólar desenvolvidas para multiplicar seu capital no longo prazo com respaldo garantido.',
    },
    tokenization: {
      badge: 'RWA & Smart Contracts · Auditoria Certificada',
      title: 'Portfólio de Ativos Tokenizados',
      desc: 'Ativos tangíveis e instrumentos financeiros respaldados juridicamente e fracionados em contratos inteligentes.',
      filterAll: 'Todos',
      filterRealEstate: 'Real Estate',
      filterLegalTech: 'Legal Tech',
      filterInsurance: 'Seguros',
      totalValue: 'Valor Total',
      estYield: 'Retorno Est.',
      minFraction: 'Fração Mín.',
      placementProgress: 'Progresso da Colocação',
      participants: 'Participantes',
      btnFactsheet: 'Ver Ficha Técnica',
      btnInquire: 'Consultar',
    },
    simulator: {
      badge: 'Motor Algorítmico · Mitigação de Riscos',
      title: 'Simulador de Diversificação Multissetorial',
      desc: 'Calcule a projeção de retornos combinando ativos tangíveis, serviços fiduciários, rendimentos cripto e respaldo securitário.',
      capitalLabel: 'Capital de Investimento Projetado (USD)',
      presetBalanced: 'Equilibrado',
      presetGrowth: 'Crescimento',
      presetConservative: 'Conservador',
      btnRequest: 'SOLICITAR ESTRUTURAÇÃO',
      projectedReturn: 'Retorno Anual Projetado',
      monthlyCashFlow: 'Fluxo de Caixa Mensal',
      collateralProtection: 'Blindagem por Colateral Tangível',
      weightedApyLabel: 'Rendimento Anual Ponderado',
    },
    terminal: {
      badge: 'Arquitetura Multissetorial · Respaldo Global',
      title: 'Sinergia Multissetorial Descentralizada',
      desc: 'Ao combinar rigor jurídico com finanças descentralizadas e ativos tangíveis, a OHUZE constrói um escudo financeiro contra a inflação.',
      legalTitle: 'Garantia Jurídica Multijurisdicional',
      legalDesc: 'Estruturas corporativas adaptadas a normas locais e internacionais (Equador S.A.S., Delaware e trusts Panamá).',
      diversificationTitle: 'Diversificação Inteligente Anti-Cíclica',
      diversificationDesc: 'Equilíbrio contínuo entre receita imobiliária previsível e retornos acelerados da tecnologia Web3.',
      auditTitle: 'Auditoria On-Chain Contínua',
      auditDesc: 'Contratos inteligentes verificados formalmente que asseguram propriedade fracionada e liquidação automatizada.',
      networkStatus: 'Status da Rede Global:',
      allActive: '100% OPERACIONAL',
    },
    contact: {
      badge: 'Atendimento Institucional · Nós Globais',
      title: 'Conecte-se com Nossa Equipe Diretiva',
      desc: 'Quer abrir sua startup no Equador, tokenizar um imóvel ou proteger seus ativos corporativos? Nossos diretores estão à disposição.',
      hubEcuador: 'Nó Principal Equador (Quito & Guayaquil)',
      hubEcuadorDesc: 'Av. República de El Salvador · Centro Financeiro / Puerto Santa Ana',
      hubCorporate: 'Escritório Corporativo',
      hubCorporateDesc: 'holding@ohuze.com · legal@ohuze.com',
      hubPhone: 'Telefone & WhatsApp',
      formTitle: 'Solicitação de Consulta Direta',
      formDesc: 'Preencha seus dados para agendar uma reunião particular com os diretores de divisão.',
      nameLabel: 'Nome Completo',
      emailLabel: 'E-mail',
      interestLabel: 'Área de Interesse Principal',
      messageLabel: 'Mensagem ou Escopo do Projeto',
      btnSend: 'ENVIAR MENSAGEM DIRETA',
      optLegal: 'Serviços Jurídicos & Abertura de Startups no Equador',
      optRealEstate: 'Real Estate: Compra / Venda / Tokenização RWA',
      optEducation: 'Educação: Programa Blockchain & Criptoativos',
      optInsurance: 'Seguros: Proteção Patrimonial & Modelos Paramétricos',
      optInvestment: 'Investimento Institucional & Parceria na Holding',
    },
    footer: {
      tagline: 'Holding Global Multissetorial & Ecossistema Legal Tech',
      rights: '© 2026 OHUZE Holding. Todos os direitos reservados.',
    },
  },
};

