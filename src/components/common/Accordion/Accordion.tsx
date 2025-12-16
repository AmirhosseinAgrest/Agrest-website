import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon } from '../Icon';
import type { AccordionProps, AccordionItemProps } from './Accordion.types';

function AccordionItem({
  id,
  trigger,
  content,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) {
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
        'border-b border-neutral-800 last:border-b-0',
        'transition-colors duration-200'
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between gap-4',
          'py-5 text-left',
          'text-neutral-200 hover:text-white',
          'transition-colors duration-200'
        )}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <span className="text-base font-medium pr-8">{trigger}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 text-neutral-500"
        >
          <Icon name="chevron-down" size="md" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-neutral-400 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Accordion({
  items,
  type = 'single',
  defaultOpenIds = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpenIds));

  const handleToggle = useCallback(
    (id: string) => {
      setOpenIds((prev) => {
        const next = new Set(prev);

        if (next.has(id)) {
          next.delete(id);
        } else {
          if (type === 'single') {
            next.clear();
          }
          next.add(id);
        }

        return next;
      });
    },
    [type]
  );

  return (
    <div className={cn('divide-y divide-neutral-800', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          trigger={item.trigger}
          content={item.content}
          isOpen={openIds.has(item.id)}
          onToggle={() => handleToggle(item.id)}
          index={index}
        />
      ))}
    </div>
  );
}

export default Accordion;