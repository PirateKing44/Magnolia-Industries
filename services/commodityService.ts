import { CommodityPrice } from '../types';

// Base prices for commodities (approximate market values)
const BASE_PRICES: { [key: string]: { base: number; min: number; max: number } } = {
  'CL=F': { base: 78.45, min: 70, max: 90 }, // Crude Oil
  'GC=F': { base: 2341.50, min: 2200, max: 2500 }, // Gold
  'SI=F': { base: 28.12, min: 25, max: 32 }, // Silver
  'NG=F': { base: 1.92, min: 1.5, max: 2.5 }, // Natural Gas
  'ZC=F': { base: 442.25, min: 400, max: 500 }, // Corn
  'ZS=F': { base: 1165.00, min: 1100, max: 1300 }, // Soybeans
  'ZW=F': { base: 598.50, min: 550, max: 650 }, // Wheat
  'HG=F': { base: 4.35, min: 3.8, max: 5.0 }, // Copper
  'RB=F': { base: 2.54, min: 2.2, max: 3.0 }, // RBOB Gasoline
};

const COMMODITY_SYMBOLS = [
  { symbol: 'CL=F', name: 'Crude Oil' },
  { symbol: 'GC=F', name: 'Gold' },
  { symbol: 'SI=F', name: 'Silver' },
  { symbol: 'NG=F', name: 'Natural Gas' },
  { symbol: 'ZC=F', name: 'Corn' },
  { symbol: 'ZS=F', name: 'Soybeans' },
  { symbol: 'ZW=F', name: 'Wheat' },
  { symbol: 'HG=F', name: 'Copper' },
  { symbol: 'RB=F', name: 'RBOB Gasoline' },
];

class CommodityService {
  private prices: Map<string, number> = new Map();
  private previousPrices: Map<string, number> = new Map();
  private subscribers: Set<(prices: CommodityPrice[]) => void> = new Set();
  private updateInterval: NodeJS.Timeout | null = null;

  constructor() {
    // Initialize with base prices
    COMMODITY_SYMBOLS.forEach(({ symbol }) => {
      const basePrice = BASE_PRICES[symbol].base;
      this.prices.set(symbol, basePrice);
      this.previousPrices.set(symbol, basePrice);
    });
  }

  // Generate a realistic price update with small fluctuations
  private updatePrice(symbol: string): number {
    const config = BASE_PRICES[symbol];
    const currentPrice = this.prices.get(symbol) || config.base;
    
    // Small random fluctuation (-2% to +2%)
    const fluctuation = (Math.random() - 0.5) * 0.04;
    let newPrice = currentPrice * (1 + fluctuation);
    
    // Keep within reasonable bounds
    newPrice = Math.max(config.min, Math.min(config.max, newPrice));
    
    return newPrice;
  }

  // Format price based on commodity type
  private formatPrice(price: number, symbol: string): string {
    if (symbol === 'GC=F' || symbol === 'ZS=F') {
      // Gold and Soybeans: format with commas and 2 decimals
      return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (symbol === 'CL=F' || symbol === 'SI=F' || symbol === 'NG=F' || symbol === 'RB=F') {
      // Crude Oil, Silver, Natural Gas, Gasoline: 2 decimals
      return price.toFixed(2);
    } else {
      // Corn, Wheat, Copper: 2 decimals
      return price.toFixed(2);
    }
  }

  // Calculate percentage change
  private calculateChange(current: number, previous: number): number {
    return ((current - previous) / previous) * 100;
  }

  // Start real-time updates
  startUpdates(intervalMs: number = 5000) {
    if (this.updateInterval) {
      this.stopUpdates();
    }

    this.updateInterval = setInterval(() => {
      const updatedPrices: CommodityPrice[] = COMMODITY_SYMBOLS.map(({ symbol, name }) => {
        const previousPrice = this.previousPrices.get(symbol) || BASE_PRICES[symbol].base;
        const newPrice = this.updatePrice(symbol);
        
        // Store previous price for change calculation
        this.previousPrices.set(symbol, this.prices.get(symbol) || newPrice);
        this.prices.set(symbol, newPrice);
        
        const change = this.calculateChange(newPrice, previousPrice);
        
        return {
          symbol,
          name,
          price: this.formatPrice(newPrice, symbol),
          change: parseFloat(change.toFixed(2)),
        };
      });

      // Notify all subscribers
      this.subscribers.forEach(callback => callback(updatedPrices));
    }, intervalMs);

    // Initial update
    this.updatePrices();
  }

  // Stop updates
  stopUpdates() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  // Get current prices
  getCurrentPrices(): CommodityPrice[] {
    return COMMODITY_SYMBOLS.map(({ symbol, name }) => {
      const price = this.prices.get(symbol) || BASE_PRICES[symbol].base;
      const previousPrice = this.previousPrices.get(symbol) || price;
      const change = this.calculateChange(price, previousPrice);
      
      return {
        symbol,
        name,
        price: this.formatPrice(price, symbol),
        change: parseFloat(change.toFixed(2)),
      };
    });
  }

  // Subscribe to price updates
  subscribe(callback: (prices: CommodityPrice[]) => void): () => void {
    this.subscribers.add(callback);
    
    // Return unsubscribe function
    return () => {
      this.subscribers.delete(callback);
    };
  }

  // Manual update trigger
  private updatePrices() {
    const updatedPrices: CommodityPrice[] = COMMODITY_SYMBOLS.map(({ symbol, name }) => {
      const previousPrice = this.previousPrices.get(symbol) || BASE_PRICES[symbol].base;
      const newPrice = this.updatePrice(symbol);
      
      this.previousPrices.set(symbol, this.prices.get(symbol) || newPrice);
      this.prices.set(symbol, newPrice);
      
      const change = this.calculateChange(newPrice, previousPrice);
      
      return {
        symbol,
        name,
        price: this.formatPrice(newPrice, symbol),
        change: parseFloat(change.toFixed(2)),
      };
    });

    this.subscribers.forEach(callback => callback(updatedPrices));
  }
}

// Export singleton instance
export const commodityService = new CommodityService();

