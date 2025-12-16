import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon, Text } from '@/components/common';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05,
      }}
      className={cn(
        'group rounded-2xl overflow-hidden',
        'bg-neutral-900/30 border border-neutral-800/50',
        'hover:border-neutral-700 transition-colors duration-200',
        isOpen && 'bg-neutral-900/60 border-neutral-700'
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between gap-4',
          'p-5 sm:p-6 text-left',
          'transition-colors duration-200'
        )}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'text-base font-medium transition-colors duration-200',
            isOpen ? 'text-white' : 'text-neutral-200 group-hover:text-white'
          )}
        >
          {question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
            'transition-colors duration-200',
            isOpen
              ? 'bg-brand-500 text-white'
              : 'bg-neutral-800 text-neutral-400 group-hover:bg-neutral-700'
          )}
        >
          <Icon name="plus" size="sm" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="pt-2 border-t border-neutral-800">
                <Text color="muted" className="pt-4 leading-relaxed">
                  {answer}
                </Text>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FAQItem;