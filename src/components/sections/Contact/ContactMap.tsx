import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Text, Icon } from '@/components/common';

interface ContactMapProps {
  className?: string;
}

export function ContactMap({ className }: ContactMapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn(
        'relative h-64 rounded-2xl overflow-hidden',
        'bg-neutral-900/30 border border-neutral-800/50',
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
            <Icon name="globe" size="xl" className="text-brand-400" />
          </div>
          <Text size="lg" weight="medium" className="text-white mb-1">
            Remote Worldwide
          </Text>
          <Text size="sm" color="muted">
            Available for global collaboration
          </Text>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent pointer-events-none" />
    </motion.div>
  );
}

export default ContactMap;