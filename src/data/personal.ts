import type { IconName } from '@/components/common/Icon';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  availability: boolean;
  resumeUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconName;
  username: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Amirhossein Agrest',
  title: 'Software Engineer & Designer',
  email: 'amirhosseinagrest@gmail.com',
  location: 'Remote Worldwide',
  availability: true,
  resumeUrl: '/resume/amirhossein-agrest-resume.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/AmirhosseinAgrest',
    icon: 'github',
    username: '@AmirhosseinAgrest',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/amirhossein_agrest',
    icon: 'instagram',
    username: '@amirhossein_agrest',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/amirhosseinagrest',
    icon: 'linkedin',
    username: 'in/amirhosseinagrest',
  },
  {
    platform: 'telegram',
    url: 'https://t.me/amirhosseinagrest',
    icon: 'telegram',
    username: '@amirhosseinagrest',
  },
  {
    platform: 'Email',
    url: 'mailto:amirhosseinagrest@gmail.com',
    icon: 'email',
    username: 'amirhosseinagrest@gmail.com',
  },
];

export const stats = [
  { value: '2+', labelKey: 'yearsExperience' },
  { value: '12+', labelKey: 'projectsCompleted' },
  { value: '5+', labelKey: 'openSource' },
  { value: '12+', labelKey: 'technologies' },
];