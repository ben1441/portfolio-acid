export type Mode = 'all' | 'frontend' | 'backend';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
  modes: Mode[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  type: 'bot' | 'web' | 'system';
  modes: Mode[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
  modes: Mode[];
}