import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Text, Icon } from '@/components/common';
import type { PhilosophyQuote as PhilosophyQuoteType } from '@/data';

interface PhilosophyQuoteProps {
  quote: PhilosophyQuoteType;
  className?: string;
}

export function PhilosophyQuote({ quote, className }: PhilosophyQuoteProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        'relative py-12 px-8 md:py-16 md:px-12 rounded-3xl',
        'bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-neutral-950',
        'border border-neutral-800',
        'text-center',
        className
      )}
    >
      <div className="absolute top-8 left-8 text-neutral-800/30">
        <Icon name="quote" size="2xl" />
      </div>

      <div className="absolute bottom-8 right-8 text-neutral-800/30 rotate-180">
        <Icon name="quote" size="2xl" />
      </div>

      <blockquote className="relative z-10 max-w-3xl mx-auto">
        <Text
          size="2xl"
          className="text-neutral-100 leading-relaxed mb-6 italic"
        >
          "{t(quote.text)}"
        </Text>

        {quote.author && (
          <footer className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-neutral-700" />
            <Text size="sm" color="muted" weight="medium">
              {quote.author}
            </Text>
            <div className="w-8 h-px bg-neutral-700" />
          </footer>
        )}
      </blockquote>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/5 via-transparent to-violet-500/5 pointer-events-none" />
    </motion.div>
  );
}

export default PhilosophyQuote;