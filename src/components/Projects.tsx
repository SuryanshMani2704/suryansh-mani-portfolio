import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code2, Sparkles, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'AI/ML', 'IoT'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(proj => proj.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00FF66] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
              03 / Featured Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Production & Research Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#0d0d0d] p-1.5 rounded-xl border border-white/10 self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#00FF66] text-black font-semibold shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectItem) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="bg-[#0b0b0b] border border-white/10 hover:border-[#00FF66]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(0,255,102,0.12)] relative overflow-hidden"
              >
                {/* Subtle Neon Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#00FF66]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top bar: Category badge + Featured icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 font-medium tracking-wide">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        <Sparkles className="w-3 h-3 fill-amber-400" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#00FF66] transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-white/50 mb-3 uppercase tracking-wider mt-0.5">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/75 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 pt-4 border-t border-white/5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/70 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links Buttons */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    {/* GitHub Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-medium border border-white/10 hover:border-white/30 transition-all active:scale-95"
                    >
                      <Github className="w-4 h-4 text-white/80" />
                      <span>GitHub</span>
                    </a>

                    {/* Live Demo Button */}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00FF66]/10 hover:bg-[#00FF66] text-[#00FF66] hover:text-black font-mono text-xs font-semibold border border-[#00FF66]/30 transition-all active:scale-95 shadow-[0_0_15px_rgba(0,255,102,0.1)] hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner to GitHub */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/SuryanshMani2704"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0d0d0d] hover:bg-white/5 border border-white/10 hover:border-[#00FF66]/40 px-6 py-4 rounded-2xl text-sm font-mono text-white/80 transition-all group"
          >
            <FolderGit2 className="w-5 h-5 text-[#00FF66]" />
            <span>Looking for more open source code? Explore my GitHub Repositories</span>
            <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#00FF66] group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
};
