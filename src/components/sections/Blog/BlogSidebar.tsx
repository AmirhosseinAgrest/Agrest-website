import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Heading, Badge, Input } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { BlogCard } from './BlogCard';
import { blogCategories, getRecentPosts, getAllTags, type BlogCategory } from '@/data';

interface BlogSidebarProps {
  activeCategory?: BlogCategory | 'all';
  onCategoryChange?: (category: BlogCategory | 'all') => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
  showCategories?: boolean;
  showRecentPosts?: boolean;
  showTags?: boolean;
  className?: string;
}

export function BlogSidebar({
  activeCategory = 'all',
  onCategoryChange,
  searchQuery = '',
  onSearchChange,
  showSearch = true,
  showCategories = true,
  showRecentPosts = true,
  showTags = true,
  className,
}: BlogSidebarProps) {
  const { t } = useTranslation();
  const recentPosts = getRecentPosts(3);
  const allTags = getAllTags();

  return (
    <aside className={cn('space-y-8', className)}>
      {showSearch && (
        <FadeIn>
          <div className="p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
            <Heading as="h3" size="h6" className="mb-4">
              {t('common.search')}
            </Heading>
            <Input
              placeholder="Search articles..."
              leftIcon="search"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              size="sm"
            />
          </div>
        </FadeIn>
      )}

      {showCategories && (
        <FadeIn delay={0.1}>
          <div className="p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
            <Heading as="h3" size="h6" className="mb-4">
              {t('blog.categories')}
            </Heading>
            <div className="space-y-1">
              {blogCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => onCategoryChange?.(category.key)}
                  className={cn(
                    'flex items-center justify-between w-full px-3 py-2 rounded-lg',
                    'text-sm transition-colors duration-200',
                    activeCategory === category.key
                      ? 'bg-white/10 text-white'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {showRecentPosts && recentPosts.length > 0 && (
        <FadeIn delay={0.2}>
          <div className="p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
            <Heading as="h3" size="h6" className="mb-4">
              {t('blog.recentPosts')}
            </Heading>
            <div className="space-y-2">
              {recentPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {showTags && allTags.length > 0 && (
        <FadeIn delay={0.3}>
          <div className="p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
            <Heading as="h3" size="h6" className="mb-4">
              Tags
            </Heading>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </aside>
  );
}

export default BlogSidebar;