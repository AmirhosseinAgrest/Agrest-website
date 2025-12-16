import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon, Text, Image } from '@/components/common';
import type { Testimonial } from '@/data';
import { useTranslation } from 'react-i18next';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export function TestimonialsCarousel({
  testimonials,
  autoPlay = true,
  interval = 6000,
  className,
}: TestimonialsCarouselProps) {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const { t } = useTranslation();

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex = current + newDirection;
      if (newIndex < 0) {
        setCurrent([testimonials.length - 1, newDirection]);
      } else if (newIndex >= testimonials.length) {
        setCurrent([0, newDirection]);
      } else {
        setCurrent([newIndex, newDirection]);
      }
    },
    [current, testimonials.length]
  );

  const goTo = (index: number) => {
    const direction = index > current ? 1 : -1;
    setCurrent([index, direction]);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      paginate(1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, paginate]);

  const testimonial = testimonials[current];

  return (
    <div className={cn('relative', className)}>
      <div className="relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 p-8 md:p-12">
        <div className="absolute top-8 right-8 text-neutral-800/50">
          <Icon name="quote" size="2xl" />
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            className="relative"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="star"
                  size="md"
                  className="text-amber-400"
                  style={{ fill: 'currentColor' }}
                />
              ))}
            </div>

            <Text size="xl" className="text-neutral-200 leading-relaxed mb-8 max-w-3xl">
              "{t(`testimonials.${testimonial.id}`)}"
            </Text>

            <div className="flex items-center gap-4">
              {testimonial.author.avatar ? (
                <Image
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="w-14 h-14 rounded-full object-cover"
                  fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author.name)}&background=262626&color=fff`}
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center">
                  <Text size="base" weight="semibold" className="text-neutral-400">
                    {getInitials(testimonial.author.name)}
                  </Text>
                </div>
              )}

              <div>
                <Text size="base" weight="semibold" className="text-white">
                  {testimonial.author.name}
                </Text>
                <Text size="sm" color="muted">
                  {testimonial.author.role} at {testimonial.author.company}
                </Text>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2',
            'w-10 h-10 rounded-full flex items-center justify-center',
            'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white',
            'transition-colors duration-200',
            'hidden md:flex'
          )}
          aria-label="Previous testimonial"
        >
          <Icon name="chevron-left" size="md" />
        </button>

        <button
          onClick={() => paginate(1)}
          className={cn(
            'absolute right-4 top-1/2 -translate-y-1/2',
            'w-10 h-10 rounded-full flex items-center justify-center',
            'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white',
            'transition-colors duration-200',
            'hidden md:flex'
          )}
          aria-label="Next testimonial"
        >
          <Icon name="chevron-right" size="md" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === current
                ? 'w-8 bg-brand-500'
                : 'bg-neutral-700 hover:bg-neutral-600'
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;