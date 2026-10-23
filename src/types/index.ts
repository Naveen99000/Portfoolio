export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  summary: string;
  businessProblem: string;
  dataPreparation: string[];
  analyticalApproach: string[];
  keyKPIs: string[];
  businessValue: string[];
  sqlSnippet?: string;
  daxSnippet?: string;
  githubUrl?: string; // Configurable link
  chartType: 'revenue-cohort' | 'anomaly-breakdown';
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface TrainingItem {
  role: string;
  institution: string;
  period: string;
  type: 'training' | 'education';
  grade?: string;
  location: string;
  topics: string[];
  highlights: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  subRole: string;
  headline: string;
  supportingText: string;
  aboutText: string[];
  location: string;
  relocation: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  education: string;
  resumeFileName: string;
}
