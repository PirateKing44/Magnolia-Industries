import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoImage from '../assets/thumbnail_image001.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoImage} 
                alt="Magnolia Industries Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stewarding capital through generations. Specializing in the physical and financial trading of global commodities.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Sectors</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-blue-400 cursor-pointer transition">Energy Trading</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Sustainable Agriculture</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Precious Metals</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Venture Capital</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Offices</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                 <MapPin size={16} className="text-blue-500 mt-1 shrink-0" />
                 <span>Geneva, Switzerland<br/>Headquarters</span>
              </li>
              <li className="flex items-start gap-2">
                 <MapPin size={16} className="text-blue-500 mt-1 shrink-0" />
                 <span>Houston, TX, USA<br/>Energy Desk</span>
              </li>
              <li className="flex items-start gap-2">
                 <MapPin size={16} className="text-blue-500 mt-1 shrink-0" />
                 <span>Singapore<br/>APAC Operations</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" />
                <span>investor.relations@magnolia.industries</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-500" />
                <span>+41 22 555 0199</span>
              </li>
            </ul>
            <div className="mt-6">
                <button className="text-xs uppercase tracking-widest text-blue-500 border border-blue-500/30 px-6 py-3 hover:bg-blue-500 hover:text-white transition-all duration-300">
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