import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/common';
import { ROUTES } from '@/config';

interface HeroActionsProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroActions({ className }: HeroActionsProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn('flex flex-wrap items-center gap-4', className)}
    >
      <motion.div variants={itemVariants}>
        <Link to={ROUTES.PROJECTS}>
          <Button
            variant="primary"
            size="lg"
            rightIcon="arrow-right"
          >
            {t('hero.cta.primary')}
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link to={ROUTES.CONTACT}>
          <Button
            variant="outline"
            size="lg"
          >
            {t('hero.cta.secondary')}
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default HeroActions;