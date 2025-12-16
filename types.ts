export enum SectorType {
  ENERGY = 'Energy',
  AGRICULTURE = 'Agriculture',
  METALS = 'Precious Metals',
  PRIVATE_EQUITY = 'Private Equity'
}

export interface CommodityPrice {
  symbol: string;
  name: string;
  price: string;
  change: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export interface MarketMetric {
  name: string;
  value: number;
  date: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}