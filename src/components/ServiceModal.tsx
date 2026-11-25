import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Scale,
  GraduationCap,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Terminal,
  Copy,
  Check,
} from 'lucide-react';
import { DivisionId, ServiceSubmission } from '../types';
import { Language } from '../i18n/translations';
import { serviceModalTranslations } from '../i18n/serviceModalTranslations';

interface ServiceModalProps {
  isOpen: boolean;
  divisionId: DivisionId | null;
  initialDetails?: string;
  onClose: () => void;
  onSubmit: (data: ServiceSubmission) => void;
  currentLang?: Language;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

export const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  divisionId,
  initialDetails = '',
  onClose,
  onSubmit,
  currentLang = 'es',
}) => {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [details, setDetails] = useState('');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const langData = serviceModalTranslations[currentLang] || serviceModalTranslations.es;
  const ui = langData.ui;

  const divisionIcons: Record<DivisionId, { icon: React.ReactNode; themeColor: string }> = {
    legales: {
      icon: <Scale className="w-5 h-5 text-[#00F0FF]" />,
      themeColor: 'cyan',
    },
    educacion: {
      icon: <GraduationCap className="w-5 h-5 text-[#00F0FF]" />,
      themeColor: 'cyan',
    },
    realestate: {
      icon: <Building2 className="w-5 h-5 text-[#00F0FF]" />,
      themeColor: 'emerald',
    },
    seguros: {
      icon: <ShieldCheck className="w-5 h-5 text-[#00F0FF]" />,
      themeColor: 'purple',
    },
  };

  useEffect(() => {
    if (divisionId) {
      const divConfig = langData.divisions[divisionId];
      setServiceType(divConfig.serviceOptions[0]);
      setDetails(initialDetails || divConfig.defaultText);
      setSubmittedCode(null);
      setCopied(false);
      setIsDropdownOpen(false);
    }
  }, [divisionId, initialDetails, currentLang]);

  // Click outside listener for the custom dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lock background page scroll while modal is open so tablet/touch swipes scroll the form cleanly
  useEffect(() => {
    if (!isOpen || !divisionId) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [isOpen, divisionId]);

  if (!isOpen || !divisionId) return null;

  const currentConfig = langData.divisions[divisionId];
  const currentIconData = divisionIcons[divisionId];
  const isLegalDivision = divisionId === 'legales';
  const NEXORA_URL = 'https://nexora17-5cn9sgp7r-mr-df77.vercel.app/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `OHUZ-0x${Math.floor(100000 + Math.random() * 900000).toString(16).toUpperCase()}`;
    setSubmittedCode(randomCode);

    const waMessage = `${ui.waIntro}

• ${ui.waTicket} ${randomCode}
• ${ui.waDivision} ${currentConfig.title}
• ${ui.waReq} ${serviceType}
• ${ui.waHolder} ${fullName}
• ${ui.waContact} ${contact}
• ${ui.waSpecs} ${details}`;

    const waUrl = `https://wa.me/593963018699?text=${encodeURIComponent(waMessage)}`;

    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onSubmit({
      division: divisionId,
      fullName,
      contact,
      serviceType,
      details,
    });
  };

  const handleCopyCode = () => {
    if (submittedCode) {
      navigator.clipboard.writeText(submittedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetAndClose = () => {
    setSubmittedCode(null);
    setFullName('');
    setContact('');
    setIsDropdownOpen(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center overflow-y-auto overscroll-contain touch-pan-y p-3 sm:px-6 sm:py-6 xl:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
    >
      {/* Cybernetic Ambient Glow Background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_10%,rgba(0,240,255,0.08)_0%,transparent_60%),radial-gradient(circle_at_80%_90%,rgba(0,255,157,0.05)_0%,transparent_50%)]" />

      {/* Card Container (max-width: 600px) */}
      <div className="web3-card w-full max-w-[600px] shrink-0 rounded-[20px] bg-[#060c1c]/95 p-5 sm:p-6 border border-[#00F0FF]/25 relative my-auto sm:my-0 xl:my-auto shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 touch-pan-y">
        
        {/* Top Indicators */}
        <div className="top-status flex justify-between items-center mb-5 font-mono text-[11px] select-none">
          <div className="node-tag text-[#00FF9D] flex items-center gap-1.5 font-bold">
            <span className="node-dot w-1.5 h-1.5 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D] inline-block animate-pulse" />
            <span>{ui.nodeOnline}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="dispatch-tag text-[#00F0FF] opacity-80 text-[10px] tracking-wider hidden sm:inline font-mono">
              {ui.dispatchTag}
            </span>
            <button
              onClick={resetAndClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg bg-white/[0.03] hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/30 border border-transparent transition cursor-pointer"
              aria-label={ui.closeLabel}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {submittedCode ? (
          /* Web3 Confirmation Ticket Screen */
          <div className="text-center py-3 sm:py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-[16px] bg-[#00F0FF]/10 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF] mx-auto mb-4 shadow-[0_0_30px_rgba(0,240,255,0.25)]">
              <CheckCircle2 className="w-8 h-8 text-[#00FF9D]" />
            </div>

            <span className="text-[10px] sm:text-xs font-mono text-[#00F0FF] uppercase tracking-[2px] block mb-1.5 drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]">
              {ui.successBadge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {ui.hashAssigned} <span className="font-mono text-[#00FF9D]">{submittedCode}</span>
            </h3>

            {/* Ticket Hash Badge with One-Click Copy */}
            <div className="inline-flex items-center gap-2.5 bg-[#0a1226] px-4 py-2.5 rounded-xl border border-[#00F0FF]/30 mb-5 shadow-inner">
              <Terminal className="w-4 h-4 text-[#00F0FF]" />
              <span className="font-mono text-xs sm:text-sm text-[#00FF9D] font-bold tracking-wider">{submittedCode}</span>
              <button
                onClick={handleCopyCode}
                className="ml-2 p-1.5 text-slate-400 hover:text-[#00F0FF] rounded-lg hover:bg-[#00F0FF]/10 border border-transparent hover:border-[#00F0FF]/30 transition cursor-pointer"
                title={ui.copyHash}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#00FF9D]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-300 max-w-md mx-auto mb-5 leading-relaxed font-sans">
              {ui.successMsg}
            </p>

            {/* Terminal Payload Box */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0a1226]/90 border border-[#00F0FF]/20 text-left font-mono text-xs text-slate-300 space-y-1.5 mb-6 shadow-inner">
              <div className="text-[10px] text-[#00F0FF]/70 uppercase pb-1 border-b border-[#00F0FF]/15 font-semibold tracking-wider">
                {ui.payloadMetrics}
              </div>
              <div>
                <span className="text-[#00F0FF] font-bold">{ui.logEntity}</span> {fullName}
              </div>
              <div>
                <span className="text-[#00F0FF] font-bold">{ui.logEndpoint}</span> {contact}
              </div>
              <div>
                <span className="text-[#00F0FF] font-bold">{ui.logModule}</span> {serviceType}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 justify-center max-w-sm mx-auto">
              <a
                href={`https://wa.me/593963018699?text=${encodeURIComponent(
                  ui.waConfirmationSummary(submittedCode, serviceType, fullName, contact)
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#02050E] font-extrabold text-[13px] tracking-[1.5px] uppercase rounded-[12px] p-3.5 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-200 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#02050E] shrink-0" />
                <span>{ui.btnConnectWa}</span>
              </a>

              {isLegalDivision && (
                <a
                  href={NEXORA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-platform w-full bg-transparent border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 text-[#00F0FF] font-bold text-[11px] tracking-[1.5px] uppercase rounded-[12px] p-3 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{ui.btnPlatform}</span>
                </a>
              )}

              <button
                onClick={resetAndClose}
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[#0a1226] hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-[#00F0FF]/30 cursor-pointer transition mt-1"
              >
                {ui.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          /* Web3 Form Content */
          <>
            {/* Header Title */}
            <div className="card-header flex items-start gap-4 mb-4">
              <div className="header-icon w-[44px] h-[44px] rounded-[12px] bg-[rgba(0,240,255,0.1)] border border-cyan-400/30 flex items-center justify-center text-[#00F0FF] shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                {currentIconData.icon}
              </div>
              <div className="header-text flex flex-col gap-1 min-w-0">
                <span className="subtitle text-[10px] tracking-[1.5px] uppercase text-[#00F0FF] font-bold truncate">
                  ✦ {currentConfig.subtitle}
                </span>
                <h2 className="text-[22px] text-white font-bold tracking-tight leading-tight">
                  {currentConfig.title}
                </h2>
              </div>
            </div>

            <p className="card-desc text-[13px] text-[#8E9BAE] leading-[1.5] mb-6 font-sans">
              {currentConfig.description}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Field 01: Custom Dropdown (Fix White Flash) */}
              <div className="custom-select-wrapper relative mb-5 select-none" ref={dropdownRef}>
                <div className="field-label flex justify-between text-[11px] font-mono text-[#00F0FF] mb-2 uppercase">
                  <span>{ui.labelModule}</span>
                  <span className="meta text-[#8E9BAE] lowercase font-normal">{ui.metaDirect}</span>
                </div>

                <div
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="custom-select-trigger bg-[#0a1226]/70 border border-cyan-400/20 rounded-[10px] px-4 py-3 text-white text-[13.5px] flex justify-between items-center cursor-pointer transition-all duration-200 hover:border-[#00F0FF]"
                >
                  <span className="truncate pr-2">{serviceType}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#00F0FF] shrink-0 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="custom-options absolute top-[calc(100%+6px)] left-0 right-0 bg-[#080f20]/98 border border-[#00F0FF] rounded-[10px] backdrop-blur-[15px] z-50 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-150">
                    {currentConfig.serviceOptions.map((opt) => {
                      const isSelected = opt === serviceType;
                      return (
                        <div
                          key={opt}
                          onClick={() => {
                            setServiceType(opt);
                            setIsDropdownOpen(false);
                          }}
                          className={`custom-option px-4 py-3 text-[13px] cursor-pointer transition-colors duration-150 flex items-center justify-between border-b border-white/[0.04] last:border-b-0 ${
                            isSelected
                              ? 'bg-[#00F0FF]/20 text-[#00F0FF] font-semibold'
                              : 'text-white hover:bg-[#00F0FF]/15 hover:text-[#00F0FF]'
                          }`}
                        >
                          <span>{opt}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#00F0FF] shrink-0" />}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Grid Inputs */}
              <div className="input-grid grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                <div>
                  <div className="field-label flex justify-between text-[11px] font-mono text-[#00F0FF] mb-2 uppercase">
                    <span>{ui.labelIdentity}</span>
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={ui.placeholderIdentity}
                    className="web3-input w-full bg-[#0a1226]/70 border border-white/[0.08] rounded-[10px] px-4 py-3 text-white text-[13px] outline-none transition-all duration-200 placeholder-slate-500 focus:border-[#00F0FF] focus:shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                  />
                </div>

                <div>
                  <div className="field-label flex justify-between text-[11px] font-mono text-[#00F0FF] mb-2 uppercase">
                    <span>{ui.labelContact}</span>
                  </div>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={ui.placeholderContact}
                    className="web3-input w-full bg-[#0a1226]/70 border border-white/[0.08] rounded-[10px] px-4 py-3 text-white text-[13px] outline-none transition-all duration-200 placeholder-slate-500 focus:border-[#00F0FF] focus:shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                  />
                </div>
              </div>

              {/* Specification Textarea */}
              <div className="mb-6">
                <div className="field-label flex justify-between text-[11px] font-mono text-[#00F0FF] mb-2 uppercase">
                  <span>{ui.labelSpecs}</span>
                  <span className="meta text-[#8E9BAE] lowercase font-normal">{ui.metaBrief}</span>
                </div>
                <textarea
                  required
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="web3-textarea w-full h-[85px] resize-none bg-[#0a1226]/70 border border-white/[0.08] rounded-[10px] px-4 py-3 text-white text-[13px] outline-none transition-all duration-200 focus:border-[#00F0FF] focus:shadow-[0_0_10px_rgba(0,240,255,0.15)] leading-[1.5]"
                />
              </div>

              {/* Action Buttons Area */}
              <div className="actions-group flex flex-col gap-3">
                <button
                  type="submit"
                  aria-label={ui.btnSubmit}
                  title={ui.btnSubmit}
                  className="btn-whatsapp w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#02050E] font-extrabold text-[13px] tracking-[1.5px] uppercase rounded-[12px] p-4 flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 transition-all duration-250"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#02050E] shrink-0" />
                  <span className="truncate">{ui.btnSubmit}</span>
                </button>

                {isLegalDivision && (
                  <a
                    href={NEXORA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-platform w-full bg-transparent border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 text-[#00F0FF] font-bold text-[11px] tracking-[1.5px] uppercase rounded-[12px] p-3 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{ui.btnPlatform}</span>
                  </a>
                )}
              </div>
            </form>

            {/* Footer */}
            <div className="card-footer mt-5 text-center text-[10px] font-mono text-[#8E9BAE] tracking-[1px]">
              <span>{ui.footer}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
