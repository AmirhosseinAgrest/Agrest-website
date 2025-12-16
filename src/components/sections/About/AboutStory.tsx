import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/common';
import { FadeIn } from '@/components/motion';

interface AboutStoryProps {
  className?: string;
}

export function AboutStory({ className }: AboutStoryProps) {
  const { t } = useTranslation();

  return (
    <Section spacing="lg" className={className}>
      <FadeIn>
        <div className="max-w-3xl">
          <Heading as="h2" size="h2" className="mb-8">
            {t('about.story.title')}
          </Heading>

          <div className="space-y-6">
            <Text size="lg" className="leading-relaxed">
              {t('about.story.content')}
            </Text>

            <blockquote className="border-l-2 border-brand-500 pl-6 py-2">
              <Text size="lg" italic color="muted">
                {t('philosophy.quote')}
              </Text>
            </blockquote>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export default AboutStory;