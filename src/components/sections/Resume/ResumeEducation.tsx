import { useTranslation } from 'react-i18next';
import { Heading, Text, Badge, Icon } from '@/components/common';
import { ResumeSection } from './ResumeSection';
import { resumeData } from '@/data';

interface ResumeEducationProps {
  className?: string;
}

export function ResumeEducation({ className }: ResumeEducationProps) {
  const { t } = useTranslation();

  return (
    <ResumeSection
      title={t('resume.sections.education')}
      icon="bookmark"
      delay={0.2}
      className={className}
    >
      <div className="space-y-6">
        {resumeData.education.map((edu) => (
          <div
            key={edu.id}
            className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/50"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <Heading as="h3" size="h5" className="mb-1">
                  {edu.degree} in {edu.field}
                </Heading>
                <Text size="sm" className="text-brand-400">
                  {edu.institution}
                </Text>
              </div>

              {edu.gpa && (
                <Badge variant="outline" size="md">
                  GPA: {edu.gpa}
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm text-neutral-400">
              <span className="flex items-center gap-1">
                <Icon name="location" size="xs" />
                {edu.location}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="calendar" size="xs" />
                {edu.startDate} — {edu.endDate}
              </span>
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
              <ul className="space-y-1">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon
                      name="check"
                      size="xs"
                      className="mt-1 text-emerald-400 shrink-0"
                    />
                    <Text size="sm" color="muted">
                      {achievement}
                    </Text>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}

export default ResumeEducation;