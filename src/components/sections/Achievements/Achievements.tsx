import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { AchievementCard } from './AchievementCard';
import { achievements } from '@/data';

interface AchievementsProps {
  limit?: number;
  className?: string;
}

export function Achievements({ limit, className }: AchievementsProps) {
  const { t } = useTranslation();
  const displayAchievements = limit ? achievements.slice(0, limit) : achievements;

  return (
    <Section spacing="xl" className={className}>
      <FadeIn className="mb-12">
        <Heading as="h2" size="h2" className="mb-4">
          {t('achievements.title')}
        </Heading>
        <Text size="lg" color="muted" className="max-w-2xl">
          {t('achievements.subtitle')}
        </Text>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-2">
        {displayAchievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}

export default Achievements;