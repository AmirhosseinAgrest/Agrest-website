import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Text, Icon, Image } from '@/components/common';
import { useTranslation } from 'react-i18next';
import type { Testimonial } from '@/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
  variant?: 'default' | 'featured';
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Icon
          key={i}
          name="star"
          size="sm"
          className={cn(
            i < rating ? 'text-amber-400' : 'text-neutral-700'
          )}
          style={i < rating ? { fill: 'currentColor' } : undefined}
        />
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function TestimonialCard({
  testimonial,
  index = 0,
  variant = 'default',
  className,
}: TestimonialCardProps) {
  const isFeatured = variant === 'featured';
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className={cn(
        'relative flex flex-col p-6 sm:p-8 rounded-2xl',
        'bg-neutral-900/50 border border-neutral-800',
        'hover:bg-neutral-900/80 hover:border-neutral-700',
        'transition-colors duration-300',
        isFeatured && 'md:col-span-2 lg:col-span-1',
        className
      )}
    >
      <div className="absolute top-6 right-6 text-neutral-800">
        <Icon name="quote" size="xl" />
      </div>

      {testimonial.rating && (
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>
      )}

      <Text
        size={isFeatured ? 'lg' : 'base'}
        className="flex-1 mb-6 leading-relaxed text-neutral-300"
      >
        "{t(`testimonials.${testimonial.id}`)}"
      </Text>

      <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
        {testimonial.author.avatar ? (
          <Image
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            className="w-12 h-12 rounded-full object-cover"
            fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author.name)}&background=262626&color=fff`}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
            <Text size="sm" weight="semibold" className="text-neutral-400">
              {getInitials(testimonial.author.name)}
            </Text>
          </div>
        )}

        <div>
          <Text size="sm" weight="semibold" className="text-white">
            {testimonial.author.name}
          </Text>
          <Text size="xs" color="muted">
            {testimonial.author.role} at {testimonial.author.company}
          </Text>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;