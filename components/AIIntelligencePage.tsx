import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, TrendingUp, BarChart3, Zap, Shield, ArrowRight } from 'lucide-react';
import MarketDashboard from './MarketDashboard';

const AIIntelligencePage: React.FC = () => {
  const capabilities = [
    {
      icon: <Brain size={32} />,
      title: 'Market Analysis',
      description: 'Advanced AI-powered analysis of global commodity markets, energy trends, and market dynamics to inform strategic decision-making.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Trend Prediction',
      description: 'Predictive analytics and trend identification across fuel and energy commodities, helping you stay ahead of market movements.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and scenario modeling to help manage portfolio risk and optimize investment strategies.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Real-Time Insights',
      description: 'Access to real-time market intelligence and instant analysis of breaking news, market events, and commodity price movements.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Strategic Guidance',
      description: 'AI-powered strategic recommendations tailored to your specific needs in commodities trading and capital markets.'
    },
    {
      icon: <Bot size={32} />,
      title: 'Interactive Consultation',
      description: 'Engage with our AI analyst in real-time conversations about market trends, opportunities, and strategic questions.'
    }
  ];

  const useCases = [
    {
      title: 'For Commodities Traders',
      description: 'Get instant insights on fuel and energy commodity prices, market trends, and trading opportunities to optimize your buying and selling decisions.',
      benefits: [
        'Real-time price analysis',
        'Market trend identification',
        'Trading opportunity alerts',
        'Risk assessment for transactions'
      ]
    },
    {
      title: 'For Institutions & Money Managers',
      description: 'Leverage AI-powered market intelligence to support portfolio management decisions and identify opportunities for client returns.',
      benefits: [
        'Portfolio optimization insights',
        'Market timing recommendations',
        'Risk-adjusted return analysis',
        'Strategic asset allocation guidance'
      ]
    },
    {
      title: 'For Strategic Planning',
      description: 'Use advanced analytics to inform long-term strategic planning and market positioning across commodities and capital markets.',
      benefits: [
        'Long-term trend forecasting',
        'Scenario planning and modeling',
        'Market opportunity identification',
        'Strategic positioning recommendations'
      ]
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
              AI-Powered Intelligence
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Market Intelligence Platform
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powered by Gemini 2.5, our AI intelligence platform provides real-time market analysis, 
              strategic insights, and predictive analytics to support your decisions in commodities trading 
              and private capital markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              AI Capabilities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our AI platform combines advanced machine learning with deep market expertise to deliver 
              actionable intelligence for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors"
              >
                <div className="text-blue-500 mb-6">{capability.icon}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-slate-300 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              How It Works for You
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover how our AI intelligence platform can support your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive AI Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="p-4 bg-blue-500/10 rounded-lg w-fit mx-auto mb-6">
              <Bot className="text-blue-500 mx-auto" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Try Our AI Analyst
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Interact with our AI-powered analyst to get real-time insights on market trends, 
              commodity prices, and strategic opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Dashboard Component */}
      <MarketDashboard />

      {/* Technology Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Powered by Gemini 2.5
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Our AI intelligence platform is built on Google's Gemini 2.5, one of the most advanced 
                AI models available. This cutting-edge technology enables us to provide sophisticated 
                market analysis, trend prediction, and strategic insights.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The platform is specifically trained on commodities markets, energy trading, and capital 
                markets, ensuring that every insight is relevant and actionable for your business needs.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Advanced natural language understanding for complex market queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Real-time data processing and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Context-aware responses tailored to commodities and capital markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Continuous learning from market trends and patterns</span>
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
              <div className="p-4 bg-blue-500/10 rounded-lg w-fit mb-6">
                <Brain className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {[
                  '24/7 availability for instant market insights',
                  'Multi-language support for global markets',
                  'Secure and confidential conversations',
                  'Integration with real-time market data',
                  'Customizable analysis based on your preferences',
                  'Historical trend analysis and pattern recognition'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
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
            Experience AI-Powered Market Intelligence
          </motion.h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Start a conversation with our AI analyst above to get instant insights on market trends, 
            commodity prices, and strategic opportunities.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-xl transition-all"
          >
            Learn More <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default AIIntelligencePage;
