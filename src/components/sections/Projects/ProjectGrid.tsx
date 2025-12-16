import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/data';

interface ProjectGridProps {
  projects: Project[];
  columns?: 2 | 3;
  className?: string;
}

export function ProjectGrid({ projects, columns = 3, className }: ProjectGridProps) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <motion.div
      layout
      className={cn('grid gap-6', gridCols, className)}
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjectGrid;