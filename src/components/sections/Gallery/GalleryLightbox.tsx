import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon, Text, Image } from '@/components/common';
import type { GalleryItem } from '@/data';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm"
        >
          <button
            onClick={onClose}
            className={cn(
              'absolute top-6 right-6 z-10',
              'w-12 h-12 rounded-full flex items-center justify-center',
              'bg-white/10 text-white hover:bg-white/20',
              'transition-colors duration-200'
            )}
            aria-label="Close lightbox"
          >
            <Icon name="close" size="lg" />
          </button>

          <button
            onClick={onPrev}
            className={cn(
              'absolute left-6 top-1/2 -translate-y-1/2 z-10',
              'w-12 h-12 rounded-full flex items-center justify-center',
              'bg-white/10 text-white hover:bg-white/20',
              'transition-colors duration-200'
            )}
            aria-label="Previous image"
          >
            <Icon name="chevron-left" size="lg" />
          </button>

          <button
            onClick={onNext}
            className={cn(
              'absolute right-6 top-1/2 -translate-y-1/2 z-10',
              'w-12 h-12 rounded-full flex items-center justify-center',
              'bg-white/10 text-white hover:bg-white/20',
              'transition-colors duration-200'
            )}
            aria-label="Next image"
          >
            <Icon name="chevron-right" size="lg" />
          </button>

          <div className="relative max-w-6xl max-h-[85vh] mx-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="max-h-[75vh] w-auto rounded-xl object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-950/90 to-transparent rounded-b-xl"
            >
              <Text size="lg" weight="semibold" className="text-white mb-1">
                {currentItem.title}
              </Text>
              {currentItem.description && (
                <Text size="sm" color="muted">
                  {currentItem.description}
                </Text>
              )}
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <Text size="sm" color="muted">
              {currentIndex + 1} / {items.length}
            </Text>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GalleryLightbox;