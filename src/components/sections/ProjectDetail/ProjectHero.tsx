import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Heading, Text, Badge, Button, Image } from '@/components/common';
import type { Project } from '@/data';

interface ProjectHeroProps {
  project: Project;
  className?: string;
}

export function ProjectHero({ project, className }: ProjectHeroProps) {
  const { t } = useTranslation();

  return (
    <section className={cn('relative', className)}>
      <div className="absolute inset-0 h-[70vh]">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" />
      </div>

      <Container size="xl" className="relative pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="primary" size="md">
              {t(`projects.categories.${project.category}`)}
            </Badge>
            <Badge variant="outline" size="md">
              {project.year}
            </Badge>
            {project.featured && (
              <Badge variant="success" size="md" leftIcon="star">
                {t('projects.featured')}
              </Badge>
            )}
          </div>

          <Heading as="h1" size="display" className="mb-6">
            {project.title}
          </Heading>

          <Text size="xl" color="muted" className="mb-8 max-w-2xl">
            {project.longDescription || project.description}
          </Text>

          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={link.type === 'live' ? 'primary' : 'outline'}
                  size="lg"
                  leftIcon={link.type === 'github' ? 'github' : 'external-link'}
                >
                  {link.type === 'live' && t('projects.liveDemo')}
                  {link.type === 'github' && t('projects.viewCode')}
                  {link.type === 'case-study' && 'Case Study'}
                  {link.type === 'figma' && 'View in Figma'}
                </Button>
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ProjectHero;