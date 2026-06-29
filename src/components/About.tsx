import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Zap, Cpu, Award, BookOpen, Layers } from 'lucide-react';
import { ABOUT_SUMMARY } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00FF66] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
              01 / About Me
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Recruiter-Focused Overview
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-md font-sans">
            A snapshot of my engineering pedigree, domain focus, and career milestones.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Main Summary Card (Spans 2 cols on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Cpu className="w-48 h-48 text-[#00FF66]" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF66]/10 text-[#00FF66] font-mono text-xs mb-6 border border-[#00FF66]/20">
                <Zap className="w-3.5 h-3.5" />
                Executive Summary
              </div>

              <p className="font-sans text-lg sm:text-xl md:text-2xl font-light text-white/90 leading-relaxed tracking-tight">
                "{ABOUT_SUMMARY.recruiterCopy}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00FF66]" /> Ready for fast-paced engineering teams
              </span>
              <span>•</span>
              <span>Full-Stack AI & Analytics Focus</span>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 bg-[#0c0c0c] border border-white/10 hover:border-[#00FF66]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00FF66] mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Education</span>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                {ABOUT_SUMMARY.education.degree}
              </h3>
              <p className="text-white/70 font-medium text-sm mt-1">
                {ABOUT_SUMMARY.education.institution}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-white/40 block mb-1">Core Areas</span>
              <p className="text-xs sm:text-sm text-[#00FF66] font-mono">
                {ABOUT_SUMMARY.education.focus}
              </p>
            </div>
          </motion.div>

          {/* Stats Cards (4 mini blocks in a nested grid spanning bottom row) */}
          <div className="md:col-span-3 lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ABOUT_SUMMARY.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-[#090909] border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:bg-white/[0.03] transition-colors relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-[#00FF66]/5 rounded-full blur-xl pointer-events-none" />
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#00FF66] mb-2 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-sans text-white/70 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
