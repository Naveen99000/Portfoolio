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
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Identity Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                <BarChart2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-heading font-semibold text-base text-white tracking-tight">
                  {profileData.name}
                </span>
                <p className="text-xs text-slate-400 font-sans">
                  {profileData.role} • Power BI & SQL
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Transforming complex transactional and operational datasets into clear, actionable executive insights through rigorous SQL pipeline engineering, dynamic DAX measures, and dashboard storytelling.
            </p>

            <div className="flex items-center gap-2 pt-1 text-slate-400">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-md bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className="p-2 rounded-md bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Directory
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>
                <button onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors text-left">Home</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors text-left">About & Analytical Philosophy</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-white transition-colors text-left">Technical Arsenal & Matrix</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors text-left">Production Case Studies</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'training')} className="hover:text-white transition-colors text-left">Training & Academic Background</button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors text-left">Direct Communication</button>
              </li>
            </ul>
          </div>

          {/* Credentials Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Verified Candidate
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Resume verified across 297,000+ analyzed records, 8+ DAX KPI dashboards, and FLM Analytics trainee curriculum.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-medium transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>View / Download Resume</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {currentYear} {profileData.name}. Designed & Built with React, TypeScript & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
