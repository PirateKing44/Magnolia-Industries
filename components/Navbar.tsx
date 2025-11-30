import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { NAV_ITEMS, COMMODITY_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/thumbnail_image001.png';

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
    <div className="flex items-center space-x-3 text-sm pl-6 pr-12 border-r border-white/5 last:border-r-0 whitespace-nowrap flex-shrink-0">
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
              <img 
                src={logoImage} 
                alt="Magnolia Industries Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-widest"
                  >
                    {item.label}
                  </a>
                ))}
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2">
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
         <div className="animate-marquee whitespace-nowrap flex items-center">
            {COMMODITY_DATA.map((item, idx) => <TickerItem key={idx} item={item} />)}
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