import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Badge, Icon } from '@/components/common';
import type { Achievement } from '@/data';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  className?: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

const typeLabels: Record<string, string> = {
  certification: 'Certification',
  award: 'Award',
  recognition: 'Recognition',
};

export function AchievementCard({ achievement, index, className }: AchievementCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative flex gap-5 p-5 rounded-2xl',
        'bg-neutral-900/50 border border-neutral-800',
        'hover:bg-neutral-900 hover:border-neutral-700',
        'transition-all duration-300',
        className
      )}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${achievement.color}15` }}
      >
        <Icon
          name={achievement.icon}
          size="lg"
          style={{ color: achievement.color }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <Heading as="h3" size="h6" className="mb-1">
              {achievement.title}
            </Heading>
            <Text size="sm" color="muted">
              {achievement.issuer}
            </Text>
          </div>

          <Badge variant="outline" size="sm" className="shrink-0">
            {typeLabels[achievement.type]}
          </Badge>
        </div>

        {achievement.description && (
          <Text size="sm" color="muted" className="mb-3 line-clamp-2">
            {achievement.description}
          </Text>
        )}

        <div className="flex items-center gap-4">
          <Text size="xs" color="muted" className="flex items-center gap-1.5">
            <Icon name="calendar" size="xs" />
            {formatDate(achievement.date)}
          </Text>

          {achievement.credentialUrl && (
            <a
              href={achievement.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-1.5 text-xs font-medium',
                'text-brand-400 hover:text-brand-300 transition-colors'
              )}
            >
              <Icon name="external-link" size="xs" />
              {t('achievements.viewCredential')}
            </a>
          )}
        </div>
      </div>

      {achievement.credentialUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-3 right-3"
        >
          <Badge variant="success" size="sm" dot>
            {t('achievements.verified')}
          </Badge>
        </motion.div>
      )}
    </motion.div>
  );
}

export default AchievementCard;