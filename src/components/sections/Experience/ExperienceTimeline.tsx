import { cn } from '@/lib/utils';
import { ExperienceCard } from './ExperienceCard';
import { experiences } from '@/data';

interface ExperienceTimelineProps {
  limit?: number;
  className?: string;
}

export function ExperienceTimeline({ limit, className }: ExperienceTimelineProps) {
  const displayExperiences = limit ? experiences.slice(0, limit) : experiences;

  return (
    <div className={cn('relative', className)}>
      {displayExperiences.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          index={index}
          isLast={index === displayExperiences.length - 1}
        />
      ))}
    </div>
  );
}

export default ExperienceTimeline;