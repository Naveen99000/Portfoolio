import React, { useState } from 'react';
import { 
  BarChart3, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight, 
  PieChart as PieIcon, 
  Info 
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Cell 
} from 'recharts';
import { 
  featuredProjects, 
  project1CohortData, 
  project2AnomalyData 
} from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Analytics & <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Business Intelligence Projects.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Real-world enterprise-scale datasets analyzed with SQL, Python, and Power BI. Deep-dive into problem statements, quantitative pipelines, and executive impact.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 hover:border-slate-700/80 shadow-2xl overflow-hidden transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
                
                {/* Left Column: Project Narrative & Metrics */}
                <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-6">
                  <div>
                    {/* Header meta */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-mono">
                        Project 0{index + 1}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400 mt-1">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 mt-4 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-xl bg-navy-950/90 border border-slate-800">
                          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                            {metric.label}
                          </span>
                          <span className="text-lg font-bold text-white font-mono mt-0.5 block">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Resume-backed Highlights */}
                    <div className="space-y-2 mt-4 text-xs text-slate-300">
                      <div className="flex items-start gap-2 bg-navy-950/50 p-2.5 rounded-lg border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Core Techniques:</strong> {project.analyticalApproach[0]}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 bg-navy-950/50 p-2.5 rounded-lg border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Business Impact:</strong> {project.businessValue[0]}
                        </span>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-navy-950 text-slate-300 border border-slate-800 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setSelectedProject(project)}
                      id={`view-details-${project.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
                      >
                        <GitHubIcon className="w-4 h-4 text-cyan-400" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-500 italic">
                        Repo available upon request
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Dashboard Visual / Illustrative Data Recharts */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="rounded-2xl bg-navy-950/90 border border-slate-800 p-5 text-left shadow-xl">
                    
                    {/* Visualizer Top Bar */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                          {project.chartType === 'revenue-cohort' ? (
                            <BarChart3 className="w-4 h-4" />
                          ) : (
                            <PieIcon className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            {project.chartType === 'revenue-cohort' 
                              ? 'Cohort Retention Drop-Off Analysis' 
                              : 'Root Cause Anomaly Breakdown'}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-mono">
                            Power BI KPI Visualizer
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] text-cyan-300 font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                        {project.chartType === 'revenue-cohort' ? '6 Cohorts' : '37K Logs'}
                      </span>
                    </div>

                    {/* Chart Container */}
                    <div className="h-56 w-full">
                      {project.chartType === 'revenue-cohort' ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={project1CohortData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                            <XAxis dataKey="cohort" stroke="#64748B" fontSize={10} tickLine={false} />
                            <YAxis stroke="#64748B" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#0F172A', 
                                borderColor: '#334155', 
                                borderRadius: '8px', 
                                fontSize: '11px',
                                color: '#F8FAFC' 
                              }}
                              formatter={(value) => [`${value}% Retained`, 'Retention Rate']}
                            />
                            <Bar dataKey="retained" fill="#06B6D4" radius={[4, 4, 0, 0]}>
                              {project1CohortData.map((_entry, idx) => (
                                <Cell 
                                  key={`cell-${idx}`} 
                                  fill={idx === 0 ? '#38BDF8' : idx < 3 ? '#06B6D4' : '#0284C7'} 
                                />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart 
                            layout="vertical" 
                            data={project2AnomalyData} 
                            margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" horizontal={false} />
                            <XAxis type="number" stroke="#64748B" fontSize={10} tickLine={false} tickFormatter={(val) => `${val}%`} />
                            <YAxis 
                              type="category" 
                              dataKey="category" 
                              stroke="#64748B" 
                              fontSize={9} 
                              tickLine={false} 
                              axisLine={false}
                              width={110}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#0F172A', 
                                borderColor: '#334155', 
                                borderRadius: '8px', 
                                fontSize: '11px',
                                color: '#F8FAFC' 
                              }}
                              formatter={(val, _name, item) => [
                                `${val}% (${(item.payload.count as number).toLocaleString()} records)`, 
                                'Share of Total Cancellations'
                              ]}
                            />
                            <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                              {project2AnomalyData.map((entry, idx) => (
                                <Cell key={`cell-${idx}`} fill={entry.color} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </div>

                    {/* Chart Caption & Sample Disclaimer */}
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                      <div className="flex items-center gap-1 text-slate-400">
                        <Info className="w-3 h-3 text-cyan-400" />
                        <span>Illustrative dashboard preview (Sample Data)</span>
                      </div>
                      <span className="font-mono text-cyan-400">
                        {project.chartType === 'revenue-cohort' ? 'DAX Cohort Matrix' : 'SQL Root Cause 91%'}
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
