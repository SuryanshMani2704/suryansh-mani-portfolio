import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  BarChart3,
  Cloud,
  FileText,
  Trophy,
  Award,
  Users,
  Video,
  Terminal,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Copy,
  Check,
  Download,
  ArrowRight,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Sparkles,
  Send,
  Code,
  ShieldCheck,
  Cpu,
  Radio,
  Bot,
  Zap
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'Code2':
    case 'Code':
      return <Code2 className={className} />;
    case 'Layout':
      return <Layout className={className} />;
    case 'Server':
      return <Server className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'Cloud':
      return <Cloud className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Trophy':
      return <Trophy className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Video':
      return <Video className={className} />;
    case 'Terminal':
      return <Terminal className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Radio':
      return <Radio className={className} />;
    case 'Bot':
      return <Bot className={className} />;
    default:
      return <Zap className={className} />;
  }
};
