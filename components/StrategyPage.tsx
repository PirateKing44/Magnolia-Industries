import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, TrendingUp, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';

const StrategyPage: React.FC = () => {
  const principles = [
    {
      icon: <Target size={32} />,
      title: 'Strategic Focus',
      description: 'We maintain a clear strategic focus on connecting buyers and sellers in fuel and energy commodities, while supporting institutions in private capital markets. Our strategy is built on deep market understanding and long-term value creation.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Risk Management',
      description: 'Comprehensive risk management is at the core of everything we do. We employ sophisticated frameworks to identify, assess, and mitigate risks while preserving capital and optimizing returns for our clients.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Value Creation',
      description: 'Our approach centers on creating sustainable value through strategic market positioning, efficient transaction facilitation, and intelligent capital allocation that delivers superior returns.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Data-Driven Decisions',
      description: 'We leverage advanced analytics, market intelligence, and real-time data to inform our strategies and decision-making processes, ensuring we stay ahead of market trends.'
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Market Analysis',
      description: 'Comprehensive analysis of market conditions, trends, and opportunities across commodities and capital markets.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Development of customized strategies aligned with client objectives, risk tolerance, and market dynamics.'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Precise execution of strategies with careful attention to timing, pricing, and market conditions.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring of performance metrics and market conditions, with proactive adjustments to optimize outcomes.'
    }
  ];

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
              Investment Strategy
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Strategic Approach
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              At Magnolia Industries, our strategy integrates marketplace facilitation with capital 
              market expertise, creating comprehensive solutions that deliver value for buyers, 
              sellers, and institutional clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="p-4 bg-blue-500/10 rounded-lg w-fit mx-auto mb-6">
              <Lightbulb className="text-blue-500 mx-auto" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Our Investment Philosophy
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed mb-6 italic">
                "We believe that true wealth is generated at the intersection of 
                <span className="text-blue-400 font-semibold"> tangible assets</span> and 
                <span className="text-blue-400 font-semibold"> visionary capital</span>."
              </p>
              <p className="text-slate-300 leading-relaxed">
                This philosophy guides our approach to connecting buyers and sellers in the 
                commodities marketplace, while simultaneously supporting institutions and money 
                managers in private capital markets. We recognize that sustainable value creation 
                comes from understanding both the physical realities of commodity markets and the 
                strategic opportunities in capital allocation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Core Principles
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The fundamental principles that guide our strategic approach and decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors"
              >
                <div className="text-blue-500 mb-6">{principle.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-slate-300 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Our Methodology
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A structured approach to strategy development and execution across our marketplace 
              and capital markets activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-950/50 border border-slate-800 rounded-xl p-6"
              >
                <div className="text-blue-500 font-bold text-3xl mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Focus Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Commodities Marketplace Strategy
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our marketplace strategy focuses on creating efficient connections between buyers 
                and sellers of fuel and energy commodities. We leverage our market expertise to:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Identify optimal buyer-seller matches based on requirements and market conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Facilitate transparent and efficient transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Provide market intelligence and pricing insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Ensure secure and reliable transaction execution</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Private Capital Markets Strategy
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our capital markets strategy supports institutions and money managers in delivering 
                returns for their clients through:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Strategic portfolio management and asset allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Risk-adjusted return optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Market timing and opportunity identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Customized solutions aligned with client objectives</span>
                </li>
              </ul>
            </motion.div>
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
            Learn More About Our Strategy
          </motion.h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Discover how our strategic approach can support your business objectives in commodities 
            trading or private capital markets.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-xl transition-all"
          >
            Contact Us <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default StrategyPage;

