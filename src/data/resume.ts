export interface ResumeExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
}

export interface ResumeEducation {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface ResumeSkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeLanguage {
  language: string;
  level: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic';
}

export interface ResumeCertification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  website: string;
  summary: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkillCategory[];
  languages: ResumeLanguage[];
  certifications: ResumeCertification[];
}

export const resumeData: ResumeData = {
  name: 'Amirhossein Agrest',
  title: 'Senior Software Engineer',
  email: 'amirhosseinagrest@gmail.com',
  location: 'Remote Worldwide',
  website: 'agrest.netlify.app',
  summary: 'Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern frontend architecture. Committed to clean code, user-centric design, and continuous learning.',

  experience: [
    {
      id: 'exp-1',
      company: 'Tech Innovators Inc.',
      role: 'Senior Software Engineer',
      location: 'San Francisco, CA (Remote)',
      startDate: '2022-01',
      endDate: null,
      description: 'Leading frontend development for enterprise SaaS platform serving 100K+ users.',
      achievements: [
        'Architected and implemented new design system reducing development time by 40%',
        'Led migration from JavaScript to TypeScript improving code quality and reducing bugs by 60%',
        'Mentored team of 4 junior developers through code reviews and pair programming',
        'Optimized application performance achieving 95+ Lighthouse scores',
      ],
    },
    {
      id: 'exp-2',
      company: 'Digital Solutions Agency',
      role: 'Full Stack Developer',
      location: 'New York, NY',
      startDate: '2020-03',
      endDate: '2021-12',
      description: 'Developed custom web applications for diverse clients across multiple industries.',
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Implemented CI/CD pipelines reducing deployment time by 70%',
        'Built reusable component library used across all agency projects',
        'Collaborated with design team to ensure pixel-perfect implementations',
      ],
    },
    {
      id: 'exp-3',
      company: 'Startup Hub',
      role: 'Frontend Developer',
      location: 'Austin, TX',
      startDate: '2018-06',
      endDate: '2020-02',
      description: 'Built responsive web applications for early-stage startups.',
      achievements: [
        'Developed MVP products for 5 startups from concept to launch',
        'Reduced page load times by 50% through optimization techniques',
        'Implemented responsive designs achieving 100% mobile compatibility',
        'Created automated testing suite with 80% code coverage',
      ],
    },
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'California, USA',
      startDate: '2014',
      endDate: '2018',
      gpa: '3.8/4.0',
      achievements: [
        'Dean\'s List - All semesters',
        'Senior thesis on distributed systems',
        'Teaching Assistant for Web Development course',
      ],
    },
  ],

  skills: [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST APIs', 'PostgreSQL'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Figma'],
    },
    {
      category: 'Soft Skills',
      skills: ['Team Leadership', 'Technical Writing', 'Problem Solving', 'Communication'],
    },
  ],

  languages: [
    { language: 'English', level: 'Fluent' },
    { language: 'Persian', level: 'Native' },
  ],

  certifications: [
    {
      name: 'Advanced React & TypeScript',
      issuer: 'Udemy / Independent Study',
      date: '2023–2024',
      url: 'https://react.dev',
    },
    {
      name: 'Modern UI/UX & Design Systems',
      issuer: 'Self‑Directed Professional Training',
      date: '2024–2025',
      url: 'https://figma.com',
    },
    {
      name: 'Fullstack Web Development (Node.js, MongoDB)',
      issuer: 'Independent Learning & Real‑World Projects',
      date: '2024–2025',
      url: 'https://nodejs.org',
    },
  ],
};