import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Badge, Icon } from '@/components/common';
import type { Experience } from '@/data';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
  className?: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function ExperienceCard({ experience, index, isLast, className }: ExperienceCardProps) {
  const { t } = useTranslation();

  const startDate = formatDate(experience.startDate);
  const endDate = experience.endDate
    ? formatDate(experience.endDate)
    : t('experience.present');

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15,
      }}
      className={cn('relative pl-8 md:pl-12', className)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.15,
          }}
          className="w-full bg-gradient-to-b from-brand-500 to-brand-500/20"
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.15 + 0.2,
        }}
        className={cn(
          'absolute left-0 top-1 -translate-x-1/2',
          'w-3 h-3 rounded-full border-2 border-brand-500',
          experience.endDate === null ? 'bg-brand-500' : 'bg-neutral-950'
        )}
      />

      <div className={cn('pb-12', isLast && 'pb-0')}>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Text size="sm" color="primary" weight="medium">
            {startDate} — {endDate}
          </Text>

          {experience.remote && (
            <Badge variant="default" size="sm">
              <Icon name="globe" size="xs" className="mr-1" />
              {t('experience.remote')}
            </Badge>
          )}

          {experience.endDate === null && (
            <Badge variant="success" size="sm" dot>
              {t('experience.current')}
            </Badge>
          )}
        </div>

        <Heading as="h3" size="h4" className="mb-1">
          {experience.role}
        </Heading>

        <div className="flex items-center gap-2 mb-4">
          {experience.url ? (
            <a
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Text size="base" weight="medium" className="hover:underline">
                {experience.company}
              </Text>
            </a>
          ) : (
            <Text size="base" weight="medium" color="muted">
              {experience.company}
            </Text>
          )}

          <Text size="sm" color="muted">
            • {experience.location}
          </Text>
        </div>

        <Text size="sm" color="muted" className="mb-4">
          {t(experience.descriptionKey)}
        </Text>

        <ul className="space-y-2 mb-5">
          {experience.highlightKeys.map((key, i) => (
            <li key={i} className="flex items-start gap-2">
              <Icon name="chevron-right" size="xs" className="mt-1.5 text-brand-400 shrink-0" />
              <Text size="sm" color="muted">
                {t(key)}
              </Text>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="outline" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;