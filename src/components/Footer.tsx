import React from 'react';
import { 
  BarChart2, 
  Mail, 
  Phone, 
  ArrowUp,
  FileDown
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
  onSelectTab?: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal, onSelectTab }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent, tabId: string) => {
    e.preventDefault();
    if (onSelectTab) {
      onSelectTab(tabId);
    } else {
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-navy-950 pt-16 pb-12 text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Identity Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-0.5 shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  {profileData.name}
                </span>
                <p className="text-xs text-slate-400">
                  {profileData.role} • Power BI & SQL
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Transforming complex transactional and operational data into clear, actionable executive insights through rigorous SQL engineering, DAX KPI modeling, and storytelling dashboards.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className="p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={(e) => handleNavClick(e, 'home')} className="hover:text-cyan-400 transition-colors text-left">Home</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-cyan-400 transition-colors text-left">About & Analytical Pillars</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-cyan-400 transition-colors text-left">Skills & Database Arsenal</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-cyan-400 transition-colors text-left">Featured Projects & Case Studies</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'training')} className="hover:text-cyan-400 transition-colors text-left">FLM Analytics Training & Education</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-cyan-400 transition-colors text-left">Contact Information</button>
              </li>
            </ul>
          </div>

          {/* Focus Areas & Resume Download */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Verified Candidate
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Resume verified against 297k+ records processed, 8+ DAX KPI dashboards, and FLM Analytics trainee curriculum.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Verified Resume</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {profileData.name}. All rights reserved. Built with React, TypeScript & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
