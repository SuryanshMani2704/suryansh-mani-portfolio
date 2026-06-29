export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'AI/ML' | 'Full Stack' | 'IoT' | 'Analytics';
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  roleOrOrganization: string;
  date?: string;
  description: string;
  badge?: string;
  icon: string;
  url?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}
