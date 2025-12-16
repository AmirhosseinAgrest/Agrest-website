import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heading, Text } from '@/components/common';

interface StatItemProps {
  value: string;
  label: string;
  index: number;
  className?: string;
}

function useCountUp(end: number, duration: number = 2, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
}

export function StatItem({ value, label, index, className }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const animatedValue = useCountUp(numericValue, 2, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className={cn(
        'text-center p-6',
        className
      )}
    >
      <Heading as="h1" size="h1" className="text-white mb-2">
        <span className="tabular-nums">{animatedValue}</span>
        <span className="text-brand-400">{suffix}</span>
      </Heading>

      <Text size="sm" color="muted" weight="medium" className="uppercase tracking-wider">
        {label}
      </Text>
    </motion.div>
  );
}

export default StatItem;