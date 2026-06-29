import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Trophy, Award, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00FF66] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
              05 / Honors & Leadership
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Milestones & Achievements
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-md font-sans">
            Peer-reviewed publications, competitive hackathon honors, and community leadership at scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`bg-[#0b0b0b] border border-white/10 hover:border-[#00FF66]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg relative overflow-hidden ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#121613] to-[#0b0b0b]' : ''
              }`}
            >
              {/* Corner Glow */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#00FF66]/5 rounded-full blur-2xl group-hover:bg-[#00FF66]/15 transition-all pointer-events-none" />

              <div>
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between mb-6">
                  {item.badge ? (
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/25 font-semibold">
                      {item.badge}
                    </span>
                  ) : <span />}
                  <span className="text-xs font-mono text-white/40">
                    {item.date}
                  </span>
                </div>

                {/* Title & Role */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#00FF66] shrink-0 group-hover:scale-110 group-hover:bg-[#00FF66] group-hover:text-black transition-all duration-300">
                    <DynamicIcon name={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#00FF66] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-white/60 mt-0.5">
                      {item.roleOrOrganization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/75 font-sans leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Link if available */}
              {item.url && (
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00FF66] hover:underline"
                  >
                    <span>View Publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
