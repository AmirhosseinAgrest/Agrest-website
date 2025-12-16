import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { Section } from '@/components/layout';
import { Heading, Text, Badge } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { Philosophy as PhilosophySection, Gallery } from '@/components/sections';

export function PhilosophyPage() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('philosophy.title')}
        description={t('philosophy.subtitle')}
      />

      <Section spacing="xl">
        <FadeIn>
          <Badge variant="primary" className="mb-6">
            {t('philosophy.title')}
          </Badge>

          <Heading as="h1" size="h1" className="mb-6">
            {t('philosophy.subtitle')}
          </Heading>

          <Text size="xl" color="muted" className="max-w-2xl">
            The principles and beliefs that shape every project I work on.
          </Text>
        </FadeIn>
      </Section>

      <PhilosophySection showBeliefs />

      <Gallery showFilter limit={6} />
    </>
  );
}

export default PhilosophyPage;