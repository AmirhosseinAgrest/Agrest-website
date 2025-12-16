import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text, Badge } from '@/components/common';
import { StaggerContainer, StaggerItem } from '@/components/motion';

interface AboutIntroProps {
  className?: string;
}

export function AboutIntro({ className }: AboutIntroProps) {
  const { t } = useTranslation();

  return (
    <Section spacing="xl" className={className}>
      <StaggerContainer className="max-w-4xl">
        <StaggerItem>
          <Badge variant="primary" className="mb-6">
            {t('about.title')}
          </Badge>
        </StaggerItem>

        <StaggerItem>
          <Heading as="h1" size="h1" className="mb-6">
            {t('about.subtitle')}
          </Heading>
        </StaggerItem>

        <StaggerItem>
          <Text size="xl" color="muted" className="leading-relaxed">
            {t('about.intro')}
          </Text>
        </StaggerItem>
      </StaggerContainer>
    </Section>
  );
}

export default AboutIntro;