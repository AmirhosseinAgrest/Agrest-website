export interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
  icon?: string;
}

export type SkillCategory = 
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'database'
  | 'devops'
  | 'design'
  | 'tools';

export interface SkillCategoryInfo {
  key: SkillCategory;
  labelKey: string;
  color: string;
}

export const skillCategories: SkillCategoryInfo[] = [
  { key: 'frontend', labelKey: 'frontend', color: '#3b82f6' },
  { key: 'backend', labelKey: 'backend', color: '#10b981' },
  { key: 'mobile', labelKey: 'mobile', color: '#8b5cf6' },
  { key: 'database', labelKey: 'database', color: '#f59e0b' },
  { key: 'devops', labelKey: 'devops', color: '#ef4444' },
  { key: 'design', labelKey: 'design', color: '#ec4899' },
  { key: 'tools', labelKey: 'tools', color: '#6b7280' },
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'TypeScript', category: 'frontend', level: 92 },
  { name: 'Next.js', category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'frontend', level: 95 },
  { name: 'Framer Motion', category: 'frontend', level: 88 },
  { name: 'Zustand', category: 'frontend', level: 85 },
  { name: 'i18n (react-i18next)', category: 'frontend', level: 90 },
  { name: 'Vite', category: 'frontend', level: 88 },
  { name: 'WebSocket (Frontend)', category: 'frontend', level: 80 },

  { name: 'Vue.js', category: 'frontend', level: 55 },

  { name: 'Node.js', category: 'backend', level: 88 },
  { name: 'Express.js', category: 'backend', level: 85 },
  { name: 'REST APIs', category: 'backend', level: 92 },
  { name: 'GraphQL', category: 'backend', level: 80 },
  { name: 'Prisma', category: 'backend', level: 78 },
  { name: 'WebSocket (Backend)', category: 'backend', level: 80 },

  { name: 'Python', category: 'backend', level: 82 },

  { name: 'Go (Basics)', category: 'backend', level: 45 },

  { name: 'Blockchain Basics', category: 'backend', level: 75 },
  { name: 'Crypto APIs', category: 'backend', level: 70 },

  { name: 'React Native', category: 'mobile', level: 78 },

  { name: 'Flutter (Basics)', category: 'mobile', level: 40 },

  { name: 'PostgreSQL', category: 'database', level: 85 },
  { name: 'MongoDB', category: 'database', level: 82 },
  { name: 'Redis', category: 'database', level: 75 },

  { name: 'Docker', category: 'devops', level: 70 },
  { name: 'CI/CD (GitHub Actions)', category: 'devops', level: 82 },
  { name: 'AWS (Basics)', category: 'devops', level: 60 },

  { name: 'Figma', category: 'design', level: 78 },
  { name: 'UI/UX Design', category: 'design', level: 85 },
  { name: 'Design System Architecture', category: 'design', level: 90 },

  { name: 'Git', category: 'tools', level: 92 },
  { name: 'VS Code', category: 'tools', level: 95 },
  { name: 'OpenCV', category: 'tools', level: 80 },
  { name: 'MediaPipe', category: 'tools', level: 75 },
];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export function getTopSkills(count: number = 8): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}