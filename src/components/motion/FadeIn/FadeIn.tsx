import { forwardRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  (
    {
      children,
      className,
      delay = 0,
      duration = 0.6,
      direction = 'up',
      distance = 24,
      once = true,
    },
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

    const getInitial = () => {
      switch (direction) {
        case 'up':
          return { opacity: 0, y: distance };
        case 'down':
          return { opacity: 0, y: -distance };
        case 'left':
          return { opacity: 0, x: -distance };
        case 'right':
          return { opacity: 0, x: distance };
        case 'none':
        default:
          return { opacity: 0 };
      }
    };

    const getAnimate = () => {
      switch (direction) {
        case 'up':
        case 'down':
          return { opacity: 1, y: 0 };
        case 'left':
        case 'right':
          return { opacity: 1, x: 0 };
        case 'none':
        default:
          return { opacity: 1 };
      }
    };

    return (
      <motion.div
        ref={ref}
        initial={getInitial()}
        whileInView={getAnimate()}
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

FadeIn.displayName = 'FadeIn';

export default FadeIn;