import React, { useState } from 'react';
import { X, Wallet, Check, Copy, ExternalLink, RefreshCw, Power } from 'lucide-react';
import { WalletState } from '../types';

interface WalletModalProps {
  isOpen: boolean;
  wallet: WalletState;
  onClose: () => void;
  onConnect: (provider: string) => void;
  onDisconnect: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  wallet,
  onClose,
  onConnect,
  onDisconnect
}) => {
  const [copied, setCopied] = useState(false);
  const [connectingProvider, setConnectingProvider] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelectProvider = (providerName: string) => {
    setConnectingProvider(providerName);
    setTimeout(() => {
      onConnect(providerName);
      setConnectingProvider(null);
    }, 600);
  };

  const handleCopy = () => {
    if (wallet.address) {
      navigator.clipboard.writeText(wallet.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-md rounded-3xl p-6 sm:p-8 border border-cyan-500/40 relative">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
          aria-label="Cerrar modal de billetera"
        >
          <X className="w-5 h-5" />
        </button>

        {wallet.isConnected ? (
          /* Connected State Details */
          <div>
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto mb-3">
                <Wallet className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
                Billetera Conectada ({wallet.provider})
              </span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-base font-bold font-mono text-white">
                  {wallet.address}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-1 rounded text-slate-400 hover:text-cyan-400"
                  title="Copiar dirección"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Token Balances */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono text-xs mb-6">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                Activos en Custodia Web3
              </span>
              
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span className="text-slate-300">OHUZ Governance</span>
                <span className="text-cyan-400 font-bold tabular-nums">{wallet.balanceOhuz} OHUZ</span>
              </div>
              
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span className="text-slate-300">Tether USD (USDT)</span>
                <span className="text-emerald-400 font-bold tabular-nums">${wallet.balanceUsdt}</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-slate-300">Red Activa</span>
                <span className="text-slate-300">{wallet.network}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onDisconnect}
                className="w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-rose-500/15 border border-rose-500/40 text-rose-300 hover:bg-rose-500 hover:text-white flex items-center justify-center gap-2 transition"
              >
                <Power className="w-4 h-4" />
                <span>Desconectar</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl font-mono text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          /* Connect Wallet Options */
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mx-auto mb-3">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Conectar Billetera Web3</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Accede al portal de gobernanza institucional y tokenización RWA de OHUZE
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { name: 'MetaMask', desc: 'Billetera Web3 Ethereum / EVM', color: 'hover:border-amber-400' },
                { name: 'Phantom', desc: 'Soporte Multi-Chain & Solana', color: 'hover:border-purple-400' },
                { name: 'WalletConnect', desc: 'Código QR para billeteras móviles', color: 'hover:border-cyan-400' },
                { name: 'Coinbase Wallet', desc: 'Custodia institucional y auto-custodia', color: 'hover:border-blue-400' }
              ].map((prov) => (
                <button
                  key={prov.name}
                  disabled={connectingProvider !== null}
                  onClick={() => handleSelectProvider(prov.name)}
                  className={`w-full p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 ${prov.color} flex items-center justify-between transition group text-left`}
                >
                  <div>
                    <span className="text-sm font-semibold text-white block">{prov.name}</span>
                    <span className="text-[11px] text-slate-400">{prov.desc}</span>
                  </div>
                  
                  {connectingProvider === prov.name ? (
                    <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
                  ) : (
                    <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition">
                      Conectar →
                    </span>
                  )}
                </button>
              ))}
            </div>

            <p className="text-center text-[11px] text-slate-500 font-mono">
              Al conectar aceptas los términos del protocolo institucional OHUZE
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
