import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { ProjectFilter } from './ProjectFilter';
import { ProjectGrid } from './ProjectGrid';
import { ProjectModal } from './ProjectModal';
import { projects, getFeaturedProjects, type Project, type ProjectCategory } from '@/data';

interface ProjectsProps {
  showFeaturedOnly?: boolean;
  showFilter?: boolean;
  limit?: number;
  columns?: 2 | 3;
  className?: string;
}

export function Projects({
  showFeaturedOnly = false,
  showFilter = true,
  limit,
  columns = 3,
  className,
}: ProjectsProps) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    let result = showFeaturedOnly ? getFeaturedProjects() : projects;

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (limit) {
      result = result.slice(0, limit);
    }

    return result;
  }, [showFeaturedOnly, activeCategory, limit]);

  return (
    <Section spacing="xl" className={className}>
      <FadeIn className="mb-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Heading as="h2" size="h2" className="mb-4">
              {t('projects.title')}
            </Heading>
            <Text size="lg" color="muted" className="max-w-xl">
              {t('projects.subtitle')}
            </Text>
          </div>
        </div>
      </FadeIn>

      {showFilter && (
        <FadeIn delay={0.1} className="mb-8">
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </FadeIn>
      )}

      <ProjectGrid projects={filteredProjects} columns={columns} />

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}

export default Projects;