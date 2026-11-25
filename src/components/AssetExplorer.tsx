import React, { useState } from 'react';
import { Building2, ShieldCheck, FileCheck, Layers, ExternalLink, TrendingUp, CheckCircle2 } from 'lucide-react';
import { TokenizedAsset } from '../types';
import { Language, translations } from '../i18n/translations';

const SAMPLE_ASSETS: TokenizedAsset[] = [
  {
    id: 'OHUZ-RWA-01',
    name: 'Edificio Corporativo Puerto Santa Ana Prime',
    category: 'realestate',
    location: 'Guayaquil, Ecuador',
    totalValue: '$4,250,000',
    tokenPrice: '$100 USD / RWA-Token',
    apy: '9.4% Anual',
    fundedPercentage: 86,
    investorsCount: 342,
    contractAddress: '0x3B88...a941',
    status: 'Activo'
  },
  {
    id: 'OHUZ-RWA-02',
    name: 'Desarrollo Eco-Residencial Manta Bay Luxury',
    category: 'realestate',
    location: 'Manabí, Ecuador',
    totalValue: '$2,800,000',
    tokenPrice: '$50 USD / RWA-Token',
    apy: '11.2% Anual',
    fundedPercentage: 64,
    investorsCount: 189,
    contractAddress: '0x99C2...77D1',
    status: 'En Financiación'
  },
  {
    id: 'OHUZ-LGL-01',
    name: 'Pool Fiduciario Startups Ecuador Hub',
    category: 'legaltech',
    location: 'Quito, Ecuador & Delaware, USA',
    totalValue: '$1,950,000',
    tokenPrice: '$250 USD / LT-Share',
    apy: '12.8% Anual',
    fundedPercentage: 92,
    investorsCount: 128,
    contractAddress: '0x41F3...B022',
    status: 'Auditado'
  },
  {
    id: 'OHUZ-INS-01',
    name: 'Reserva Paramétrica Cobertura Catastrófica',
    category: 'insurance',
    location: 'Consorcio Multijurisdiccional',
    totalValue: '$6,500,000',
    tokenPrice: '$500 USD / ST-Bond',
    apy: '7.8% Anual',
    fundedPercentage: 98,
    investorsCount: 512,
    contractAddress: '0x7E12...EE59',
    status: 'Activo'
  }
];

interface AssetExplorerProps {
  currentLang: Language;
}

export const AssetExplorer: React.FC<AssetExplorerProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'realestate' | 'legaltech' | 'insurance'>('all');
  const [selectedAsset, setSelectedAsset] = useState<TokenizedAsset | null>(null);

  const filteredAssets = SAMPLE_ASSETS.filter((asset) => {
    if (activeFilter === 'all') return true;
    return asset.category === activeFilter;
  });

  return (
    <section id="tokenizacion" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
            <span>{t.tokenization.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {t.tokenization.title}
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            {t.tokenization.desc}
          </p>
        </div>

        {/* Functional Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tokenization.filterAll} ({SAMPLE_ASSETS.length})
          </button>
          <button
            onClick={() => setActiveFilter('realestate')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition cursor-pointer ${
              activeFilter === 'realestate'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tokenization.filterRealEstate}
          </button>
          <button
            onClick={() => setActiveFilter('legaltech')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition cursor-pointer ${
              activeFilter === 'legaltech'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tokenization.filterLegalTech}
          </button>
          <button
            onClick={() => setActiveFilter('insurance')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition cursor-pointer ${
              activeFilter === 'insurance'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tokenization.filterInsurance}
          </button>
        </div>
      </div>

      {/* Asset Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="glass-panel rounded-3xl p-6 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition"
          >
            <div>
              {/* Asset header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <span>{asset.id}</span>
                    <span aria-hidden="true">·</span>
                    <span>{asset.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{asset.name}</h3>
                </div>
                
                <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 whitespace-nowrap">
                  {asset.status}
                </span>
              </div>

              {/* Asset Key Metrics */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 mb-5">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">Valor Total</span>
                  <span className="text-base font-bold font-mono text-white tabular-nums">{asset.totalValue}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">Retorno Est.</span>
                  <span className="text-base font-bold font-mono text-emerald-400 tabular-nums">{asset.apy}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">Fracción Min.</span>
                  <span className="text-xs font-bold font-mono text-slate-300">{asset.tokenPrice.split('/')[0]}</span>
                </div>
              </div>

              {/* Funding Progress Bar */}
              <div className="space-y-1.5 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Progreso de Colocación</span>
                  <span className="text-cyan-400 font-bold tabular-nums">{asset.fundedPercentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${asset.fundedPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>{asset.investorsCount} Participantes</span>
                  <span>Smart Contract: {asset.contractAddress}</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setSelectedAsset(asset)}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2 transition"
              >
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ver Ficha Técnica</span>
              </button>
              <a
                href="#contacto"
                className="py-2.5 px-4 rounded-xl text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500 hover:text-black border border-cyan-400/50 flex items-center gap-1.5 transition"
              >
                <span>Consultar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Asset Inspection Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-cyan-500/40 relative">
            <button
              onClick={() => setSelectedAsset(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>{selectedAsset.id}</span>
              <span aria-hidden="true">·</span>
              <span className="uppercase">{selectedAsset.category}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{selectedAsset.name}</h3>
            <p className="text-xs text-slate-300 mb-6">{selectedAsset.location}</p>

            <div className="space-y-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono text-xs mb-6">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Valuación Auditada</span>
                <span className="text-white font-bold">{selectedAsset.totalValue}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Tasa Proyectada (APY)</span>
                <span className="text-emerald-400 font-bold">{selectedAsset.apy}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Precio por Token</span>
                <span className="text-white">{selectedAsset.tokenPrice}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Contrato Inteligente</span>
                <span className="text-cyan-400">{selectedAsset.contractAddress} (ERC-3643 Compliant)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Custodia Legal</span>
                <span className="text-slate-200">OHUZE Legal Node Ecuador & Panama Trust</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contacto"
                onClick={() => setSelectedAsset(null)}
                className="btn-neon-cyan flex-1 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-center"
              >
                SOLICITAR ACCESO INSTITUCIONAL
              </a>
              <button
                onClick={() => setSelectedAsset(null)}
                className="px-5 py-3 rounded-xl font-mono text-xs text-slate-300 bg-slate-800 hover:bg-slate-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
