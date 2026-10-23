import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  TrendingUp, 
  Activity, 
  Database, 
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { profileData, heroSampleChartData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onSelectTab?: (tabId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onSelectTab }) => {
  const [activeMetric, setActiveMetric] = useState<'revenue' | 'retention'>('revenue');

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectTab) {
      onSelectTab('projects');
    } else {
      const element = document.getElementById('projects');
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 pb-16 flex items-center overflow-hidden">
      {/* Restrained Background Architecture */}
      <div className="absolute inset-0 bg-navy-950 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-cyan-950/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-subtle-grid opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Status & Availability Strip */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Available for Analyst Roles • Hyderabad (Open to Pune)</span>
              </div>
              <span className="text-xs font-mono text-cyan-400/90 border border-cyan-950 bg-cyan-950/40 px-2.5 py-0.5 rounded">
                FLM Analytics Trainee
              </span>
            </div>

            {/* Candidate Identity & Role */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2 font-mono">
                {profileData.name} — Data Analyst & Power BI Developer
              </p>
              
              {/* Responsive Hero Heading: 56–68px desktop, 36–44px mobile in Space Grotesk */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white tracking-[-0.03em] leading-[1.08] max-w-2xl">
                Turning Data Into{' '}
                <span className="text-cyan-400">Actionable Business Insights.</span>
              </h1>
            </div>

            {/* Supporting Pitch: 17–18px Inter, relaxed line-height */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profileData.supportingText}
            </p>

            {/* Technical Capability Markers */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono">
                PostgreSQL & MySQL
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono">
                Power BI & DAX
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono">
                Python (Pandas)
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono">
                Cohort & RFM Segmentation
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={handleExploreClick}
                id="hero-explore-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-xs tracking-wide uppercase bg-cyan-500 hover:bg-cyan-400 text-navy-950 shadow-sm transition-all duration-150 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenResumeModal}
                id="hero-resume-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-xs tracking-wide uppercase bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all duration-150"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-6 pt-3 border-t border-slate-800/80 text-slate-400 text-xs">
              <span className="font-mono text-slate-500 uppercase tracking-wider">
                Direct Profiles:
              </span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Email Naveen"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Precision Analytics Dashboard Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 shadow-panel overflow-hidden p-5 sm:p-6 text-left">
              
              {/* Dashboard Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-slate-800 flex items-center justify-center text-cyan-400">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-white tracking-wide uppercase font-mono">
                      Executive KPI Telemetry
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      Power BI Architecture Simulation
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Illustrative Sample</span>
                </div>
              </div>

              {/* KPI Scorecard Strip */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                
                {/* Metric 1: Revenue */}
                <button 
                  onClick={() => setActiveMetric('revenue')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    activeMetric === 'revenue' 
                      ? 'bg-slate-950 border-cyan-500/40' 
                      : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      Monthly Revenue
                    </span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white tracking-tight font-heading tabular-numbers">
                    $78.5K
                  </div>
                  <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
                    +12.4% MoM Growth
                  </div>
                </button>

                {/* Metric 2: Retention */}
                <button 
                  onClick={() => setActiveMetric('retention')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    activeMetric === 'retention' 
                      ? 'bg-slate-950 border-cyan-500/40' 
                      : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      Cohort Retention
                    </span>
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white tracking-tight font-heading tabular-numbers">
                    77.0%
                  </div>
                  <div className="text-[11px] text-cyan-400 font-mono mt-0.5">
                    Repeat Cadence Peak
                  </div>
                </button>

              </div>

              {/* Chart Canvas */}
              <div className="bg-slate-950 rounded-lg p-3 border border-slate-800/80 mb-4">
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {activeMetric === 'revenue' ? 'Gross Revenue Trajectory ($)' : 'Customer Retention Rate (%)'}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    H1 Cohort Cycle
                  </span>
                </div>

                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={heroSampleChartData} margin={{ top: 10, right: 10, left: -22, bottom: 0 }}>
                      <defs>
                        <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        stroke="#64748B" 
                        fontSize={10} 
                        tickLine={false}
                        axisLine={{ stroke: '#334155' }}
                      />
                      <YAxis 
                        stroke="#64748B" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(val) => activeMetric === 'revenue' ? `$${val / 1000}k` : `${val}%`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0F172A', 
                          borderColor: '#334155', 
                          borderRadius: '6px', 
                          fontSize: '11px',
                          color: '#F8FAFC'
                        }}
                        formatter={(value) => [
                          activeMetric === 'revenue' ? `$${Number(value).toLocaleString()}` : `${value}%`,
                          activeMetric === 'revenue' ? 'Revenue' : 'Retention Rate'
                        ]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey={activeMetric === 'revenue' ? 'revenue' : 'retention'} 
                        stroke="#06B6D4" 
                        strokeWidth={2} 
                        fill="url(#heroGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Data Integrity Footnote */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-slate-500" />
                  <span>260K+ Records Indexed</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>8+ DAX Measures Bound</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
