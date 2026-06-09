import React, { useState, useEffect } from 'react';
import { ServiceItem } from '../data';
import { Code, Cpu, Sliders, Layers, CheckCircle, Zap, Terminal, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceDetailPanelProps {
  service: ServiceItem;
}

export default function ServiceDetailPanel({ service }: ServiceDetailPanelProps) {
  const [concurrency, setConcurrency] = useState(25000);
  const [copied, setCopied] = useState(false);
  const [simMetrics, setSimMetrics] = useState({
    latency: 12,
    throughput: '344 GB/hr',
    temp: '44°C',
    networkLoad: '28.4%'
  });

  // Dynamically compute mock metrics as concurrent load changes
  useEffect(() => {
    const baseLatency = service.id === 'enterprise-infra' ? 2 : 12;
    const computedLatency = Math.round(baseLatency + (concurrency / 20000) * 1.5);
    const computedThroughput = (concurrency * 0.088).toFixed(1);
    const computedTemp = Math.round(40 + (concurrency / 5000));
    const computedLoad = (concurrency / 1000).toFixed(1);

    setSimMetrics({
      latency: computedLatency,
      throughput: `${computedThroughput} GB/hr`,
      temp: `${computedTemp}°C`,
      networkLoad: `${computedLoad}%`
    });
  }, [concurrency, service]);

  const handleCopyCode = () => {
    const codeText = `import { AIPAClient } from '@aipa/node-sdk';

const client = new AIPAClient({
  api_key: process.env.AIPA_SECURE_KEY,
  cluster: "global-node-tokyo-01"
});

// Launch deep ${service.title} session
const session = await client.services.initialize({
  mode: "continuous",
  safety_lock: true,
  concurrency_cap: ${concurrency}
});`;

    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#1c1b1b] rounded-2xl border border-[#889484]/20 overflow-hidden" id="service-telemetry-panel">
      
      {/* Top Banner Hotlinked Image */}
      <div className="relative h-44 overflow-hidden bg-neutral-900 border-b border-[#889484]/15">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKQpiwXPIHiy7Zg4x9h5XsCM1ZmYVuj-ZUUZUl1IxB3V2uj3BUUPYcxMQJ_WP0E37pEQsvXp5X8JbChlVs7EppsyTC_O1z99J7XZY-7zBITnGLaNMWEw0VRW5912GpFM1Y_xvqoFfXSikoS5hqRGuhR2PskGeTZdLTQB9OdspLVgi7VkpkW0nNVYmFC6A4Swl5rHWcT-FMNN5naUEbtqnGPioGRzu4Ca8USPv2Maps-ASmkRy2V1gG277_t2trvr7QpBTz3qv-QA"
          alt="Deployment Telemetry Live Frame" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-[#1c1b1b]/40 to-transparent" />
        <div className="absolute bottom-4 left-6 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#93f993] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#93f993]"></span>
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#93f993] bg-[#0e0e0e]/80 px-2 py-0.5 rounded border border-[#889484]/20 font-bold uppercase">
            DEPLOYMENT TELEMETRY LIVE FRAME
          </span>
        </div>
      </div>

      <div className="p-8 space-y-8">
        
        {/* Core Header Detail */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#93f993]/10 border border-[#93f993]/30 flex items-center justify-center text-[#93f993]">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#889484] uppercase">TECHNICAL CONFIGURATION DETAILED</span>
              <h3 className="text-lg font-display font-extrabold text-[#e5e2e1]">{service.title}</h3>
            </div>
          </div>
          <p className="text-xs text-[#889484] leading-relaxed">
            {service.description} Each deployment utilizes strict zero-trust parameters, redundant weight caches, and autonomous validation guards.
          </p>
        </div>

        {/* Load Dynamic Simulation Slider */}
        <div className="space-y-4 p-5 rounded-xl bg-[#0e0e0e] border border-[#889484]/10">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 text-white">
              <Sliders className="w-3.5 h-3.5 text-[#93f993]" />
              <span className="font-bold">SIMULATED CONCURRENCY LOAD:</span>
            </div>
            <span className="text-[#93f993] font-black">{concurrency.toLocaleString()} users/s</span>
          </div>

          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={concurrency}
            onChange={(e) => setConcurrency(parseInt(e.target.value))}
            className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#93f993]"
          />

          {/* Dynamic Metrics Feed */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#889484]/10 text-xs font-mono">
            <div>
              <span className="text-[#889484] text-[9px] uppercase font-bold block">MODEL RESPONSE LATENCY</span>
              <span className="text-[#93f993] font-bold text-sm block mt-0.5">{simMetrics.latency} ms</span>
            </div>
            <div>
              <span className="text-[#889484] text-[9px] uppercase font-bold block">THROUGHPUT VOLUME</span>
              <span className="text-white text-sm block mt-0.5">{simMetrics.throughput}</span>
            </div>
            <div>
              <span className="text-[#889484] text-[9px] uppercase font-bold block">HOST CLUSTER TEMP</span>
              <span className="text-white text-sm block mt-0.5">{simMetrics.temp}</span>
            </div>
            <div>
              <span className="text-[#889484] text-[9px] uppercase font-bold block">BANDWIDTH USAGE RATE</span>
              <span className="text-[#93f993] font-bold text-sm block mt-0.5">{simMetrics.networkLoad} capacity</span>
            </div>
          </div>
        </div>

        {/* Integration Code Blocks */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#889484] uppercase font-bold">
            <span>NODE-INTEGRATION SAMPLE</span>
            <button 
              onClick={handleCopyCode}
              className="flex items-center gap-1 text-[#93f993] hover:text-[#77dc7a] transition-colors bg-transparent border-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>COPIED SUCCESSFULLY</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>COPY TS CLI</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 bg-black rounded-xl border border-[#889484]/15 relative overflow-hidden font-mono text-[10px] text-zinc-300">
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500/40" />
            <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed select-all">
{`import { AIPAClient } from '@aipa/node-sdk';

const client = new AIPAClient({
  api_key: process.env.AIPA_SECURE_KEY,
  cluster: "global-node-tokyo-01"
});

// Launch deep ${service.title.toLowerCase().replace(' ', '_')} session
const session = await client.services.initialize({
  mode: "continuous",
  safety_lock: true,
  concurrency_cap: ${concurrency}
});`}
            </pre>
          </div>
        </div>

        {/* Feature Checkmarks list */}
        <div className="space-y-2.5 pt-4 border-t border-[#889484]/10 text-xs font-sans">
          <div className="flex gap-2 items-center">
            <CheckCircle className="w-4 h-4 text-[#93f993] shrink-0" />
            <span>99.99% Guaranteed uptime service-level contract (SLA)</span>
          </div>
          <div className="flex gap-2 items-center">
            <CheckCircle className="w-4 h-4 text-[#93f993] shrink-0" />
            <span>Encrypted parameters utilizing private HSM key arrays</span>
          </div>
        </div>

      </div>

    </div>
  );
}
