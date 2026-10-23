import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  AlertCircle, 
  FileText 
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { profileData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadAlert, setDownloadAlert] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Check if file exists or trigger download
    const link = document.createElement('a');
    link.href = `/${profileData.resumeFileName}`;
    link.download = profileData.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Provide helpful notice
    setDownloadAlert(`Downloading "${profileData.resumeFileName}". (Note: Ensure "${profileData.resumeFileName}" is placed in the /public folder).`);
    setTimeout(() => setDownloadAlert(null), 6000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-navy-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-6 text-left max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-navy-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-white tracking-tight">
                Poluparthi Naveen — Verified Resume
              </h3>
              <p className="text-xs text-slate-400">
                Data Analyst | Power BI Developer | SQL & Python
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              id="modal-download-action"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Download Notice Notification */}
        {downloadAlert && (
          <div className="p-3 bg-cyan-950/80 border-b border-cyan-500/30 text-xs text-cyan-200 flex items-center justify-between px-6 animate-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>{downloadAlert}</span>
            </div>
            <button onClick={() => setDownloadAlert(null)} className="text-cyan-400 hover:text-cyan-200">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Resume Document Canvas (Printable Document View) */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-slate-900/60 font-sans text-slate-200 space-y-6">
          
          {/* Resume Header */}
          <div className="border-b border-slate-700 pb-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                POLUPARTHI NAVEEN
              </h1>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                Data Analyst | SQL • Power BI • Excel • Tableau • Quantitative Analysis
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-slate-300 mt-2 font-mono">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-cyan-400" /> {profileData.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" /> {profileData.location} (Open to Pune)
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-cyan-400" /> {profileData.email}
                </span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-center gap-2 text-xs text-cyan-300 font-mono">
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <LinkedInIcon className="w-3 h-3" /> linkedin.com/in/poluparthi-naveen
              </a>
              <a href={profileData.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <GitHubIcon className="w-3 h-3" /> github.com/Naveen99000
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Detail-oriented Data Analyst and 2025 B.Tech (Engineering) graduate with hands-on experience analyzing large-scale datasets exceeding 260,000+ transaction and 37,000+ operational records. Proficient in SQL, Power BI, Excel, and Tableau for quantitative analysis, insight generation, and client-ready reporting. Demonstrated ability to process complex data, uncover actionable insights, and communicate findings through dashboards and presentations. Adaptive learner with strong problem-solving skills, ready to contribute to healthcare analytics and client solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-2.5">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="font-semibold text-white w-44 flex-shrink-0">Data Analysis & SQL:</span>
                <span className="text-slate-300">SQL (PostgreSQL, MySQL — CTEs, Window Functions, Complex Joins, Subqueries), Large-Scale Data Processing, Quantitative Analysis, Data Modeling</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="font-semibold text-white w-44 flex-shrink-0">Visualization & BI:</span>
                <span className="text-slate-300">Power BI (DAX, 8+ KPI Dashboards, Interactive Reports), Tableau (Familiar), Excel (Advanced: Pivot Tables, VLOOKUP, XLOOKUP, INDEX-MATCH, SUMIFS, Power Pivot Concepts)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="font-semibold text-white w-44 flex-shrink-0">Analytics Techniques:</span>
                <span className="text-slate-300">Exploratory Data Analysis (EDA), KPI Monitoring, Root Cause Analysis, Cohort Analysis, RFM Segmentation, A/B Testing, Trend Analysis, Funnel Analysis</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="font-semibold text-white w-44 flex-shrink-0">Data Engineering:</span>
                <span className="text-slate-300">ETL Processing, Data Cleaning & Validation, Data Quality Checks, Multi-Source Data Integration, Automated Reporting Pipelines</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="font-semibold text-white w-44 flex-shrink-0">Programming:</span>
                <span className="text-slate-300">Python (Pandas, NumPy, Matplotlib, Seaborn), Foundational Understanding of Data Workflow Tools</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="font-semibold text-white w-44 flex-shrink-0">Reporting & Soft Skills:</span>
                <span className="text-slate-300">PowerPoint, Client-Ready Presentations, Dashboard Storytelling, Problem Solving, Adaptive Learning, Time Management, Global Team Collaboration</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              FEATURED ANALYTICS PROJECTS
            </h2>
            <div className="space-y-4">
              
              {/* Project 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white text-sm">
                    E-commerce Quantitative Analytics & Client-Ready KPI Dashboard
                  </span>
                  <span className="text-cyan-300 font-mono">
                    SQL | Power BI | Excel | Python
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-300 space-y-1">
                  <li>Analyzed 260,000+ transaction records using SQL (CTEs, Window Functions, Complex Joins) to process large-scale data and uncover business insights across revenue, retention, and conversion metrics.</li>
                  <li>Designed custom analytical solutions including RFM segmentation, cohort analysis, and A/B testing to solve specific business problems and generate actionable client recommendations.</li>
                  <li>Developed a Power BI dashboard with 8+ custom DAX measures and Excel-based reports to communicate results to stakeholders — delivering executive-ready visualizations of key performance indicators.</li>
                  <li>Applied data cleaning, validation, and multi-source integration to ensure analytical accuracy and quality of all deliverables. Automated recurring reports reducing manual effort by ~40%.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white text-sm">
                    Driver Engagement & Retention Analysis
                  </span>
                  <span className="text-cyan-300 font-mono">
                    MySQL | Excel | Power BI | EDA
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-300 space-y-1">
                  <li>Analyzed 37,000+ trip and driver records using MySQL and Python to understand cancellation patterns, engagement trends, and retention gaps across user segments.</li>
                  <li>Discovered that 90%+ of cancellations were passenger-driven — not supply-side — a finding that challenged existing assumptions and directly influenced the team’s retention strategy.</li>
                  <li>Presented findings through structured Excel reports and Power BI dashboards, translating data insights into clear recommendations for business stakeholders.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education & Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-2.5">
              EDUCATION & PROFESSIONAL TRAINING
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="font-bold text-white">Data Analyst Trainee — FLM Analytics Program</span>
                  <span className="text-slate-400"> (Hyderabad, India)</span>
                </div>
                <span className="text-slate-400 font-mono">January 2025 – June 2025</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="font-bold text-white">B.Tech — Information Technology</span>
                  <span className="text-slate-400"> | Sri Venkateswara College of Engineering and Technology, Hyderabad</span>
                </div>
                <div className="text-slate-400 font-mono flex items-center gap-2">
                  <span>2021 – 2025</span>
                  <span className="text-emerald-400 font-semibold">CGPA: 7.87</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="p-3 sm:p-4 bg-navy-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-6">
          <span>Source: Resume of Poluparthi Naveen (Verified 2025–2026)</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
};
