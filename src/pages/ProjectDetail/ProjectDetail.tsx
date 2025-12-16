import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { ProjectDetailSection } from '@/components/sections';
import { getProjectBySlug } from '@/data';
import { ROUTES } from '@/config';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to={ROUTES.PROJECTS} replace />;
  }

  return (
    <>
      <Meta
        title={`${project.title} — ${t('projects.title')}`}
        description={project.description}
        image={project.image}
      />

      <ProjectDetailSection project={project} />
    </>
  );
}

export default ProjectDetail;