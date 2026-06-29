import { ExperienceItem, ProjectItem, SkillGroup, AchievementItem, ContactInfo } from '../types';

export const HERO_DATA = {
  headline: "Hi, I'm Suryansh Mani.",
  subtitle: "Software Engineer specializing in AI-powered applications, backend systems, and data-driven products.",
  status: "Available for high-impact engineering roles",
};

export const ABOUT_SUMMARY = {
  recruiterCopy: "B.Tech in Artificial Intelligence & Data Science, multiple internships, experience building production-ready AI applications, analytics dashboards, API platforms, and full-stack products.",
  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Vishwakarma Institute of Information Technology (VIIT)",
    location: "Pune, India",
    focus: "Deep Learning, Distributed Backend Systems, Big Data Analytics"
  },
  stats: [
    { label: "Production AI Apps", value: "5+" },
    { label: "Core Internships", value: "4" },
    { label: "Hackathon & Tech Wins", value: "3+" },
    { label: "Research Publication", value: "IEEE" }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "greenwich",
    role: "Project Intern",
    company: "Greenwich Research & Development",
    period: "Recent",
    location: "Remote",
    type: "R&D / Engineering",
    description: [
      "Engineered scalable backend pipelines and AI-driven data processing workflows for research prototypes.",
      "Collaborated with cross-functional R&D teams to optimize algorithm latency and model deployment pipelines.",
      "Implemented robust API connectors to handle high-volume streaming data with zero downtime."
    ],
    skills: ["Python", "FastAPI", "AI Pipelines", "System Architecture", "Git"]
  },
  {
    id: "mercor",
    role: "Business Analytics Intern",
    company: "Mercor",
    period: "Previous",
    location: "Remote",
    type: "Analytics & Product",
    description: [
      "Designed data-driven models and automated reporting dashboards to track user growth and platform conversion metrics.",
      "Conducted deep SQL queries and statistical analysis to uncover actionable product bottlenecks for leadership.",
      "Built automated data ingestion pipelines that reduced manual weekly reporting overhead by 65%."
    ],
    skills: ["SQL", "Python", "Data Modeling", "Tableau", "Product Analytics", "A/B Testing"]
  },
  {
    id: "algobulls",
    role: "Sales Associate & Data Analyst",
    company: "AlgoBulls",
    period: "Previous",
    location: "Pune / Remote",
    type: "FinTech / Quant",
    description: [
      "Analyzed algorithmic trading platform adoption metrics and customer engagement funnels to drive revenue strategies.",
      "Synthesized complex quantitative financial data into clear visualizations for prospective enterprise clients.",
      "Bridged technical quant strategies with client business needs, accelerating onboarding workflows."
    ],
    skills: ["Quantitative Analysis", "Financial Modeling", "Excel Advanced", "Client Relations", "Python"]
  },
  {
    id: "tutoratti",
    role: "Database Management Intern",
    company: "Tutoratti.ai",
    period: "Previous",
    location: "Pune",
    type: "EdTech / Backend",
    description: [
      "Architected relational database schemas and optimized complex SQL queries for high-concurrency educational platforms.",
      "Implemented indexing strategies and query caching that improved database response times by over 40%.",
      "Ensured strict data integrity, backup automation, and GDPR-compliant security practices across student databases."
    ],
    skills: ["PostgreSQL", "Database Sharding", "Query Optimization", "Redis", "Data Security"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "metascope-ai",
    title: "Metascope AI",
    tagline: "Gaming Intelligence Platform",
    category: "AI/ML",
    description: "An advanced real-time gaming intelligence platform that leverages computer vision and LLMs to analyze gameplay streams, generate tactical insights, and provide automated match highlights.",
    highlights: [
      "Real-time frame extraction & object detection pipeline with sub-100ms inference latency.",
      "Context-aware tactical assistant powered by fine-tuned Gemini models.",
      "Sleek dark-mode analytics dashboard built for competitive gamers and esports analysts."
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI", "Gemini API", "OpenCV", "Tailwind CSS"],
    githubUrl: "https://github.com/SuryanshMani2704",
    liveDemoUrl: "https://github.com/SuryanshMani2704",
    featured: true
  },
  {
    id: "corpconnect",
    title: "CorpConnect",
    tagline: "AI Recruiting Platform",
    category: "AI/ML",
    description: "An intelligent hiring ecosystem that streamlines enterprise recruitment through automated resume parsing, semantic candidate-to-job matching, and AI screening workflows.",
    highlights: [
      "Vector embeddings search engine matching candidate profiles against intricate job descriptions.",
      "Automated interview scheduling and personalized feedback report generation.",
      "Enterprise-grade role-based access control (RBAC) and real-time candidate pipeline tracking."
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Pgvector", "OpenAI API", "Docker"],
    githubUrl: "https://github.com/SuryanshMani2704",
    liveDemoUrl: "https://github.com/SuryanshMani2704",
    featured: true
  },
  {
    id: "smartedge",
    title: "SmartEdge",
    tagline: "IoT Dashboard",
    category: "IoT",
    description: "A centralized real-time monitoring and telemetry dashboard for distributed edge IoT sensors, providing live alerting, anomaly detection, and historical data logging.",
    highlights: [
      "MQTT broker integration processing 10,000+ sensor telemetry events per minute.",
      "Dynamic interactive time-series charts with customizable threshold triggers.",
      "Low-bandwidth edge protocol support with offline data caching and sync."
    ],
    techStack: ["React", "Vite", "Node.js", "Express", "InfluxDB", "WebSockets", "Tailwind CSS"],
    githubUrl: "https://github.com/SuryanshMani2704",
    liveDemoUrl: "https://github.com/SuryanshMani2704"
  },
  {
    id: "smart-helmet",
    title: "Smart Helmet",
    tagline: "IoT + Embedded System",
    category: "IoT",
    description: "An intelligent industrial safety helmet equipped with embedded sensors for hazardous gas detection, impact monitoring, and automated emergency SOS dispatching.",
    highlights: [
      "Embedded C firmware running on ESP32 microcontroller with ultra-low power sleep states.",
      "Instant GSM/GPS emergency beacon alerting safety supervisors upon severe impact.",
      "Cloud companion web app displaying real-time worker safety health indexes."
    ],
    techStack: ["Embedded C", "ESP32", "IoT Sensors", "MQTT", "Python", "React Companion App"],
    githubUrl: "https://github.com/SuryanshMani2704",
    liveDemoUrl: "https://github.com/SuryanshMani2704"
  },
  {
    id: "ai-interview-bot",
    title: "AI Interview Bot",
    tagline: "AI Interview Evaluation Tool",
    category: "AI/ML",
    description: "An autonomous mock interview platform that conducts realistic voice & text interviews, evaluates technical depth, and generates comprehensive recruiter-ready scorecard reports.",
    highlights: [
      "Dynamic adaptive questioning engine that dives deeper based on candidate responses.",
      "Speech-to-text integration with real-time sentiment and clarity scoring.",
      "Detailed actionable feedback breakdown covering technical accuracy, communication, and system design."
    ],
    techStack: ["React", "TypeScript", "FastAPI", "LangChain", "Gemini API", "Web Audio API", "Tailwind CSS"],
    githubUrl: "https://github.com/SuryanshMani2704",
    liveDemoUrl: "https://github.com/SuryanshMani2704",
    featured: true
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming",
    iconName: "Code2",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "HTML5/CSS3"]
  },
  {
    category: "Frontend",
    iconName: "Layout",
    skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Redux Toolkit", "Framer Motion"]
  },
  {
    category: "Backend",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "GraphQL", "WebSockets"]
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Pgvector", "InfluxDB"]
  },
  {
    category: "AI/ML",
    iconName: "Brain",
    skills: ["Gemini API", "OpenAI API", "LangChain", "PyTorch", "Scikit-Learn", "Vector Embeddings", "RAG"]
  },
  {
    category: "Analytics",
    iconName: "BarChart3",
    skills: ["Data Modeling", "SQL Querying", "Tableau", "Pandas & NumPy", "Statistical Analysis", "A/B Testing"]
  },
  {
    category: "Cloud & Tools",
    iconName: "Cloud",
    skills: ["Git & GitHub", "Docker", "AWS Basic", "Vercel / Cloud Run", "CI/CD Pipelines", "Linux / Bash"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ieee-nlp",
    title: "IEEE NLP Publication",
    roleOrOrganization: "IEEE Xplore Research",
    date: "Published Author",
    description: "Authored and published a peer-reviewed research paper focusing on Natural Language Processing architectures and semantic text extraction methodologies.",
    badge: "Research Excellence",
    icon: "FileText",
    url: "https://ieeexplore.ieee.org"
  },
  {
    id: "viz-a-thon",
    title: "Viz-A-Thon Winner",
    roleOrOrganization: "National Data Analytics Championship",
    date: "1st Place Winner",
    description: "Secured top honors by engineering a compelling real-time analytical dashboard that unmasked hidden consumer behavioral shifts from complex multi-gigabyte datasets.",
    badge: "Champion",
    icon: "Trophy"
  },
  {
    id: "ubs-hackathon",
    title: "UBS Hackathon Finalist / Winner",
    roleOrOrganization: "UBS Global Tech Challenge",
    date: "Top Tier FinTech Solution",
    description: "Architected a high-throughput quantitative risk monitoring prototype praised by enterprise banking architects for its resilience and clean UI execution.",
    badge: "Hackathon Win",
    icon: "Award"
  },
  {
    id: "aisa-president",
    title: "President",
    roleOrOrganization: "Artificial Intelligence Students Association (AiSA)",
    date: "Leadership Role",
    description: "Led a vibrant tech community of 500+ aspiring engineers. Spearheaded nationwide AI bootcamps, technical symposia, and industry mentorship programs.",
    badge: "Community Leader",
    icon: "Users"
  },
  {
    id: "tedx-production",
    title: "Production Head",
    roleOrOrganization: "TEDxVIIT",
    date: "Executive Core Team",
    description: "Directed end-to-end technical production, live broadcast streaming, and stage audiovisual engineering for an internationally licensed flagship TEDx conference.",
    badge: "Operations Head",
    icon: "Video"
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: "suryanshbest@gmail.com",
  linkedin: "https://www.linkedin.com/in/suryansh-mani/",
  github: "https://github.com/SuryanshMani2704",
  location: "Pune, India"
};
