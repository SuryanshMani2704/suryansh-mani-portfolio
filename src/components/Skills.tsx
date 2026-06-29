import React from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00FF66] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
              04 / Technical Matrix
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Stack Capabilities
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-md font-sans">
            A structured breakdown of my tools, languages, and frameworks engineered for production resilience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`bg-[#0a0a0a] border border-white/10 hover:border-[#00FF66]/40 rounded-2xl p-6 transition-all duration-300 group shadow-lg flex flex-col justify-between ${
                group.category === 'AI/ML' ? 'sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#121814] to-[#0a0a0a] border-[#00FF66]/30' : ''
              }`}
            >
              <div>
                {/* Category Header with Icon */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00FF66] group-hover:bg-[#00FF66] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.1)] group-hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]">
                    <DynamicIcon name={group.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] text-white/80 border border-white/10 hover:border-[#00FF66]/50 hover:text-white hover:bg-[#00FF66]/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex justify-end">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  {group.skills.length} Capabilities
                </span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
