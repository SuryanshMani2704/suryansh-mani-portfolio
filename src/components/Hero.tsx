import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Terminal, Sparkles, MapPin } from 'lucide-react';
import { HERO_DATA, CONTACT_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      
      {/* Background Subtle Grid & Neon Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00FF66]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-mono text-white/80 mb-8 hover:border-[#00FF66]/30 transition-colors cursor-default backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF66]"></span>
          </span>
          <span>{HERO_DATA.status}</span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1 text-white/60">
            <MapPin className="w-3 h-3 text-[#00FF66]" />
            {CONTACT_INFO.location}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00FF66]">Suryansh Mani</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-white/70 font-sans font-light max-w-2xl mb-10 leading-relaxed"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Button 1: View Projects */}
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 bg-[#00FF66] text-black font-display font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_35px_rgba(0,255,102,0.5)] hover:bg-[#00e65c] active:scale-95 w-full sm:w-auto"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Button 2: Download Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#00FF66]/40 font-display font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-95 w-full sm:w-auto cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#00FF66]" />
            <span>Download Resume</span>
          </button>

          {/* Button 3: Contact Me */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white/80 hover:text-white font-sans font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200 w-full sm:w-auto"
          >
            <Mail className="w-4 h-4 text-white/50" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Code terminal snippet preview (Raycast style hint) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 w-full max-w-xl bg-[#0a0a0a]/80 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xl text-left shadow-2xl overflow-hidden group"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-white/40">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#00FF66]/20 border border-[#00FF66]/40 inline-block" />
            </div>
            <span className="flex items-center gap-1.5 text-white/50">
              <Terminal className="w-3.5 h-3.5 text-[#00FF66]" />
              suryansh@pune-studio:~
            </span>
          </div>

          <div className="font-mono text-xs sm:text-sm space-y-2 leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-[#00FF66] select-none">&gt;</span>
              <span className="text-white">const engineer = new Engineer("Suryansh Mani");</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF66] select-none">&gt;</span>
              <span className="text-white/80">engineer.getSpecializations();</span>
            </div>
            <div className="pl-4 text-[#00FF66]/90 bg-[#00FF66]/5 p-2 rounded border-l-2 border-[#00FF66]">
              [ "AI & LLM Apps", "High-Concurrency Backend", "Data Pipelines", "Full-Stack Web" ]
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
