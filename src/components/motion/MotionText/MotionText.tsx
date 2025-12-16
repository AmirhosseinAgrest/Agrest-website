import { forwardRef, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

type MotionTextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface MotionTextProps {
  children: ReactNode;
  as?: MotionTextTag;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const getVariants = (direction: string): Variants => {
  const directions = {
    up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  };
  return directions[direction as keyof typeof directions] || directions.up;
};

export const MotionText = forwardRef<any, MotionTextProps>(
  ({ children, as = 'p', className, delay = 0, direction = 'up' }, ref) => {
    const prefersReducedMotion = useReducedMotion();
    const Tag = as as keyof JSX.IntrinsicElements;

    if (prefersReducedMotion) {
      return <Tag className={className}>{children}</Tag>;
    }

    const MotionTag = motion.p as any;

    return (
      <MotionTag
        ref={ref}
        as={Tag}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={getVariants(direction)}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className={cn(className)}
      >
        {children}
      </MotionTag>
    );
  }
);

MotionText.displayName = 'MotionText';

export default MotionText;
