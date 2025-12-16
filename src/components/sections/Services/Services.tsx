import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text, Button } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { ServiceCard } from './ServiceCard';
import { services } from '@/data';
import { ROUTES } from '@/config';

interface ServicesProps {
  showCta?: boolean;
  className?: string;
}

export function Services({ showCta = true, className }: ServicesProps) {
  const { t } = useTranslation();

  return (
    <Section spacing="xl" className={className}>
      <FadeIn className="text-center mb-16">
        <Heading as="h2" size="h2" className="mb-4">
          {t('services.title')}
        </Heading>
        <Text size="xl" color="muted" className="max-w-2xl mx-auto">
          {t('services.subtitle')}
        </Text>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {showCta && (
        <FadeIn delay={0.4} className="mt-16 text-center">
          <Link to={ROUTES.CONTACT}>
            <Button variant="primary" size="lg" rightIcon="arrow-right">
              {t('services.cta')}
            </Button>
          </Link>
        </FadeIn>
      )}
    </Section>
  );
}

export default Services;