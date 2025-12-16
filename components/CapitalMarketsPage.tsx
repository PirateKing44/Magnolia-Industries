import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Target, BarChart3, Users, ArrowRight } from 'lucide-react';

const CapitalMarketsPage: React.FC = () => {
  const services = [
    {
      icon: <BarChart3 size={32} />,
      title: 'Portfolio Management',
      description: 'Strategic portfolio management services designed to deliver superior returns for your client base through diversified commodity and energy investments.'
    },
    {
      icon: <Target size={32} />,
      title: 'Strategic Investment Advisory',
      description: 'Expert guidance on market opportunities, risk assessment, and investment strategies tailored to institutional needs and client objectives.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Return Optimization',
      description: 'Data-driven approaches to optimize returns while managing risk, leveraging our deep market expertise and analytical capabilities.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Risk Management',
      description: 'Comprehensive risk management frameworks to protect capital and ensure sustainable growth for institutional portfolios.'
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Focused Solutions',
      description: 'Customized solutions designed to meet the specific needs of institutions and money managers, ensuring alignment with client objectives.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Market Intelligence',
      description: 'Access to real-time market insights, trend analysis, and strategic intelligence to inform investment decisions.'
    }
  ];

  const approach = [
    {
      phase: '01',
      title: 'Understanding Your Needs',
      description: 'We begin by thoroughly understanding your institution\'s objectives, risk tolerance, and client requirements.'
    },
    {
      phase: '02',
      title: 'Strategic Planning',
      description: 'Our team develops customized strategies aligned with your goals, leveraging our market expertise and analytical capabilities.'
    },
    {
      phase: '03',
      title: 'Implementation',
      description: 'We execute strategies with precision, monitoring performance and adjusting as market conditions evolve.'
    },
    {
      phase: '04',
      title: 'Ongoing Support',
      description: 'Continuous monitoring, reporting, and optimization to ensure your portfolio delivers consistent returns for your clients.'
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
              Private Capital Markets
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Supporting Institutions & Money Managers
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Magnolia Industries works in the private capital markets to support institutions 
              and money managers, helping them deliver superior returns for their client base 
              through strategic investments and market expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive capital markets solutions designed to help institutions and money 
              managers achieve their investment objectives and deliver value to their clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors"
              >
                <div className="text-blue-500 mb-6">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
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
              Our Approach
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A structured, client-focused methodology designed to deliver consistent results 
              and superior returns for your client base.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <div className="text-blue-500 font-bold text-3xl mb-4">{item.phase}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Why Choose Magnolia Industries?
              </h2>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-white">Proven Track Record:</strong> Years of experience in private capital markets and commodity trading</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-white">Market Expertise:</strong> Deep understanding of global commodity and energy markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-white">Client-Focused:</strong> Customized solutions tailored to your institution's specific needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-white">Risk Management:</strong> Comprehensive risk frameworks to protect capital and optimize returns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-white">Transparency:</strong> Clear reporting and communication throughout the investment process</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
            >
              <div className="p-4 bg-blue-500/10 rounded-lg w-fit mb-6">
                <TrendingUp className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Delivering Returns for Your Clients
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our primary focus is helping institutions and money managers deliver superior 
                returns for their client base. Through strategic investments, market expertise, 
                and disciplined risk management, we work as your partner in achieving investment 
                objectives.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Whether you're managing pension funds, endowments, family offices, or other 
                institutional capital, we provide the expertise and solutions you need to succeed 
                in today's complex markets.
              </p>
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
            Partner with Us
          </motion.h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Discover how Magnolia Industries can help your institution deliver superior returns 
            for your client base through strategic capital market solutions.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-xl transition-all"
          >
            Schedule a Consultation <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default CapitalMarketsPage;



