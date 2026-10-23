import React, { useState } from 'react';
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

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Quantified Impact Scorecards */}
        <StatsBanner />

        {/* Professional About & Analytical Pillars */}
        <About />

        {/* Technical Skills & Methodologies */}
        <Skills />

        {/* Featured Projects with Interactive Previews */}
        <Projects />

        {/* Training & Academic Timeline */}
        <TrainingEducation />

        {/* Contact & Inquiry Channel */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Resume Preview & Download Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
};

export default App;
