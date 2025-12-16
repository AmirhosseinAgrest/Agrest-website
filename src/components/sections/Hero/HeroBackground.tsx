import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className={cn('absolute inset-0 overflow-hidden', className)}
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/5 blur-[150px]" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,11,0.8)_70%,rgba(10,10,11,1)_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </motion.div>
  );
}

export default HeroBackground;