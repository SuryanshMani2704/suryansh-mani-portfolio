import React from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  MapPin, 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Brain, 
  BarChart3, 
  Cloud,
  FileText,
  ArrowRight,
  Briefcase
} from 'lucide-react';

export default function App() {
  const experiencesData = [
    {
      company: "Greenwich Research & Development",
      role: "Project Intern",
      description: "Built a gaming intelligence platform using APIs, Discord automation, analytics, and email workflows."
    },
    {
      company: "Mercor",
      role: "Business Analytics Intern",
      description: "Worked on SQL, ETL, dashboards, and stakeholder reporting."
    },
    {
      company: "AlgoBulls",
      role: "Sales Associate & Data Analyst",
      description: "Worked on analytics, financial products, technical demos, and client onboarding."
    },
    {
      company: "Tutoratti.ai",
      role: "Database Management Intern",
      description: "Worked on ML models, education analytics, and dashboards."
    }
  ];

  const projectsData = [
    {
      title: "Metascope AI",
      tagline: "Gaming Intelligence Platform",
      tech: ["React", "FastAPI", "Supabase", "Firebase", "Discord", "APIs"],
      github: "https://github.com/SuryanshMani2704"
    },
    {
      title: "CorpConnect",
      tagline: "AI Recruiting Platform",
      tech: ["React", "Express", "Supabase", "Gemini API", "Recharts"],
      github: "https://github.com/SuryanshMani2704"
    },
    {
      title: "SmartEdge",
      tagline: "IoT Dashboard",
      tech: ["React", "MQTT", "Firebase", "Realtime Dashboard"],
      github: "https://github.com/SuryanshMani2704"
    },
    {
      title: "Smart Helmet",
      tagline: "IoT + Embedded System",
      tech: ["ESP32", "GPS", "Sensors", "PCB", "Navigation", "Crash Detection"],
      github: "https://github.com/SuryanshMani2704"
    },
    {
      title: "AI Interview Bot",
      tagline: "AI Interview Evaluation Tool",
      tech: ["Python", "LLMs", "Speech", "Evaluation"],
      github: "https://github.com/SuryanshMani2704"
    }
  ];

  const skillsData = [
    {
      category: "Programming",
      icon: <Code2 className="w-5 h-5 text-[#00FF66]" />,
      items: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "HTML5/CSS3"]
    },
    {
      category: "Frontend",
      icon: <Layout className="w-5 h-5 text-[#00FF66]" />,
      items: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5 text-[#00FF66]" />,
      items: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "GraphQL", "WebSockets"]
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5 text-[#00FF66]" />,
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Pgvector", "InfluxDB"]
    },
    {
      category: "AI/ML",
      icon: <Brain className="w-5 h-5 text-[#00FF66]" />,
      items: ["Gemini API", "OpenAI API", "LangChain", "PyTorch", "Vector Embeddings", "RAG"]
    },
    {
      category: "Analytics",
      icon: <BarChart3 className="w-5 h-5 text-[#00FF66]" />,
      items: ["Data Modeling", "SQL Querying", "Tableau", "Pandas & NumPy", "A/B Testing"]
    },
    {
      category: "Cloud & Tools",
      icon: <Cloud className="w-5 h-5 text-[#00FF66]" />,
      items: ["Git & GitHub", "Docker", "AWS Basic", "Vercel / Cloud Run", "CI/CD Pipelines"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00FF66] selection:text-black font-sans">
      
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#050505] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight flex items-center gap-1">
            <span>Suryansh Mani</span>
            <span className="text-[#00FF66] font-mono">.</span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-[#00FF66] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#00FF66] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#00FF66] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#00FF66] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#00FF66] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-16">
        
        {/* Hero Section */}
        <section className="pt-12 sm:pt-20 pb-8 flex flex-col items-start space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
            <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
            <span>Available for Software Engineering roles</span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1 text-white/60">
              <MapPin className="w-3 h-3 text-[#00FF66]" /> Pune, India
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Hi, I'm <span className="text-[#00FF66]">Suryansh Mani</span>.
          </h1>

          <p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl leading-relaxed">
            Software Engineer specializing in AI-powered applications, backend systems, and data-driven products.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-[#00FF66] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#00e65c] transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a 
              href="#skills" 
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base flex items-center gap-2"
            >
              <span>Explore Skills</span>
            </a>

            <a 
              href="https://github.com/SuryanshMani2704" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-white/10 pt-20">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-mono text-[#00FF66] tracking-widest uppercase">01 / About</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Recruiter Overview</h2>
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 sm:p-10 max-w-4xl space-y-6">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
              B.Tech in Artificial Intelligence & Data Science, multiple internships, experience building production-ready AI applications, analytics dashboards, API platforms, and full-stack products.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-bold text-[#00FF66]">5+</div>
                <div className="text-xs text-white/60 mt-1">Production AI Apps</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-bold text-[#00FF66]">4</div>
                <div className="text-xs text-white/60 mt-1">Core Internships</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-bold text-[#00FF66]">IEEE</div>
                <div className="text-xs text-white/60 mt-1">NLP Publication</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-bold text-[#00FF66]">1st</div>
                <div className="text-xs text-white/60 mt-1">Viz-A-Thon Winner</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t border-white/10 pt-20">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-mono text-[#00FF66] tracking-widest uppercase">02 / Experience</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Work History</h2>
          </div>

          <div className="relative border-l border-white/15 ml-3 sm:ml-4 space-y-10">
            {experiencesData.map((exp) => (
              <div key={exp.company} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00FF66] group-hover:bg-[#00FF66] transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66] group-hover:bg-black transition-colors" />
                </div>

                <div className="bg-[#0c0c0c] border border-white/10 hover:border-[#00FF66]/40 rounded-xl p-6 sm:p-8 transition-colors space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-bold text-xl text-white tracking-tight">{exp.role}</h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#00FF66] bg-white/5 px-3 py-1 rounded-full w-fit border border-white/10">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-white/10 pt-20">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-mono text-[#00FF66] tracking-widest uppercase">03 / Featured Work</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div 
                key={project.title} 
                className="bg-[#0c0c0c] border border-white/10 hover:border-[#00FF66]/40 rounded-xl p-6 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-white tracking-tight">{project.title}</h3>
                  <p className="text-xs font-mono text-[#00FF66]">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 text-white/70 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#00FF66] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-t border-white/10 pt-20">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-mono text-[#00FF66] tracking-widest uppercase">04 / Technical Matrix</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Skills & Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((group) => (
              <div 
                key={group.category} 
                className="bg-[#0c0c0c] border border-white/10 hover:border-[#00FF66]/40 rounded-xl p-6 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {group.icon}
                    </div>
                    <h3 className="font-semibold text-white tracking-tight">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span 
                        key={item} 
                        className="text-xs font-mono px-3 py-1.5 rounded-md bg-white/5 text-white/80 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-right text-[11px] font-mono text-white/40">
                  {group.items.length} Skills
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-white/10 pt-20 pb-16">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-mono text-[#00FF66] tracking-widest uppercase">05 / Connect</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Get In Touch</h2>
            <p className="text-white/60 max-w-xl text-sm leading-relaxed">
              Whether you're looking to discuss high-impact engineering opportunities, collaborate on an AI product, or review my technical background, feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            <a 
              href="mailto:suryanshbest@gmail.com" 
              className="bg-[#0c0c0c] border border-white/10 hover:border-[#00FF66] p-6 rounded-xl transition-all group flex flex-col justify-between h-36"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00FF66] group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/50">Email</div>
                <div className="text-sm font-medium text-white truncate mt-0.5">suryanshbest@gmail.com</div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/suryansh-mani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0c0c0c] border border-white/10 hover:border-[#00FF66] p-6 rounded-xl transition-all group flex flex-col justify-between h-36"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00FF66] group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/50">LinkedIn</div>
                <div className="text-sm font-medium text-white truncate mt-0.5">suryansh-mani</div>
              </div>
            </a>

            <a 
              href="https://github.com/SuryanshMani2704" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0c0c0c] border border-white/10 hover:border-[#00FF66] p-6 rounded-xl transition-all group flex flex-col justify-between h-36"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00FF66] group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/50">GitHub</div>
                <div className="text-sm font-medium text-white truncate mt-0.5">SuryanshMani2704</div>
              </div>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#030303] py-8 text-center text-xs font-mono text-white/40">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Suryansh Mani. Built with React & Tailwind CSS.</div>
          <div className="flex items-center gap-1 text-[#00FF66]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]"></span>
            <span>Ready for hire</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
