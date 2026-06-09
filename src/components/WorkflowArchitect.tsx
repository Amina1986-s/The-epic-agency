import React, { useState, useEffect, useRef } from 'react';
import { 
  Database, Languages, ShieldAlert, Cpu, 
  Workflow, ArrowRight, Play, RefreshCw, AlertCircle, Sparkles, Terminal
} from 'lucide-react';

interface WorkflowNode {
  id: string;
  name: string;
  category: 'ingestion' | 'processing' | 'indexing' | 'routing' | 'security';
  icon: any;
  latencyMs: number;
  accuracyContribution: number;
  securityRating: number;
  costEstimate: number;
  description: string;
  codeSnippet: string;
}

const INITIAL_NODES: WorkflowNode[] = [
  {
    id: 'ingest',
    name: 'Secure Data Ingest Pipeline',
    category: 'ingestion',
    icon: Database,
    latencyMs: 4,
    accuracyContribution: 0.1,
    securityRating: 90,
    costEstimate: 0.00002,
    description: 'Decentralized pipeline stream parsing structured / unstructured client JSON endpoints.',
    codeSnippet: 'stream = IngestStream(security_level="TLS_1.3").sync_bind_port(3000)'
  },
  {
    id: 'nlp-parser',
    name: 'LLM NLP Context Extractor',
    category: 'processing',
    icon: Languages,
    latencyMs: 18,
    accuracyContribution: 12.5,
    securityRating: 50,
    costEstimate: 0.00045,
    description: 'Deconstruct neural strings into semantic representations and intent arrays.',
    codeSnippet: 'agent_tokens = ai.extract_semantic_syntax(source=stream.buffer, model="AIPA-v4.2")'
  },
  {
    id: 'sent-classifier',
    name: 'Neural Sentiment Classifier',
    category: 'processing',
    icon: Cpu,
    latencyMs: 24,
    accuracyContribution: 8.2,
    securityRating: 40,
    costEstimate: 0.00030,
    description: 'Assess customer frustration parameters and market volatility factors.',
    codeSnippet: 'weights = NeuralWeights.load_weights("/models/sent_weights_4.bin").forward(agent_tokens)'
  },
  {
    id: 'error-guard',
    name: 'Zero-Trust Security Guard',
    category: 'security',
    icon: ShieldAlert,
    latencyMs: 8,
    accuracyContribution: 3.4,
    securityRating: 99,
    costEstimate: 0.00008,
    description: 'Failsafe layer detecting semantic hallucinations, leak hazards, and brute anomalies.',
    codeSnippet: 'guard = ShieldTrust.verify_integrity(weights).sandbox_restrict(strict=True)'
  },
  {
    id: 'router',
    name: 'Action Dispatch Router',
    category: 'routing',
    icon: Workflow,
    latencyMs: 11,
    accuracyContribution: 4.8,
    securityRating: 80,
    costEstimate: 0.00015,
    description: 'Intelligent decision dispatch, directing action-packets to local business databases.',
    codeSnippet: 'Router.bind(on_completion=NotifyManager).dispatch_route(guard, target="CoreSync")'
  }
];

