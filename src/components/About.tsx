import React from 'react';
import { 
  Database, 
  BarChart, 
  Lightbulb, 
  GraduationCap, 
  MapPin, 
  Award, 
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      title: "Data Extraction & Pipeline Engineering",
      description: "Extracting, cleaning, and transforming multi-source datasets with PostgreSQL, MySQL, and Python (Pandas). Using CTEs and window functions to prep clean tables for analysis."
    },
    {
      icon: <BarChart className="w-5 h-5 text-blue-400" />,
      title: "KPI Modeling & Dashboard Development",
      description: "Architecting Power BI star schemas and writing dynamic DAX measures. Designing intuitive, executive-ready dashboards with automated refreshes and drill-through analysis."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-emerald-400" />,
      title: "Insight Storytelling & Decision Support",
      description: "Conducting root-cause investigations, cohort retention analysis, and RFM segmentation to answer specific business questions and guide operational strategies."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Raw Databases and <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Executive Business Strategy.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            A comprehensive overview of my analytical philosophy, background, and core focus areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Professional Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-base leading-relaxed">
              {profileData.aboutText.map((paragraph, idx) => (
                <p key={idx} className="bg-navy-900/40 p-4 rounded-xl border border-slate-800/80">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Profile Factsheet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/60 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Education</span>
                  <p className="text-sm font-semibold text-white mt-0.5">B.Tech in Information Technology</p>
                  <p className="text-xs text-slate-400">SVCE Hyderabad (2021–2025) • CGPA: 7.87</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/60 border border-slate-800">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Specialized Training</span>
                  <p className="text-sm font-semibold text-white mt-0.5">FLM Analytics Program</p>
                  <p className="text-xs text-slate-400">Data Analyst Trainee (Jan 2025 – Jun 2025)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/60 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location & Mobility</span>
                  <p className="text-sm font-semibold text-white mt-0.5">{profileData.location}</p>
                  <p className="text-xs text-slate-400">Open to Pune, On-site & Hybrid roles</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/60 border border-slate-800">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Technical Strengths</span>
                  <p className="text-sm font-semibold text-white mt-0.5">Power BI, SQL, Python, Excel</p>
                  <p className="text-xs text-slate-400">CTEs, DAX, Star Schema, Automation</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 3 Analytical Pillars */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
              How I Deliver Value
            </h3>

            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal pl-1">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Quality Commitment Callout */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Data Integrity First:</strong> Every metric and recommendation is backed by verifiable SQL transformations, null-auditing, and validation checks before reaching stakeholder reporting.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
