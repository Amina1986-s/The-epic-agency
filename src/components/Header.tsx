import React, { useState, useEffect } from 'react';
import { navLinks } from '../data';
import { Brain, Cpu, Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ currentSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [systemTime, setSystemTime] = useState('17:22:05');

  // Track scroll position to update header background transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set real simulated timestamp matching current operational time
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const formatTime = (t: number) => t.toString().padStart(2, '0');
      setSystemTime(`${formatTime(date.getHours())}:${formatTime(date.getMinutes())}:${formatTime(date.getSeconds())}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#0e0e0e]/95 border-b border-[#889484]/15 shadow-2xl backdrop-blur-md' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#201f1f] border border-[#889484]/25 overflow-hidden transition-all group-hover:border-[#93f993]/40">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#007523]/20 to-[#93f993]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Brain className="w-5 h-5 text-[#93f993] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <span className="text-sm font-mono tracking-wider text-[#93f993] block leading-none font-bold">POWERFUL</span>
            <span className="text-xs tracking-widest text-[#e5e2e1]/50 hover:text-white transition-colors">NEURAL AGENCY</span>
          </div>
        </div>

        {/* DESKTOP DESCRIPTIVE ACTION BAR */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-[#201f1f]/80 rounded-full border border-[#889484]/15">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-5 py-2 text-xs font-mono font-medium tracking-wide rounded-full transition-all duration-300 relative ${
                currentSection === link.id 
                  ? 'text-[#002105] bg-[#93f993] font-bold' 
                  : 'text-[#e5e2e1]/70 hover:text-[#e5e2e1] hover:bg-neutral-800'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* SYSTEM STATUS METRICS BAR */}
        <div className="hidden md:flex items-center gap-6 text-[10px] font-mono tracking-wider">
          <div className="flex items-center gap-1.5 text-[#889484]">
            <Terminal className="w-3.5 h-3.5 text-[#93f993]" />
            <span>SYS CLOCK:</span>
            <span className="text-[#e5e2e1] bg-[#201f1f] px-2 py-0.5 rounded border border-[#889484]/10">{systemTime} UTC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#93f993] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#93f993]"></span>
            </span>
            <span className="text-[#78fbaf] uppercase font-semibold">NEURAL GRID LIVE</span>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md bg-[#201f1f] border border-[#889484]/20 hover:border-[#93f993]/40 text-[#e5e2e1]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0e0e0e] border-b border-[#889484]/30 shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full py-3.5 px-4 rounded-lg text-left text-sm font-mono tracking-wider transition-all border ${
                    currentSection === link.id
                      ? 'border-[#93f993]/30 bg-[#93f993]/10 text-[#93f993] font-bold'
                      : 'border-transparent text-[#e5e2e1]/70 hover:bg-[#201f1f]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-[#889484]/15 flex flex-col gap-2 p-2">
                <div className="flex justify-between items-center text-xs text-[#889484] font-mono">
                  <span>SYSTEM:</span>
                  <span className="text-[#93f993] font-bold">ONLINE</span>
                </div>
                <div className="flex justify-between items-center text-xs text-[#889484] font-mono">
                  <span>OPERATIONAL TIME:</span>
                  <span className="text-white">{systemTime} UTC</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
