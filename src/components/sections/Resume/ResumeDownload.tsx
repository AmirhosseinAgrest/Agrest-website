import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heading, Text, Button, Icon } from '@/components/common';

interface ResumeDownloadProps {
  className?: string;
}

export function ResumeDownload({ className }: ResumeDownloadProps) {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/amirhossein-agrest-resume.pdf';
    link.download = 'Amirhossein-Agrest-Resume.pdf';
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative p-8 rounded-2xl overflow-hidden',
        'bg-gradient-to-br from-brand-500/10 via-neutral-900 to-violet-500/10',
        'border border-neutral-800',
        className
      )}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
            <Icon name="download" size="xl" className="text-brand-400" />
          </div>
          <div>
            <Heading as="h3" size="h5" className="mb-1">
              Download Full Resume
            </Heading>
            <Text size="sm" color="muted">
              Get the complete PDF version with all details
            </Text>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="primary" size="lg" leftIcon="download" onClick={handleDownload}>
            Download PDF
          </Button>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
    </motion.div>
  );
}

export default ResumeDownload;