import React, { useState, useEffect } from 'react';
import { 
  BarChart2, 
  Menu, 
  X, 
  FileDown, 
  ExternalLink,
  ChevronRight,
  Layers,
  ScrollText
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenResumeModal: () => void;
  viewMode: 'tabs' | 'scroll';
  onToggleViewMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  onSelectTab, 
  onOpenResumeModal,
  viewMode,
  onToggleViewMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'training', name: 'Training' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, tabId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onSelectTab(tabId);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button 
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                {profileData.name}
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wide">
                Data Analyst & BI
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-navy-900/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* View Mode Toggle */}
            <button
              onClick={onToggleViewMode}
              title={viewMode === 'tabs' ? "Switch to Continuous Scroll" : "Switch to Smooth Tab Transitions"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-navy-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              {viewMode === 'tabs' ? (
                <>
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Transitions</span>
                </>
              ) : (
                <>
                  <ScrollText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Continuous</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenResumeModal}
              id="nav-resume-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleViewMode}
              className="p-1.5 rounded-lg bg-navy-900 border border-slate-800 text-slate-300 text-xs flex items-center gap-1"
              aria-label="Toggle View Mode"
            >
              {viewMode === 'tabs' ? <Layers className="w-3.5 h-3.5 text-cyan-400" /> : <ScrollText className="w-3.5 h-3.5 text-blue-400" />}
            </button>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
              aria-label="Download Resume"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 pt-2 bg-navy-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                    isActive 
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' 
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
            >
              <FileDown className="w-4 h-4" />
              Download / View Resume
            </button>
            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-400">
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
