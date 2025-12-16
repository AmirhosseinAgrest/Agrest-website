import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Section } from '@/components/layout';
import { Button, Divider } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { ProjectHero } from './ProjectHero';
import { ProjectContent } from './ProjectContent';
import { ProjectGallery } from './ProjectGallery';
import { ProjectGrid } from '../Projects/ProjectGrid';
import { ROUTES } from '@/config';
import { projects, type Project } from '@/data';

interface ProjectDetailSectionProps {
  project: Project;
  className?: string;
}

export function ProjectDetailSection({ project, className }: ProjectDetailSectionProps) {
  const { t } = useTranslation();

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <div className={cn(className)}>
      <ProjectHero project={project} />

      <ProjectContent project={project} />

      {project.images && project.images.length > 0 && (
        <>
          <Divider variant="gradient" spacing="lg" />
          <ProjectGallery images={project.images} title={project.title} />
        </>
      )}

      {relatedProjects.length > 0 && (
        <>
          <Divider variant="gradient" spacing="lg" />
          <Section spacing="xl">
            <FadeIn className="mb-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  Related Projects
                </h2>
                <Link to={ROUTES.PROJECTS}>
                  <Button variant="ghost" rightIcon="arrow-right">
                    {t('projects.allProjects')}
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <ProjectGrid projects={relatedProjects} columns={2} />
          </Section>
        </>
      )}

      <Section spacing="lg">
        <FadeIn className="flex justify-center">
          <Link to={ROUTES.PROJECTS}>
            <Button variant="outline" size="lg" leftIcon="arrow-left">
              Back to Projects
            </Button>
          </Link>
        </FadeIn>
      </Section>
    </div>
  );
}

export default ProjectDetailSection;