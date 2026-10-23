import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Database, 
  BarChart3 
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
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeMetric, setActiveMetric] = useState<'revenue' | 'retention'>('revenue');

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
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
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 bg-navy-950 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Hook */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Subtle Availability & Role Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span>Open to Opportunities • {profileData.location} (Open to Pune)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>FLM Analytics Program Trainee</span>
              </div>
            </div>

            {/* Candidate Identity */}
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-1">
                Data Analyst | Power BI Developer | SQL & Python
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Turning Data Into <br className="hidden sm:inline" />
                <span className="text-gradient-cyan">Actionable Business Insights.</span>
              </h1>
            </div>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profileData.supportingText}
            </p>

            {/* Core Competency Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                PostgreSQL & MySQL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                Power BI & DAX
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                Python (Pandas)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                RFM & Cohort Analysis
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                id="hero-explore-btn"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                id="hero-resume-btn"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-6 pt-3 border-t border-slate-800/60 text-slate-400 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                <span className="font-medium text-xs">LinkedIn</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4 text-cyan-400" />
                <span className="font-medium text-xs">GitHub</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                aria-label="Email Naveen"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="font-medium text-xs">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Dashboard Mockup (Interactive Recharts Demonstration) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative rounded-2xl bg-navy-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden p-5 sm:p-6 text-left">
                
                {/* Dashboard Mockup Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white tracking-wide">
                        Executive KPI Telemetry
                      </h2>
                      <p className="text-[11px] text-slate-400 font-mono">
                        Power BI Architecture Preview
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-navy-950 px-2.5 py-1 rounded-md border border-slate-800 text-[10px] text-cyan-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Sample Visualizer</span>
                  </div>
                </div>

                {/* Scorecard KPI Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  
                  {/* KPI 1 */}
                  <div 
                    onClick={() => setActiveMetric('revenue')}
                    className={`cursor-pointer p-3 rounded-xl border transition-all duration-200 ${
                      activeMetric === 'revenue' 
                        ? 'bg-cyan-950/40 border-cyan-500/50 shadow-sm shadow-cyan-500/10' 
                        : 'bg-navy-950/50 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                        Monthly Revenue
                      </span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-xl font-bold text-white tracking-tight">
                      $78.5K
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mt-0.5">
                      <span>+12.4% vs Prior Month</span>
                    </div>
                  </div>

                  {/* KPI 2 */}
                  <div 
                    onClick={() => setActiveMetric('retention')}
                    className={`cursor-pointer p-3 rounded-xl border transition-all duration-200 ${
                      activeMetric === 'retention' 
                        ? 'bg-cyan-950/40 border-cyan-500/50 shadow-sm shadow-cyan-500/10' 
                        : 'bg-navy-950/50 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                        Retention Rate
                      </span>
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-xl font-bold text-white tracking-tight">
                      77.0%
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-cyan-300 font-medium mt-0.5">
                      <span>Cohort Retention Peak</span>
                    </div>
                  </div>

                </div>

                {/* Interactive Chart Canvas */}
                <div className="bg-navy-950/80 rounded-xl p-3 border border-slate-800/80 mb-4">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      {activeMetric === 'revenue' ? 'Monthly Gross Sales ($)' : 'Cohort Retention Trajectory (%)'}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Jan – Jun 2025
                    </span>
                  </div>

                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={heroSampleChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0}/>
                          </linearGradient>
                          <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                        <XAxis 
                          dataKey="month" 
                          stroke="#64748B" 
                          fontSize={11} 
                          tickLine={false}
                          axisLine={{ stroke: '#334155' }}
                        />
                        <YAxis 
                          stroke="#64748B" 
                          fontSize={11} 
                          tickLine={false} 
                          axisLine={false}
                          tickFormatter={(val) => activeMetric === 'revenue' ? `$${val / 1000}k` : `${val}%`}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#0F172A', 
                            borderColor: '#334155', 
                            borderRadius: '8px', 
                            fontSize: '12px',
                            color: '#F8FAFC',
                            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)'
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
                          strokeWidth={2.5} 
                          fillOpacity={1} 
                          fill={activeMetric === 'revenue' ? "url(#heroGradient)" : "url(#retentionGradient)"} 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Dashboard Pipeline Micro-badges */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    <span>260K+ Records Indexed</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>8+ DAX Measures Bound</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
