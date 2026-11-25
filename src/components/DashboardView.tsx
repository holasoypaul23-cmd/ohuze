import React, { useState } from 'react';
import {
  Layers,
  Calculator,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Globe2,
  DollarSign,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Lock,
  Building,
  Scale,
  Award,
  Zap
} from 'lucide-react';
import { AssetExplorer } from './AssetExplorer';
import { PortfolioCalculator } from './PortfolioCalculator';
import { Language, translations } from '../i18n/translations';
import { DivisionId } from '../types';

interface DashboardViewProps {
  currentLang: Language;
  onClose?: () => void;
  onOpenServiceModal?: (division: DivisionId) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  currentLang,
  onClose,
  onOpenServiceModal,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'assets' | 'calculator' | 'metrics'>('assets');
  const [selectedPlanSummary, setSelectedPlanSummary] = useState<string | null>(null);

  // Multilingual labels for dashboard tabs
  const tabLabels = {
    es: {
      title: 'OHUZE Terminal & Dashboard Ejecutivo',
      subtitle: 'Plataforma institucional de gestión de activos tokenizados, rendimientos fiduciarios y diversificación estratégica.',
      tabAssets: 'Explorador RWA',
      tabCalc: 'Simulador de Retorno',
      tabMetrics: 'Arquitectura & Métricas',
      back: 'Volver al Inicio',
      kpi1Title: 'Activos en Gestión (AUM)',
      kpi1Value: '$15,500,000 USD',
      kpi1Sub: '+14.2% crecimiento anual',
      kpi2Title: 'Inversionistas Verificados',
      kpi2Value: '1,171 Cuentas',
      kpi2Sub: 'Multijurisdiccional',
      kpi3Title: 'Rendimiento Ponderado (APY)',
      kpi3Value: '10.3% Anual',
      kpi3Sub: 'Proyección garantizada',
      kpi4Title: 'Auditoría Smart Contract',
      kpi4Value: '100% Verificado',
      kpi4Sub: 'Nexora Legal Compliance',
      divisionBreakdown: 'Distribución de Capital por División',
      jurisdictions: 'Respaldo Fiduciario y Jurisdicciones Activas',
      ctaConsultation: 'Solicitar Asesoría Institucional',
    },
    en: {
      title: 'OHUZE Terminal & Executive Dashboard',
      subtitle: 'Institutional platform for tokenized assets management, fiduciary yields, and strategic diversification.',
      tabAssets: 'RWA Explorer',
      tabCalc: 'Yield Simulator',
      tabMetrics: 'Architecture & Metrics',
      back: 'Back to Home',
      kpi1Title: 'Assets Under Management',
      kpi1Value: '$15,500,000 USD',
      kpi1Sub: '+14.2% annual growth',
      kpi2Title: 'Verified Investors',
      kpi2Value: '1,171 Accounts',
      kpi2Sub: 'Cross-jurisdictional',
      kpi3Title: 'Weighted APY Yield',
      kpi3Value: '10.3% Annual',
      kpi3Sub: 'Guaranteed projection',
      kpi4Title: 'Smart Contract Audit',
      kpi4Value: '100% Verified',
      kpi4Sub: 'Nexora Legal Compliance',
      divisionBreakdown: 'Capital Allocation by Division',
      jurisdictions: 'Fiduciary Backing & Active Jurisdictions',
      ctaConsultation: 'Request Institutional Advisory',
    },
    fr: {
      title: 'Terminal OHUZE & Dashboard Exécutif',
      subtitle: 'Plateforme institutionnelle de gestion d’actifs tokenisés, rendements fiduciaires et diversification stratégique.',
      tabAssets: 'Explorateur RWA',
      tabCalc: 'Simulateur de Rendement',
      tabMetrics: 'Architecture & Métriques',
      back: 'Retour à l’Accueil',
      kpi1Title: 'Actifs sous Gestion (AUM)',
      kpi1Value: '15 500 000 USD',
      kpi1Sub: '+14.2% croissance annuelle',
      kpi2Title: 'Investisseurs Vérifiés',
      kpi2Value: '1 171 Comptes',
      kpi2Sub: 'Transjuridictionnel',
      kpi3Title: 'Rendement Pondéré (APY)',
      kpi3Value: '10.3% Annuel',
      kpi3Sub: 'Projection garantie',
      kpi4Title: 'Audit Smart Contract',
      kpi4Value: '100% Vérifié',
      kpi4Sub: 'Nexora Legal Compliance',
      divisionBreakdown: 'Allocation du Capital par Division',
      jurisdictions: 'Garantie Fiduciaire et Juridictions Actives',
      ctaConsultation: 'Demander un Conseil Institutionnel',
    },
    it: {
      title: 'Terminale OHUZE & Dashboard Esecutivo',
      subtitle: 'Piattaforma istituzionale di gestione degli asset tokenizzati, rendimenti fiduciari e diversificazione strategica.',
      tabAssets: 'Explorer RWA',
      tabCalc: 'Simulatore di Rendimento',
      tabMetrics: 'Architettura & Metriche',
      back: 'Torna alla Home',
      kpi1Title: 'Asset in Gestione (AUM)',
      kpi1Value: '$15.500.000 USD',
      kpi1Sub: '+14.2% crescita annuale',
      kpi2Title: 'Investitori Verificati',
      kpi2Value: '1.171 Conti',
      kpi2Sub: 'Multigiurisdizionale',
      kpi3Title: 'Rendimento Ponderato (APY)',
      kpi3Value: '10.3% Annuo',
      kpi3Sub: 'Proiezione garantita',
      kpi4Title: 'Audit Smart Contract',
      kpi4Value: '100% Verificato',
      kpi4Sub: 'Nexora Legal Compliance',
      divisionBreakdown: 'Distribuzione del Capitale per Divisione',
      jurisdictions: 'Garanzia Fiduciaria e Giurisdizioni Attive',
      ctaConsultation: 'Richiedi Consulenza Istituzionale',
    },
    pt: {
      title: 'Terminal OHUZE & Dashboard Executivo',
      subtitle: 'Plataforma institucional de gestão de ativos tokenizados, rendimentos fiduciários e diversificação estratégica.',
      tabAssets: 'Explorador RWA',
      tabCalc: 'Simulador de Retorno',
      tabMetrics: 'Arquitetura & Métricas',
      back: 'Voltar ao Início',
      kpi1Title: 'Ativos sob Gestão (AUM)',
      kpi1Value: '$15.500.000 USD',
      kpi1Sub: '+14.2% crescimento anual',
      kpi2Title: 'Investidores Verificados',
      kpi2Value: '1.171 Contas',
      kpi2Sub: 'Multijurisdicional',
      kpi3Title: 'Rendimento Ponderado (APY)',
      kpi3Value: '10.3% Anual',
      kpi3Sub: 'Projeção garantida',
      kpi4Title: 'Auditoria Smart Contract',
      kpi4Value: '100% Verificado',
      kpi4Sub: 'Nexora Legal Compliance',
      divisionBreakdown: 'Alocação de Capital por Divisão',
      jurisdictions: 'Respaldo Fiduciário e Jurisdições Ativas',
      ctaConsultation: 'Solicitar Assessoria Institucional',
    },
  };

