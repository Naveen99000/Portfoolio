import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Database, 
  Code2, 
  BarChart3, 
  TrendingUp, 
  FileCode, 
  Copy, 
  Check 
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'problem' | 'pipeline' | 'dax' | 'impact'>('problem');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 text-left max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-navy-950/70">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Metric Scorecards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 sm:p-6 bg-navy-950/40 border-b border-slate-800/80">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-0.5">
                {m.label}
              </span>
              <span className="text-lg sm:text-xl font-bold text-white font-mono">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 px-6 bg-navy-950/30 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('problem')}
            className={`py-3.5 px-4 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'problem' 
                ? 'border-cyan-400 text-cyan-300' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Problem & Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`py-3.5 px-4 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'pipeline' 
                ? 'border-cyan-400 text-cyan-300' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>SQL Pipeline & Prep</span>
          </button>

          <button
            onClick={() => setActiveTab('dax')}
            className={`py-3.5 px-4 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'dax' 
                ? 'border-cyan-400 text-cyan-300' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Analytical Model & DAX</span>
          </button>

          <button
            onClick={() => setActiveTab('impact')}
            className={`py-3.5 px-4 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'impact' 
                ? 'border-cyan-400 text-cyan-300' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Business Impact & KPIs</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-slate-300 leading-relaxed">
          
          {/* Tab 1: Problem & Overview */}
          {activeTab === 'problem' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Executive Summary
                </h4>
                <p className="bg-navy-950/70 p-4 rounded-xl border border-slate-800">
                  {project.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                  The Business Challenge & Stakeholder Pain Points
                </h4>
                <p className="bg-navy-950/70 p-4 rounded-xl border border-slate-800">
                  {project.businessProblem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Technology Stack Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-lg bg-navy-950 border border-slate-800 text-slate-200 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: SQL Pipeline & Data Prep */}
          {activeTab === 'pipeline' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Data Extraction, Cleaning & Transformation Steps
                </h4>
                <div className="space-y-2.5">
                  {project.dataPreparation.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-navy-950/60 p-3.5 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.sqlSnippet && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FileCode className="w-4 h-4 text-cyan-400" />
                      Production SQL Script Excerpt (CTE & Window Functions)
                    </span>
                    <button
                      onClick={() => handleCopy(project.sqlSnippet!)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copied' : 'Copy SQL'}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-navy-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto leading-relaxed max-h-60">
                    <code>{project.sqlSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Analytical Model & DAX */}
          {activeTab === 'dax' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Analytical Methodology & Modeling Approach
                </h4>
                <div className="space-y-2.5">
                  {project.analyticalApproach.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-navy-950/60 p-3.5 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.daxSnippet && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FileCode className="w-4 h-4 text-cyan-400" />
                      Custom DAX Calculation Excerpt
                    </span>
                    <button
                      onClick={() => handleCopy(project.daxSnippet!)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copied' : 'Copy DAX'}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-navy-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto leading-relaxed max-h-60">
                    <code>{project.daxSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Business Impact & KPIs */}
          {activeTab === 'impact' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Core KPIs Monitored
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyKPIs.map((kpi, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-navy-950/70 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Measurable Business Value Delivered
                </h4>
                <div className="space-y-2.5">
                  {project.businessValue.map((val, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-800/40">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-emerald-200">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-navy-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 font-mono">
            Source: Poluparthi Naveen verified project portfolio
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-800 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950 text-slate-500 border border-slate-800 text-xs font-mono">
                Repository Available Upon Request
              </span>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
