import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Badge } from '@/components/common';

interface HeroContentProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroContent({ className }: HeroContentProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn('max-w-4xl', className)}
    >
      <motion.div variants={itemVariants}>
        <Badge variant="primary" dot className="mb-6">
          {t('contact.info.availableStatus')}
        </Badge>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Text
          size="xl"
          color="muted"
          className="mb-4 font-medium"
        >
          {t('hero.greeting')}
        </Text>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Heading
          as="h1"
          size="display"
          className="mb-6"
        >
          <span className="text-white">{t('hero.name')}</span>
        </Heading>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Heading
          as="h2"
          size="h3"
          className="text-neutral-400 font-normal mb-8"
        >
          {t('hero.title')}
        </Heading>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Text
          size="xl"
          color="muted"
          className="max-w-2xl leading-relaxed"
        >
          {t('hero.subtitle')}
        </Text>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;