import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Badge, Icon } from '@/components/common';
import { ResumeSection } from './ResumeSection';
import { resumeData } from '@/data';

interface ResumeExperienceProps {
  className?: string;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return 'Present';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function ResumeExperience({ className }: ResumeExperienceProps) {
  const { t } = useTranslation();

  return (
    <ResumeSection
      title={t('resume.sections.experience')}
      icon="terminal"
      delay={0.1}
      className={className}
    >
      <div className="space-y-8">
        {resumeData.experience.map((exp, index) => (
          <div
            key={exp.id}
            className={cn(
              'relative pl-6 border-l-2 border-neutral-800',
              index === 0 && 'border-brand-500'
            )}
          >
            <div
              className={cn(
                'absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2',
                index === 0
                  ? 'bg-brand-500 border-brand-500'
                  : 'bg-neutral-900 border-neutral-700'
              )}
            />

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Heading as="h3" size="h5">
                {exp.role}
              </Heading>
              {exp.endDate === null && (
                <Badge variant="success" size="sm" dot>
                  Current
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-sm text-neutral-400">
              <span className="font-medium text-neutral-300">{exp.company}</span>
              <span className="flex items-center gap-1">
                <Icon name="location" size="xs" />
                {exp.location}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="calendar" size="xs" />
                {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
              </span>
            </div>

            <Text size="sm" color="muted" className="mb-4">
              {exp.description}
            </Text>

            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon
                    name="chevron-right"
                    size="xs"
                    className="mt-1.5 text-brand-400 shrink-0"
                  />
                  <Text size="sm" color="muted">
                    {achievement}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}

export default ResumeExperience;