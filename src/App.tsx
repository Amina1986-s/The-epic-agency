import React, { useState, useEffect } from 'react';
import { 
  servicesData, solutionsData, testimonialsData, casesData, faqData, 
  ServiceItem, SolutionItem, CaseStudyItem 
} from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkflowArchitect from './components/WorkflowArchitect';
import ServiceDetailPanel from './components/ServiceDetailPanel';
import IndustryROICalculator from './components/IndustryROICalculator';
import ContactDiagnostic from './components/ContactDiagnostic';

import { 
  Cpu, ArrowRight, ShieldCheck, Database, FlaskConical, Sparkles, 
  Search, CheckCircle, ChevronDown, ChevronUp, User, Quote, Star, 
  Network, Activity, Brain, Clock, HelpCircle, Flame
} from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeService, setActiveService] = useState<ServiceItem>(servicesData[0]);
  const [activeSolution, setActiveSolution] = useState<SolutionItem>(solutionsData[0]);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [statsCounter, setStatsCounter] = useState({
    pipelines: 4120,
    accuracy: 99.92,
    decisions: 2384910400,
    latency: 1.4
  });

  // Slowly increment mock KPIs dynamically to simulate active live streams
  useEffect(() => {
    const interval = setInterval(() => {
      setStatsCounter(prev => ({
        pipelines: prev.pipelines + (Math.random() > 0.7 ? 1 : 0),
        accuracy: Math.min(99.99, parseFloat((prev.accuracy + (Math.random() > 0.9 ? 0.01 : 0)).toFixed(2))),
        decisions: prev.decisions + Math.floor(Math.random() * 8 + 1),
        latency: Math.max(1.1, parseFloat((prev.latency + (Math.random() > 0.8 ? (Math.random() > 0.5 ? 0.1 : -0.1) : 0)).toFixed(1)))
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Set active section coordinate when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'solutions', 'cases', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentSection(sectionId);
    }
  };

  const filteredServices = servicesData.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen text-[#e5e2e1] bg-[#131313] font-sans selection:bg-[#93f993] selection:text-[#002105]" id="aipa-app-root">
      
      {/* GLOBAL NAVBAR */}
      <Header currentSection={currentSection} onNavigate={handleNavigate} />

      {/* SECTION 1: HERO / LANDING */}
      <section id="home" className="relative pt-36 pb-20 px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden">
        
        {/* Hotlinked graphic map background with modern high-contrast masking overlay */}
        <div className="absolute inset-0 z-0 bg-[#131313]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtCNKpEx5_mZNK7nXL1i1X_Aix8xNQ8fibo5vKXD6yBFOImvl86eYcgeU0Q_AUdcSViPqbZxY2gUjBB_wr8xv_m6s9qHKsYY5PiRa4ZQq8QWNi9X5BRUWuOohsHPr4gVgHlmYXienB8LzfXInKs79QAcPB4iwjPVJE6zxpnK-UwGPiYwdYm7d5AgD_qtny3WYeSEkJvegoVXORVXX0KQ9yusKVIymfVRAmTjDxc7a2QmEom-K5XGkMx9XhMlRN6NbJ6GlxKxbolQ" 
            alt="Synthetic Map Networks" 
            className="w-full h-full object-cover grayscale opacity-15 mix-blend-luminosity scale-110 motion-safe:animate-pulse"
            referrerPolicy="no-referrer"
          />
          {/* Gradients blending into the background color */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/70 to-[#131313]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(147,249,147,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(147,249,147,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
          
          {/* MOTTO & BRANDING IN DISPLAY TYPE */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201f1f] border border-[#889484]/25 text-[#93f993] font-mono text-[10px] tracking-widest uppercase">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#93f993] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#93f993]"></span>
              </span>
              <span>Enterprise Grade Deep-Neural Integration</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
              We Automate Enterprise Scale With <span className="bg-gradient-to-r from-[#93f993] via-[#78fbaf] to-[#ffffff] bg-clip-text text-transparent">Custom Weights</span>
            </h1>

            <p className="text-sm sm:text-base text-[#889484] leading-relaxed max-w-2xl mx-auto font-sans">
              AI Powerful Agency designs bespoke, zero-trust autonomous agent swarms, semantic index pipelining, and predictive systems. Hardened architectures optimized for rapid business throughput.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => handleNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#93f993] hover:bg-[#77dc7a] text-black font-semibold text-xs font-mono tracking-widest uppercase shadow-xl hover:shadow-[#93f993]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>COMMISSION WORKFLOWS</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
              <button 
                onClick={() => handleNavigate('services')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#889484]/30 hover:bg-neutral-800 text-white font-semibold text-xs font-mono tracking-widest uppercase transition-all cursor-pointer"
              >
                VIEW CORE PROTOCOLS
              </button>
            </div>

          </div>

          {/* REALTIME SYSTEM STATS METRIC GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#889484]/15">
            <div className="p-5 rounded-2xl bg-[#0e0e0e]/90 border border-[#889484]/10 text-center">
              <span className="text-[10px] font-mono tracking-widest text-[#889484] uppercase">ACTIVE PIPELINES</span>
              <p className="text-2xl sm:text-3xl font-display font-black text-[#93f993] mt-1.5">{statsCounter.pipelines.toLocaleString()}</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0e0e0e]/90 border border-[#889484]/10 text-center">
              <span className="text-[10px] font-mono tracking-widest text-[#889484] uppercase">DECISIONS MAPPED</span>
              <p className="text-lg sm:text-xl font-mono font-bold text-white mt-2.5">{(statsCounter.decisions / 1e9).toFixed(3)} Billion</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0e0e0e]/90 border border-[#889484]/10 text-center">
              <span className="text-[10px] font-mono tracking-widest text-[#889484] uppercase">ACCURACY RATE</span>
              <p className="text-2xl sm:text-3xl font-display font-black text-[#93f993] mt-1.5">{statsCounter.accuracy}%</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0e0e0e]/90 border border-[#889484]/10 text-center">
              <span className="text-[10px] font-mono tracking-widest text-[#889484] uppercase">PEAK DELAY</span>
              <p className="text-2xl sm:text-3xl font-display font-black text-white mt-1.5">{statsCounter.latency} ms</p>
            </div>
          </div>

          {/* DYNAMIC METRIC INTERACTIVE WORKFLOW SANDBOX */}
          <div className="pt-8">
            <WorkflowArchitect />
          </div>

        </div>

      </section>

      {/* HIGHLIGHTED PRESENTATIVE BENTO GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-[#93f993] uppercase">HIGH-CAPACITY COMPONENT PARADIGMS</span>
          <h2 className="text-3xl font-display font-extrabold text-white">Our Architectural Milestones</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Cognitive Automation */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-[#889484]/20 bg-[#1c1b1b]/80 group flex flex-col justify-between">
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#93f993]/10 border border-[#93f993]/30 rounded-lg text-[#93f993]">
                  <Brain className="w-5 h-5 animate-pulse" />
                </div>
                <span className="px-2.5 py-1 text-[9px] font-mono bg-[#93f993]/10 text-[#93f993] rounded border border-[#93f993]/20 uppercase font-bold">HOTLINK SYNCED</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">Full-Scale Cognitive Automation</h3>
              <p className="text-xs text-[#889484] leading-relaxed max-w-xl">
                Deploy redundant multi-tiered reasoning loops that handle structural intake. We model business protocols into specialized vector indices that learn and adapt instantly.
              </p>
            </div>
            <div className="h-60 relative w-full overflow-hidden border-t border-neutral-800">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWTINt7RCECgSYd1kyp64EkeC_N8IYI_gfuOc7CNL0B4L09BnuMKQOtnAGJU6pHJhKD3RqLSe-qGHAmvfLhhuipfaAxdqkGu53YMAy72wV2TMGrrZIL8OJhajHvBCnAc-u2eFRLaK3t-Zrv1D15GPydBQYSqfwut7MozjWbvaJ1jojUFo3rwkAqt2RooOjvKS-ocILcY0qZyKtfCdSJpLXj0HFehjWH24PnpHgEjvZYN5DH4rLimHYW5n1R_BHZChXBme6yQeB6w" 
                alt="Cognitive Automation Blueprint" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-750"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1c1b1b] to-transparent" />
            </div>
          </div>

          {/* Card 2: Custom AI Agents */}
          <div className="p-8 rounded-2xl border border-[#889484]/25 bg-[#1c1b1b] flex flex-col justify-between group hover:border-[#93f993]/35 transition-all">
            <div className="space-y-4">
              <div className="p-3 bg-[#93f993]/10 border border-[#93f993]/30 rounded-lg text-[#93f993] w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Bespoke Neural Specialists</h3>
              <p className="text-xs text-[#889484] leading-relaxed">
                24/7 dedicated container nodes programmed to optimize administrative tasks, CRM, sentiment indexing, and API integrations with complete local shielding protection.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-[#93f993]">
              <span>COMPILE AGENTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: Predictive Analytics */}
          <div className="p-8 rounded-2xl border border-[#889484]/25 bg-[#1c1b1b] flex flex-col justify-between group hover:border-[#93f993]/35 transition-all">
            <div className="space-y-4">
              <div className="p-3 bg-[#93f993]/10 border border-[#93f993]/30 rounded-lg text-[#93f993] w-fit">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Foresight & Prediction</h3>
              <p className="text-xs text-[#889484] leading-relaxed">
                Leverage high-utility mathematical regression models to calculate real supply shifts, volatile demand patterns, and customer lifetime actions before they occur.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-[#93f993]">
              <span>FORECAST TELEMETRY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 4: Enterprise-Grade Infrastructure */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-[#889484]/20 bg-[#1c1b1b]/80 flex flex-col justify-between p-8 relative">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131313] border border-neutral-800 text-[10px] font-mono text-cyan-400">
                <span>PORT STATUS: 3000 SSL</span>
              </div>
              <h2 className="text-2xl font-display font-extrabold text-white">Hardened Multi-Core Infrastructure</h2>
              <p className="text-xs text-[#889484] leading-relaxed max-w-xl">
                Physical nodes are distributed globally behind our multi-layered egress proxy shielding framework. This safeguards sensitive customer telemetry datasets and guarantees immediate low-latency processing speeds globally.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3.5 bg-neutral-900 rounded border border-neutral-800 text-center">
                <span className="text-[#889484] text-[9px]">SSL EGRESS</span>
                <p className="text-[#93f993] font-bold mt-1">SECURED</p>
              </div>
              <div className="p-3.5 bg-neutral-900 rounded border border-neutral-800 text-center">
                <span className="text-[#889484] text-[9px]">Uptime Guarantee</span>
                <p className="text-white font-bold mt-1">99.999%</p>
              </div>
              <div className="p-3.5 bg-neutral-900 rounded border border-neutral-800 text-center">
                <span className="text-[#889484] text-[9px]">Node Core Latency</span>
                <p className="text-[#93f993] font-bold mt-1">&lt;1.8 ms</p>
              </div>
              <div className="p-3.5 bg-neutral-900 rounded border border-neutral-800 text-center">
                <span className="text-[#889484] text-[9px]">Local Weights Pool</span>
                <p className="text-white font-bold mt-1">ISOLATED</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* SECTION 2: SERVICES VIEW (12 ADVANCED PARADIGMS) */}
      <section id="services" className="py-20 bg-[#0e0e0e] border-y border-[#889484]/15 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,249,147,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(147,249,147,0.005)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#889484]/15">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#93f993] uppercase font-bold">AIPA CORE CAPABILITIES</span>
              <h2 className="text-3xl font-display font-extrabold text-white">Advanced Services Protocol Catalog</h2>
              <p className="text-xs text-[#889484] leading-relaxed max-w-lg">
                Explore our vetted solutions. Filter through our 12 computational modules and select any card to load real-time telemetry testing inside the live interactive side panel immediately.
              </p>
            </div>

            {/* Live Search Filter */}
            <div className="relative w-full md:w-[280px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
              <input
                type="text"
                placeholder="Search capability logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1c1b1b] border border-[#889484]/30 rounded px-10 py-3 text-xs text-white placeholder:text-neutral-600 font-mono focus:outline-none focus:border-[#93f993]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Left Catalog (Scrollable) */}
            <div className="lg:col-span-2 space-y-4 max-h-[820px] overflow-y-auto pr-3 scrollbar-thin">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredServices.map((service) => {
                  const isActive = activeService.id === service.id;
                  const ServiceIcon = service.icon;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      className={`p-5 rounded-xl border cursor-pointer select-none transition-all duration-300 relative group ${
                        isActive 
                          ? 'bg-[#1c1b1b] border-[#93f993] text-white shadow-lg' 
                          : 'bg-[#131313] border-[#889484]/15 hover:border-[#889484]/35 text-[#e5e2e1]/70'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className={`p-2.5 rounded text-xs ${
                          isActive ? 'bg-[#93f993] text-[#002105]' : 'bg-[#1c1b1b] text-[#889484] group-hover:bg-[#201f1f] group-hover:text-white'
                        }`}>
                          <ServiceIcon className="w-4 h-4" />
                        </div>
                        {service.tag && (
                          <span className="px-2 py-0.5 rounded text-[8px] font-mono tracking-widest bg-[#201f1f] border border-[#889484]/20 text-[#93f993] uppercase font-bold">
                            {service.tag}
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-display font-black leading-tight text-white">{service.title}</h4>
                        <p className="text-xs text-[#889484] leading-relaxed line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Floating Indicator indicator */}
                      <div className="pt-3 mt-3 border-t border-[#889484]/10 flex justify-between items-center text-[9px] font-mono tracking-wider">
                        <span className="text-cyan-400">Node Locked</span>
                        {isActive && <span className="text-[#93f993] uppercase font-bold">ACTIVE TESTBED</span>}
                      </div>
                    </div>
                  );
                })}

                {filteredServices.length === 0 && (
                  <div className="col-span-2 text-center py-12 border border-dashed border-neutral-800 rounded-xl text-xs text-[#889484] font-mono">
                    Zero capabilities matching Query coordinates. Try a alternative prompt.
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Spec Sheet Panel */}
            <div className="lg:col-span-1">
              <ServiceDetailPanel service={activeService} />
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: SOLUTIONS VIEW */}
      <section id="solutions" className="py-20 max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono tracking-widest text-[#93f993] uppercase font-bold">CUSTOM VERTICALS MATRIX</span>
          <h2 className="text-3xl font-display font-extrabold text-[#e5e2e1]">Industrial Integration Solutions</h2>
          <p className="text-xs text-[#889484] leading-relaxed">
            Choose a custom sector paradigm below to load vertical structures, hotlinked graphics overlays, and evaluate estimated monthly labor-hours saved and USD return using the telemetry calculator.
          </p>
        </div>

        {/* Sector Grid Toggles */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {solutionsData.map((sol) => {
            const isSelected = activeSolution.id === sol.id;
            const SolIcon = sol.icon;
            return (
              <div
                key={sol.id}
                onClick={() => setActiveSolution(sol)}
                className={`py-4 px-3 rounded-lg border text-center cursor-pointer select-none transition-all duration-300 relative group ${
                  isSelected 
                    ? 'bg-[#1c1b1b] border-[#93f993] text-white' 
                    : 'bg-[#0e0e0e]/80 border-neutral-800 hover:border-[#889484]/30 text-zinc-400'
                }`}
              >
                <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center text-xs transition-colors ${
                  isSelected ? 'bg-[#93f993] text-[#002105]' : 'bg-[#1c1b1b] text-[#889484] group-hover:text-white'
                }`}>
                  <SolIcon className="w-4 h-4" />
                </div>
                <p className="text-[10px] font-mono font-bold tracking-tight uppercase block mt-3 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                  {sol.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic ROI Telemetry Card */}
        <IndustryROICalculator solution={activeSolution} />

      </section>

      {/* SECTION 4: CASE STUDIES & CLIENT VERIFIED TESTIMONIALS */}
      <section id="cases" className="py-20 bg-[#0e0e0e] border-y border-[#889484]/15">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#93f993] uppercase font-bold">CASE DIRECTIVES</span>
            <h2 className="text-3xl font-display font-extrabold text-white">Hardened Implementations In-Action</h2>
          </div>

          {/* Cases grid with image hotlinks and progress status indicators */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {casesData.map((cs) => {
              return (
                <div key={cs.id} className="glass-card rounded-2xl overflow-hidden border border-[#889484]/20 flex flex-col justify-between hover-perspective group">
                  <div>
                    {/* Hotlinked Industrial Frame */}
                    <div className="h-56 relative overflow-hidden bg-neutral-900 border-b border-neutral-800">
                      <img 
                        src={cs.visualImgUrl} 
                        alt={cs.client} 
                        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-750" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-black/80 border border-emerald-500/30 text-emerald-400 uppercase font-black">
                          {cs.category} ACTIVE
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-6">
                        <span className="text-[10px] font-mono text-[#93f993] block">OPERATIONAL PILOT RECIPIENT</span>
                        <h4 className="text-lg font-display font-bold text-white mt-0.5">{cs.client}</h4>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-display font-black text-white">{cs.title}</h3>
                        <p className="text-xs text-[#889484] leading-relaxed">
                          {cs.description}
                        </p>
                      </div>

                      {/* Custom Metric indicators */}
                      <div className="space-y-4 pt-2">
                        <h4 className="text-[9px] font-mono tracking-widest text-[#93f993] uppercase font-bold">TELEMETRY IMPACT GAINS</h4>
                        <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                          {cs.metrics.map((m, idx) => (
                            <div key={idx} className="p-3.5 bg-neutral-900/60 rounded border border-neutral-800">
                              <span className="text-[#889484] text-[9px] block uppercase">{m.label}</span>
                              <span className="text-base text-white font-extrabold mt-1 block">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Optional inline validation quote */}
                      {cs.quote && (
                        <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800 relative pl-12 font-sans italic text-xs text-neutral-400 leading-relaxed">
                          <Quote className="w-5 h-5 text-[#93f993] absolute left-4 top-4 opacity-40 shrink-0" />
                          <p className="mt-1">"{cs.quote}"</p>
                          <div className="mt-3 flex items-center gap-3">
                            {cs.authorPortrait && (
                              <img 
                                src={cs.authorPortrait} 
                                alt={cs.quoteAuthor} 
                                className="w-7 h-7 rounded-full object-cover border border-neutral-700" 
                                referrerPolicy="no-referrer"
                              />
                            )}
                            <div>
                              <span className="text-white text-[10px] font-mono block leading-none font-bold">{cs.quoteAuthor}</span>
                              <span className="text-[9px] font-mono text-[#889484] mt-0.5 block leading-none">{cs.quoteRole}, {cs.client}</span>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customer Testimonials Slider */}
          <div className="pt-10 border-t border-[#889484]/10 space-y-8">
            <h3 className="text-xs font-mono tracking-widest text-center text-[#93f993] uppercase font-bold">CLIENT LOGS & COMMENDATIONS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialsData.map((test, index) => (
                <div key={index} className="p-6 rounded-xl border border-neutral-800 bg-[#131313]/50 space-y-6 flex flex-col justify-between relative group hover:border-[#93f993]/20 transition-all">
                  
                  <div className="space-y-4">
                    {/* Rating stars display */}
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed italic">
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-900">
                    <img 
                      src={test.portraitUrl} 
                      alt={test.author} 
                      className="w-9 h-9 rounded-full object-cover border border-[#889484]/35 group-hover:border-[#93f993]/50 transition-colors" 
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="text-xs font-mono text-white leading-none font-bold">{test.author}</h5>
                      <p className="text-[10px] font-mono text-[#889484] mt-1 leading-none">{test.role}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US BRAND SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Why Choose Us Left: Text Specs grid */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#93f993] uppercase font-bold">TECHNICAL TRUST ADVANTAGES</span>
            <h2 className="text-3xl font-display font-black text-white leading-tight">Hardened Infrastructure Guaranteeing Zero Data Leakage</h2>
            <p className="text-xs text-[#889484] leading-relaxed">
              We engineer custom enterprise systems backed by absolute zero-trust parameters. We do not use third-party APIs or external weight pools. Your private data weights remain securely inside your direct containerized environments.
            </p>
          </div>

          <div className="space-y-4 text-xs font-sans">
            <div className="flex gap-4 items-start p-4 bg-[#0e0e0e]/90 border border-[#889484]/15 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#93f993]/10 border border-[#93f993]/30 flex items-center justify-center text-[#93f993] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white font-mono text-xs">Isolated Weight Caches</h4>
                <p className="text-[#889484] text-xs leading-relaxed">Your models represent isolated, locked mathematical weights that never share data vectors, ensuring competitor systems stay blind to your mechanics.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 bg-[#0e0e0e]/90 border border-[#889484]/15 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#93f993]/10 border border-[#93f993]/30 flex items-center justify-center text-[#93f993] shrink-0">
                <Network className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white font-mono text-xs">SSL Egress Proxy Guarding</h4>
                <p className="text-[#889484] text-xs leading-relaxed">We restrict public inputs using layered egress proxying. Operations process immediately with latencies below 2ms limits.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 bg-[#0e0e0e]/90 border border-[#889484]/15 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#93f993]/10 border border-[#93f993]/30 flex items-center justify-center text-[#93f993] shrink-0">
                <FlaskConical className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white font-mono text-xs">Priority Quantum-Ready R&D</h4>
                <p className="text-[#889484] text-xs leading-relaxed">Clients receive early telemetry to our physical Innovation Lab sandbox pools, trying experimental swarms before broader market launches.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Right: Hotlinked Lab image with technical parameters */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#93f993]/10 blur-xl rounded-2xl pointer-events-none group-hover:bg-[#93f993]/15 transition-all" />
          <div className="relative rounded-2xl overflow-hidden border border-[#889484]/30 bg-[#0e0e0e] h-[480px]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb_Fq5Prf5jNXMgjMVHyythy9WphxWCMpZgawe0KZnhKtPJYbXlh7H1lgbtC4E5lM-611c_61Zs5opakAGOUZU2rrE7yAuMtGg2-FohuCnxMQ8D_moMf8TYeF254g_MnxxsmRK7sgpqo4d9dNvX0XtJ0cYjcEhqbXM0PLhAcw6P4OlcbKxYTVJbY474JPgnXqkt4hdEbvxF_Me1MY_uWBeeCryH8DE0GaNq4zQu9kUraAt_Br_GvOLMGbHva28nYyrHHRqWaGWGg"
              alt="AI R&D Testing Center Laboratory" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-750"
              referrerPolicy="no-referrer"
            />
            {/* Dark map-overlay and text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/80 backdrop-blur border border-[#889484]/20 space-y-3 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#93f993] animate-ping" />
                <span className="text-[10px] text-white">AIPA AI RESEARCH LAB CORE</span>
              </div>
              <p className="text-[10px] text-[#889484] leading-relaxed">
                Host ID: lcl-tokyo-node-09. Live tracking of deep tensor weight training. System temperature: 42°C stable.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 5: CONTACT & COMPREHENSIVE INTELLIGENCE INQUIRY LOG */}
      <section id="contact" className="py-20 border-t border-[#889484]/15 bg-[radial-gradient(ellipse_at_bottom,rgba(147,249,147,0.03),transparent_70%)] relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start relative z-10">
          
          {/* Contact Left Column: FAQ Accordion pool */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#93f993] uppercase font-bold text-glow">TRANSMISSION FAQ</span>
              <h2 className="text-2xl font-display font-extrabold text-white">Confidentially Secured Operations</h2>
              <p className="text-xs text-[#889484] leading-relaxed font-sans">
                Review core questions about legal parameter weights ownership, deployment speed, and localized network maintenance.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3 pt-4">
              {faqData.map((faq, idx) => {
                const isOpen = faqOpenIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="rounded-xl border border-neutral-800 bg-[#0e0e0e]/60 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                      className="w-full p-4 flex items-center justify-between text-left text-xs font-mono font-bold text-white transition-colors hover:text-[#93f993] bg-transparent border-0 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[#93f993]">0{idx + 1}.</span>
                        {faq.question}
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#93f993]" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    
                    {isOpen && (
                      <div className="p-4 pt-1 border-t border-neutral-900 text-xs text-[#889484] leading-relaxed font-sans animate-fade-in bg-[#131313]/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Right Column: Smart form */}
          <div className="lg:col-span-3">
            <ContactDiagnostic />
          </div>

        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
