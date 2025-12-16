import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Icon } from '@/components/common';
import type { Principle } from '@/data';

interface PhilosophyPrincipleProps {
  principle: Principle;
  index: number;
  className?: string;
}

export function PhilosophyPrinciple({
  principle,
  index,
  className,
}: PhilosophyPrincipleProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className={cn(
        'group relative p-6 sm:p-8 rounded-2xl',
        'bg-neutral-900/30 border border-neutral-800/50',
        'hover:bg-neutral-900/60 hover:border-neutral-700',
        'transition-all duration-300',
        className
      )}
    >
      <div className="flex items-start gap-5">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${principle.color}15` }}
        >
          <Icon
            name={principle.icon}
            size="lg"
            style={{ color: principle.color }}
          />
        </motion.div>

        <div>
          <Heading as="h3" size="h5" className="mb-2">
            {t(principle.titleKey)}
          </Heading>
          <Text color="muted" className="leading-relaxed">
            {t(principle.descriptionKey)}
          </Text>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at top right, ${principle.color}10, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

export default PhilosophyPrinciple;