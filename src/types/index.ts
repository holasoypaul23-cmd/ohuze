export type DivisionId = 'legales' | 'educacion' | 'realestate' | 'seguros';

export interface DivisionInfo {
  id: DivisionId;
  nodeId: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlightTitle?: string;
  highlightText?: string;
  items?: string[];
  badges?: string[];
  color: 'gold' | 'cyan' | 'emerald' | 'purple';
  icon: string;
  placeholder: string;
}

export interface ServiceSubmission {
  division: DivisionId;
  fullName: string;
  contact: string;
  serviceType: string;
  budgetOrTarget?: string;
  details: string;
}

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  provider: string | null;
  balanceEth: string;
  balanceOhuz: string;
  balanceUsdt: string;
  network: string;
}

export interface TokenizedAsset {
  id: string;
  name: string;
  category: 'realestate' | 'legaltech' | 'insurance' | 'defi';
  location: string;
  totalValue: string;
  tokenPrice: string;
  apy: string;
  fundedPercentage: number;
  investorsCount: number;
  contractAddress: string;
  status: 'Activo' | 'En Financiación' | 'Auditado';
}
