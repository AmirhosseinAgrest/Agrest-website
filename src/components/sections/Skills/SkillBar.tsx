import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Text } from '@/components/common';
import type { Skill } from '@/data';

interface SkillBarProps {
  skill: Skill;
  index: number;
  color?: string;
  className?: string;
}

export function SkillBar({ skill, index, color = '#0ea5e9', className }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05,
      }}
      className={cn('group', className)}
    >
      <div className="flex items-center justify-between mb-2">
        <Text size="sm" weight="medium" className="text-neutral-200">
          {skill.name}
        </Text>
        <Text size="xs" color="muted">
          {skill.level}%
        </Text>
      </div>

      <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2 + index * 0.05,
          }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.05 }}
          className="absolute inset-y-0 left-0 rounded-full opacity-50 blur-sm"
          style={{
            width: `${skill.level}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </motion.div>
  );
}

export default SkillBar;