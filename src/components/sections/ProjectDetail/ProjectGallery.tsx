import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/layout';
import { Heading, Image, Icon } from '@/components/common';
import { FadeIn } from '@/components/motion';

interface ProjectGalleryProps {
  images: string[];
  title: string;
  className?: string;
}

export function ProjectGallery({ images, title, className }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <Section spacing="xl" className={className}>
        <FadeIn>
          <Heading as="h2" size="h3" className="mb-8">
            Gallery
          </Heading>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.button
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-video rounded-xl overflow-hidden group"
            >
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="plus" size="lg" className="text-white" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="close" size="lg" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt={title}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectGallery;