import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import CommoditiesPage from './components/CommoditiesPage';
import CapitalMarketsPage from './components/CapitalMarketsPage';
import SectorsPage from './components/SectorsPage';
import StrategyPage from './components/StrategyPage';
import ContactPage from './components/ContactPage';
import AIIntelligencePage from './components/AIIntelligencePage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/commodities" element={<CommoditiesPage />} />
            <Route path="/capital-markets" element={<CapitalMarketsPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/strategy" element={<StrategyPage />} />
            <Route path="/intelligence" element={<AIIntelligencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;