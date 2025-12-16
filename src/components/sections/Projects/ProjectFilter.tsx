import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/common';
import { projectCategories, type ProjectCategory } from '@/data';

interface ProjectFilterProps {
  activeCategory: ProjectCategory | 'all';
  onCategoryChange: (category: ProjectCategory | 'all') => void;
  className?: string;
}

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
  className,
}: ProjectFilterProps) {
  const { t } = useTranslation();

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {projectCategories.map((category) => {
        const isActive = activeCategory === category.key;

        return (
          <button
            key={category.key}
            onClick={() => onCategoryChange(category.key)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2 rounded-xl',
              'text-sm font-medium transition-colors duration-200',
              isActive
                ? 'text-white'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            )}
          >
            {isActive && (
              <motion.div
                layoutId="project-filter-bg"
                className="absolute inset-0 bg-white/10 rounded-xl"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <Icon name={category.icon} size="sm" className="relative z-10" />
            <span className="relative z-10">{t(category.labelKey)}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilter;