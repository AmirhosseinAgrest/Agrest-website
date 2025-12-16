import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Badge, Icon, Image } from '@/components/common';
import { getProjectRoute } from '@/config';
import type { Project } from '@/data';

interface ProjectCardProps {
  project: Project;
  index: number;
  onPreview?: (project: Project) => void;
  className?: string;
}

const linkIcons: Record<string, 'external-link' | 'github' | 'bookmark' | 'palette'> = {
  live: 'external-link',
  github: 'github',
  'case-study': 'bookmark',
  figma: 'palette',
};

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative flex flex-col rounded-2xl overflow-hidden',
        'bg-neutral-900/50 border border-neutral-800',
        'hover:border-neutral-700 transition-colors duration-300',
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            aspectRatio="video"
            className="w-full h-full"
            fallbackSrc="/images/projects/placeholder.jpg"
          />
        </motion.div>

        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent',
            'opacity-60 group-hover:opacity-80 transition-opacity duration-300'
          )}
        />

        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary" size="sm" leftIcon="star">
              {t('projects.featured')}
            </Badge>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 flex gap-2"
        >
          {project.links.map((link) => (
            <a
              key={link.type}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded-xl',
                'bg-white/10 backdrop-blur-sm text-white',
                'hover:bg-white/20 transition-colors duration-200'
              )}
              aria-label={link.type}
            >
              <Icon name={linkIcons[link.type]} size="sm" />
            </a>
          ))}
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" size="sm">
            {t(`projects.categories.${project.category}`)}
          </Badge>
          <Text size="xs" color="muted">
            {project.year}
          </Text>
        </div>

        <Link to={getProjectRoute(project.slug)}>
          <Heading
            as="h3"
            size="h5"
            className="mb-2 group-hover:text-brand-400 transition-colors duration-200"
          >
            {project.title}
          </Heading>
        </Link>

        <Text size="sm" color="muted" className="mb-4 line-clamp-2">
          {project.description}
        </Text>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs text-neutral-400 bg-neutral-800/50 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs text-neutral-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      <Link
        to={getProjectRoute(project.slug)}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title}`}
      />
    </motion.article>
  );
}

export default ProjectCard;