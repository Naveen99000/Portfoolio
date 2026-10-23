import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  Code2, 
  LineChart, 
  Wrench, 
  Layers, 
  ChevronRight 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'power-bi':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'sql-databases':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'python':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'analytics-techniques':
        return <LineChart className="w-5 h-5 text-sky-400" />;
      case 'tools-workflow':
        return <Wrench className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-navy-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools & Methodologies for <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">High-Impact Analytics.</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              A comprehensive breakdown of my core technical proficiencies across Business Intelligence, Relational Databases, Python wrangling, and quantitative methods.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-navy-950 shadow-md shadow-cyan-500/20'
                  : 'bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-navy-950 shadow-md shadow-cyan-500/20'
                    : 'bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed font-normal min-h-[36px]">
                  {cat.description}
                </p>

                {/* Skill Badges List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className={`p-2.5 rounded-xl border transition-all duration-200 ${
                        skill.highlight 
                          ? 'bg-navy-950/80 border-slate-700/80 hover:border-cyan-500/40' 
                          : 'bg-navy-950/40 border-slate-800/60 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          )}
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                            Core
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal pl-0.5 font-normal">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-5 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified in Project Pipelines</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Proficiency Philosophy */}
        <div className="mt-10 p-4 rounded-xl bg-navy-900/60 border border-slate-800/80 max-w-2xl mx-auto text-center text-xs text-slate-400">
          <span className="text-cyan-400 font-semibold">Analytical Integrity:</span> Skills are represented through actual hands-on project deliverables (ETL scripts, DAX calculations, and SQL schemas) rather than arbitrary percentage bars.
        </div>

      </div>
    </section>
  );
};
