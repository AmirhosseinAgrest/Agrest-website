import { useTranslation } from 'react-i18next';
import { Heading, Text, Badge } from '@/components/common';
import { ResumeSection } from './ResumeSection';
import { resumeData } from '@/data';

interface ResumeSkillsProps {
  className?: string;
}

const categoryColors: Record<string, string> = {
  Frontend: '#3b82f6',
  Backend: '#10b981',
  'Tools & DevOps': '#f59e0b',
  'Soft Skills': '#ec4899',
};

export function ResumeSkills({ className }: ResumeSkillsProps) {
  const { t } = useTranslation();

  return (
    <ResumeSection
      title={t('resume.sections.skills')}
      icon="layers"
      delay={0.3}
      className={className}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {resumeData.skills.map((category) => (
          <div
            key={category.category}
            className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/50"
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: categoryColors[category.category] || '#737373' }}
              />
              <Heading as="h3" size="h6">
                {category.category}
              </Heading>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/50">
          <Heading as="h3" size="h6" className="mb-4">
            {t('resume.sections.languages')}
          </Heading>
          <div className="space-y-3">
            {resumeData.languages.map((lang) => (
              <div key={lang.language} className="flex items-center justify-between">
                <Text size="sm">{lang.language}</Text>
                <Badge variant="default" size="sm">
                  {lang.level}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/50">
          <Heading as="h3" size="h6" className="mb-4">
            {t('resume.sections.certifications')}
          </Heading>
          <div className="space-y-3">
            {resumeData.certifications.map((cert) => (
              <div key={cert.name} className="flex items-start justify-between gap-4">
                <div>
                  <Text size="sm" weight="medium" className="text-neutral-200">
                    {cert.name}
                  </Text>
                  <Text size="xs" color="muted">
                    {cert.issuer} • {cert.date}
                  </Text>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    <Badge variant="outline" size="sm" rightIcon="external-link">
                      View
                    </Badge>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ResumeSection>
  );
}

export default ResumeSkills;