import React from 'react';
import { 
  Calendar, 
  MapPin 
} from 'lucide-react';
import { trainingAndEducation } from '../data/portfolioData';

export const TrainingEducation: React.FC = () => {
  return (
    <section id="training" className="py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 pb-6 border-b border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            04 / Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            Training & Academic Foundation.
          </h2>
          <p className="mt-2 text-slate-300 text-base leading-relaxed">
            Technical degree in Information Technology paired with intensive professional analytics specialization.
          </p>
        </div>

        {/* Compact Editorial Timeline Ledger */}
        <div className="space-y-12">
          {trainingAndEducation.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-12 border-b border-slate-800/80 last:border-b-0"
            >
              {/* Left Column: Date & Meta */}
              <div className="md:col-span-4 space-y-2">
                <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                  {item.type === 'training' ? 'Professional Specialization' : 'Degree Program'}
                </span>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.period}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.location}</span>
                </div>

                {item.grade && (
                  <div className="text-xs font-mono font-semibold text-emerald-400 mt-2">
                    {item.grade}
                  </div>
                )}
              </div>

              {/* Right Column: Title, Institution & Outcomes */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading">
                    {item.role}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-300 mt-0.5">
                    {item.institution}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 text-xs sm:text-[13px] text-slate-300">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono mt-0.5">›</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Topics Matrix */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Core Modules & Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
