import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Globe, Zap, Users } from 'lucide-react';

const CommoditiesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyers' | 'sellers'>('buyers');

  const buyerBenefits = [
    {
      icon: <TrendingUp size={24} />,
      title: 'Competitive Pricing',
      description: 'Access to a wide network of verified sellers offering competitive fuel and energy prices.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Verified Suppliers',
      description: 'All sellers in our network are thoroughly vetted for reliability and quality assurance.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Reach',
      description: 'Connect with suppliers from around the world, expanding your sourcing options.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Streamlined Process',
      description: 'Efficient transaction process from inquiry to delivery, saving time and resources.'
    }
  ];

  const sellerBenefits = [
    {
      icon: <Users size={24} />,
      title: 'Access to Buyers',
      description: 'Connect with qualified buyers actively seeking fuel and energy commodities.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Market Opportunities',
      description: 'Expand your market reach and discover new opportunities for your products.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure Transactions',
      description: 'Benefit from our secure transaction framework and payment protection.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Network',
      description: 'Tap into our extensive network of international buyers and traders.'
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
              Commodities Trading
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Your Powerhouse for Fuel & Energy Trading
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Magnolia Industries connects buyers and sellers of fuel and energy commodities, 
              facilitating seamless transactions in a complex global marketplace. We are your 
              trusted partner in navigating the energy trading landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How Our Marketplace Works
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We simplify the complex process of fuel and energy commodity trading through 
              our comprehensive platform and expert network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect',
                description: 'Buyers and sellers register and connect through our platform, providing details about their needs and offerings.'
              },
              {
                step: '02',
                title: 'Match',
                description: 'Our team uses market expertise to match buyers with suitable sellers based on requirements, location, and specifications.'
              },
              {
                step: '03',
                title: 'Facilitate',
                description: 'We facilitate the transaction process, ensuring smooth communication, contract negotiation, and delivery coordination.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
              >
                <div className="text-blue-500 font-bold text-4xl mb-4">{item.step}</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Benefits for Your Business
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('buyers')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'buyers'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              For Buyers
            </button>
            <button
              onClick={() => setActiveTab('sellers')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'sellers'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              For Sellers
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(activeTab === 'buyers' ? buyerBenefits : sellerBenefits).map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="text-blue-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commodities Focus */}
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
              Fuel & Energy Commodities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We specialize in connecting buyers and sellers across the full spectrum of fuel and energy commodities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Crude Oil',
              'Refined Products',
              'Natural Gas',
              'Renewable Energy',
              'Diesel',
              'Gasoline',
              'Jet Fuel',
              'Heating Oil'
            ].map((commodity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 text-center hover:border-blue-500/50 transition-colors"
              >
                <span className="text-white font-medium">{commodity}</span>
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
            Ready to Connect?
          </motion.h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Whether you're looking to buy or sell fuel and energy commodities, our team is ready 
            to facilitate your next transaction.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-xl transition-all"
          >
            Get Started <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default CommoditiesPage;



