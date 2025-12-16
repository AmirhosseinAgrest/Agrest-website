import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { Contact as ContactSection, FAQ } from '@/components/sections';

export function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('meta.contact.title')}
        description={t('meta.contact.description')}
      />

      <ContactSection />

      <FAQ limit={4} />
    </>
  );
}

export default Contact;