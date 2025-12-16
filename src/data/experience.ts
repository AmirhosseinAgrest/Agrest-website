export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'fulltime' | 'contract' | 'freelance';
  startDate: string;
  endDate: string | null;
  location: string;
  remote: boolean;
  descriptionKey: string;
  highlightKeys: string[];
  technologies: string[];
  logo?: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Agrest Studio',
    role: 'Independent Frontend Architect',
    type: 'freelance',
    startDate: '2024-01',
    endDate: null,
    location: 'Remote',
    remote: true,
    descriptionKey: 'experience.exp1.description',
    highlightKeys: [
      'experience.exp1.highlight1',
      'experience.exp1.highlight2',
      'experience.exp1.highlight3'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'i18n'],
    url: 'https://agrest.netlify.app',
  },

  {
    id: 'exp-2',
    company: 'NexaOS Project',
    role: 'Creator & UI/UX System Architect',
    type: 'freelance',
    startDate: '2025-09',
    endDate: '2025-12',
    location: 'Remote',
    remote: true,
    descriptionKey: 'experience.exp2.description',
    highlightKeys: [
      'experience.exp2.highlight1',
      'experience.exp2.highlight2',
      'experience.exp2.highlight3'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    url: 'https://github.com/AmirhosseinAgrest/Nexa-OS',
  },

  {
    id: 'exp-3',
    company: 'AgrestChan Blockchain',
    role: 'Blockchain & Fullstack Developer',
    type: 'freelance',
    startDate: '2025-06',
    endDate: null,
    location: 'Remote',
    remote: true,
    descriptionKey: 'experience.exp3.description',
    highlightKeys: [
      'experience.exp3.highlight1',
      'experience.exp3.highlight2',
      'experience.exp3.highlight3'
    ],
    technologies: ['Node.js', 'TypeScript', 'Crypto APIs', 'React'],
  },

  {
    id: 'exp-4',
    company: 'Agrest Independent Projects',
    role: 'Fullstack & Product Developer',
    type: 'freelance',
    startDate: '2024-01',
    endDate: null,
    location: 'Remote',
    remote: true,
    descriptionKey: 'experience.exp4.description',
    highlightKeys: [
      'experience.exp4.highlight1',
      'experience.exp4.highlight2',
      'experience.exp4.highlight3'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Python', 'OpenCV'],
  },
];

export function getCurrentExperience(): Experience | undefined {
  return experiences.find((exp) => exp.endDate === null);
}

export function getTotalYearsOfExperience(): number {
  const startYear = Math.min(
    ...experiences.map((exp) => new Date(exp.startDate).getFullYear())
  );
  return new Date().getFullYear() - startYear;
}