import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BlogCard } from './BlogCard';
import type { BlogPost } from '@/data';

interface BlogGridProps {
  posts: BlogPost[];
  variant?: 'default' | 'featured';
  columns?: 2 | 3;
  className?: string;
}

export function BlogGrid({
  posts,
  variant = 'default',
  columns = 3,
  className,
}: BlogGridProps) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  if (variant === 'featured' && posts.length > 0) {
    const [featured, ...rest] = posts;
    
    return (
      <div className={cn('space-y-6', className)}>
        <BlogCard post={featured} index={0} variant="featured" />
        
        {rest.length > 0 && (
          <motion.div layout className={cn('grid gap-6', gridCols)}>
            <AnimatePresence mode="popLayout">
              {rest.map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={post} index={index + 1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <motion.div layout className={cn('grid gap-6', gridCols, className)}>
      <AnimatePresence mode="popLayout">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <BlogCard post={post} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default BlogGrid;