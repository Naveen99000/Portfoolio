import React from 'react';
import { keyImpactMetrics } from '../data/portfolioData';
import { Database, BarChart2, ShieldAlert, Clock } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const icons = [
    <Database className="w-5 h-5 text-cyan-400" key="db" />,
    <BarChart2 className="w-5 h-5 text-blue-400" key="bc" />,
    <ShieldAlert className="w-5 h-5 text-emerald-400" key="sa" />,
    <Clock className="w-5 h-5 text-sky-400" key="ck" />
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-navy-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-xl">
        {keyImpactMetrics.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col text-left p-3 rounded-xl hover:bg-slate-800/40 transition-colors border border-transparent hover:border-slate-800"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-navy-950 border border-slate-800">
                {icons[index % icons.length]}
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-cyan-300 mt-1">
              {item.label}
            </div>
            <div className="text-xs text-slate-400 mt-0.5 font-normal">
              {item.subtext}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
