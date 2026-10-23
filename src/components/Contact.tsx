import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare
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
    const subject = encodeURIComponent(`Data Analyst Inquiry from ${formData.name || 'Recruiter'} (${formData.company || 'Hiring Team'})`);
    const body = encodeURIComponent(
      `Hello Naveen,\n\n${formData.message || 'I reviewed your portfolio and would like to discuss Data Analyst opportunities with our team.'}\n\nBest regards,\n${formData.name || 'Hiring Manager'}\n${formData.company ? `Company: ${formData.company}` : ''}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 pb-6 border-b border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            05 / Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            Let's Discuss Analyst Opportunities.
          </h2>
          <p className="mt-2 text-slate-300 text-base leading-relaxed">
            Actively seeking full-time Data Analyst, Power BI Developer, and Business Intelligence roles in Hyderabad, Pune, or remote environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                Availability Status
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                Available for immediate employment. Open to on-site, hybrid, or remote positions in Hyderabad and Pune.
              </p>
              <div className="pt-2 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Hyderabad, India (Open to Pune)</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              
              {/* Email */}
              <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-slate-800 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <a 
                      href={`mailto:${profileData.email}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profileData.email, 'email')}
                  className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-slate-800 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Phone / WhatsApp
                    </span>
                    <a 
                      href={`tel:${profileData.phone}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profileData.phone, 'phone')}
                  className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between hover:border-slate-700 group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-slate-800 text-cyan-400">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      LinkedIn Network
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/poluparthi-naveen
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between hover:border-slate-700 group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-slate-800 text-cyan-400">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      GitHub Repositories
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      github.com/Naveen99000
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

            </div>

          </div>

          {/* Right Column: Recruiter Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-slate-900/80 border border-slate-800">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span>Direct Recruiter Inquiry Draft</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepares a structured email draft directly in your preferred mail client.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  Mailto Protocol
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Your Name / Recruiter
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Talent Acquisition Partner"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Analytics Consultancy / Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Role / Subject
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Data Analyst Role">Data Analyst Full-Time Position</option>
                    <option value="Power BI Developer Role">Power BI / BI Developer Position</option>
                    <option value="SQL & Python Analytics Opportunity">SQL & Python Analytics Opportunity</option>
                    <option value="General Analytics Portfolio Discussion">General Portfolio Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Brief Note
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hi Naveen, we reviewed your analytics case studies and would like to arrange a discussion..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400">
                    Clicking generates the draft in your default email client.
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-slate-100 hover:bg-white text-navy-950 text-xs font-semibold tracking-wide transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
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
