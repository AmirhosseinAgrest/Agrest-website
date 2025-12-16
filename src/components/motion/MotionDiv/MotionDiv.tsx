import { forwardRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

interface MotionDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className, variants = defaultVariants, delay = 0, ...props }, ref) => {
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
        viewport={{ once: true, margin: '-50px' }}
        variants={variants}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionDiv.displayName = 'MotionDiv';

export default MotionDiv;