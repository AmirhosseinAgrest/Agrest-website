import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Text, Badge, Icon, Image } from '@/components/common';
import { getBlogPostRoute } from '@/config';
import { blogCategories, type BlogPost } from '@/data';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getCategoryColor(category: string): string {
  const cat = blogCategories.find((c) => c.key === category);
  return cat?.color || '#737373';
}

export function BlogCard({
  post,
  index,
  variant = 'default',
  className,
}: BlogCardProps) {
  const { t } = useTranslation();
  const categoryColor = getCategoryColor(post.category);

  if (variant === 'compact') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.05,
        }}
        className={cn('group', className)}
      >
        <Link
          to={getBlogPostRoute(post.slug)}
          className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200"
        >
          <Image
            src={post.image}
            alt={post.title}
            className="w-20 h-20 rounded-lg object-cover shrink-0"
          />

          <div className="flex-1 min-w-0">
            <Text size="xs" color="muted" className="mb-1">
              {formatDate(post.publishedAt)}
            </Text>
            <Heading
              as="h3"
              size="h6"
              className="line-clamp-2 group-hover:text-brand-400 transition-colors"
            >
              {post.title}
            </Heading>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.1,
        }}
        className={cn(
          'group relative overflow-hidden rounded-2xl',
          'bg-neutral-900/50 border border-neutral-800',
          'hover:border-neutral-700 transition-colors duration-300',
          className
        )}
      >
        <Link to={getBlogPostRoute(post.slug)} className="block">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto md:h-full">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-950/50 md:bg-gradient-to-l" />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant="outline"
                  size="sm"
                  style={{ borderColor: categoryColor, color: categoryColor }}
                >
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge variant="primary" size="sm" leftIcon="star">
                    Featured
                  </Badge>
                )}
              </div>

              <Heading
                as="h2"
                size="h3"
                className="mb-3 group-hover:text-brand-400 transition-colors"
              >
                {post.title}
              </Heading>

              <Text color="muted" className="mb-6 line-clamp-2">
                {post.excerpt}
              </Text>

              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Icon name="calendar" size="xs" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="clock" size="xs" />
                  {post.readTime} {t('blog.readTime')}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl',
        'bg-neutral-900/50 border border-neutral-800',
        'hover:border-neutral-700 transition-colors duration-300',
        className
      )}
    >
      <Link to={getBlogPostRoute(post.slug)} className="block">
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute top-4 left-4">
            <Badge
              variant="default"
              size="sm"
              className="backdrop-blur-sm"
              style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}
            >
              {post.category}
            </Badge>
          </div>
        </div>

        <div className="flex-1 p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-3 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Icon name="calendar" size="xs" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span className="flex items-center gap-1.5">
              <Icon name="clock" size="xs" />
              {post.readTime} {t('blog.readTime')}
            </span>
          </div>

          <Heading
            as="h3"
            size="h5"
            className="mb-3 group-hover:text-brand-400 transition-colors line-clamp-2"
          >
            {post.title}
          </Heading>

          <Text size="sm" color="muted" className="line-clamp-2">
            {post.excerpt}
          </Text>
        </div>
      </Link>
    </motion.article>
  );
}

export default BlogCard;