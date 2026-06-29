import React from "react";
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
  ArrowRight,
  Briefcase,
} from "lucide-react";

export default function App() {
  const experiencesData = [
    {
      company: "Greenwich Research & Development",
      role: "Project Intern",
      description:
        "Built a gaming intelligence platform using APIs, Discord automation, analytics, and email workflows.",
    },
    {
      company: "Mercor",
      role: "Business Analytics Intern",
      description:
        "Worked on SQL, ETL, dashboards, and stakeholder reporting.",
    },
    {
      company: "AlgoBulls",
      role: "Sales Associate & Data Analyst",
      description:
        "Worked on analytics, financial products, technical demos, and client onboarding.",
    },
    {
      company: "Tutoratti.ai",
      role: "Database Management Intern",
      description:
        "Worked on ML models, education analytics, and dashboards.",
    },
  ];

  const projectsData = [
    {
      title: "Metascope AI",
      tagline: "Gaming Intelligence Platform",
      description:
        "Tracks live Twitch viewership, Steam active players, and community sentiment to rank meta shifts in real time.",
      image: "/images/metascope.png",
      tech: ["React", "FastAPI", "Supabase", "Firebase", "Discord", "APIs"],
      demo: "https://metascope.gg",
      privateRepo: true,
    },
    {
      title: "CorpConnect",
      tagline: "AI Recruiting Platform",
      description:
        "Enterprise-grade AI hiring ecosystem featuring automated candidate screening, opening pipelines, and semantic match scores.",
      image: "/images/corpconnect.png",
      tech: ["React", "Express", "Supabase", "Gemini API", "Recharts"],
      github: "https://github.com/SuryanshMani2704",
      demo: "#",
      privateRepo: false,
    },
    {
      title: "SmartEdge",
      tagline: "IoT Dashboard",
      description:
        "Low-latency edge monitoring dashboard rendering real-time MQTT telemetry streams, interactive topology nodes, and instant alerts.",
      image: "/images/smartedge.png",
      tech: ["React", "MQTT", "Firebase", "Realtime Dashboard"],
      github: "https://github.com/SuryanshMani2704",
      demo: "#",
      privateRepo: false,
    },
    {
      title: "Smart Helmet",
      tagline: "IoT + Embedded System",
      description:
        "Hardware safety system powered by ESP32 integrating GPS coordinates, impact sensors, navigation support, and emergency alerts.",
      image: "/images/helmet.png",
      tech: ["ESP32", "GPS", "Sensors", "PCB", "Navigation", "Crash Detection"],
      github: "https://github.com/SuryanshMani2704",
      demo: "#",
      privateRepo: false,
    },
    {
      title: "AI Interview Bot",
      tagline: "AI Interview Evaluation Tool",
      description:
        "Autonomous voice-enabled conversational agent using LLMs to conduct technical interviews and generate evaluation reports.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "LLMs", "Speech", "Evaluation"],
      github: "https://github.com/SuryanshMani2704",
      demo: "#",
      privateRepo: false,
    },
  ];

  const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "C++",
      "C",
      "HTML5",
      "CSS3",
      "Bash",
    ],
  },

  {
    category: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "React",
      "Vite",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Bootstrap",
      "Responsive Design",
      "Chart.js",
      "Recharts",
    ],
  },

  {
    category: "Backend Development",
    icon: <Server className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "OAuth",
      "WebSockets",
      "API Integration",
      "Microservices",
      "MVC Architecture",
    ],
  },

  {
    category: "Databases",
    icon: <Database className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "PostgreSQL",
      "Supabase",
      "Firebase Firestore",
      "Firebase Auth",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Redis",
      "Database Design",
      "SQL Optimization",
    ],
  },

  {
    category: "AI / Machine Learning",
    icon: <Brain className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "OpenAI API",
      "Gemini API",
      "Prompt Engineering",
      "RAG",
      "LangChain",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "BERT",
      "Hugging Face",
      "Regression",
      "Random Forest",
      "Isolation Forest",
      "SVM",
      "NLP",
      "LLM Integration",
      "Vector Embeddings",
    ],
  },

  {
    category: "Data Analytics",
    icon: <BarChart3 className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "SQL",
      "Power BI",
      "Tableau",
      "Excel",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Data Visualization",
      "Dashboard Development",
      "ETL",
      "KPI Reporting",
      "Business Analytics",
      "A/B Testing",
      "Statistical Analysis",
    ],
  },

  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Firebase",
      "Supabase",
      "Vercel",
      "Render",
      "Railway",
      "Netlify",
      "Cloud Deployment",
      "CI/CD",
      "Linux",
      "Environment Variables",
    ],
  },

  {
    category: "Tools & Technologies",
    icon: <Briefcase className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "VS Code",
      "Postman",
      "Figma",
      "Discord API",
      "MQTT",
      "REST Clients",
      "JSON",
      "Git CLI",
      "npm",
      "Vite",
      "Chrome DevTools",
      "Jupyter Notebook",
    ],
  },

  {
    category: "IoT & Embedded Systems",
    icon: <Cpu className="w-5 h-5 text-[#00FF66]" />,
    items: [
      "ESP32",
      "Arduino",
      "GPS",
      "MPU6050",
      "IoT",
      "PCB Design",
      "KiCad",
      "Sensors",
      "Firebase Realtime",
      "MQTT",
    ],
  },
];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00FF66] selection:text-black font-sans">
      <nav className="border-b border-white/10 bg-[#050505]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight flex items-center gap-1">
            <span>Suryansh Mani</span>
            <span className="text-[#00FF66] font-mono">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-[#00FF66] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#00FF66] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#00FF66] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#00FF66] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#00FF66] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-16">
        <section className="pt-12 sm:pt-20 pb-8 flex flex-col items-start space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
            <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
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
              href="#projects"
              className="bg-[#00FF66] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#00e65c] transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="/Suryansh_Mani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Resume
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

            <a
              href="https://www.linkedin.com/in/suryansh-mani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 pt-20">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-mono text-[#00FF66] tracking-widest uppercase">01 / About</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Recruiter Overview</h2>
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 sm:p-10 max-w-4xl space-y-6">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
              I'm a Software Engineer with experience building AI applications, analytics dashboards,
              backend APIs, and full-stack products. I enjoy turning complex ideas into deployed software
              that solves real user problems across AI, analytics, and product engineering.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {[
                ["5+", "Production AI Apps"],
                ["4", "Core Internships"],
                ["IEEE", "NLP Publication"],
                ["1st", "Viz-A-Thon Winner"],
              ].map(([value, label]) => (
                <div key={label} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-2xl font-bold text-[#00FF66]">{value}</div>
                  <div className="text-xs text-white/60 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <section id="projects" className="border-t border-white/10 pt-20">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-mono text-[#00FF66] tracking-widest uppercase">03 / Featured Work</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div
                key={project.title}
                className="group bg-[#0c0c0c] border border-white/10 hover:border-[#00FF66]/80 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(0,255,102,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-white/5 border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-90" />
                    <span className="absolute bottom-3 left-4 text-xs font-mono text-[#00FF66] bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                      {project.tagline}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-bold text-xl text-white tracking-tight group-hover:text-[#00FF66] transition-colors">
                      {project.title}
                    </h3>

                    {project.privateRepo && (
                      <p className="text-xs font-mono text-[#00FF66] bg-[#00FF66]/10 border border-[#00FF66]/20 rounded-lg px-3 py-2">
                        Private repository. Live product available for demonstration.
                      </p>
                    )}

                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-white/80 border border-white/10 group-hover:border-white/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex justify-end gap-3">
                  {project.privateRepo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#00FF66] py-2 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00FF66]/30 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Platform</span>
                    </a>
                  ) : (
                    <>
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#00FF66] py-2 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00FF66]/30 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#00FF66] py-2 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00FF66]/30 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Code</span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

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

        <section id="contact" className="border-t border-white/10 pt-20 pb-16">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-mono text-[#00FF66] tracking-widest uppercase">05 / Connect</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Get In Touch</h2>
            <p className="text-white/60 max-w-xl text-sm leading-relaxed">
              Looking for Software Engineering, Backend Engineering, and Applied AI roles.
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

      <footer className="border-t border-white/10 bg-[#030303] py-8 text-center text-xs font-mono text-white/40">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Suryansh Mani. Built with React & Tailwind CSS.</div>
          <div className="flex items-center gap-1 text-[#00FF66]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
            <span>Ready for hire</span>
          </div>
        </div>
      </footer>
    </div>
  );
}