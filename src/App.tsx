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
  ArrowLeft, 
  BarChart2, 
  Database, 
  GraduationCap, 
  Mail, 
  User 
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
      // In transition/tab mode: reset scroll to top immediately so the view appears cleanly
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // In continuous scroll mode: smoothly scroll to the section
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
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
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

                {/* Quick Navigation Cards Grid (Executive Directory) */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                  <div className="text-left mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                      Portfolio Explorer
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                      Navigate by Analytical Domain
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                    
                    {/* Card 1: About */}
                    <button
                      onClick={() => handleSelectTab('about')}
                      className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-left group"
                    >
                      <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800 w-fit text-cyan-400 mb-3 group-hover:border-cyan-500/40 transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                        <span>About & Core Pillars</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        B.Tech IT graduate, FLM Analytics trainee, and 3-pillar data delivery philosophy.
                      </p>
                    </button>

                    {/* Card 2: Skills */}
                    <button
                      onClick={() => handleSelectTab('skills')}
                      className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-left group"
                    >
                      <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800 w-fit text-blue-400 mb-3 group-hover:border-cyan-500/40 transition-colors">
                        <Database className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                        <span>Technical Arsenal</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        Power BI, DAX, PostgreSQL, MySQL CTEs, Python Pandas, and advanced Excel.
                      </p>
                    </button>

                    {/* Card 3: Projects */}
                    <button
                      onClick={() => handleSelectTab('projects')}
                      className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-left group"
                    >
                      <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800 w-fit text-emerald-400 mb-3 group-hover:border-cyan-500/40 transition-colors">
                        <BarChart2 className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                        <span>Featured Projects</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        E-commerce KPI dashboard (260k+ orders) & Operational anomaly detection (37k+ logs).
                      </p>
                    </button>

                    {/* Card 4: Training */}
                    <button
                      onClick={() => handleSelectTab('training')}
                      className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-left group"
                    >
                      <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800 w-fit text-purple-400 mb-3 group-hover:border-cyan-500/40 transition-colors">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                        <span>Training & Education</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        FLM Analytics Program (Jan–Jun 2025) and B.Tech in IT (CGPA: 7.87).
                      </p>
                    </button>

                    {/* Card 5: Contact */}
                    <button
                      onClick={() => handleSelectTab('contact')}
                      className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-left group sm:col-span-2 lg:col-span-2"
                    >
                      <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800 w-fit text-cyan-400 mb-3 group-hover:border-cyan-500/40 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                        <span>Discuss Opportunities (Contact)</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        Based in Hyderabad, open to Pune & remote roles. Email, phone, LinkedIn & direct composer.
                      </p>
                    </button>

                  </div>
                </section>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="pt-20">
                <About />
                {/* Section Transition Navigation Footer */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between">
                  <button
                    onClick={() => handleSelectTab('home')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 text-cyan-400" />
                    <span>Back to Home</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('skills')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Next: Technical Skills</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="pt-20">
                <Skills />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between">
                  <button
                    onClick={() => handleSelectTab('about')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 text-cyan-400" />
                    <span>Back: About Me</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('projects')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Next: Featured Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="pt-20">
                <Projects />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between">
                  <button
                    onClick={() => handleSelectTab('skills')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 text-cyan-400" />
                    <span>Back: Skills</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('training')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Next: Training & Education</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'training' && (
              <div className="pt-20">
                <TrainingEducation />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between">
                  <button
                    onClick={() => handleSelectTab('projects')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 text-cyan-400" />
                    <span>Back: Projects</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Next: Contact Me</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="pt-20">
                <Contact />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-center justify-between">
                  <button
                    onClick={() => handleSelectTab('training')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 text-cyan-400" />
                    <span>Back: Training</span>
                  </button>

                  <button
                    onClick={() => handleSelectTab('home')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Return to Home</span>
                    <ArrowRight className="w-4 h-4" />
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
