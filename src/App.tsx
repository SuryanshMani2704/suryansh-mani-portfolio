import React, { useEffect, useState } from "react";
import {
  Github, Linkedin, Mail, ExternalLink, FileText, Folder, Copy,
  Code2, Layout, Server, Database, Brain, BarChart3, Cloud, Cpu,
  Briefcase
} from "lucide-react";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  const projects = [
    {
      label: "01 / Gaming Intelligence Platform",
      title: "Metascope AI",
      image: "/images/metascope.png",
      desc: "Gaming intelligence platform tracking Twitch viewership, Steam activity, news signals, and creator opportunities.",
      tech: ["React", "FastAPI", "Supabase", "Firebase", "Discord"],
      link: "https://metascope.gg",
      cta: "Open Platform",
      privateRepo: true,
    },
    {
      label: "02 / AI Recruiting Platform",
      title: "CorpConnect",
      image: "/images/corpconnect.png",
      desc: "AI recruiting ecosystem with resume parsing, candidate screening, match scoring, and analytics dashboards.",
      tech: ["React", "Express", "Supabase", "Gemini", "Recharts"],
      link: "https://github.com/SuryanshMani2704",
      cta: "View Code",
    },
    {
      label: "03 / IoT Dashboard",
      title: "SmartEdge",
      image: "/images/smartedge.png",
      desc: "Realtime edge-to-cloud dashboard for MQTT telemetry, alerts, device status, and admin controls.",
      tech: ["React", "MQTT", "Firebase", "Realtime"],
      link: "https://github.com/SuryanshMani2704",
      cta: "View Code",
    },
    {
      label: "04 / Embedded System",
      title: "Smart Helmet",
      image: "/images/helmet.png",
      desc: "ESP32-based smart helmet with GPS navigation, crash detection, sensors, and emergency alerts.",
      tech: ["ESP32", "GPS", "Sensors", "PCB", "KiCad"],
      link: "https://github.com/SuryanshMani2704",
      cta: "View Code",
    },
    {
      label: "05 / AI Interview Evaluation",
      title: "AI Interview Bot",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
      desc: "Voice-enabled AI interview assistant for conducting technical interviews and generating structured evaluation reports.",
      tech: ["Python", "LLMs", "Speech", "Evaluation"],
      link: "https://github.com/SuryanshMani2704",
      cta: "View Code",
    },
  ];

  const experiences = [
    {
      year: "Apr 2026 — Present",
      role: "AI Developer",
      company: "Greenwich Research & Development",
      desc: "Built a gaming intelligence platform using APIs, Discord automation, analytics, and email workflows.",
      tags: ["APIs", "Discord", "Analytics", "Email"],
    },
    {
      year: "July 2025- Nov 2025",
      role: "Data Analytics Intern",
      company: "Mercor",
      desc: "Worked on SQL, ETL, dashboards, and stakeholder reporting across business pipelines.",
      tags: ["SQL", "ETL", "Dashboards"],
    },
    {
      year: "Nov 2024 — Apr 2025",
      role: "Business Analyst Intern",
      company: "AlgoBulls",
      desc: "Worked on analytics, financial products, technical demos, and client onboarding.",
      tags: ["Analytics", "FinTech", "Onboarding"],
    },
    {
      year: "Jul 2024- Sept 2024",
      role: "Database Management Intern",
      company: "Tutoratti.ai",
      desc: "Worked on ML models, education analytics, regression workflows, and dashboards.",
      tags: ["ML", "BERT", "Dashboards"],
    },
  ];

  const skillsData = [
    {
      category: "Programming",
      icon: <Code2 />,
      items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++", "C", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      icon: <Layout />,
      items: ["React", "Vite", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Recharts", "Chart.js"],
    },
    {
      category: "Backend",
      icon: <Server />,
      items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "WebSockets", "API Integration"],
    },
    {
      category: "Databases",
      icon: <Database />,
      items: ["PostgreSQL", "Supabase", "Firebase", "MongoDB", "MySQL", "SQLite", "Firestore"],
    },
    {
      category: "AI / ML",
      icon: <Brain />,
      items: ["OpenAI API", "Gemini API", "Prompt Engineering", "RAG", "PyTorch", "Scikit-learn", "BERT", "Hugging Face"],
    },
    {
      category: "Analytics",
      icon: <BarChart3 />,
      items: ["SQL", "Power BI", "Tableau", "Excel", "Pandas", "NumPy", "ETL", "KPI Dashboards"],
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud />,
      items: ["Git", "GitHub", "Docker", "Vercel", "Render", "Railway", "Firebase Hosting", "CI/CD"],
    },
    {
      category: "IoT / Embedded",
      icon: <Cpu />,
      items: ["ESP32", "Arduino", "GPS", "MPU6050", "MQTT", "Sensors", "KiCad", "PCB Design"],
    },
  ];

  const copyEmail = () => navigator.clipboard.writeText("suryanshbest@gmail.com");

  if (!loaded) {
    return (
      <div className="loader-screen">
        <div className="loader-logo">S.M.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f2eb] selection:bg-[#00FF66] selection:text-black">
      <div className="fixed inset-0 z-0 bg-grid animate-grid opacity-[0.45]" />
      <div className="fixed inset-0 z-0 bg-vignette" />
      <div className="fixed left-1/2 top-1/3 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#00FF66]/[0.035] blur-[120px]" />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050505]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-4 group">
            <span className="font-serif text-3xl tracking-tight group-hover:text-glow">S.M.</span>
            <span className="h-5 w-px bg-white/15" />
            <span className="mono text-[10px] text-white/45">IST</span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <a href="#about" className="nav-link">01 About</a>
            <a href="#experience" className="nav-link">02 Experience</a>
            <a href="#projects" className="nav-link">03 Projects</a>
            <a href="#skills" className="nav-link">04 Skills</a>
            <a href="#contact" className="nav-link">05 Contact</a>
          </div>

          <a href="#contact" className="btn-outline hidden sm:flex">
            Hire Me <span>→</span>
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="hero-section mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
          <div className="hero-photo-wrap">
            <img src="/images/rehman.jpg" alt="Suryansh Mani" className="hero-photo" />
          </div>

          <div className="mb-20 flex flex-wrap items-center justify-between gap-6">
            <p className="mono text-[10px] tracking-[0.35em] text-white/55">
              <span className="text-[#00FF66]">●</span> AVAILABLE FOR SWE ROLES · PUNE, INDIA
            </p>
            <p className="mono hidden text-[10px] tracking-[0.35em] text-white/35 md:block">
              PORTFOLIO / 2026 EDITION
            </p>
          </div>

          <h1 className="hero-name max-w-5xl font-serif text-[5.2rem] leading-[0.78] tracking-[-0.08em] sm:text-[8rem] md:text-[11rem]">
            Suryansh
            <br />
            <span className="italic text-white/65">Mani.</span>
          </h1>

          <div className="mt-20 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-md text-xl leading-snug text-white/85 md:text-2xl fade-up">
              Software Engineer crafting AI-powered applications, backend systems,
              and data-driven products that ship.
            </p>

            <div className="flex flex-wrap gap-3 fade-up delay-1">
              <a href="#projects" className="btn-primary"><Folder size={15} /> View Projects ↘</a>
              <a href="/Suryansh_Mani_Resume.pdf" target="_blank" className="btn-outline"><FileText size={15} /> Resume</a>
              <a href="https://github.com/SuryanshMani2704" target="_blank" className="btn-outline"><Github size={15} /> GitHub</a>
              <a href="https://www.linkedin.com/in/suryansh-mani/" target="_blank" className="btn-outline"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>
        </section>

        <Section id="about" number="01" eyebrow="A Quick Recruiter Snapshot" title="About.">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="fade-up">
              <p className="font-serif text-3xl italic leading-tight text-white/90 md:text-5xl">
                “I’m a Software Engineer with experience building AI applications,
                analytics dashboards, backend APIs, and full-stack products. I enjoy
                turning complex ideas into deployed software that solves real user problems
                across AI, analytics, and product engineering.”
              </p>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <MiniInfo label="Role" value="Software Engineer" />
                <MiniInfo label="Based" value="India" />
                <MiniInfo label="Status" value="Open to Roles" green />
                <MiniInfo label="Focus" value="AI · Backend · Data" />
              </div>
            </div>

            <div className="space-y-6 fade-up delay-1">
              <div className="grid grid-cols-2 border border-white/10 card-glow">
                <Stat value="5+" label="Production AI Apps" />
                <Stat value="04" label="Core Internships" />
                <Stat value="IEEE" label="NLP Publication" />
                <Stat value="01" label="Viz-A-Thon Winner" />
              </div>

              <div className="border border-white/10 bg-white/[0.025] p-8 card-glow">
                <p className="mono mb-4 text-[10px] tracking-[0.35em] text-white/35">CURRENTLY</p>
                <p className="text-white/75">
                  Building production-grade AI workflows, exploring agentic systems,
                  and shipping side projects at the intersection of machine learning
                  and product engineering.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" number="02" eyebrow="Internships & Engineering Roles" title="Work History.">
          <div className="border-t border-white/10">
            {experiences.map((exp, i) => (
              <div key={exp.role} className="experience-row grid gap-8 border-b border-white/10 py-10 md:grid-cols-[180px_1fr_1fr]">
                <p className="mono text-[11px] tracking-[0.25em] text-white/35">{exp.year}</p>
                <div>
                  <h3 className="font-serif text-3xl">{exp.role}</h3>
                  <p className="mono mt-2 text-[10px] tracking-[0.3em] text-white/45">@ {exp.company}</p>
                </div>
                <div>
                  <p className="text-white/70">{exp.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" number="03" eyebrow="Selected Works" title="Featured Builds.">
          <div className="space-y-14">
            {projects.map((project) => (
              <article key={project.title} className="project-card group border border-white/10 bg-white/[0.025]">
                <div className="relative h-[360px] overflow-hidden md:h-[520px]">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute left-6 top-6"><span className="tag">{project.label}</span></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
                      <div>
                        <h3 className="font-serif text-5xl tracking-tight md:text-7xl project-title">{project.title}</h3>
                        <p className="mt-4 max-w-2xl text-white/70">{project.desc}</p>
                        {project.privateRepo && (
                          <p className="mono mt-4 text-[10px] tracking-[0.25em] text-[#00FF66]">
                            PRIVATE REPOSITORY · LIVE PRODUCT AVAILABLE
                          </p>
                        )}
                      </div>
                      <div className="md:text-right">
                        <div className="mb-5 flex flex-wrap gap-2 md:justify-end">
                          {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div>
                        <a href={project.link} target="_blank" className="btn-primary inline-flex">
                          {project.cta} <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" number="04" eyebrow="Technical Matrix" title="Skills.">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {skillsData.map((group) => (
              <div key={group.category} className="skill-card">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="skill-icon">{group.icon}</div>
                  <h3 className="font-serif text-2xl">{group.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="skill-tag">{item}</span>)}
                </div>
                <p className="mono mt-8 text-right text-[10px] tracking-[0.25em] text-white/35">
                  {group.items.length} TECHNOLOGIES
                </p>
              </div>
            ))}
          </div>
        </Section>

        <section id="contact" className="relative border-t border-white/10 px-6 py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <p className="mono mb-6 text-[10px] tracking-[0.35em] text-white/45">05 / CONTACT</p>
              <h2 className="font-serif text-7xl leading-[0.8] tracking-[-0.06em] md:text-9xl">
                Get<br /><span className="italic text-white/55">in touch.</span>
              </h2>
              <p className="mt-8 max-w-md text-white/75">
                Looking for Software Engineering, Backend, and Applied AI roles.
              </p>
              <button onClick={copyEmail} className="btn-outline mt-8"><Copy size={15} /> Copy Email</button>
            </div>

            <div className="border-t border-white/10">
              <ContactRow label="Email" value="suryanshbest@gmail.com" href="mailto:suryanshbest@gmail.com" />
              <ContactRow label="LinkedIn" value="suryansh-mani" href="https://www.linkedin.com/in/suryansh-mani/" />
              <ContactRow label="GitHub" value="SuryanshMani2704" href="https://github.com/SuryanshMani2704" />
            </div>
          </div>

          <footer className="mx-auto mt-28 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 mono text-[10px] tracking-[0.3em] text-white/35 md:flex-row">
            <p>© 2026 SURYANSH MANI — BUILT WITH REACT & TAILWIND CSS</p>
            <p>READY FOR HIRE · PUNE, INDIA</p>
          </footer>
        </section>
      </main>
    </div>
  );
}

function Section({ id, number, eyebrow, title, children }: any) {
  return (
    <section id={id} className="section-reveal border-t border-white/10 px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[220px_1fr]">
        <div className="hidden lg:block">
          <div className="sticky top-32 flex items-center gap-5">
            <p className="mono text-[11px] tracking-[0.35em] text-white/35">{number} / {id.toUpperCase()}</p>
            <div className="h-px w-16 bg-white/20" />
          </div>
        </div>
        <div>
          <p className="mono mb-5 text-[10px] tracking-[0.35em] text-white/45">{eyebrow}</p>
          <h2 className="mb-20 font-serif text-6xl leading-none tracking-[-0.055em] md:text-7xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function MiniInfo({ label, value, green }: any) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="mono text-[10px] tracking-[0.3em] text-white/35">{label}</p>
      <p className={`mono mt-2 text-[11px] tracking-[0.25em] ${green ? "text-[#00FF66]" : "text-white"}`}>{value}</p>
    </div>
  );
}

function Stat({ value, label }: any) {
  return (
    <div className="border-b border-r border-white/10 p-8 hover:bg-white/[0.035] transition">
      <p className="font-serif text-4xl">{value}</p>
      <p className="mono mt-3 text-[10px] tracking-[0.3em] text-white/35">{label}</p>
    </div>
  );
}

function ContactRow({ label, value, href }: any) {
  return (
    <a href={href} target="_blank" className="group flex items-center justify-between border-b border-white/10 py-8">
      <div>
        <p className="mono text-[10px] tracking-[0.35em] text-white/35">{label}</p>
        <p className="mt-3 font-serif text-2xl">{value}</p>
      </div>
      <ExternalLink className="text-white/35 transition group-hover:text-[#00FF66] group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}