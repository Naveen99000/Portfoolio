import React, { useState } from 'react';
import { 
  BarChart3, 
  ExternalLink, 
  ArrowUpRight, 
  PieChart as PieIcon, 
  Info,
  FileCode2
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
    <section id="projects" className="py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            03 / Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            Production Analytics Case Studies.
          </h2>
          <p className="mt-2 text-slate-300 text-base leading-relaxed">
            Quantitative investigations across e-commerce transactional data and mobility operations. Each case study documents the business question, data engineering pipeline, analytical models, and commercial impact.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <article 
              key={project.id}
              className="border-b border-slate-800/90 pb-20 last:border-b-0"
            >
              {/* Case Study Meta Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded">
                    Case Study 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight font-heading leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 mt-1.5 font-normal">
                  {project.subtitle}
                </p>
              </div>

              {/* Quantitative Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-lg bg-slate-900/60 border border-slate-800/80 mb-10">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      {metric.label}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white font-heading tabular-numbers block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Main Content Grid: Narrative on Left, Visualizer on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Structured Analytical Documentation */}
                <div className="lg:col-span-7 space-y-7">
                  
                  {/* 1. The Business Question */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      The Business Question & Challenge
                    </h4>
                    <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-800">
                      {project.businessProblem}
                    </p>
                  </div>

                  {/* 2. Data Preparation & Methods */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Data Preparation & Analytical Methods
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 pl-3 border-l-2 border-slate-800">
                      {project.dataPreparation.slice(0, 3).map((item, dIdx) => (
                        <li key={dIdx} className="leading-relaxed flex items-start gap-2">
                          <span className="text-cyan-400 font-mono text-xs">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Important Findings & Strategic Implications */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Core Findings & Business Implications
                    </h4>
                    <div className="space-y-2 text-xs sm:text-[13px] pl-3 border-l-2 border-slate-800">
                      <div className="p-3 rounded bg-slate-900/60 border border-slate-800 text-slate-200">
                        <span className="font-semibold text-cyan-300 block mb-0.5">Primary Discovery:</span>
                        <span>{project.businessValue[0]}</span>
                      </div>
                      <div className="p-3 rounded bg-slate-900/60 border border-slate-800 text-slate-200">
                        <span className="font-semibold text-emerald-300 block mb-0.5">Strategic Remediation:</span>
                        <span>{project.businessValue[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      id={`view-details-${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-100 hover:bg-white text-navy-950 font-semibold text-xs tracking-wide shadow-sm transition-all"
                    >
                      <FileCode2 className="w-3.5 h-3.5" />
                      <span>Inspect Technical Case Study (SQL & DAX)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
                      >
                        <GitHubIcon className="w-3.5 h-3.5 text-slate-400" />
                        <span>GitHub Repository</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-500 font-mono">
                        Repository available upon request
                      </span>
                    )}
                  </div>

                </div>

                {/* Right Column: Large Dashboard Mockup / Illustrative Visualizer */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-5 shadow-panel">
                    
                    {/* Visualizer Top Bar */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-slate-800 text-cyan-400">
                          {project.chartType === 'revenue-cohort' ? (
                            <BarChart3 className="w-3.5 h-3.5" />
                          ) : (
                            <PieIcon className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                            {project.chartType === 'revenue-cohort' 
                              ? 'Cohort Retention Drop-Off' 
                              : 'Cancellation Attribution'}
                          </h5>
                          <span className="text-[10px] text-slate-400">
                            Power BI Analytical Architecture
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] text-cyan-400 font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                        {project.chartType === 'revenue-cohort' ? '260K+ Records' : '37K+ Records'}
                      </span>
                    </div>

                    {/* Chart Container */}
                    <div className="h-60 w-full bg-slate-950 p-2 rounded-lg border border-slate-800/60">
                      {project.chartType === 'revenue-cohort' ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={project1CohortData} margin={{ top: 15, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                            <XAxis dataKey="cohort" stroke="#64748B" fontSize={10} tickLine={false} />
                            <YAxis stroke="#64748B" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#0F172A', 
                                borderColor: '#334155', 
                                borderRadius: '6px', 
                                fontSize: '11px',
                                color: '#F8FAFC' 
                              }}
                              formatter={(value) => [`${value}% Retained`, 'Cohort Retention']}
                            />
                            <Bar dataKey="retained" fill="#06B6D4" radius={[3, 3, 0, 0]}>
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
                            margin={{ top: 10, right: 15, left: 5, bottom: 0 }}
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
                              width={125}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#0F172A', 
                                borderColor: '#334155', 
                                borderRadius: '6px', 
                                fontSize: '11px',
                                color: '#F8FAFC' 
                              }}
                              formatter={(val, _name, item) => [
                                `${val}% (${(item.payload.count as number).toLocaleString()} trips)`, 
                                'Attribution Share'
                              ]}
                            />
                            <Bar dataKey="percentage" radius={[0, 3, 3, 0]}>
                              {project2AnomalyData.map((entry, idx) => (
                                <Cell key={`cell-${idx}`} fill={entry.color} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </div>

                    {/* Disclaimer Footnote */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Info className="w-3 h-3 text-cyan-400" />
                        <span>Illustrative dashboard visualizer</span>
                      </div>
                      <span className="text-cyan-400">
                        {project.chartType === 'revenue-cohort' ? 'DAX Cohort Matrix' : 'Passenger-Driven 90%+'}
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </article>
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
