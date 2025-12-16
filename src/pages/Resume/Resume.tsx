import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { Resume as ResumeSection } from '@/components/sections';

export function Resume() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('resume.title')}
        description={t('resume.subtitle')}
      />

      <ResumeSection />
    </>
  );
}

export default Resume;