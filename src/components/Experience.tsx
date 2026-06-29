import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00FF66] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
              02 / Work History
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Professional Experience
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-md font-sans">
            Hands-on engineering contributions across research R&D, analytics platforms, and database architecture.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/15 ml-3 sm:ml-6 md:ml-8 space-y-12">
          
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00FF66] group-hover:bg-[#00FF66] group-hover:shadow-[0_0_12px_rgba(0,255,102,0.8)] transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66] group-hover:bg-black transition-colors" />
              </div>

              {/* Card */}
              <div className="bg-[#0b0b0b] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl relative overflow-hidden group-hover:bg-[#0e0e0e]">
                
                {/* Top Row: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#00FF66] transition-colors">
                        {exp.role}
                      </h3>
                      {exp.type && (
                        <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-white/80 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#00FF66]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-white/50 shrink-0">
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-white/40" />
                        {exp.location}
                      </span>
                    )}
                    <span className="hidden sm:inline">•</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[#00FF66] font-medium border border-white/10">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5 mb-6 text-sm text-white/75 font-sans leading-relaxed">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5 opacity-80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-white/40 mr-2">Skills:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-white/70 border border-white/10 hover:border-[#00FF66]/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
