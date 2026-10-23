import React, { useState, useEffect } from 'react';
import { 
  BarChart2, 
  Menu, 
  X, 
  FileDown, 
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
      setIsScrolled(window.scrollY > 15);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-sm' 
          : 'bg-navy-950/80 backdrop-blur-sm py-4 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram & Title */}
          <button 
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
              <BarChart2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm sm:text-base text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] text-slate-400 font-sans tracking-normal mt-1 leading-none">
                Data Analyst & BI
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-slate-900/60 p-1 rounded-lg border border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'bg-slate-800/90 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* View Mode Toggle */}
            <button
              onClick={onToggleViewMode}
              title={viewMode === 'tabs' ? "Switch to Continuous Page Scroll" : "Switch to Tabbed Section Transitions"}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              {viewMode === 'tabs' ? (
                <>
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View: Tabs</span>
                </>
              ) : (
                <>
                  <ScrollText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View: Scroll</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenResumeModal}
              id="nav-resume-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium bg-slate-100 hover:bg-white text-navy-950 shadow-sm transition-all active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-navy-950"
              aria-label="Download Resume"
            >
              <FileDown className="w-3 h-3" />
              <span>Resume</span>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 pt-2 bg-navy-950 border-b border-slate-800 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-colors text-left ${
                    isActive 
                      ? 'bg-slate-800/80 text-white font-semibold' 
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <button
              onClick={onToggleViewMode}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-400"
            >
              {viewMode === 'tabs' ? <Layers className="w-3.5 h-3.5" /> : <ScrollText className="w-3.5 h-3.5" />}
              <span>Mode: {viewMode === 'tabs' ? 'Tabs Transition' : 'Continuous Scroll'}</span>
            </button>

            <div className="flex items-center gap-3 text-[11px]">
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                LinkedIn
              </a>
              <span>•</span>
              <a href={profileData.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
