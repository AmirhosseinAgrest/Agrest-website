import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { Section } from '@/components/layout';
import { Heading, Text, Badge, Divider } from '@/components/common';
import { FadeIn } from '@/components/motion';
import {
  Services as ServicesSection,
  Achievements,
  Testimonials,
  FAQ,
} from '@/components/sections';

export function Services() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('services.title')}
        description={t('services.subtitle')}
      />

      <Section spacing="xl">
        <FadeIn>
          <Badge variant="primary" className="mb-6">
            {t('services.title')}
          </Badge>

          <Heading as="h1" size="h1" className="mb-6">
            {t('services.subtitle')}
          </Heading>

          <Text size="xl" color="muted" className="max-w-2xl">
            From concept to deployment, I provide end-to-end solutions tailored to your needs.
          </Text>
        </FadeIn>
      </Section>

      <ServicesSection showCta />

      <Divider variant="gradient" spacing="xl" />

      <Achievements />

      <Testimonials variant="carousel" showFeaturedOnly />

      <FAQ showCategories limit={6} />
    </>
  );
}

export default Services;