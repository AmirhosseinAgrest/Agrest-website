import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Icon } from '@/components/common';
import type { Service } from '@/data';

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
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
      whileHover={{ y: -8 }}
      className={cn(
        'group relative p-8 rounded-2xl',
        'bg-neutral-900/50 border border-neutral-800',
        'hover:bg-neutral-900 hover:border-neutral-700',
        'transition-colors duration-300',
        className
      )}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at top right, ${service.color}15, transparent 70%)`,
        }}
      />

      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
        style={{ backgroundColor: `${service.color}15` }}
      >
        <Icon
          name={service.icon}
          size="xl"
          style={{ color: service.color }}
        />
      </div>

      <Heading as="h3" size="h4" className="mb-3">
        {t(service.titleKey)}
      </Heading>

      <Text color="muted" className="mb-6 leading-relaxed">
        {t(service.descriptionKey)}
      </Text>

      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: service.color }}
            />
            <Text size="sm" color="muted">
              {feature}
            </Text>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ServiceCard;