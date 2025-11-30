import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gold-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute inset-0 bg-slate-950/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
            style={{ y: y1 }}
            className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gold-500 font-semibold tracking-[0.3em] uppercase mb-4 text-sm md:text-base"
          >
            Since 1982
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Fueling <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-amber-700">Global</span><br />
            Prosperity
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 font-light"
          >
            Navigating complex energy markets and agricultural landscapes with generational wisdom and algorithmic precision.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;