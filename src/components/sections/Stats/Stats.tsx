import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { cn } from '@/lib/utils';
import { StatItem } from './StatItem';
import { stats } from '@/data';

interface StatsProps {
  className?: string;
}

export function Stats({ className }: StatsProps) {
  const { t } = useTranslation();

  return (
    <Section spacing="lg" className={className}>
      <div
        className={cn(
          'grid grid-cols-2 lg:grid-cols-4 gap-4',
          'p-2 rounded-3xl',
          'bg-neutral-900/30 border border-neutral-800/50'
        )}
      >
        {stats.map((stat, index) => (
          <StatItem
            key={stat.labelKey}
            value={stat.value}
            label={t(`stats.${stat.labelKey}`)}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}

export default Stats;