import React, { useState, useEffect } from 'react';
import { SolutionItem } from '../data';
import { Calculator, BarChart3, TrendingUp, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';

interface IndustryROICalculatorProps {
  solution: SolutionItem;
}

export default function IndustryROICalculator({ solution }: IndustryROICalculatorProps) {
  const [ftes, setFtes] = useState(120);
  const [hourlyRate, setHourlyRate] = useState(55);
  const [efficiency, setEfficiency] = useState(35); // percentage
  const [roiMetrics, setRoiMetrics] = useState({
    hoursSaved: 0,
    monthlySavings: 0,
    roiRatio: '0%',
    netImprovement: '0%'
  });

  // Calculate dynamic ROI statistics
  useEffect(() => {
    // 150 hours standard shift block per month per FTE
    const hoursSaved = Math.round(ftes * 150 * (efficiency / 100));
    const monthlySavings = Math.round(hoursSaved * hourlyRate);
    
    // Cost of implementation is estimated at 30% of the value created
    const monthlyCost = Math.max(8000, Math.round(monthlySavings * 0.18));
    const netValue = monthlySavings - monthlyCost;
    const roiPercentage = monthlyCost > 0 ? Math.round((monthlySavings / monthlyCost) * 100) : 0;

    setRoiMetrics({
      hoursSaved,
      monthlySavings,
      roiRatio: `${roiPercentage}%`,
      netImprovement: `${Math.round(efficiency * 1.6)}%`
    });

  }, [ftes, hourlyRate, efficiency]);

  return (
    <div className="glass-card rounded-2xl border border-[#889484]/20 p-8 space-y-8" id="solutions-roi-calc">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left: Vertically Targeted Custom Visual Banner */}
        <div className="space-y-6">
          <div className="relative h-64 rounded-xl overflow-hidden border border-[#889484]/20 bg-[#0e0e0e]">
            <img 
              src={solution.imgUrl} 
              alt={solution.title} 
              className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/20 to-transparent" />
            <div className="absolute top-4 left-4 bg-black/70 border border-[#93f993]/40 px-3 py-1 rounded text-[10px] font-mono text-[#93f993] tracking-widest uppercase">
              SECTOR ANALYSIS OVERVIEW
            </div>
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#93f993] text-black rounded">
                  {React.createElement(solution.icon, { className: "w-5 h-5 focus:animate-bounce" })}
                </div>
                <div>
                  <h4 className="text-sm font-display font-black text-white">{solution.title} Operational Sandbox</h4>
                  <p className="text-[10px] text-[#889484] font-mono leading-none mt-1">Telemetry node: active-link v4.2S</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-display font-bold text-white tracking-tight">
              AIPA Industry Impact Matrix
            </h3>
            <p className="text-xs text-[#889484] leading-relaxed">
              We engineer custom decision systems targeted directly for high-stakes {solution.title.toLowerCase()} loops. {solution.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono text-[#889484]">
            <div className="flex gap-2 items-center">
              <ShieldCheck className="w-4 h-4 text-[#93f993] shrink-0" />
              <span>HIPAA / SOC2 Audited</span>
            </div>
            <div className="flex gap-2 items-center">
              <ShieldCheck className="w-4 h-4 text-[#93f993] shrink-0" />
              <span>256-bit Vector Shield</span>
            </div>
          </div>
        </div>

        {/* Right: Dynamic Sliders & Output Graph Indices */}
        <div className="space-y-6 bg-[#0e0e0e] p-6 rounded-xl border border-[#ffdad8]/10">
          
          <div className="flex items-center gap-2 mb-2 text-[#93f993]">
            <Calculator className="w-4 h-4 animate-bounce" />
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold">ROI SIMULATION TOOL</span>
          </div>

          {/* SLIDERS POOL */}
          <div className="space-y-4">
            {/* FTE Scale Selector */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#889484] uppercase">Influenced Scale (FTEs):</span>
                <span className="text-white font-bold">{ftes} operational staff</span>
              </div>
              <input
                type="range"
                min="10"
                max="3000"
                step="10"
                value={ftes}
                onChange={(e) => setFtes(parseInt(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded appearance-none cursor-pointer accent-[#93f993]"
              />
            </div>

            {/* Average Wage Selector */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#889484] uppercase">Average Hourly Wage ($):</span>
                <span className="text-white font-bold">${hourlyRate} USD/hr</span>
              </div>
              <input
                type="range"
                min="15"
                max="150"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded appearance-none cursor-pointer accent-[#93f993]"
              />
            </div>

            {/* Efficiency Ratio Selector */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#889484] uppercase">Neural Automation Target:</span>
                <span className="text-[#93f993] font-bold">{efficiency}% operations</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={efficiency}
                onChange={(e) => setEfficiency(parseInt(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded appearance-none cursor-pointer accent-[#93f993]"
              />
            </div>
          </div>

          {/* SIMULATION CALCULATION OUTPUT CARDS */}
          <div className="pt-6 border-t border-[#889484]/15 space-y-4 font-mono">
            <h4 className="text-[9px] tracking-widest text-[#889484] uppercase font-bold text-center">EXPECTED BUSINESS ADVANTAGES (MONTHLY)</h4>
            
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-3 bg-[#131313] rounded border border-[#889484]/15">
                <span className="text-[9px] text-[#889484] block">LABOR HOURS SAVED</span>
                <span className="text-lg font-display font-extrabold text-[#93f993] block mt-1">
                  {roiMetrics.hoursSaved.toLocaleString()} hrs
                </span>
                <span className="text-[8px] text-[#889484]">Optimized core flows</span>
              </div>

              <div className="p-3 bg-[#131313] rounded border border-[#889484]/15">
                <span className="text-[9px] text-[#889484] block">NET SAVINGS (USD)</span>
                <span className="text-lg font-display font-extrabold text-[#93f993] block mt-1">
                  ${roiMetrics.monthlySavings.toLocaleString()}
                </span>
                <span className="text-[8px] text-emerald-500 font-bold">+ {roiMetrics.netImprovement} velocity</span>
              </div>
            </div>

            {/* Simulated ROI Ratio Card */}
            <div className="p-4 bg-[#131313] rounded border border-[#93f993]/25 flex items-center justify-between">
              <div>
                <span className="text-[9px] text-[#889484] block">SIMULATED INVESTMENT RETURN</span>
                <span className="text-base font-bold text-white mt-1 block">CONFIDENTIAL COGNITIVE ROI APPLIED</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-display font-black text-[#93f993] text-glow">
                  {roiMetrics.roiRatio}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