  const labels = tabLabels[currentLang] || tabLabels.es;

  return (
    <div className="min-h-screen bg-[#070b1a] text-slate-100 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* Top Header Row with Navigation Back */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>OHUZE Global Intelligence • Terminal v2.4</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {labels.title}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl mt-1 leading-relaxed">
              {labels.subtitle}
            </p>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel border border-purple-500/40 hover:border-pink-500/70 text-slate-200 hover:text-white transition shadow-md cursor-pointer shrink-0 active:scale-95 text-xs font-mono font-semibold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 text-pink-400" />
              <span>{labels.back}</span>
            </button>
          )}
        </div>

        {/* Executive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg relative overflow-hidden group hover:border-cyan-500/40 transition">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">{labels.kpi1Title}</span>
              <DollarSign className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">{labels.kpi1Value}</div>
            <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{labels.kpi1Sub}</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg relative overflow-hidden group hover:border-purple-500/40 transition">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">{labels.kpi2Title}</span>
              <Globe2 className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">{labels.kpi2Value}</div>
            <div className="text-xs text-purple-300 mt-1 font-medium">
              <span>{labels.kpi2Sub}</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg relative overflow-hidden group hover:border-pink-500/40 transition">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">{labels.kpi3Title}</span>
              <Zap className="w-4 h-4 text-pink-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">{labels.kpi3Value}</div>
            <div className="text-xs text-pink-300 mt-1 font-medium">
              <span>{labels.kpi3Sub}</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg relative overflow-hidden group hover:border-amber-500/40 transition">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">{labels.kpi4Title}</span>
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">{labels.kpi4Value}</div>
            <div className="text-xs text-amber-300 mt-1 font-medium">
              <span>{labels.kpi4Sub}</span>
            </div>
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-fit shadow-md overflow-x-auto">
          <button
            onClick={() => setActiveTab('assets')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'assets'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-pink-950/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{labels.tabAssets}</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'calculator'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-pink-950/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{labels.tabCalc}</span>
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'metrics'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-pink-950/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>{labels.tabMetrics}</span>
          </button>
        </div>

        {/* Tab Content 1: Asset Explorer */}
        {activeTab === 'assets' && (
          <div className="animate-in fade-in duration-200">
            <AssetExplorer currentLang={currentLang} />
          </div>
        )}

        {/* Tab Content 2: Portfolio Calculator */}
        {activeTab === 'calculator' && (
          <div className="animate-in fade-in duration-200 space-y-4">
            <PortfolioCalculator
              currentLang={currentLang}
              onPlanSelected={(summary) => {
                setSelectedPlanSummary(summary);
                if (onOpenServiceModal) {
                  onOpenServiceModal('legales');
                }
              }}
            />
          </div>
        )}

        {/* Tab Content 3: Architecture & Institutional Metrics */}
        {activeTab === 'metrics' && (
          <div className="animate-in fade-in duration-200 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Allocation Breakdown */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{labels.divisionBreakdown}</h3>
                    <p className="text-xs text-slate-400">Estructura de respaldo multicartera del holding</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-cyan-300 font-semibold">1. Bienes Raíces & Tokenización RWA</span>
                      <span className="text-white font-bold">40% ($6.2M USD)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '40%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-purple-300 font-semibold">2. LegalTech & Pools Fiduciarios</span>
                      <span className="text-white font-bold">25% ($3.8M USD)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-pink-300 font-semibold">3. Infraestructura Web3 & Software</span>
                      <span className="text-white font-bold">20% ($3.1M USD)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" style={{ width: '20%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-amber-300 font-semibold">4. Corretaje de Seguros & Cobertura Patrimonial</span>
                      <span className="text-white font-bold">15% ($2.4M USD)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Jurisdictions & Legal Backing */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{labels.jurisdictions}</h3>
                      <p className="text-xs text-slate-400">Marcos legales fiduciarios con validez internacional</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Ecuador</div>
                        <div className="text-slate-400 text-[11px]">Ley de Mercado de Valores y Fideicomisos Mercantiles</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Delaware, USA</div>
                        <div className="text-slate-400 text-[11px]">Estructuración corporativa LLC & Series fiduciarias</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Estonia (UE)</div>
                        <div className="text-slate-400 text-[11px]">Licencias VASP para custodia y emisión de activos digitales</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Suiza (Zug)</div>
                        <div className="text-slate-400 text-[11px]">Protocolos de auditoría criptográfica y validación DLT</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onOpenServiceModal && onOpenServiceModal('legales')}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-950/40 transition active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-200" />
                    <span>{labels.ctaConsultation}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default DashboardView;
