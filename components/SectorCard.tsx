import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SectorCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const SectorCard: React.FC<SectorCardProps> = ({ title, description, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer"
    >
      <div className="absolute inset-0 bg-slate-900">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
              {title}
            </h3>
            <p className="text-slate-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300 max-w-[90%]">
              {description}
            </p>
          </div>
          <div className="bg-gold-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="text-slate-950" size={20} />
          </div>
        </div>
      </div>
      
      <div className="absolute top-6 right-6 px-3 py-1 bg-slate-950/30 backdrop-blur border border-white/10 rounded-full text-xs font-mono text-gold-400 uppercase tracking-wider">
        Sector 0{index + 1}
      </div>
    </motion.div>
  );
};

export default SectorCard;