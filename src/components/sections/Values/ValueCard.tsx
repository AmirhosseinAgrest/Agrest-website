import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Icon, Heading, Text } from '@/components/common';
import type { Value } from '@/data';

interface ValueCardProps {
  value: Value;
  index: number;
  className?: string;
}

export function ValueCard({ value, index, className }: ValueCardProps) {
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
      whileHover={{ y: -4 }}
      className={cn(
        'group relative p-6 sm:p-8 rounded-2xl',
        'bg-neutral-900/50 border border-neutral-800',
        'hover:bg-neutral-900/80 hover:border-neutral-700',
        'transition-colors duration-300',
        className
      )}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: `${value.color}15` }}
      >
        <Icon
          name={value.icon}
          size="lg"
          style={{ color: value.color }}
        />
      </div>

      <Heading as="h3" size="h5" className="mb-3">
        {t(value.titleKey)}
      </Heading>

      <Text color="muted" size="sm" className="leading-relaxed">
        {t(value.descriptionKey)}
      </Text>

      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${value.color}10, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

export default ValueCard;