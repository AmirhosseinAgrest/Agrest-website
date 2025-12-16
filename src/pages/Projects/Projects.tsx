import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { Projects as ProjectsSection } from '@/components/sections';

export function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('meta.projects.title')}
        description={t('meta.projects.description')}
      />

      <ProjectsSection showFilter columns={3} />
    </>
  );
}

export default Projects;