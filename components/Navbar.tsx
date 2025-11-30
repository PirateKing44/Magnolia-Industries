import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/thumbnail_image001.png';
import { commodityService } from '../services/commodityService';
import { CommodityPrice } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [commodityData, setCommodityData] = useState<CommodityPrice[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize and subscribe to commodity price updates
  useEffect(() => {
    // Get initial prices
    setCommodityData(commodityService.getCurrentPrices());
    
    // Start real-time updates (every 5 seconds)
    commodityService.startUpdates(5000);
    
    // Subscribe to price updates
    const unsubscribe = commodityService.subscribe((prices) => {
      setCommodityData(prices);
    });
    
    return () => {
      unsubscribe();
      commodityService.stopUpdates();
    };
  }, []);

  const TickerItem = ({ item }: { item: CommodityPrice }) => (
    <div className="flex items-center space-x-3 text-sm pl-6 pr-12 border-r border-blue-200/50 last:border-r-0 whitespace-nowrap flex-shrink-0">
      <span className="font-bold text-slate-800">{item.name}</span>
      <span className="text-slate-600 font-mono">{item.price}</span>
      <span className={`flex items-center ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {item.change >= 0 ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
        {Math.abs(item.change)}%
      </span>
    </div>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled ? 'bg-gradient-to-r from-white to-blue-50 backdrop-blur-md shadow-2xl' : 'bg-gradient-to-r from-white to-blue-50 backdrop-blur-sm'
      }`}
    >
      <div className="w-full border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link 
              to="/" 
              className="flex-shrink-0 cursor-pointer group"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            >
              <img 
                src={logoImage} 
                alt="Magnolia Industries Logo" 
                className="h-16 w-auto"
              />
            </Link>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_ITEMS.map((item) => {
                  // Handle anchor links (like #intelligence) vs route links
                  if (item.href.startsWith('#')) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-slate-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-widest"
                      >
                        {item.label}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="text-slate-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-widest"
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2">
                  Client Portal <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-blue-100 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Market Ticker - Stuck to bottom of Header */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 backdrop-blur-md border-b border-blue-200/50 overflow-hidden flex z-40 h-10 items-center">
         <div className="animate-marquee whitespace-nowrap flex items-center">
            {commodityData.map((item, idx) => <TickerItem key={idx} item={item} />)}
            {/* Duplicate for seamless loop */}
            {commodityData.map((item, idx) => <TickerItem key={`dup-${idx}`} item={item} />)}
         </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-white to-blue-50 border-b border-blue-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => {
                if (item.href.startsWith('#')) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;