import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heading, Icon } from '@/components/common';
import type { IconName } from '@/components/common/Icon';

interface ResumeSectionProps {
  title: string;
  icon: IconName;
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ResumeSection({
  title,
  icon,
  children,
  delay = 0,
  className,
}: ResumeSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={cn('mb-12', className)}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
          <Icon name={icon} size="md" className="text-brand-400" />
        </div>
        <Heading as="h2" size="h4">
          {title}
        </Heading>
      </div>

      <div className="pl-0 md:pl-13">{children}</div>
    </motion.section>
  );
}

export default ResumeSection;