import { forwardRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  initialScale?: number;
  once?: boolean;
}

export const ScaleIn = forwardRef<HTMLDivElement, ScaleInProps>(
  (
    { children, className, delay = 0, duration = 0.5, initialScale = 0.95, once = true },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div ref={ref} className={className}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: initialScale }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once, margin: '-50px' }}
        transition={{
          duration,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }
);

ScaleIn.displayName = 'ScaleIn';

export default ScaleIn;