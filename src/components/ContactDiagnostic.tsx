import React, { useState, useEffect } from 'react';
import { Mail, Briefcase, FileText, CheckCircle2, RefreshCw, Send, Terminal, Sparkles } from 'lucide-react';

export default function ContactDiagnostic() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    bottleneck: '',
    budget: '50000',
    timeline: '3'
  });

  const [diagnostics, setDiagnostics] = useState<{
    suspectedBottleneck: string;
    suggestedSolution: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    systemRelevance: number;
    description: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    ticketId: string;
    timestamp: string;
    budgetCategory: string;
  } | null>(null);

  // Scan natural language input text for business keyword diagnostics
  useEffect(() => {
    const text = formData.bottleneck.toLowerCase();
    
    if (!text.trim()) {
      setDiagnostics(null);
      return;
    }

    if (text.includes('chat') || text.includes('customer') || text.includes('support') || text.includes('complaint') || text.includes('queries') || text.includes('phone')) {
      setDiagnostics({
        suspectedBottleneck: 'Customer Interaction Friction',
        suggestedSolution: 'Custom AI Conversational Agents',
        priority: 'CRITICAL',
        systemRelevance: 96,
        description: 'Requires deploying 24/7 localized agents trained on corporate manuals, integrated with real-time transactional databases.'
      });
    } else if (text.includes('slow') || text.includes('delay') || text.includes('manual') || text.includes('redundant') || text.includes('labor') || text.includes('excel')) {
      setDiagnostics({
        suspectedBottleneck: 'Process Inefficiency / High Overhead',
        suggestedSolution: 'Cognitive Automation Flows',
        priority: 'CRITICAL',
        systemRelevance: 92,
        description: 'Optimizes slow human handoffs. Standardizes workflows with autonomous routing nodes and hallucination checks.'
      });
    } else if (text.includes('predict') || text.includes('analytics') || text.includes('future') || text.includes('forecast') || text.includes('trend') || text.includes('market')) {
      setDiagnostics({
        suspectedBottleneck: 'Information Overload & Blindspots',
        suggestedSolution: 'Predictive Analytics Systems',
        priority: 'HIGH',
        systemRelevance: 88,
        description: 'Integrates custom ML regression models. Predicts order churn, supply constraints, and inventory drift 14 days in advance.'
      });
    } else if (text.includes('security') || text.includes('leak') || text.includes('hacked') || text.includes('trust') || text.includes('compliance') || text.includes('regulatory')) {
      setDiagnostics({
        suspectedBottleneck: 'Information Leakage / Compliance Hazard',
        suggestedSolution: 'Zero-Trust AI Guard alignment',
        priority: 'CRITICAL',
        systemRelevance: 99,
        description: 'Enforces complete local model containerization, ensuring intellectual property never leaves your physical system bounds.'
      });
    } else {
      setDiagnostics({
        suspectedBottleneck: 'General Intelligence Leverage Opportunity',
        suggestedSolution: 'End-to-End Enterprise Consulting & Innovation Lab Access',
        priority: 'MEDIUM',
        systemRelevance: 74,
        description: 'We suggest commencing with our 4-week diagnostic sandbox to review your technical system map closely.'
      });
    }

  }, [formData.bottleneck]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network transmission dispatch
    setTimeout(() => {
      const budgetNum = parseInt(formData.budget);
      let budgetLabel = 'SME Sandbox Tier';
      if (budgetNum > 300000) budgetLabel = 'Tier 1 Global Neural Fleet Alignment';
      else if (budgetNum > 150000) budgetLabel = 'Premium Multi-Model Integrator';
      else if (budgetNum > 40000) budgetLabel = 'Strategic Node Prototyping';

      setSubmittedReceipt({
        ticketId: `AIPA-${Math.floor(Math.random() * 899999 + 100000)}`,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
        budgetCategory: budgetLabel
      });
      setIsSubmitting(false);
    }, 1800);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      bottleneck: '',
      budget: '50000',
      timeline: '3'
    });
    setSubmittedReceipt(null);
  };

  return (
    <div className="glass-card rounded-2xl border border-[#889484]/20 p-8 hover-perspective relative" id="contact-diagnostic-form">
      {/* Visual cyber alignment line decoration */}
      <div className="absolute top-0 bottom-0 left-6 w-[1.5px] bg-gradient-to-b from-[#93f993] via-[#ffdad8]/10 to-transparent opacity-30 pointer-events-none" />

      {!submittedReceipt ? (
        <form onSubmit={handleSubmit} className="relative z-10 pl-6 space-y-6">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#93f993]/10 border border-[#93f993]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#93f993]" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#93f993] font-bold">DIGITAL TICKET DISPATCH</span>
            </div>
            <h3 className="text-xl font-display font-extrabold text-white tracking-tight">
              Begin Your Neural Transformation
            </h3>
            <p className="text-xs text-[#889484] leading-relaxed max-w-lg">
              Input your operational vectors. Our interactive diagnostic console scans live text to pre-route matching architectures before final human review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Operator Names Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-wider text-[#889484] block font-bold uppercase">
                OPERATOR NAME *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g., Captain Sterling"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0e0e0e] border border-[#889484]/30 rounded px-3.5 py-3 text-xs text-white placeholder:text-neutral-700 font-mono focus:outline-none focus:border-[#93f993] transition-colors"
                />
              </div>
            </div>

            {/* Electronic Mail Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-wider text-[#889484] block font-bold uppercase">
                SECURE TRANSMISSION EMAIL *
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="operator@nexus.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0e0e0e] border border-[#889484]/30 rounded px-3.5 py-3 text-xs text-white placeholder:text-neutral-700 font-mono focus:outline-none focus:border-[#93f993] transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-wider text-[#889484] block font-bold uppercase">
              REGISTERED ENTERPRISE FIRM
            </label>
            <input
              type="text"
              placeholder="e.g., Zenith Neural Holdings"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-[#0e0e0e] border border-[#889484]/30 rounded px-3.5 py-3 text-xs text-white placeholder:text-neutral-700 font-mono focus:outline-none focus:border-[#93f993] transition-colors"
            />
          </div>

          {/* Core Text Bottleneck Box (Scanned continuously) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-mono tracking-wider text-[#889484] block font-bold uppercase">
                DESCRIBE REPETITIVE BOTTLENECKS OR GOALS *
              </label>
              <span className="text-[9px] font-mono text-[#93f993] animate-pulse">
                SCANNERS ARMED & ACTIVE
              </span>
            </div>
            <textarea
              required
              rows={4}
              placeholder="e.g., Customer support has extreme delay... our shipping queues require slow manual checks..."
              value={formData.bottleneck}
              onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
              className="w-full bg-[#0e0e0e] border border-[#889484]/30 rounded px-3.5 py-3 text-xs text-white placeholder:text-neutral-700 font-mono focus:outline-none focus:border-[#93f993] transition-colors resize-y leading-relaxed"
            />
          </div>

          {/* Interactive sliders for budget and scale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-[#0e0e0e] rounded-xl border border-[#ffdad8]/10">
            <div className="space-y-2.5">
              <div className="flex justify-between text-[10px] font-mono text-[#889484] uppercase">
                <span>ESTIMATED INVESTMENT VALUE:</span>
                <span className="text-white font-bold">${parseInt(formData.budget).toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full h-1 bg-neutral-800 rounded appearance-none cursor-pointer accent-[#93f993]"
              />
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between text-[10px] font-mono text-[#889484] uppercase">
                <span>PROJECT TIMELINE:</span>
                <span className="text-white font-bold">{formData.timeline} Months</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full h-1 bg-neutral-800 rounded appearance-none cursor-pointer accent-[#93f993]"
              />
            </div>
          </div>

          {/* REAL-TIME BOTTLENECK READOUT PANEL */}
          {diagnostics && (
            <div className="p-5 bg-[#131313]/90 rounded-xl border border-[#93f993]/20 font-mono space-y-2 animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#93f993] animate-pulse" />
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-white uppercase font-bold text-glow">
                  LIVE TELEMETRY DIAGNOSTIC READOUT
                </span>
                <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                  diagnostics.priority === 'CRITICAL' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-[#93f993]/20 text-[#93f993] border border-[#93f993]/30'
                }`}>
                  {diagnostics.priority} PRIORITY
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1 border-t border-neutral-900">
                <div>
                  <span className="text-[#889484] text-[9px] uppercase font-bold block">DETECTED SYS BOTTLENECK</span>
                  <span className="text-white font-bold block mt-0.5">{diagnostics.suspectedBottleneck}</span>
                </div>
                <div>
                  <span className="text-[#889484] text-[9px] uppercase font-bold block">RECOMMENDED REMEDY</span>
                  <span className="text-[#93f993] font-black block mt-0.5">{diagnostics.suggestedSolution}</span>
                </div>
              </div>
              <p className="text-[10px] text-zinc-400 leading-normal pt-1.5 border-t border-neutral-900">
                {diagnostics.description} Recommended integration probability: <span className="text-[#93f993] font-bold">{diagnostics.systemRelevance}% Match</span>.
              </p>
            </div>
          )}

          {/* Submit Trigger Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-[#93f993] hover:bg-[#77dc7a] disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-semibold text-xs font-mono tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-black" />
                <span>UPLOADING SIGNAL VECTORS...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-black" />
                <span>DISPATCH TELEMETRY LOG</span>
              </>
            )}
          </button>

        </form>
      ) : (
        /* GORGEOUS TICKET RECEIPT SUCCESS SLATE */
        <div className="relative z-10 pl-6 space-y-6 font-mono text-zinc-300">
          <div className="space-y-2 text-center pb-4 border-b border-neutral-800">
            <div className="w-12 h-12 rounded-full bg-[#93f993]/20 border border-[#93f993]/40 flex items-center justify-center mx-auto mb-2 text-[#93f993] animate-bounce">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-extrabold text-[#93f993] tracking-widest text-glow">
              TRANSMISSION LOCKED IN
            </h3>
            <p className="text-[10px] text-[#889484] uppercase">
              Encrypted packet dispatched to AIPA operational arrays safely.
            </p>
          </div>

          <div className="p-5 bg-black rounded-lg border border-[#889484]/15 space-y-4 text-[11px] leading-relaxed">
            <div className="flex justify-between items-center">
              <span className="text-[#889484]">SECURE TICKET ID:</span>
              <span className="text-[#93f993] font-black font-mono">{submittedReceipt.ticketId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#889484]">DISPATCH TIMESTAMP:</span>
              <span>{submittedReceipt.timestamp}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#889484]">ALIGNMENT CATEGORY:</span>
              <span className="text-white font-bold">{submittedReceipt.budgetCategory}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#889484]">COMMUNICATION PORT:</span>
              <span className="text-cyan-400">3000 SSL</span>
            </div>
            <div className="pt-2.5 border-t border-neutral-900">
              <p className="text-[#889484] text-[10px] mb-1 uppercase font-bold">CLIENT INPUT DETECTED:</p>
              <p className="text-zinc-400 italic font-sans leading-normal">
                "{formData.bottleneck}"
              </p>
            </div>
            {diagnostics && (
              <div className="pt-2.5 border-t border-neutral-900 text-[#93f993]">
                <p className="text-[#889484] text-[10px] mb-1 uppercase font-bold">PRE-ROUTED SOLUTION VECTOR:</p>
                <p className="font-bold">• {diagnostics.suggestedSolution}</p>
                <p className="text-[10px] text-zinc-400 mt-1 font-sans">{diagnostics.description}</p>
              </div>
            )}
          </div>

          <div className="text-center space-y-4">
            <p className="text-xs text-[#889484] leading-relaxed font-sans">
              Signal received cleanly. A senior neural specialist will review the diagnostic output and bind to your secure email transmission (<span className="text-white">{formData.email}</span>) within 4 hours.
            </p>

            <button
              onClick={handleResetForm}
              className="px-6 py-2.5 rounded border border-[#889484]/30 hover:bg-neutral-800 font-mono text-xs text-white transition-all cursor-pointer"
            >
              DISPATCH NEW SIGNAL TICKET
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
