import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { profileData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: 'Data Analyst Role',
    message: ''
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Recruiter'} regarding ${formData.role} at ${formData.company || 'your organization'}`);
    const body = encodeURIComponent(
      `Hi Naveen,\n\n${formData.message || 'I reviewed your portfolio and would like to discuss Data Analyst opportunities with our team.'}\n\nBest regards,\n${formData.name || 'Hiring Manager'}\n${formData.company ? `Company: ${formData.company}` : ''}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Data Analyst Opportunities.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            I am actively seeking full-time Data Analyst, Power BI Developer, and Business Intelligence roles in Hyderabad, Pune, or open to hybrid/remote setups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Recruiter Callout Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-navy-900 to-navy-900 border border-cyan-500/30 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Open for Hiring Discussions</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                Whether you're looking for someone to architect executive Power BI dashboards, optimize SQL extraction pipelines, or diagnose operational anomalies, I am ready to contribute immediately.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Based in Hyderabad • Open to Pune • Immediate Availability</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              
              {/* Email */}
              <div className="p-4 rounded-xl bg-navy-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${profileData.email}`} 
                      className="text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profileData.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 text-xs transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-navy-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Direct Phone / WhatsApp
                    </span>
                    <a 
                      href={`tel:${profileData.phone}`} 
                      className="text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profileData.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 text-xs transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-navy-900/80 border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Professional Network
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/poluparthi-naveen
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-navy-900/80 border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Code Repositories & SQL
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      github.com/Naveen99000
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

            </div>

          </div>

          {/* Right Column: Direct Email Composer (No fake submission API) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-slate-800 shadow-xl text-left">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <span>Send a Direct Message</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Generates a pre-formatted email directly to Naveen's inbox.
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                  <Info className="w-3.5 h-3.5" />
                  <span>Direct Mailto Protocol</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name / Recruiter
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Talent Acquisition"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Analytics Firm / Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Topic / Role of Interest
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="Data Analyst Role">Data Analyst Full-Time Position</option>
                    <option value="Power BI Developer Role">Power BI / BI Developer Position</option>
                    <option value="SQL / Python Analyst Role">SQL & Python Analytics Opportunity</option>
                    <option value="General Analytics Discussion">General Portfolio Discussion / Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hello Naveen, we reviewed your e-commerce and operational analytics projects and would love to connect..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-400">
                    Clicking triggers your email application with the pre-written draft.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
