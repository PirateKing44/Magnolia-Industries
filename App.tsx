import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectorCard from './components/SectorCard';
import MarketDashboard from './components/MarketDashboard';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const sectors = [
    {
      title: "Energy & Renewables",
      description: "From traditional crude derivatives to the forefront of solar and hydrogen infrastructure. We bridge the gap between today's demand and tomorrow's sustainability.",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      title: "Global Agriculture",
      description: "Strategic investments in supply chain resilience, ag-tech, and commodity trading across wheat, soy, and coffee markets.",
      image: "https://picsum.photos/800/600?random=2"
    },
    {
      title: "Precious Metals",
      description: "Hedging inflation and currency risk through physical allocation in gold, silver, and rare earth elements crucial for technology.",
      image: "https://picsum.photos/800/600?random=3"
    },
    {
      title: "Private Equity",
      description: "Direct capitalization of high-growth ventures in logistics, maritime shipping, and energy storage technologies.",
      image: "https://picsum.photos/800/600?random=4"
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* About / Mission Statement */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-500 font-serif italic text-xl mb-4 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-light leading-relaxed text-white">
                "We believe that true wealth is generated at the intersection of <span className="text-blue-400 font-semibold">tangible assets</span> and <span className="text-blue-400 font-semibold">visionary capital</span>."
              </h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto mt-12"></div>
            </motion.div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section id="sectors" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8">
           <div className="max-w-7xl mx-auto">
             <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-4xl font-serif font-bold text-white">Investment Focus</h2>
                  <p className="text-slate-400 mt-2">Diversified exposure across critical global infrastructures.</p>
               </div>
               <button className="hidden md:block text-blue-500 hover:text-white transition-colors border-b border-blue-500 pb-1">
                 View Full Portfolio
               </button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sectors.map((sector, idx) => (
                  <SectorCard 
                    key={idx}
                    index={idx}
                    {...sector}
                  />
                ))}
             </div>
           </div>
        </section>

        {/* Market Dashboard (Gemini + Charts) */}
        <MarketDashboard />

        {/* CTA / Contact Section */}
        <section id="contact" className="py-32 bg-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply"></div>
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-serif font-bold text-white mb-8"
                >
                  Partner with Magnolia
                </motion.h2>
                <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
                  We invite institutional partners and accredited investors to discuss tailored opportunities in the global commodities market.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-xl transition-all"
                >
                  Schedule a Consultation
                </motion.button>
            </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default App;