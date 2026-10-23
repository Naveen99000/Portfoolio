import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  Code2, 
  LineChart, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'power-bi':
        return <BarChart3 className="w-4 h-4 text-cyan-400" />;
      case 'sql-databases':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'python':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'analytics-techniques':
        return <LineChart className="w-4 h-4 text-cyan-400" />;
      case 'tools-workflow':
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      default:
        return <BarChart3 className="w-4 h-4 text-cyan-400" />;
    }
  };

  const categoriesToDisplay = selectedFilter === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === selectedFilter);

  return (
    <section id="skills" className="py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-800/80">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              02 / Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
              Tooling, Databases & Methodologies.
            </h2>
            <p className="mt-2 text-slate-300 text-base leading-relaxed">
              Curated competencies honed through production projects and the FLM Analytics Program, spanning data engineering, quantitative analysis, and BI architecture.
            </p>
          </div>

          {/* Restrained Domain Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-slate-100 text-navy-950 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                  selectedFilter === cat.id
                    ? 'bg-slate-100 text-navy-950 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Capability Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesToDisplay.map((cat) => (
            <div 
              key={cat.id}
              className="flex flex-col justify-between pt-2 border-t-2 border-slate-800 hover:border-cyan-400 transition-colors"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <div className="p-1 rounded bg-slate-900 border border-slate-800">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3 className="text-base font-bold text-white font-heading tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill List with Clean Visual Hierarchy */}
                <ul className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <li 
                      key={sIdx}
                      className="group flex flex-col pb-2.5 border-b border-slate-800/60 last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs ${
                          skill.highlight 
                            ? 'font-semibold text-white flex items-center gap-1.5' 
                            : 'font-normal text-slate-300'
                        }`}>
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          )}
                          {skill.name}
                        </span>
                        
                        {skill.highlight && (
                          <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-900/40">
                            Core
                          </span>
                        )}
                      </div>

                      {skill.description && (
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-2 text-[11px] font-mono text-slate-500">
                Applied in end-to-end projects
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Note */}
        <div className="mt-14 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Demonstrated through validated SQL schemas, DAX measures, and ETL scripts rather than arbitrary percentage bars.</span>
          </div>
          <span className="font-mono text-slate-500 text-[11px]">
            Updated for 2025–2026 Opportunities
          </span>
        </div>

      </div>
    </section>
  );
};
