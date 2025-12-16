import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text, Button } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { ExperienceTimeline } from './ExperienceTimeline';
import { getTotalYearsOfExperience } from '@/data';

interface ExperienceProps {
  showAll?: boolean;
  className?: string;
}

export function Experience({ showAll = false, className }: ExperienceProps) {
  const { t } = useTranslation();
  const yearsOfExperience = getTotalYearsOfExperience();

  return (
    <Section spacing="xl" className={className}>
      <FadeIn className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Heading as="h2" size="h2" className="mb-4">
              {t('experience.title')}
            </Heading>
            <Text size="lg" color="muted">
              {yearsOfExperience}+ {t('experience.years')} {t('experience.subtitle')}
            </Text>
          </div>

          {!showAll && (
            <Button variant="ghost" rightIcon="arrow-right">
              {t('experience.viewMore')}
            </Button>
          )}
        </div>
      </FadeIn>

      <ExperienceTimeline limit={showAll ? undefined : 3} />
    </Section>
  );
}

export default Experience;