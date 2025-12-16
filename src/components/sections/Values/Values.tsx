import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { ValueCard } from './ValueCard';
import { values } from '@/data';

interface ValuesProps {
  className?: string;
}

export function Values({ className }: ValuesProps) {
  const { t } = useTranslation();

  return (
    <Section spacing="xl" className={className}>
      <FadeIn className="mb-12">
        <Heading as="h2" size="h2" className="mb-4">
          {t('about.values.title')}
        </Heading>
        <Text size="lg" color="muted" className="max-w-2xl">
          {t('about.values.description')}
        </Text>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <ValueCard key={value.id} value={value} index={index} />
        ))}
      </div>
    </Section>
  );
}

export default Values;