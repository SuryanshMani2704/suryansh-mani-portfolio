import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/10 bg-[#050505] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF66]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-[#00FF66] uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
            06 / Get In Touch
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Let's Build Something High-Impact
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl font-sans">
            Whether you're hiring for core engineering roles, exploring AI architectures, or looking for a collaborator on data-driven systems — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Primary Email Card */}
            <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Mail className="w-32 h-32 text-[#00FF66]" />
              </div>
              
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">Direct Email</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-display text-lg sm:text-2xl font-bold text-white hover:text-[#00FF66] transition-colors break-all flex items-center gap-2"
              >
                {CONTACT_INFO.email}
              </a>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-4 py-2.5 rounded-xl border border-white/10 transition-all active:scale-95 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#00FF66]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? "Copied Address!" : "Copy Email"}</span>
                </button>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-xs font-mono bg-[#00FF66]/10 hover:bg-[#00FF66] text-[#00FF66] hover:text-black font-semibold px-4 py-2.5 rounded-xl border border-[#00FF66]/30 transition-all active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Social Links & Location Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* LinkedIn */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b0b0b] hover:bg-[#0e0e0e] border border-white/10 hover:border-[#00FF66]/40 p-6 rounded-2xl transition-all group flex flex-col justify-between h-36"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/5 text-[#00FF66] group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-mono text-white/40 block">Connect on</span>
                  <span className="font-display font-bold text-base text-white">LinkedIn Profile</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b0b0b] hover:bg-[#0e0e0e] border border-white/10 hover:border-[#00FF66]/40 p-6 rounded-2xl transition-all group flex flex-col justify-between h-36"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/5 text-[#00FF66] group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-mono text-white/40 block">Explore on</span>
                  <span className="font-display font-bold text-base text-white">GitHub Repos</span>
                </div>
              </a>

            </div>

            {/* Location Pill */}
            <div className="bg-[#0b0b0b] border border-white/10 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#00FF66]" />
              </div>
              <div>
                <span className="text-xs font-mono text-white/40 block">Current Location</span>
                <span className="font-display font-semibold text-white">{CONTACT_INFO.location}</span>
                <span className="text-xs text-white/50 block font-sans">Open to Remote & Global Relocation opportunities</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00FF66] animate-pulse" />
                <h3 className="font-display font-bold text-xl text-white">Quick Message Dispatch</h3>
              </div>
              <span className="text-xs font-mono text-white/40">Recruiter Priority</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-white/70 mb-2 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Jane Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#00FF66] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-white/70 mb-2 uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="recruiter@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#00FF66] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-white/70 mb-2 uppercase tracking-wider">
                  Opportunity or Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Hello Suryansh, we are hiring for an AI / Backend role at our team..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#00FF66] transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <p className="text-xs font-mono text-white/40">
                  Submitting launches your default email client.
                </p>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#00FF66] hover:bg-[#00e65c] text-black font-display font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_30px_rgba(0,255,102,0.5)] active:scale-95 cursor-pointer"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/30 text-xs font-mono text-[#00FF66] flex items-center gap-2 animate-in fade-in">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Preparing mailto request... Check your email client window to send!</span>
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
