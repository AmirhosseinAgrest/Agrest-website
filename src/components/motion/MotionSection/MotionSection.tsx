import { forwardRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  ({ children, className, variants = defaultVariants, delay = 0, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <section ref={ref} className={className}>
          {children}
        </section>
      );
    }

    return (
      <motion.section
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={variants}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

MotionSection.displayName = 'MotionSection';

export default MotionSection;