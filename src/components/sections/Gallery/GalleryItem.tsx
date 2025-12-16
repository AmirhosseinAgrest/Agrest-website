import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Text, Icon, Image } from '@/components/common';
import type { GalleryItem as GalleryItemType } from '@/data';

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  onClick: () => void;
  className?: string;
}

const aspectStyles = {
  landscape: 'aspect-video',
  portrait: 'aspect-[3/4] row-span-2',
  square: 'aspect-square',
};

export function GalleryItem({ item, index, onClick, className }: GalleryItemProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05,
      }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'bg-neutral-900 border border-neutral-800',
        'hover:border-neutral-700 transition-colors duration-300',
        aspectStyles[item.aspectRatio],
        className
      )}
    >
      <Image
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div
        className={cn(
          'absolute inset-0 flex flex-col justify-end p-4',
          'bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        )}
      >
        <Text size="sm" weight="semibold" className="text-white mb-1">
          {item.title}
        </Text>
        {item.description && (
          <Text size="xs" color="muted" className="line-clamp-2">
            {item.description}
          </Text>
        )}
      </div>

      <div
        className={cn(
          'absolute top-4 right-4',
          'w-10 h-10 rounded-full flex items-center justify-center',
          'bg-white/10 backdrop-blur-sm text-white',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        )}
      >
        <Icon name="plus" size="md" />
      </div>
    </motion.button>
  );
}

export default GalleryItem;