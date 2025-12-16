import { forwardRef, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; delayChildren: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delayChildren,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, className, staggerDelay = 0.1, delayChildren = 0, once = true }, ref) => {
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-50px' }}
        variants={containerVariants}
        custom={{ staggerDelay, delayChildren }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = 'StaggerContainer';

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, className }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div ref={ref} className={className}>
          {children}
        </div>
      );
    }

    return (
      <motion.div ref={ref} variants={itemVariants} className={cn(className)}>
        {children}
      </motion.div>
    );
  }
);

StaggerItem.displayName = 'StaggerItem';

export default StaggerContainer;