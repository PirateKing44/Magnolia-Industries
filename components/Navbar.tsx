import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { NAV_ITEMS, COMMODITY_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TickerItem = ({ item }: { item: typeof COMMODITY_DATA[0] }) => (
    <div className="flex items-center space-x-3 text-sm px-6 border-r border-white/5 last:border-r-0">
      <span className="font-bold text-slate-200">{item.name}</span>
      <span className="text-slate-400 font-mono">{item.price}</span>
      <span className={`flex items-center ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {item.change >= 0 ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
        {Math.abs(item.change)}%
      </span>
    </div>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-2xl' : 'bg-slate-950/20 backdrop-blur-sm'
      }`}
    >
      <div className="w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
              <div className="flex items-center gap-4">
                  {/* Detailed Magnolia Flower Logo */}
                  <div className="text-gold-500 group-hover:text-gold-400 transition-colors">
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 20C50 20 62 35 62 55C62 75 50 85 50 85C50 85 38 75 38 55C38 35 50 20 50 20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
                      <path d="M50 85C50 85 65 80 75 65C85 50 80 35 70 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M50 85C50 85 35 80 25 65C15 50 20 35 30 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M38 55C38 55 25 50 20 40C15 30 20 20 35 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M62 55C62 55 75 50 80 40C85 30 80 20 65 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M50 35V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-2xl font-serif font-bold text-slate-100 tracking-wide leading-none group-hover:text-white transition-colors">
                      MAGNOLIA
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-[1px] w-4 bg-gold-600"></div>
                      <span className="text-[10px] font-sans font-bold text-gold-500 tracking-[0.25em] uppercase leading-none">
                        INDUSTRIES
                      </span>
                      <div className="h-[1px] w-4 bg-gold-600"></div>
                    </div>
                  </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-widest"
                  >
                    {item.label}
                  </a>
                ))}
                <button className="bg-gold-600 hover:bg-gold-500 text-slate-950 px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2">
                  Client Portal <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Market Ticker - Stuck to bottom of Header */}
      <div className="w-full bg-slate-950/60 backdrop-blur-md border-b border-white/5 overflow-hidden flex z-40 h-10 items-center">
         <div className="animate-marquee whitespace-nowrap flex min-w-full items-center">
            {COMMODITY_DATA.map((item, idx) => <TickerItem key={`1-${idx}`} item={item} />)}
            {COMMODITY_DATA.map((item, idx) => <TickerItem key={`2-${idx}`} item={item} />)}
         </div>
         <div className="animate-marquee whitespace-nowrap flex min-w-full items-center" aria-hidden="true">
            {COMMODITY_DATA.map((item, idx) => <TickerItem key={`3-${idx}`} item={item} />)}
            {COMMODITY_DATA.map((item, idx) => <TickerItem key={`4-${idx}`} item={item} />)}
         </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;