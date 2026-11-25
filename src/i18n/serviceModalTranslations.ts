import { Language } from './translations';
import { DivisionId } from '../types';

export interface DivisionModalData {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  serviceOptions: string[];
  defaultText: string;
}

export interface ModalUILabels {
  nodeOnline: string;
  dispatchTag: string;
  closeLabel: string;
  closeBtn: string;
  labelModule: string;
  metaDirect: string;
  labelIdentity: string;
  placeholderIdentity: string;
  labelContact: string;
  placeholderContact: string;
  labelSpecs: string;
  metaBrief: string;
  btnSubmit: string;
  btnPlatform: string;
  footer: string;
  successBadge: string;
  hashAssigned: string;
  copyHash: string;
  copied: string;
  successMsg: string;
  payloadMetrics: string;
  logEntity: string;
  logEndpoint: string;
  logModule: string;
  btnConnectWa: string;
  waIntro: string;
  waTicket: string;
  waDivision: string;
  waReq: string;
  waHolder: string;
  waContact: string;
  waSpecs: string;
  waConfirmationSummary: (code: string, service: string, name: string, contact: string) => string;
}

export interface LanguageModalContent {
  divisions: Record<DivisionId, DivisionModalData>;
  ui: ModalUILabels;
}

export const serviceModalTranslations: Record<Language, LanguageModalContent> = {
  es: {
    divisions: {
      legales: {
        title: 'Servicios Legales & Startups',
        subtitle: 'NODO LEGAL TECH ECUADOR & LATAM',
        badge: 'PROTOCOL::NEXORA_LEGAL_V3',
        description:
          'Especialistas en Derecho Inmobiliario, Tributario y Empresarial. Si tienes una Startup o Empresa y deseas aperturar operaciones en Ecuador legalmente, te guiamos en todo el proceso.',
        serviceOptions: [
          'Apertura de Empresa en Ecuador (S.A.S. / S.A / LTDA)',
          'Derecho Inmobiliario & Revisión Contractual',
          'Estructuración Tributaria Corporativa',
          'Cumplimiento Web3 & Contratos Inteligentes',
        ],
        defaultText:
          'Hola, me interesa constituir una empresa en Ecuador / recibir asesoría sobre derecho inmobiliario y tributario...',
      },
      educacion: {
        title: 'Programa Cripto & Blockchain',
        subtitle: 'ACADEMIA EJECUTIVA WEB3',
        badge: 'MODULE::DEFI_SMART_CONTRACTS',
        description:
          'Inscríbete en el programa especializado: "Aprende Blockchain y Cripto Activos". Diseñado para ejecutivos, emprendedores e inversores.',
        serviceOptions: [
          'Programa Completo: Aprende Blockchain y Cripto Activos',
          'Módulo: Finanzas Descentralizadas (DeFi) Avanzado',
        ],
        defaultText:
          'Hola, deseo recibir el temario del programa de Blockchain y Cripto Activos y fechas de inicio...',
      },
      realestate: {
        title: 'Bienes Raíces & Tokenización',
        subtitle: 'DESARROLLO E INVERSIÓN INMOBILIARIA',
        badge: 'ASSET_CLASS::RWA_TOKENIZATION',
        description:
          '¿Buscas un terreno, casa, departamento o quieres vender? Te ayudamos con soluciones tradicionales y fraccionamiento tokenizado.',
        serviceOptions: [
          'Compra de Terreno / Casa / Departamento',
          'Venta de Propiedad / Valoración de Mercado',
          'Desarrollo Inmobiliario y Terrenos Estratégicos',
          'Tokenización y Fraccionamiento de Inmueble (RWA)',
        ],
        defaultText:
          'Hola, estoy buscando (comprar/vender/tokenizar) una propiedad o terreno en Ecuador...',
      },
      seguros: {
        title: 'Pólizas & Cobertura Patrimonial',
        subtitle: 'PROTECCIÓN MULTI-RIESGO INTEGRAL',
        badge: 'RISK_PROTOCOL::PARAMETRIC_SHIELD',
        description:
          'Seguros de Vida, Salud Integral, Vehicular, Patrimonial y más con respaldo corporativo integral y modelos paramétricos.',
        serviceOptions: [
          'Seguro de Vida Individual / Colectivo',
          'Seguro de Salud Integral Corporativo',
          'Seguro Vehicular (Flotas y Particulares)',
          'Seguro Patrimonial / Todo Riesgo y Cobertura Paramétrica',
        ],
        defaultText:
          'Hola, requiero una cotización y comparativa de seguros para mi empresa / patrimonio...',
      },
    },
    ui: {
      nodeOnline: '// NODE_ONLINE',
      dispatchTag: 'DESPACHO: WHATSAPP_DIRECTO',
      closeLabel: 'Cerrar ventana',
      closeBtn: 'Cerrar Ventana',
      labelModule: '// 01. MÓDULO O SERVICIO REQUERIDO',
      metaDirect: '[selección directa]',
      labelIdentity: '// 02. IDENTIDAD / RAZÓN SOCIAL',
      placeholderIdentity: 'Ej. Juan Pérez / Tech Corp',
      labelContact: '// 03. CONTACTO / CANAL SEGURO',
      placeholderContact: 'contacto@empresa.com / +593...',
      labelSpecs: '// 04. ESPECIFICACIONES / DETALLES DEL PROYECTO',
      metaBrief: '[payload brief]',
      btnSubmit: 'TRANSMITIR SOLICITUD CIFRADA · WHATSAPP',
      btnPlatform: 'ACCEDER A LA PLATAFORMA (NEXORA PLATFORM)',
      footer: 'Canal cifrado punto a punto • OHUZE HOLDING GLOBAL HUB',
      successBadge: '✦ SOLICITUD CIFRADA REGISTRADA EXITOSAMENTE ✦',
      hashAssigned: 'Hash Asignado:',
      copyHash: 'Copiar Hash',
      copied: 'Copiado',
      successMsg:
        'Un asesor especializado del nodo corporativo de OHUZE GROUP revisará los parámetros de tu requerimiento y responderá vía canal seguro.',
      payloadMetrics: '// METRICAS DEL PAYLOAD & REGISTRO',
      logEntity: '> ENTIDAD:',
      logEndpoint: '> ENDPOINT:',
      logModule: '> MÓDULO:',
      btnConnectWa: 'CONECTAR CANAL WHATSAPP',
      waIntro: '¡Hola OHUZE GROUP! Deseo solicitar el siguiente servicio:',
      waTicket: 'Hash / Ticket:',
      waDivision: 'División:',
      waReq: 'Requerimiento:',
      waHolder: 'Titular / Entidad:',
      waContact: 'Contacto / Endpoint:',
      waSpecs: 'Especificaciones:',
      waConfirmationSummary: (code, service, name, contact) =>
        `¡Hola OHUZE GROUP! Registré la solicitud con Hash ${code} sobre ${service}. Titular: ${name}. Contacto: ${contact}.`,
    },
  },
  en: {
    divisions: {
      legales: {
        title: 'Legal Services & Startups',
        subtitle: 'LEGAL TECH NODE ECUADOR & LATAM',
        badge: 'PROTOCOL::NEXORA_LEGAL_V3',
        description:
          'Specialists in Real Estate, Tax, and Corporate Law. If you have a Startup or Company and want to legally start operations in Ecuador, we guide you through the entire process.',
        serviceOptions: [
          'Company Incorporation in Ecuador (S.A.S. / S.A / LTDA)',
          'Real Estate Law & Contract Review',
          'Corporate Tax Structuring',
          'Web3 Compliance & Smart Contracts',
        ],
        defaultText:
          'Hello, I am interested in incorporating a company in Ecuador / receiving advice on real estate and corporate tax law...',
      },
      educacion: {
        title: 'Crypto & Blockchain Program',
        subtitle: 'WEB3 EXECUTIVE ACADEMY',
        badge: 'MODULE::DEFI_SMART_CONTRACTS',
        description:
          'Enroll in the specialized program: "Learn Blockchain and Crypto Assets". Designed for executives, entrepreneurs, and investors.',
        serviceOptions: [
          'Full Program: Learn Blockchain and Crypto Assets',
          'Advanced Module: Decentralized Finance (DeFi)',
        ],
        defaultText:
          'Hello, I would like to receive the curriculum for the Blockchain and Crypto Assets program and starting dates...',
      },
      realestate: {
        title: 'Real Estate & Tokenization',
        subtitle: 'PROPERTY DEVELOPMENT & INVESTMENT',
        badge: 'ASSET_CLASS::RWA_TOKENIZATION',
        description:
          'Looking for land, a house, apartment, or wanting to sell? We assist you with traditional transactions and tokenized fractional ownership.',
        serviceOptions: [
          'Purchase of Land / House / Apartment',
          'Property Sale / Market Valuation',
          'Real Estate Development & Strategic Land',
          'Real Estate Tokenization & Fractionalization (RWA)',
        ],
        defaultText:
          'Hello, I am looking to (buy/sell/tokenize) a property or land in Ecuador...',
      },
      seguros: {
        title: 'Insurance Policies & Wealth Protection',
        subtitle: 'COMPREHENSIVE MULTI-RISK SHIELD',
        badge: 'RISK_PROTOCOL::PARAMETRIC_SHIELD',
        description:
          'Life, Corporate Health, Vehicle, Asset Protection and more backed by global reinsurance and parametric underwriting.',
        serviceOptions: [
          'Individual / Group Life Insurance',
          'Comprehensive Corporate Health Insurance',
          'Vehicle Insurance (Fleets & Private)',
          'Asset / All-Risk & Parametric Protection',
        ],
        defaultText:
          'Hello, I require an insurance quote and comparison for my company / assets...',
      },
    },
    ui: {
      nodeOnline: '// NODE_ONLINE',
      dispatchTag: 'DISPATCH: WHATSAPP_DIRECT',
      closeLabel: 'Close window',
      closeBtn: 'Close Window',
      labelModule: '// 01. REQUIRED MODULE OR SERVICE',
      metaDirect: '[direct selection]',
      labelIdentity: '// 02. IDENTITY / COMPANY NAME',
      placeholderIdentity: 'e.g., John Doe / Tech Corp',
      labelContact: '// 03. SECURE CONTACT / ENDPOINT',
      placeholderContact: 'contact@company.com / +1...',
      labelSpecs: '// 04. PROJECT SPECIFICATIONS / DETAILS',
      metaBrief: '[payload brief]',
      btnSubmit: 'TRANSMIT ENCRYPTED REQUEST · WHATSAPP',
      btnPlatform: 'ACCESS PLATFORM (NEXORA PLATFORM)',
      footer: 'End-to-end encrypted channel • OHUZE HOLDING GLOBAL HUB',
      successBadge: '✦ ENCRYPTED REQUEST SUCCESSFULLY REGISTERED ✦',
      hashAssigned: 'Assigned Hash:',
      copyHash: 'Copy Hash',
      copied: 'Copied',
      successMsg:
        'A dedicated advisor from the OHUZE GROUP corporate node will review your specifications and reply via a secure channel.',
      payloadMetrics: '// PAYLOAD_METRICS & LOG ENTRY',
      logEntity: '> ENTITY:',
      logEndpoint: '> ENDPOINT:',
      logModule: '> MODULE:',
      btnConnectWa: 'CONNECT TO WHATSAPP CHANNEL',
      waIntro: 'Hello OHUZE GROUP! I would like to request the following service:',
      waTicket: 'Hash / Ticket:',
      waDivision: 'Division:',
      waReq: 'Requirement:',
      waHolder: 'Client / Entity:',
      waContact: 'Contact / Endpoint:',
      waSpecs: 'Specifications:',
      waConfirmationSummary: (code, service, name, contact) =>
        `Hello OHUZE GROUP! I registered the request with Hash ${code} for ${service}. Client: ${name}. Contact: ${contact}.`,
    },
  },
  fr: {
    divisions: {
      legales: {
        title: 'Services Juridiques & Startups',
        subtitle: 'NOEUD LEGAL TECH EQUATEUR & LATAM',
        badge: 'PROTOCOL::NEXORA_LEGAL_V3',
        description:
          'Spécialistes en droit immobilier, fiscal et des affaires. Création de société et conseil juridique en Équateur et LATAM.',
        serviceOptions: [
          'Création d’Entreprise en Équateur (S.A.S. / S.A / LTDA)',
          'Droit Immobilier & Examen de Contrats',
          'Structuration Fiscale des Entreprises',
          'Conformité Web3 & Smart Contracts',
        ],
        defaultText:
          'Bonjour, je souhaite constituer une société en Équateur ou recevoir des conseils juridiques...',
      },
      educacion: {
        title: 'Programme Crypto & Blockchain',
        subtitle: 'ACADÉMIE EXÉCUTIVE WEB3',
        badge: 'MODULE::DEFI_SMART_CONTRACTS',
        description:
          'Programme spécialisé: Apprendre la Blockchain et les Actifs Numériques pour dirigeants et investisseurs.',
        serviceOptions: [
          'Programme Complet: Blockchain et Crypto-actifs',
          'Module Avancé: Finance Décentralisée (DeFi)',
        ],
        defaultText:
          'Bonjour, je souhaite recevoir le programme de formation Blockchain et les dates...',
      },
      realestate: {
        title: 'Immobilier & Tokenisation',
        subtitle: 'DÉVELOPPEMENT & INVESTISSEMENT IMMOBILIER',
        badge: 'ASSET_CLASS::RWA_TOKENIZATION',
        description:
          'Achat, vente, valorisation et fractionnement tokenisé d’actifs immobiliers (RWA).',
        serviceOptions: [
          'Achat de Terrain / Maison / Appartement',
          'Vente de Propriété / Évaluation Immobilière',
          'Développement Immobilier & Terrains Stratégiques',
          'Tokenisation et Fractionnement d’Immeuble (RWA)',
        ],
        defaultText:
          'Bonjour, je recherche un bien immobilier ou un projet de tokenisation en Équateur...',
      },
      seguros: {
        title: 'Polices d’Assurance & Protection Patrimoniale',
        subtitle: 'COUVERTURE MULTIRISQUE GLOBALE',
        badge: 'RISK_PROTOCOL::PARAMETRIC_SHIELD',
        description:
          'Assurance vie, santé entreprise, véhicules et protection patrimoniale paramétrique.',
        serviceOptions: [
          'Assurance Vie Individuelle / Collective',
          'Assurance Santé Globale Entreprise',
          'Assurance Flotte Automobile & Véhicules',
          'Protection Patrimoniale & Multirisque',
        ],
        defaultText:
          'Bonjour, je souhaite obtenir un devis comparatif d’assurance pour mon patrimoine...',
      },
    },
    ui: {
      nodeOnline: '// NODE_ONLINE',
      dispatchTag: 'EXPÉDITION: WHATSAPP_DIRECT',
      closeLabel: 'Fermer la fenêtre',
      closeBtn: 'Fermer la Fenêtre',
      labelModule: '// 01. MODULE OU SERVICE REQUIS',
      metaDirect: '[sélection directe]',
      labelIdentity: '// 02. IDENTITÉ / RAISON SOCIALE',
      placeholderIdentity: 'Ex. Jean Dupont / Entreprise',
      labelContact: '// 03. CONTACT / CANAL SÉCURISÉ',
      placeholderContact: 'contact@entreprise.com / +33...',
      labelSpecs: '// 04. SPÉCIFICATIONS / DÉTAILS DU PROJET',
      metaBrief: '[dossier technique]',
      btnSubmit: 'TRANSMETTRE LA DEMANDE CHIFFRÉE · WHATSAPP',
      btnPlatform: 'ACCÉDER À LA PLATEFORME (NEXORA PLATFORM)',
      footer: 'Canal chiffré de bout en bout • OHUZE HOLDING GLOBAL HUB',
      successBadge: '✦ DEMANDE CHIFFRÉE ENREGISTRÉE AVEC SUCCÈS ✦',
      hashAssigned: 'Hash Attribué:',
      copyHash: 'Copier le Hash',
      copied: 'Copié',
      successMsg:
        'Un conseiller spécialisé du pôle OHUZE GROUP examinera votre demande et vous répondra sur un canal sécurisé.',
      payloadMetrics: '// MÉTRIQUES DU PAYLOAD & LOG',
      logEntity: '> ENTITÉ:',
      logEndpoint: '> CONTACT:',
      logModule: '> MODULE:',
      btnConnectWa: 'CONNECTER LE CANAL WHATSAPP',
      waIntro: 'Bonjour OHUZE GROUP! Je souhaite solliciter le service suivant:',
      waTicket: 'Hash / Ticket:',
      waDivision: 'Division:',
      waReq: 'Demande:',
      waHolder: 'Titulaire / Société:',
      waContact: 'Contact:',
      waSpecs: 'Détails:',
      waConfirmationSummary: (code, service, name, contact) =>
        `Bonjour OHUZE GROUP! J'ai enregistré la demande avec le Hash ${code} pour ${service}. Titulaire: ${name}. Contact: ${contact}.`,
    },
  },
  pt: {
    divisions: {
      legales: {
        title: 'Serviços Jurídicos & Startups',
        subtitle: 'NÓ LEGAL TECH EQUADOR & LATAM',
        badge: 'PROTOCOL::NEXORA_LEGAL_V3',
        description:
          'Especialistas em Direito Imobiliário, Tributário e Societário para expansão legal no Equador e América Latina.',
        serviceOptions: [
          'Abertura de Empresa no Equador (S.A.S. / S.A / LTDA)',
          'Direito Imobiliário & Revisão Contratual',
          'Estruturação Tributária Corporativa',
          'Conformidade Web3 & Contratos Inteligentes',
        ],
        defaultText:
          'Olá, tenho interesse em abrir uma empresa no Equador / receber assessoria jurídica...',
      },
      educacion: {
        title: 'Programa Cripto & Blockchain',
        subtitle: 'ACADEMIA EXECUTIVA WEB3',
        badge: 'MODULE::DEFI_SMART_CONTRACTS',
        description:
          'Programa executivo especializado em Blockchain, Criptoativos e Finanças Descentralizadas.',
        serviceOptions: [
          'Programa Completo: Aprenda Blockchain e Criptoativos',
          'Módulo Avançado: Finanças Descentralizadas (DeFi)',
        ],
        defaultText:
          'Olá, gostaria de receber a ementa do curso de Blockchain e Criptoativos...',
      },
      realestate: {
        title: 'Imóveis & Tokenização',
        subtitle: 'DESENVOLVIMENTO & INVESTIMENTO IMOBILIÁRIO',
        badge: 'ASSET_CLASS::RWA_TOKENIZATION',
        description:
          'Compra, venda, avaliação e tokenização fracionada de ativos imobiliários (RWA).',
        serviceOptions: [
          'Compra de Terreno / Casa / Apartamento',
          'Venda de Imóvel / Avaliação de Mercado',
          'Desenvolvimento Imobiliário & Terrenos Estratégicos',
          'Tokenização e Fracionamento de Imóvel (RWA)',
        ],
        defaultText:
          'Olá, procuro comprar/vender/tokenizar um imóvel ou terreno no Equador...',
      },
      seguros: {
        title: 'Apólices & Proteção Patrimonial',
        subtitle: 'PROTEÇÃO MULTIRISCO INTEGRAL',
        badge: 'RISK_PROTOCOL::PARAMETRIC_SHIELD',
        description:
          'Seguro de Vida, Saúde Corporativo, Frotas e Proteção Patrimonial paramétrica.',
        serviceOptions: [
          'Seguro de Vida Individual / Coletivo',
          'Seguro Saúde Corporativo Integral',
          'Seguro Veicular (Frotas e Particulares)',
          'Seguro Patrimonial / Todos os Riscos',
        ],
        defaultText:
          'Olá, solicito cotação e comparativo de seguros para minha empresa/patrimônio...',
      },
    },
    ui: {
      nodeOnline: '// NODE_ONLINE',
      dispatchTag: 'DESPACHO: WHATSAPP_DIRETO',
      closeLabel: 'Fechar janela',
      closeBtn: 'Fechar Janela',
      labelModule: '// 01. MÓDULO OU SERVIÇO REQUISITADO',
      metaDirect: '[seleção direta]',
      labelIdentity: '// 02. IDENTIDADE / RAZÃO SOCIAL',
      placeholderIdentity: 'Ex. João Silva / Tech Corp',
      labelContact: '// 03. CONTATO / CANAL SEGURO',
      placeholderContact: 'contato@empresa.com / +55...',
      labelSpecs: '// 04. ESPECIFICAÇÕES / DETALHES DO PROJETO',
      metaBrief: '[payload brief]',
      btnSubmit: 'TRANSMITIR SOLICITAÇÃO CRIPTOGRAFADA · WHATSAPP',
      btnPlatform: 'ACESSAR PLATAFORMA (NEXORA PLATFORM)',
      footer: 'Canal criptografado ponta a ponta • OHUZE HOLDING GLOBAL HUB',
      successBadge: '✦ SOLICITAÇÃO REGISTRADA COM SUCESSO ✦',
      hashAssigned: 'Hash Atribuído:',
      copyHash: 'Copiar Hash',
      copied: 'Copiado',
      successMsg:
        'Um consultor especializado do nó corporativo do OHUZE GROUP analisará suas especificações e responderá via canal seguro.',
      payloadMetrics: '// MÉTRICAS DO PAYLOAD & REGISTRO',
      logEntity: '> ENTIDADE:',
      logEndpoint: '> CONTATO:',
      logModule: '> MÓDULO:',
      btnConnectWa: 'CONECTAR CANAL WHATSAPP',
      waIntro: 'Olá OHUZE GROUP! Gostaria de solicitar o seguinte serviço:',
      waTicket: 'Hash / Ticket:',
      waDivision: 'Divisão:',
      waReq: 'Requisito:',
      waHolder: 'Titular / Entidade:',
      waContact: 'Contato:',
      waSpecs: 'Especificações:',
      waConfirmationSummary: (code, service, name, contact) =>
        `Olá OHUZE GROUP! Registrei a solicitação com o Hash ${code} sobre ${service}. Titular: ${name}. Contato: ${contact}.`,
    },
  },
  it: {
    divisions: {
      legales: {
        title: 'Servizi Legali & Startups',
        subtitle: 'NODO LEGAL TECH ECUADOR & LATAM',
        badge: 'PROTOCOL::NEXORA_LEGAL_V3',
        description:
          'Specialisti in Diritto Immobiliare, Tributario e Societario per avviare operazioni legali in Ecuador e America Latina.',
        serviceOptions: [
          'Costituzione Società in Ecuador (S.A.S. / S.A / LTDA)',
          'Diritto Immobiliare & Revisione Contrattuale',
          'Pianificazione Fiscale Aziendale',
          'Conformità Web3 & Smart Contracts',
        ],
        defaultText:
          'Salve, sono interessato ad avviare un’azienda in Ecuador / ricevere consulenza legale...',
      },
      educacion: {
        title: 'Programma Crypto & Blockchain',
        subtitle: 'ACCADEMIA ESECUTIVA WEB3',
        badge: 'MODULE::DEFI_SMART_CONTRACTS',
        description:
          'Programma specializzato su Blockchain, Asset Digitali e Finanza Decentralizzata per manager e investitori.',
        serviceOptions: [
          'Programma Completo: Blockchain e Cripto-attività',
          'Modulo Avanzato: Finanza Decentralizzata (DeFi)',
        ],
        defaultText:
          'Salve, desidero ricevere il programma di formazione Blockchain e le date di inizio...',
      },
      realestate: {
        title: 'Immobiliare & Tokenizzazione',
        subtitle: 'SVILUPPO & INVESTIMENTI IMMOBILIARI',
        badge: 'ASSET_CLASS::RWA_TOKENIZATION',
        description:
          'Acquisto, vendita, stima e tokenizzazione frazionata di immobili e terreni (RWA).',
        serviceOptions: [
          'Acquisto di Terreno / Casa / Appartamento',
          'Vendita Proprietà / Valutazione di Mercato',
          'Sviluppo Immobiliare & Terreni Strategici',
          'Tokenizzazione e Frazionamento di Immobili (RWA)',
        ],
        defaultText:
          'Salve, cerco una proprietà o terreno da acquistare/vendere/tokenizzare in Ecuador...',
      },
      seguros: {
        title: 'Polizze & Protezione Patrimoniale',
        subtitle: 'PROTEZIONE MULTIRICHIO INTEGRALE',
        badge: 'RISK_PROTOCOL::PARAMETRIC_SHIELD',
        description:
          'Assicurazione Vita, Sanitaria Aziendale, Veicoli e Protezione Patrimoniale parametrica.',
        serviceOptions: [
          'Assicurazione Vita Individuale / Collettiva',
          'Assicurazione Sanitaria Aziendale Completa',
          'Assicurazione Veicoli (Flotte e Privati)',
          'Protezione Patrimoniale / All-Risk & Parametrica',
        ],
        defaultText:
          'Salve, richiedo un preventivo assicurativo per la mia azienda / patrimonio...',
      },
    },
    ui: {
      nodeOnline: '// NODE_ONLINE',
      dispatchTag: 'INVIO: WHATSAPP_DIRETTO',
      closeLabel: 'Chiudi finestra',
      closeBtn: 'Chiudi Finestra',
      labelModule: '// 01. MODULO O SERVIZIO RICHIESTO',
      metaDirect: '[selezione diretta]',
      labelIdentity: '// 02. IDENTITÀ / RAGIONE SOCIALE',
      placeholderIdentity: 'Es. Mario Rossi / Azienda',
      labelContact: '// 03. CONTATTO / CANALE SICURO',
      placeholderContact: 'contatto@azienda.com / +39...',
      labelSpecs: '// 04. SPECIFICHE / DETTAGLI DEL PROGETTO',
      metaBrief: '[payload brief]',
      btnSubmit: 'TRASMETTI RICHIESTA CRITTOGRAFATA · WHATSAPP',
      btnPlatform: 'ACCEDI ALLA PIATTAFORMA (NEXORA PLATFORM)',
      footer: 'Canale crittografato end-to-end • OHUZE HOLDING GLOBAL HUB',
      successBadge: '✦ RICHIESTA REGISTRATA CON SUCCESSO ✦',
      hashAssigned: 'Hash Assegnato:',
      copyHash: 'Copia Hash',
      copied: 'Copiato',
      successMsg:
        'Un consulente dedicato del nodo OHUZE GROUP esaminerà la tua richiesta e risponderà su canale sicuro.',
      payloadMetrics: '// METRICHE DEL PAYLOAD & LOG',
      logEntity: '> ENTITÀ:',
      logEndpoint: '> CONTATTO:',
      logModule: '> MODULO:',
      btnConnectWa: 'CONNETTI CANALE WHATSAPP',
      waIntro: 'Salve OHUZE GROUP! Desidero richiedere il seguente servizio:',
      waTicket: 'Hash / Ticket:',
      waDivision: 'Divisione:',
      waReq: 'Richiesta:',
      waHolder: 'Titolare / Entità:',
      waContact: 'Contatto:',
      waSpecs: 'Specifiche:',
      waConfirmationSummary: (code, service, name, contact) =>
        `Salve OHUZE GROUP! Ho registrato la richiesta con Hash ${code} su ${service}. Titolare: ${name}. Contatto: ${contact}.`,
    },
  },
};
