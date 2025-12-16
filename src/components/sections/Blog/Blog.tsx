import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { BlogGrid } from './BlogGrid';
import { BlogSidebar } from './BlogSidebar';
import { blogPosts, getPostsByCategory, type BlogCategory } from '@/data';

interface BlogProps {
  showSidebar?: boolean;
  showFeatured?: boolean;
  limit?: number;
  columns?: 2 | 3;
  className?: string;
}

export function Blog({
  showSidebar = true,
  showFeatured = true,
  limit,
  columns = 3,
  className,
}: BlogProps) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let posts = activeCategory === 'all' ? blogPosts : getPostsByCategory(activeCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return limit ? posts.slice(0, limit) : posts;
  }, [activeCategory, searchQuery, limit]);

  if (!showSidebar) {
    return (
      <Section spacing="xl" className={className}>
        <FadeIn className="mb-12">
          <Heading as="h2" size="h2" className="mb-4">
            {t('blog.title')}
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl">
            {t('blog.subtitle')}
          </Text>
        </FadeIn>

        {filteredPosts.length > 0 ? (
          <BlogGrid
            posts={filteredPosts}
            variant={showFeatured ? 'featured' : 'default'}
            columns={columns}
          />
        ) : (
          <div className="text-center py-12">
            <Text color="muted">{t('blog.noPosts')}</Text>
          </div>
        )}
      </Section>
    );
  }

  return (
    <Section spacing="xl" className={className}>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FadeIn className="mb-8">
            <Heading as="h2" size="h2" className="mb-4">
              {t('blog.title')}
            </Heading>
            <Text size="lg" color="muted">
              {t('blog.subtitle')}
            </Text>
          </FadeIn>

          {filteredPosts.length > 0 ? (
            <BlogGrid
              posts={filteredPosts}
              variant={showFeatured ? 'featured' : 'default'}
              columns={2}
            />
          ) : (
            <div className="text-center py-12">
              <Text color="muted">{t('blog.noPosts')}</Text>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <BlogSidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
      </div>
    </Section>
  );
}

export default Blog;