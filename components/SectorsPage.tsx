import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, TrendingUp } from 'lucide-react';

const SectorsPage: React.FC = () => {
  const sectors = [
    {
      icon: <Zap size={32} />,
      title: 'Energy (Oil & Refined Products)',
      description: 'From traditional crude derivatives to refined products trading. We specialize in connecting buyers and sellers of fuel and energy commodities.',
      focus: 'Fuel Trading & Energy Commodities',
      details: [
        'Crude oil and refined products trading',
        'Natural gas and LNG transactions',
        'Market analysis and price optimization',
        'Buyer-seller marketplace facilitation',
        'Energy commodity supply chain management',
        'Strategic fuel procurement and distribution'
      ],
      color: 'blue'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Private Capital',
      description: 'Supporting the purchasing and management of financial assets for institutions and money managers, delivering strategic returns for client portfolios.',
      focus: 'Private Capital & Financial Asset Management',
      details: [
        'Financial asset purchasing and acquisition',
        'Portfolio management and optimization',
        'Institutional investment support',
        'Money manager services',
        'Strategic asset allocation',
        'Risk-adjusted return optimization'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-500',
        border: 'border-blue-500/50'
      },
      green: {
        bg: 'bg-green-500/10',
        text: 'text-green-500',
        border: 'border-green-500/50'
      },
      yellow: {
        bg: 'bg-yellow-500/10',
        text: 'text-yellow-500',
        border: 'border-yellow-500/50'
      },
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-500',
        border: 'border-purple-500/50'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
              Investment Focus
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Diversified Exposure Across Critical Markets
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Magnolia Industries maintains strategic focus across multiple sectors, combining 
              deep market expertise with innovative approaches to deliver value for our clients 
              and partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {sectors.map((sector, idx) => {
              const colors = getColorClasses(sector.color);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`${colors.bg} border ${colors.border} rounded-2xl p-8`}>
                    <div className={`${colors.text} mb-6`}>{sector.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                      {sector.title}
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {sector.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Focus Area
                      </span>
                      <p className={`${colors.text} font-semibold text-lg mt-2`}>
                        {sector.focus}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-white mb-6">Key Capabilities</h3>
                    <ul className="space-y-3">
                      {sector.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start gap-3">
                          <ArrowUpRight className={`${colors.text} mt-1 shrink-0`} size={18} />
                          <span className="text-slate-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Integrated Approach
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our sector expertise integrates seamlessly with our core capabilities in commodities 
              trading and private capital markets, creating comprehensive solutions for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Commodities Trading',
                description: 'Direct connection between buyers and sellers across all sectors'
              },
              {
                title: 'Market Intelligence',
                description: 'Deep sector-specific analysis and trend identification'
              },
              {
                title: 'Capital Solutions',
                description: 'Strategic investment and financing across sector verticals'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-950/50 border border-slate-800 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-8"
          >
            Explore Our Sectors
          </motion.h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Learn more about how we operate across these critical sectors and how we can support 
            your business objectives.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-600 px-8 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-xl transition-all"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;

