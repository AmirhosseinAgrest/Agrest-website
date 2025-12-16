import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { Section } from '@/components/layout';
import { Heading, Text, Button } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { ROUTES } from '@/config';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Meta title={t('404.title')} noIndex />

      <Section spacing="2xl" className="min-h-[70vh] flex items-center">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto">
            <div className="mb-8">
              <span className="text-[10rem] font-bold leading-none text-neutral-800">
                404
              </span>
            </div>
            
            <Heading as="h1" size="h2" className="mb-4">
              {t('404.title')}
            </Heading>
            
            <Text size="lg" color="muted" className="mb-8">
              {t('404.subtitle')}
            </Text>
            
            <Link to={ROUTES.HOME}>
              <Button variant="primary" size="lg" leftIcon="arrow-left">
                {t('404.cta')}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

export default NotFound;