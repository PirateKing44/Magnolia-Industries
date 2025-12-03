import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Target, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const locations = [
    { name: 'Wyoming, USA', icon: <MapPin size={20} /> },
    { name: 'New Jersey, USA', icon: <MapPin size={20} /> },
    { name: 'New York, USA', icon: <MapPin size={20} /> },
    { name: 'South Carolina, USA', icon: <MapPin size={20} /> },
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
              About Magnolia Industries
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Connecting Markets, Powering Growth
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Magnolia Industries, LLC is your trusted partner in the global commodities marketplace, 
              specializing in connecting buyers and sellers of fuel and energy commodities while 
              supporting institutions and money managers in private capital markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-4 bg-blue-500/10 rounded-lg w-fit mb-6">
                <Target className="text-blue-500" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                At Magnolia Industries, we believe that true value is created at the intersection of 
                supply and demand. Our mission is to be the powerhouse that connects buyers and sellers 
                of fuel and energy commodities, facilitating seamless transactions in a complex global market.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Simultaneously, we work in the private capital markets to support institutions and money 
                managers, helping them deliver superior returns for their client base through strategic 
                investments and market expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
            >
              <div className="p-4 bg-blue-500/10 rounded-lg w-fit mb-6">
                <Building2 className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Our Capabilities
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Connecting buyers and sellers of fuel and energy commodities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Supporting institutions and money managers in private capital markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Delivering strategic returns for client portfolios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Market expertise across global commodity markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Risk management and strategic analysis</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="p-4 bg-blue-500/10 rounded-lg w-fit mx-auto mb-6">
              <Users className="text-blue-500 mx-auto" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Our Locations
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              With offices across the United States, we maintain a strong presence in key markets 
              to serve our clients effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="text-blue-500 mb-4 flex justify-center">
                  {location.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{location.name}</h3>
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
            Partner with Magnolia Industries
          </motion.h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Whether you're a buyer or seller of fuel and energy commodities, or an institution 
            seeking capital market solutions, we're here to help.
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

export default AboutPage;

