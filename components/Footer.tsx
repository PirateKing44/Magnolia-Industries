import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
                 {/* Magnolia Flower Logo (Small) */}
                 <div className="text-gold-500">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 20C50 20 62 35 62 55C62 75 50 85 50 85C50 85 38 75 38 55C38 35 50 20 50 20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
                      <path d="M50 85C50 85 65 80 75 65C85 50 80 35 70 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M50 85C50 85 35 80 25 65C15 50 20 35 30 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M38 55C38 55 25 50 20 40C15 30 20 20 35 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M62 55C62 55 75 50 80 40C85 30 80 20 65 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                 </div>
                 <div className="flex flex-col justify-center">
                    <span className="text-xl font-serif font-bold text-slate-100 tracking-wide leading-none">
                      MAGNOLIA
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                       <span className="text-[9px] font-sans font-bold text-gold-500 tracking-[0.2em] uppercase leading-none">
                        INDUSTRIES
                       </span>
                    </div>
                </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stewarding capital through generations. Specializing in the physical and financial trading of global commodities.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Sectors</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-gold-400 cursor-pointer transition">Energy Trading</li>
              <li className="hover:text-gold-400 cursor-pointer transition">Sustainable Agriculture</li>
              <li className="hover:text-gold-400 cursor-pointer transition">Precious Metals</li>
              <li className="hover:text-gold-400 cursor-pointer transition">Venture Capital</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Offices</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                 <MapPin size={16} className="text-gold-500 mt-1 shrink-0" />
                 <span>Geneva, Switzerland<br/>Headquarters</span>
              </li>
              <li className="flex items-start gap-2">
                 <MapPin size={16} className="text-gold-500 mt-1 shrink-0" />
                 <span>Houston, TX, USA<br/>Energy Desk</span>
              </li>
              <li className="flex items-start gap-2">
                 <MapPin size={16} className="text-gold-500 mt-1 shrink-0" />
                 <span>Singapore<br/>APAC Operations</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold-500" />
                <span>investor.relations@magnolia.industries</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold-500" />
                <span>+41 22 555 0199</span>
              </li>
            </ul>
            <div className="mt-6">
                <button className="text-xs uppercase tracking-widest text-gold-500 border border-gold-500/30 px-6 py-3 hover:bg-gold-500 hover:text-slate-950 transition-all duration-300">
                    Request Access
                </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Magnolia Industries. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-slate-400">Privacy Policy</span>
            <span className="cursor-pointer hover:text-slate-400">Terms of Service</span>
            <span className="cursor-pointer hover:text-slate-400">Regulatory Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;