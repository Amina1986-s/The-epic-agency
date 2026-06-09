import React, { useState } from 'react';
import { navLinks } from '../data';
import { Mail, Shield, Check, Send, Globe, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="relative mt-20 bg-[#0e0e0e] border-t border-[#889484]/20 py-20 px-6 overflow-hidden">
      
      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,249,147,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,249,147,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#93f993]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* BRAND COLUMN */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#201f1f] border border-[#889484]/30 flex items-center justify-center">
              <span className="text-sm font-mono text-[#93f993] font-black">AI</span>
            </div>
            <span className="font-display font-extrabold text-[#e5e2e1] tracking-tight">AI POWERFUL AGENCY</span>
          </div>
          <p className="text-xs text-[#889484] leading-relaxed font-sans max-w-sm">
            Evolving legacy architectures into custom-weights. We supply deep cognitive automation solutions and real-time private telemetry interfaces to global forward-thinkers.
          </p>
          <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-wider text-[#93f993] bg-[#201f1f] border border-[#ffdad8]/10 px-3 py-1.5 rounded-md w-fit">
            <Shield className="w-3.5 h-3.5" />
            <span>ZERO DATA LEAK SECURITY CERTIFIED</span>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono tracking-wider text-[#e5e2e1] uppercase font-bold">CORE STRUCTURES</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="text-xs font-sans text-[#889484] hover:text-[#93f993] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#93f993] transition-colors" />
                  {link.name} Navigation
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT CHANNELS */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono tracking-wider text-[#e5e2e1] uppercase font-bold">SECURE PIPELINES</h4>
          <ul className="space-y-3.5 text-xs text-[#889484] font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#93f993] shrink-0 mt-0.5" />
              <span>Silicon Labs, Level 88, Suite Alpha, Tokyo & New York</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#93f993] shrink-0" />
              <span>+1 (555) 308-4000</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#93f993] shrink-0" />
              <span>secure@aipa.agency</span>
            </li>
          </ul>
        </div>

        {/* INDUSTRIAL TRANSMISSION */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono tracking-wider text-[#e5e2e1] uppercase font-bold">PRIORITY SIGNALS</h4>
          <p className="text-xs text-[#889484] leading-relaxed">
            Subscribe to our confidential bi-weekly tech diagnostic log outlining private weight updates and neural design benchmarks.
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              placeholder="operator@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1c1b1b] border border-[#889484]/30 rounded px-3.5 py-2.5 text-xs text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-[#93f993] transition-colors pr-10"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 bg-[#93f993] hover:bg-[#77dc7a] text-black font-semibold rounded transition-colors flex items-center justify-center cursor-pointer"
            >
              {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
            </button>
          </form>
          {subscribed && (
            <p className="text-[10px] font-mono text-[#93f993] animate-pulse">
              Transmission Registered. Diagnostic link dispatched.
            </p>
          )}
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#889484]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-[#889484]">
        <div>
          <span>© {new Date().getFullYear()} AI POWERFUL AGENCY LP. ALL INTELLECTUAL WEIGHTS PATENDED.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">COMPLIANCE DIRECTIVE</a>
          <a href="#" className="hover:text-white transition-colors">ZERO-KNOWLEDGE INFRA</a>
          <span className="text-[#93f993]">VERIFIED v4.2S</span>
        </div>
      </div>

    </footer>
  );
}
