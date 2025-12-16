import { forwardRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

interface SlideUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export const SlideUp = forwardRef<HTMLDivElement, SlideUpProps>(
  ({ children, className, delay = 0, duration = 0.5, distance = 40, once = true }, ref) => {
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
        initial={{ opacity: 0, y: distance }}
        whileInView={{ opacity: 1, y: 0 }}
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

SlideUp.displayName = 'SlideUp';

export default SlideUp;