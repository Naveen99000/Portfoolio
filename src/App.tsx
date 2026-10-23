import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TrainingEducation } from './components/TrainingEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

type SectionTab = 'home' | 'about' | 'skills' | 'projects' | 'training' | 'contact';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SectionTab>('home');
  const [viewMode, setViewMode] = useState<'tabs' | 'scroll'>('tabs');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Initialize from URL hash or listen to browser navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as SectionTab;
      if (['home', 'about', 'skills', 'projects', 'training', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTab = (tabId: string) => {
    const validTab = tabId as SectionTab;
    setActiveTab(validTab);
    window.location.hash = validTab;

    if (viewMode === 'tabs') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      const element = document.getElementById(tabId);
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const toggleViewMode = () => {
    const newMode = viewMode === 'tabs' ? 'scroll' : 'tabs';
    setViewMode(newMode);
    if (newMode === 'scroll') {
      setTimeout(() => {
        const element = document.getElementById(activeTab);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-300 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Navigation */}
      <Navbar 
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        viewMode={viewMode}
        onToggleViewMode={toggleViewMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === 'tabs' ? (
          /* Tabbed View with Smooth Animated Transitions */
          <div key={activeTab} className="animate-view-transition w-full">
            {activeTab === 'home' && (
              <div className="space-y-12 pb-20">
                <Hero 
                  onOpenResumeModal={() => setIsResumeModalOpen(true)} 
                  onSelectTab={handleSelectTab}
                />
                
                <StatsBanner />

                {/* Architectural Directory Index */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                  <div className="text-left mb-8 pb-4 border-b border-slate-800/80">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                      Index Directory
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading mt-1">
                      Navigate Portfolio by Analytical Focus
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
                    
                    {/* Item 1: About */}
                    <button
                      onClick={() => handleSelectTab('about')}
                      className="p-6 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-cyan-400">01 / Profile</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        About & Delivery Philosophy
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        Engineering background, FLM Analytics specialization, and 3-stage delivery pipeline.
                      </p>
                    </button>

                    {/* Item 2: Skills */}
                    <button
                      onClick={() => handleSelectTab('skills')}
                      className="p-6 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-cyan-400">02 / Tooling</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        Technical Arsenal & Methods
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        Power BI, DAX, PostgreSQL, MySQL CTEs, Python Pandas, and advanced Excel.
                      </p>
                    </button>

                    {/* Item 3: Projects */}
                    <button
                      onClick={() => handleSelectTab('projects')}
                      className="p-6 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-cyan-400">03 / Case Studies</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        Production Analytics Projects
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        E-commerce KPI dashboard (260k+ orders) & Driver engagement analysis (37k+ trips).
                      </p>
                    </button>

                    {/* Item 4: Training */}
                    <button
                      onClick={() => handleSelectTab('training')}
                      className="p-6 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-cyan-400">04 / Credentials</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        Training & Education
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        FLM Analytics Program (Jan–Jun 2025) and B.Tech in IT (CGPA: 7.87).
                      </p>
                    </button>

                    {/* Item 5: Contact */}
                    <button
                      onClick={() => handleSelectTab('contact')}
                      className="p-6 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all text-left group sm:col-span-2 lg:col-span-2"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-cyan-400">05 / Inquiries</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        Recruiter & Opportunity Channel
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        Direct channels, mail client composer, and availability for Hyderabad & Pune analyst positions.
                      </p>
                    </button>

                  </div>
                </section>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="pt-16">
                <About />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between border-t border-slate-800/80 pt-6">
                  <button
                    onClick={() => handleSelectTab('home')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Return to Overview</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('skills')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 hover:bg-white text-navy-950 text-xs font-semibold tracking-wide transition-all shadow-sm"
                  >
                    <span>Next: Technical Arsenal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="pt-16">
                <Skills />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between border-t border-slate-800/80 pt-6">
                  <button
                    onClick={() => handleSelectTab('about')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back: Profile & Ethos</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('projects')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 hover:bg-white text-navy-950 text-xs font-semibold tracking-wide transition-all shadow-sm"
                  >
                    <span>Next: Production Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="pt-16">
                <Projects />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between border-t border-slate-800/80 pt-6">
                  <button
                    onClick={() => handleSelectTab('skills')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back: Tooling</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('training')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 hover:bg-white text-navy-950 text-xs font-semibold tracking-wide transition-all shadow-sm"
                  >
                    <span>Next: Credentials & Timeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'training' && (
              <div className="pt-16">
                <TrainingEducation />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between border-t border-slate-800/80 pt-6">
                  <button
                    onClick={() => handleSelectTab('projects')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back: Case Studies</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('contact')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 hover:bg-white text-navy-950 text-xs font-semibold tracking-wide transition-all shadow-sm"
                  >
                    <span>Next: Direct Communication</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="pt-16">
                <Contact />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between border-t border-slate-800/80 pt-6">
                  <button
                    onClick={() => handleSelectTab('training')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back: Credentials</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('home')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 hover:bg-white text-navy-950 text-xs font-semibold tracking-wide transition-all shadow-sm"
                  >
                    <span>Return to Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Continuous Scroll Mode */
          <div className="space-y-4">
            <Hero 
              onOpenResumeModal={() => setIsResumeModalOpen(true)} 
              onSelectTab={handleSelectTab}
            />
            <StatsBanner />
            <About />
            <Skills />
            <Projects />
            <TrainingEducation />
            <Contact />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenResumeModal={() => setIsResumeModalOpen(true)} 
        onSelectTab={handleSelectTab}
      />

      {/* Resume Preview & Download Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
};

export default App;
