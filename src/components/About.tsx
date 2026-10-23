import React from 'react';
import { 
  Database, 
  BarChart, 
  Lightbulb, 
  FileCheck
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      num: "01",
      icon: <Database className="w-4 h-4 text-cyan-400" />,
      title: "Data Extraction & Pipeline Engineering",
      description: "Extracting, cleansing, and transforming raw enterprise datasets with PostgreSQL, MySQL, and Python Pandas. Engineering CTEs and window calculations to prepare reliable, validated models."
    },
    {
      num: "02",
      icon: <BarChart className="w-4 h-4 text-cyan-400" />,
      title: "KPI Modeling & Dashboard Architecture",
      description: "Structuring Power BI star schemas and authoring dynamic DAX measures. Designing intuitive executive views with automated refreshes, cross-filtering, and granular drill-through paths."
    },
    {
      num: "03",
      icon: <Lightbulb className="w-4 h-4 text-cyan-400" />,
      title: "Root Cause Discovery & Storytelling",
      description: "Applying exploratory analysis, cohort retention, and RFM segmentation to test business hypotheses, isolate operational anomalies, and present actionable stakeholder recommendations."
    }
  ];

  return (
    <section id="about" className="py-20 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            01 / Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            Bridging Database Engineering and <br className="hidden sm:inline" />
            <span className="text-slate-400">Strategic Decision-Making.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed max-w-2xl">
            A background rooted in Information Technology engineering and professional analytics training, focused on turning raw tabular data into measurable business outcomes.
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Key Factsheet */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base sm:text-[17px] leading-relaxed">
              {profileData.aboutText.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Structured Factsheet Ledger */}
            <div className="pt-4 border-t border-slate-800/80">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Background Factsheet
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-mono text-[10px]">
                    Degree & Academics
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    B.Tech in Information Technology
                  </p>
                  <p className="text-slate-400 mt-0.5">
                    SVCE Hyderabad (2021–2025) • CGPA: 7.87
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-mono text-[10px]">
                    Specialized Training
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    FLM Analytics Program
                  </p>
                  <p className="text-slate-400 mt-0.5">
                    Data Analyst Trainee (Jan 2025 – Jun 2025)
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-mono text-[10px]">
                    Location & Mobility
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    Hyderabad, India
                  </p>
                  <p className="text-slate-400 mt-0.5">
                    Open to Pune • Immediate availability
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-mono text-[10px]">
                    Core Analytical Stack
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    Power BI, SQL, Python, Excel
                  </p>
                  <p className="text-slate-400 mt-0.5">
                    PostgreSQL, MySQL, DAX, Pandas
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: 3 Architectural Delivery Stages */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800/80">
              Analytical Workflow Sequence
            </h3>

            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div 
                  key={pillar.num}
                  className="pl-5 border-l-2 border-slate-800 hover:border-cyan-400 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                      {pillar.num}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight font-heading">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality Commitment Callout */}
            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3 mt-6">
              <FileCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-white">Empirical Verification:</strong> Every metric and finding is validated against raw database logs, null audits, and window logic before entering executive reporting.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
