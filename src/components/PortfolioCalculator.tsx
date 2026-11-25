import React, { useState, useMemo } from 'react';
import { Calculator, Shield, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface PortfolioCalculatorProps {
  currentLang: Language;
  onPlanSelected: (summary: string) => void;
}

export const PortfolioCalculator: React.FC<PortfolioCalculatorProps> = ({ currentLang, onPlanSelected }) => {
  const t = translations[currentLang];
  const [capital, setCapital] = useState<number>(50000);
  const [allocationRealEstate, setAllocationRealEstate] = useState<number>(40);
  const [allocationLegalTech, setAllocationLegalTech] = useState<number>(25);
  const [allocationWeb3, setAllocationWeb3] = useState<number>(20);
  const [allocationInsurance, setAllocationInsurance] = useState<number>(15);

  // Sector return assumptions
  const APY_RATES = {
    realEstate: 9.4,
    legalTech: 12.8,
    web3: 15.2,
    insurance: 7.2
  };

  const handlePreset = (preset: 'balanced' | 'growth' | 'protective') => {
    if (preset === 'balanced') {
      setAllocationRealEstate(40);
      setAllocationLegalTech(25);
      setAllocationWeb3(20);
      setAllocationInsurance(15);
    } else if (preset === 'growth') {
      setAllocationRealEstate(30);
      setAllocationLegalTech(35);
      setAllocationWeb3(30);
      setAllocationInsurance(5);
    } else if (preset === 'protective') {
      setAllocationRealEstate(50);
      setAllocationLegalTech(15);
      setAllocationWeb3(10);
      setAllocationInsurance(25);
    }
  };

  const calculated = useMemo(() => {
    const totalAlloc = allocationRealEstate + allocationLegalTech + allocationWeb3 + allocationInsurance;
    const factor = totalAlloc > 0 ? 100 / totalAlloc : 1;

    const normRE = allocationRealEstate * factor;
    const normLT = allocationLegalTech * factor;
    const normW3 = allocationWeb3 * factor;
    const normINS = allocationInsurance * factor;

    const weightedApy =
      (normRE * APY_RATES.realEstate +
        normLT * APY_RATES.legalTech +
        normW3 * APY_RATES.web3 +
        normINS * APY_RATES.insurance) /
      100;

    const annualReturn = capital * (weightedApy / 100);
    const monthlyCashFlow = annualReturn / 12;
    const tangibleProtectionPercent = Math.round(normRE + normINS * 0.9);

    return {
      weightedApy: weightedApy.toFixed(1),
      annualReturn: Math.round(annualReturn),
      monthlyCashFlow: Math.round(monthlyCashFlow),
      protectionRatio: tangibleProtectionPercent
    };
  }, [capital, allocationRealEstate, allocationLegalTech, allocationWeb3, allocationInsurance]);

  const handleRequestStructured = () => {
    const summary = `Capital: $${capital.toLocaleString()} USD | Real Estate: ${allocationRealEstate}% | Legal Tech: ${allocationLegalTech}% | Web3: ${allocationWeb3}% | Seguros: ${allocationInsurance}% | APY: ${calculated.weightedApy}%`;
    onPlanSelected(summary);
  };

  return (
    <section id="simulador" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 relative">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
            <span>{t.simulator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.simulator.title}
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            {t.simulator.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Capital Amount Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 uppercase">
                  {t.simulator.capitalLabel}
                </label>
                <span className="text-base font-bold font-mono text-cyan-400 tabular-nums">
                  ${capital.toLocaleString()} USD
                </span>
              </div>
              
              <input
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              {/* Quick Select Buttons */}
              <div className="flex gap-2 mt-3">
                {[10000, 25000, 50000, 100000, 250000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setCapital(amt)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition cursor-pointer ${
                      capital === amt
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    ${amt / 1000}k
                  </button>
                ))}
              </div>
            </div>

            {/* Presets */}
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block mb-2">
                Preset Strategies
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handlePreset('balanced')}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-left transition cursor-pointer"
                >
                  <span className="text-xs font-bold text-white block">{t.simulator.presetBalanced}</span>
                  <span className="text-[10px] text-slate-400 font-mono">40/25/20/15</span>
                </button>
                <button
                  onClick={() => handlePreset('growth')}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-left transition cursor-pointer"
                >
                  <span className="text-xs font-bold text-white block">{t.simulator.presetGrowth}</span>
                  <span className="text-[10px] text-slate-400 font-mono">30/35/30/5</span>
                </button>
                <button
                  onClick={() => handlePreset('protective')}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-left transition cursor-pointer"
                >
                  <span className="text-xs font-bold text-white block">{t.simulator.presetConservative}</span>
                  <span className="text-[10px] text-slate-400 font-mono">50/15/10/25</span>
                </button>
              </div>
            </div>

            {/* Sector Breakdown Sliders */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-emerald-400">Real Estate (RWA) - {APY_RATES.realEstate}% APY</span>
                  <span className="text-white font-bold tabular-nums">{allocationRealEstate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={allocationRealEstate}
                  onChange={(e) => setAllocationRealEstate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-amber-400">Legal Tech & Fiduciary - {APY_RATES.legalTech}% APY</span>
                  <span className="text-white font-bold tabular-nums">{allocationLegalTech}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={allocationLegalTech}
                  onChange={(e) => setAllocationLegalTech(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-cyan-400">Blockchain & Web3 Assets - {APY_RATES.web3}% APY</span>
                  <span className="text-white font-bold tabular-nums">{allocationWeb3}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={allocationWeb3}
                  onChange={(e) => setAllocationWeb3(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-purple-400">Insurance & Reserve - {APY_RATES.insurance}% APY</span>
                  <span className="text-white font-bold tabular-nums">{allocationInsurance}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={allocationInsurance}
                  onChange={(e) => setAllocationInsurance(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase">
                  OHUZE Projected Estimate
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  Risk Mitigated
                </span>
              </div>

              {/* APY Display */}
              <div className="text-center py-4 bg-slate-950/60 rounded-xl border border-slate-800 mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                  {t.simulator.weightedApyLabel}
                </span>
                <span className="text-4xl sm:text-5xl font-black font-mono text-gradient-cyan tabular-nums">
                  {calculated.weightedApy}%
                </span>
                <span className="text-[11px] text-slate-500 font-mono block mt-1">
                  Net Estimated APY
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-3 font-mono text-xs mb-6">
                <div className="flex justify-between p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                  <span className="text-slate-400">{t.simulator.projectedReturn}</span>
                  <span className="text-white font-bold tabular-nums">
                    +${calculated.annualReturn.toLocaleString()} USD
                  </span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                  <span className="text-slate-400">{t.simulator.monthlyCashFlow}</span>
                  <span className="text-emerald-400 font-bold tabular-nums">
                    +${calculated.monthlyCashFlow.toLocaleString()} USD / mo
                  </span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                  <span className="text-slate-400">{t.simulator.collateralProtection}</span>
                  <span className="text-purple-300 font-bold tabular-nums">
                    {calculated.protectionRatio}% Tangible
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleRequestStructured}
              className="btn-neon-gold w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.simulator.btnRequest}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
