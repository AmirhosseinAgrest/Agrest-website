import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text, Badge } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ContactMap } from './ContactMap';

interface ContactProps {
  className?: string;
}

export function Contact({ className }: ContactProps) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <Section spacing="xl">
        <FadeIn className="text-center mb-12">
          <Badge variant="primary" className="mb-6">
            {t('contact.title')}
          </Badge>

          <Heading as="h1" size="h1" className="mb-6">
            {t('contact.subtitle')}
          </Heading>

          <Text size="xl" color="muted" className="max-w-2xl mx-auto">
            {t('contact.intro')}
          </Text>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;