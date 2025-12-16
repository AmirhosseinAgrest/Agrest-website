import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heading, Text, Icon, Button } from '@/components/common';
import { resumeData } from '@/data';

interface ResumeHeaderProps {
  onDownload?: () => void;
  onPrint?: () => void;
  className?: string;
}

export function ResumeHeader({ onDownload, onPrint, className }: ResumeHeaderProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6',
        className
      )}
    >
      <div>
        <Heading as="h1" size="h1" className="mb-2">
          {resumeData.name}
        </Heading>
        <Text size="xl" className="text-brand-400 mb-4">
          {resumeData.title}
        </Text>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-neutral-400">
          <a
            href={`mailto:${resumeData.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Icon name="email" size="sm" />
            <Text size="sm">{resumeData.email}</Text>
          </a>

          <span className="flex items-center gap-2">
            <Icon name="location" size="sm" />
            <Text size="sm">{resumeData.location}</Text>
          </span>

          <a
            href={`https://${resumeData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Icon name="globe" size="sm" />
            <Text size="sm">{resumeData.website}</Text>
          </a>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          variant="primary"
          size="lg"
          leftIcon="download"
          onClick={onDownload}
        >
          {t('resume.download')}
        </Button>
        <Button
          variant="outline"
          size="lg"
          leftIcon="external-link"
          onClick={onPrint}
          className="hidden sm:flex"
        >
          {t('resume.print')}
        </Button>
      </div>
    </motion.div>
  );
}

export default ResumeHeader;