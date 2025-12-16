import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/common';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import { PhilosophyPrinciple } from './PhilosophyPrinciple';
import { PhilosophyQuote } from './PhilosophyQuote';
import { principles, philosophyQuote, coreBeliefs } from '@/data';

interface PhilosophyProps {
  showBeliefs?: boolean;
  className?: string;
}

export function Philosophy({ showBeliefs = true, className }: PhilosophyProps) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <Section spacing="xl">
        <FadeIn className="text-center mb-16">
          <Heading as="h2" size="h2" className="mb-4">
            {t('philosophy.title')}
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl mx-auto">
            {t('philosophy.subtitle')}
          </Text>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {principles.map((principle, index) => (
            <PhilosophyPrinciple
              key={principle.id}
              principle={principle}
              index={index}
            />
          ))}
        </div>

        <PhilosophyQuote quote={philosophyQuote} />
      </Section>

      {showBeliefs && (
        <Section spacing="lg">
          <FadeIn className="mb-12">
            <Heading as="h3" size="h3" className="mb-4">
              Core Beliefs
            </Heading>
            <Text color="muted" className="max-w-xl">
              The fundamental truths that guide every decision I make in software development.
            </Text>
          </FadeIn>

          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreBeliefs.map((belief, index) => (
              <StaggerItem
                key={belief.id}
                className={cn(
                  'flex items-start gap-4 p-5 rounded-xl',
                  'bg-neutral-900/30 border border-neutral-800/50',
                  'hover:bg-neutral-900/50 transition-colors duration-200'
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Text size="sm" weight="bold" className="text-brand-400">
                    {(index + 1).toString().padStart(2, '0')}
                  </Text>
                </div>
                <Text size="sm" className="text-neutral-300 leading-relaxed">
                  {belief.text}
                </Text>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}
    </div>
  );
}

export default Philosophy;