import React from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { trainingAndEducation } from '../data/portfolioData';

export const TrainingEducation: React.FC = () => {
  return (
    <section id="training" className="py-24 bg-navy-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Career Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Training & <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Academic Foundation.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Verified chronology of specialized data analytics training and engineering education.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 text-left">
          {trainingAndEducation.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-navy-950 border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-200">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 shadow-xl group-hover:shadow-cyan-500/10">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono">
                        {item.type === 'training' ? 'Professional Training' : 'Academic Degree'}
                      </span>
                      {item.grade && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-800/50">
                          {item.grade}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-base font-semibold text-cyan-400 mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end text-xs text-slate-400 font-mono space-y-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Topics / Core Modules Badges */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    Core Curricular Competencies & Topics:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-navy-950 text-slate-300 border border-slate-800 text-xs font-mono"
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
