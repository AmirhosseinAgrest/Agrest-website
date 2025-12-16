import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Badge, Button, Icon, Image, Divider } from '@/components/common';
import { getProjectRoute } from '@/config';
import type { Project } from '@/data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.3 },
  },
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'relative w-full max-w-3xl max-h-[90vh] overflow-y-auto',
              'bg-neutral-900 border border-neutral-800 rounded-2xl',
              'shadow-2xl'
            )}
          >
            <button
              onClick={onClose}
              className={cn(
                'absolute top-4 right-4 z-10',
                'w-10 h-10 rounded-xl flex items-center justify-center',
                'bg-neutral-800/80 backdrop-blur-sm text-neutral-400',
                'hover:bg-neutral-700 hover:text-white transition-colors'
              )}
            >
              <Icon name="close" size="md" />
            </button>

            <div className="aspect-video relative">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="primary">
                  {t(`projects.categories.${project.category}`)}
                </Badge>
                <Badge variant="outline">{project.year}</Badge>
                {project.featured && (
                  <Badge variant="success" leftIcon="star">
                    {t('projects.featured')}
                  </Badge>
                )}
              </div>

              <Heading as="h2" size="h2" className="mb-4">
                {project.title}
              </Heading>

              <Text size="lg" color="muted" className="mb-6">
                {project.longDescription || project.description}
              </Text>

              {project.highlights && (
                <>
                  <Divider spacing="md" />
                  <div className="my-6">
                    <Text size="sm" weight="semibold" className="text-white mb-3">
                      Key Highlights
                    </Text>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="check" size="sm" className="text-emerald-400 mt-0.5" />
                          <Text size="sm" color="muted">{highlight}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <Divider spacing="md" />

              <div className="my-6">
                <Text size="sm" weight="semibold" className="text-white mb-3">
                  {t('projects.techStack')}
                </Text>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {project.links.map((link) => (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant={link.type === 'live' ? 'primary' : 'outline'}
                      leftIcon={link.type === 'github' ? 'github' : 'external-link'}
                    >
                      {link.type === 'live' && t('projects.liveDemo')}
                      {link.type === 'github' && t('projects.viewCode')}
                      {link.type === 'case-study' && 'Case Study'}
                      {link.type === 'figma' && 'Figma'}
                    </Button>
                  </a>
                ))}

                <Link to={getProjectRoute(project.slug)}>
                  <Button variant="ghost" rightIcon="arrow-right">
                    {t('projects.viewProject')}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;