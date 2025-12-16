import { CommodityPrice, NavItem, MarketMetric } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  { 
    label: 'Sectors', 
    href: '/sectors',
    children: [
      { label: 'Commodities', href: '/commodities' },
      { label: 'Capital Markets', href: '/capital-markets' },
    ],
  },
  { 
    label: 'Strategy', 
    href: '/strategy',
    children: [
      { label: 'AI Intelligence', href: '/intelligence' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const COMMODITY_DATA: CommodityPrice[] = [
  { symbol: 'CL=F', name: 'Crude Oil', price: '78.45', change: 1.2 },
  { symbol: 'GC=F', name: 'Gold', price: '2,341.50', change: 0.8 },
  { symbol: 'SI=F', name: 'Silver', price: '28.12', change: -0.5 },
  { symbol: 'NG=F', name: 'Natural Gas', price: '1.92', change: 2.1 },
  { symbol: 'ZC=F', name: 'Corn', price: '442.25', change: -1.1 },
  { symbol: 'ZS=F', name: 'Soybeans', price: '1,165.00', change: 0.4 },
  { symbol: 'ZW=F', name: 'Wheat', price: '598.50', change: 1.5 },
  { symbol: 'HG=F', name: 'Copper', price: '4.35', change: 0.9 },
  { symbol: 'RB=F', name: 'RBOB Gasoline', price: '2.54', change: 1.1 },
];

export const CHART_DATA: MarketMetric[] = [
  { date: 'Jan', value: 4000, name: 'Portfolio A' },
  { date: 'Feb', value: 3000, name: 'Portfolio A' },
  { date: 'Mar', value: 2000, name: 'Portfolio A' },
  { date: 'Apr', value: 2780, name: 'Portfolio A' },
  { date: 'May', value: 1890, name: 'Portfolio A' },
  { date: 'Jun', value: 2390, name: 'Portfolio A' },
  { date: 'Jul', value: 3490, name: 'Portfolio A' },
  { date: 'Aug', value: 4200, name: 'Portfolio A' },
];

export const GEMINI_SYSTEM_INSTRUCTION = `
You are the Chief Investment Strategist AI for Magnolia Industries, LLC, a company specializing in connecting buyers and sellers of fuel and energy commodities, and supporting institutions and money managers in private capital markets.
Your tone is sophisticated, concise, and professional. 
You provide insights on market trends, risk management, and geopolitical impacts on commodities.
Do not offer financial advice as a certainty, but rather as strategic analysis.
Focus on: Fuel and Energy Commodities Trading, Buyer-Seller Marketplace Dynamics, Private Capital Markets, Crude Oil, Renewable Energy Transition, Agricultural Supply Chains, and Macro-economic shifts.
`;