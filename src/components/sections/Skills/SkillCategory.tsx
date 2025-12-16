import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heading } from '@/components/common';
import { SkillBar } from './SkillBar';
import type { Skill, SkillCategoryInfo } from '@/data';

interface SkillCategoryProps {
  category: SkillCategoryInfo;
  skills: Skill[];
  index: number;
  className?: string;
}

export function SkillCategory({ category, skills, index, className }: SkillCategoryProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className={cn(
        'p-6 rounded-2xl',
        'bg-neutral-900/30 border border-neutral-800/50',
        className
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: category.color }}
        />
        <Heading as="h3" size="h5">
          {t(`skills.categories.${category.key}`)}
        </Heading>
      </div>

      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={skillIndex}
            color={category.color}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCategory;