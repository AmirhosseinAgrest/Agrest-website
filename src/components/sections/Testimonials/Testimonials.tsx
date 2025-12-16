import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { testimonials, getFeaturedTestimonials } from '@/data';

interface TestimonialsProps {
  variant?: 'grid' | 'carousel';
  showFeaturedOnly?: boolean;
  limit?: number;
  className?: string;
}

export function Testimonials({
  variant = 'grid',
  showFeaturedOnly = false,
  limit,
  className,
}: TestimonialsProps) {
  const { t } = useTranslation();

  const displayTestimonials = showFeaturedOnly
    ? getFeaturedTestimonials()
    : testimonials;

  const limitedTestimonials = limit
    ? displayTestimonials.slice(0, limit)
    : displayTestimonials;

  return (
    <Section spacing="xl" className={className}>
      <FadeIn className="text-center mb-12">
        <Heading as="h2" size="h2" className="mb-4">
          {t('testimonials.title')}
        </Heading>
        <Text size="lg" color="muted" className="max-w-2xl mx-auto">
          {t('testimonials.subtitle')}
        </Text>
      </FadeIn>

      {variant === 'carousel' ? (
        <FadeIn delay={0.2}>
          <TestimonialsCarousel testimonials={limitedTestimonials} />
        </FadeIn>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {limitedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

export default Testimonials;