export default function WorkflowArchitect() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(INITIAL_NODES);
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>(['ingest', 'nlp-parser', 'error-guard', 'router']);
  const [simulating, setSimulating] = useState(false);
  const [logs, setLogs] = useState<string[]>(['[SYS] Ready - select workflow nodes & launch sandbox telemetry simulation']);
  const [calcStats, setCalcStats] = useState({
    latency: 0,
    throughput: 0,
    accuracy: 75,
    security: 30,
    cost: 0
  });

  const logEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll terminal log window
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Recalculate stats dynamically when nodes composition changes
  useEffect(() => {
    const activeNodes = nodes.filter(n => selectedNodeIds.includes(n.id));
    
    let totalLatency = 0;
    let baseAccuracy = 75.0;
    let maxSecurity = 0;
    let totalCost = 0;

    activeNodes.forEach(n => {
      totalLatency += n.latencyMs;
      baseAccuracy += n.accuracyContribution;
      if (n.securityRating > maxSecurity) {
        maxSecurity = n.securityRating;
      }
      totalCost += n.costEstimate;
    });

    if (activeNodes.length === 0) {
      baseAccuracy = 0;
      maxSecurity = 0;
    }

    // Limit outputs
    if (baseAccuracy > 99.98) baseAccuracy = 99.98;

    const throughputSec = totalLatency > 0 ? Math.round(1000 / totalLatency * 84) : 0;

    setCalcStats({
      latency: totalLatency,
      throughput: throughputSec,
      accuracy: parseFloat(baseAccuracy.toFixed(2)),
      security: maxSecurity,
      cost: parseFloat(totalCost.toFixed(5))
    });

  }, [selectedNodeIds, nodes]);

  const toggleNode = (nodeId: string) => {
    if (simulating) return; // block adjustments during active simulation run
    setSelectedNodeIds(prev => {
      if (prev.includes(nodeId)) {
        return prev.filter(id => id !== nodeId);
      } else {
        return [...prev, nodeId];
      }
    });
  };

  const handleRunSimulation = () => {
    if (selectedNodeIds.length === 0) {
      setLogs(['[ERROR] Cannot execute empty pipeline graph. Select at least one node.']);
      return;
    }

    setSimulating(true);
    setLogs(['[SYS-BOOT] Initializing enterprise simulation test bed...']);

    const steps = [
      { delay: 400, log: '[INGEST-SYS] Synced to local stream. Reading transactional JSON weights...' },
      { delay: 900, log: `[PARSER-LOAD] Allocating sandbox GPU cluster. Executing selected nodes: ${selectedNodeIds.join(' -> ')}` },
      { delay: 1400, log: `[NETWORK-OPS] Latency computed: ${calcStats.latency}ms average at 3000 events/sec.` },
      { delay: 1900, log: `[SECURITY-AUDIT] Running threat analysis... Trust score calculated at ${calcStats.security}% integrity.` },
      { delay: 2400, log: `[DISPATCH] Processing complete. Model accuracy rated at ${calcStats.accuracy}% accuracy.` },
      { delay: 2800, log: `[SUCCESS] Output synchronized to Core Database. Cost efficiency: $${calcStats.cost} USD. Simulation Complete.` }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setLogs(prev => [...prev, step.log]);
        if (idx === steps.length - 1) {
          setSimulating(false);
        }
      }, step.delay);
    });
  };

  const handleResetSandbox = () => {
    if (simulating) return;
    setSelectedNodeIds(['ingest', 'nlp-parser', 'error-guard', 'router']);
    setLogs(['[SYS-RESET] Sandbox restored to factory neural presets.']);
  };

  return (
    <div className="glass-card rounded-2xl border border-[#889484]/20 p-8 hover-perspective relative overflow-hidden" id="interactive-architect">
      
      {/* Dynamic tech grid overlay inside card */}
      <div className="absolute inset-0 bg-[#93f993]/[0.01] bg-[radial-gradient(ellipse_at_top_right,rgba(147,249,147,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col xl:flex-row gap-8 justify-between">
        
        {/* Left editor Controls */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#93f993]/10 border border-[#93f993]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#93f993] animate-pulse" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#93f993] font-bold">INTERACTIVE SIMULATOR</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white tracking-tight">
              Neural Workflow Architect Sandbox
            </h3>
            <p className="text-xs text-[#889484] leading-relaxed max-w-lg">
              Toggle deep production nodes below to architect a custom AI pipeline. Watch the parameters auto-calculate and launch a high-frequency execution run immediately.
            </p>
          </div>

          {/* Node Toggles list */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono tracking-wider text-[#889484] uppercase font-bold">PIPELINE NODE POOL</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {nodes.map((node) => {
                const isSelected = selectedNodeIds.includes(node.id);
                const NodeIcon = node.icon;
                return (
                  <div
                    key={node.id}
                    onClick={() => toggleNode(node.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer select-none relative group ${
                      isSelected 
                        ? 'bg-[#93f993]/10 border-[#93f993]/40 text-white' 
                        : 'bg-[#1c1b1b]/60 border-neutral-800 hover:border-[#889484]/40 text-[#e5e2e1]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#93f993] text-[#002105]' : 'bg-neutral-800 text-[#889484] group-hover:bg-[#201f1f] group-hover:text-white'
                        }`}>
                          <NodeIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-mono font-bold">{node.name}</p>
                          <p className="text-[9px] text-[#889484] mt-0.5 line-clamp-1">{node.description}</p>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected ? 'border-[#93f993] bg-[#93f993]/20' : 'border-neutral-700'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-[#93f993]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connected visual path map */}
          <div className="p-4 bg-[#0e0e0e] rounded-xl border border-[#889484]/15">
            <h4 className="text-[9px] font-mono tracking-widest text-[#889484] uppercase mb-4 font-bold">VISUAL FLOW GRAPH PREVIEW</h4>
            <div className="flex flex-wrap items-center gap-2">
              {selectedNodeIds.map((nodeId, idx) => {
                const nodeObj = nodes.find(n => n.id === nodeId);
                if (!nodeObj) return null;
                const NodeIcon = nodeObj.icon;
                return (
                  <React.Fragment key={nodeId}>
                    <div className="flex items-center gap-2 bg-[#201f1f] border border-[#889484]/25 px-3 py-1.5 rounded-lg text-xs font-mono text-white animate-fade-in">
                      <NodeIcon className="w-3.5 h-3.5 text-[#93f993]" />
                      <span>{nodeObj.name.split(' ')[1] || nodeObj.name.split(' ')[0]}</span>
                    </div>
                    {idx < selectedNodeIds.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-[#93f993] shrink-0 animate-pulse" />
                    )}
                  </React.Fragment>
                );
              })}
              {selectedNodeIds.length === 0 && (
                <div className="text-xs font-mono text-rose-500/80 p-2 border border-rose-500/10 rounded bg-[#ffdad8]/5 w-full text-center">
                  WARNING: Neural pipeline disconnected. Toggle nodes above to restore sequence.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Live Statistics & Terminal */}
        <div className="w-full xl:w-[420px] flex flex-col justify-between p-6 rounded-2xl bg-[#0e0e0e] border border-[#ffdad8]/10 space-y-6">
          
          {/* STATS */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono tracking-wider text-[#93f993] uppercase font-bold">PIPELINE CHARACTERISTICS</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-[#1c1b1b] rounded-lg border border-[#889484]/10">
                <p className="text-[10px] text-[#889484] font-mono uppercase">TOTAL LATENCY</p>
                <p className="text-xl font-display font-extrabold text-[#93f993] mt-1">{calcStats.latency} ms</p>
              </div>
              <div className="p-3 bg-[#1c1b1b] rounded-lg border border-[#889484]/10">
                <p className="text-[10px] text-[#889484] font-mono uppercase">ACCURACY</p>
                <p className="text-xl font-display font-extrabold text-[#93f993] mt-1">{calcStats.accuracy}%</p>
              </div>
              <div className="p-3 bg-[#1c1b1b] rounded-lg border border-[#889484]/10">
                <p className="text-[10px] text-[#889484] font-mono uppercase">THROUGHPUT</p>
                <p className="text-xl font-display font-extrabold text-[#93f993] mt-1">{calcStats.throughput} e/s</p>
              </div>
              <div className="p-3 bg-[#1c1b1b] rounded-lg border border-[#889484]/10">
                <p className="text-[10px] text-[#889484] font-mono uppercase">ESTIMATED COST</p>
                <p className="text-sm font-mono text-[#93f993] mt-1.5 font-bold">${calcStats.cost} USD</p>
              </div>
            </div>

            {/* Micro progress graphs for safety/integrity parameters */}
            <div className="space-y-2 pt-2 border-t border-[#889484]/10">
              <div className="flex justify-between text-[10px] font-mono text-[#889484]">
                <span>ZERO-TRUST INTEGRITY STANDARD:</span>
                <span className="text-white font-bold">{calcStats.security}%</span>
              </div>
              <div className="h-1.5 w-full bg-[#201f1f] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-[#93f993] transition-all duration-300"
                  style={{ width: `${calcStats.security}%` }}
                />
              </div>
            </div>
          </div>

          {/* TERMINAL OVERLAYS */}
          <div className="flex-1 min-h-[140px] flex flex-col bg-[#131313] rounded-lg border border-neutral-800 p-4 font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2 text-[10px] text-[#889484]">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#93f993]" />
                <span>SANDBOX TELEMETRY LOG</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#93f993] animate-pulse" />
            </div>
            
            <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[150px] scrollbar-thin text-[10px] leading-relaxed select-text text-[#e5e2e1]/80">
              {logs.map((log, idx) => (
                <div key={idx} className={`${log.startsWith('[ERROR]') ? 'text-red-400' : log.startsWith('[SYS') ? 'text-cyan-400' : 'text-neutral-300'}`}>
                  {log}
                </div>
              ))}
              <div ref={logEndRef} />
            </div>
          </div>

          {/* ACTIVE TRIGGER BUTTONS */}
          <div className="pt-2 flex gap-3">
            <button
              onClick={handleRunSimulation}
              disabled={simulating || selectedNodeIds.length === 0}
              className="flex-1 py-3 px-4 rounded-xl bg-[#93f993] hover:bg-[#77dc7a] disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-semibold text-xs font-mono tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {simulating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
              {simulating ? 'RUNNING INTEGRATIONS...' : 'SIMULATE PIPELINE'}
            </button>
            <button
              onClick={handleResetSandbox}
              disabled={simulating}
              className="py-3 px-4 rounded-xl border border-[#889484]/30 hover:bg-neutral-800 disabled:text-neutral-600 font-mono text-xs transition-all text-[#e5e2e1] cursor-pointer"
              title="Reset Sandbox"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
