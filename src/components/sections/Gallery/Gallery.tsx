import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Section } from '@/components/layout';
import { Heading, Text, Button } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { GalleryItem } from './GalleryItem';
import { GalleryLightbox } from './GalleryLightbox';
import { galleryItems, galleryCategories, type GalleryCategory } from '@/data';

interface GalleryProps {
  showFilter?: boolean;
  limit?: number;
  columns?: 3 | 4;
  className?: string;
}

export function Gallery({
  showFilter = true,
  limit,
  columns = 3,
  className,
}: GalleryProps) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    const items =
      activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);
    return limit ? items.slice(0, limit) : items;
  }, [activeCategory, limit]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
      );
    }
  };

  const gridCols = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <>
      <Section spacing="xl" className={className}>
        <FadeIn className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <Heading as="h2" size="h2" className="mb-4">
                {t('gallery.title')}
              </Heading>
              <Text size="lg" color="muted" className="max-w-xl">
                {t('gallery.subtitle')}
              </Text>
            </div>

            <Button variant="ghost" rightIcon="arrow-right">
              {t('gallery.viewAll')}
            </Button>
          </div>
        </FadeIn>

        {showFilter && (
          <FadeIn delay={0.1} className="mb-8">
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={cn(
                    'relative px-4 py-2 rounded-xl text-sm font-medium',
                    'transition-colors duration-200',
                    activeCategory === category.key
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  {activeCategory === category.key && (
                    <motion.div
                      layoutId="gallery-filter-bg"
                      className="absolute inset-0 bg-white/10 rounded-xl"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        <motion.div layout className={cn('grid gap-4', gridCols)}>
          {filteredItems.map((item, index) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </motion.div>
      </Section>

      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
}

export default Gallery;