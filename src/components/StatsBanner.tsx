import React from 'react';
import { keyImpactMetrics } from '../data/portfolioData';

export const StatsBanner: React.FC = () => {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 border-y border-slate-800/80 bg-slate-900/30 py-8">
        {keyImpactMetrics.map((item, index) => (
          <div 
            key={index}
            className={`flex flex-col text-left px-2 sm:px-6 ${
              index !== keyImpactMetrics.length - 1 ? 'lg:border-r lg:border-slate-800/80' : ''
            }`}
          >
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading tabular-numbers">
              {item.value}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mt-1.5">
              {item.label}
            </div>
            <div className="text-[13px] text-slate-400 mt-1 leading-snug">
              {item.subtext}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
