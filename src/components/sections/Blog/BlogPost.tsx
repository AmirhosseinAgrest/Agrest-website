import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section, Container } from '@/components/layout';
import { Heading, Text, Badge, Icon, Image, Button, Divider } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { BlogAuthor } from './BlogAuthor';
import { BlogCard } from './BlogCard';
import { ROUTES } from '@/config';
import { blogCategories, getRelatedPosts, type BlogPost as BlogPostType } from '@/data';

interface BlogPostSectionProps {
  post: BlogPostType;
  className?: string;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function getCategoryColor(category: string): string {
  const cat = blogCategories.find((c) => c.key === category);
  return cat?.color || '#737373';
}

export function BlogPostSection({ post, className }: BlogPostSectionProps) {
  const { t } = useTranslation();
  const relatedPosts = getRelatedPosts(post.slug, 2);
  const categoryColor = getCategoryColor(post.category);

  return (
    <article className={className}>
      <div className="relative">
        <div className="absolute inset-0 h-[45vh] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
        </div>

        <Container size="md" className="relative pt-32 pb-12">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge
                variant="outline"
                style={{ borderColor: categoryColor, color: categoryColor }}
                className="backdrop-blur-sm text-sm px-3 py-1"
              >
                {post.category}
              </Badge>

              <span className="text-sm text-neutral-300 flex items-center gap-1.5">
                <Icon name="calendar" size="xs" />
                {formatDate(post.publishedAt)}
              </span>

              <span className="text-sm text-neutral-300 flex items-center gap-1.5">
                <Icon name="clock" size="xs" />
                {post.readTime} {t('blog.readTime')}
              </span>
            </div>

            <Heading
              as="h1"
              size="h2"
              className="mb-4 leading-tight font-bold drop-shadow-md"
            >
              {post.title}
            </Heading>

            <Text size="lg" color="muted" className="max-w-2xl drop-shadow-sm">
              {post.excerpt}
            </Text>
          </FadeIn>
        </Container>
      </div>

      <Section spacing="xl">
        <Container size="md">
          <FadeIn>
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:my-4
                prose-a:text-brand-400 hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-code:text-brand-300 prose-code:bg-neutral-800/60 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800 prose-pre:rounded-xl prose-pre:p-5
                prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:text-neutral-400 prose-blockquote:italic prose-blockquote:pl-6
                prose-ul:text-neutral-300 prose-ol:text-neutral-300
                prose-li:marker:text-neutral-600"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </FadeIn>

          <FadeIn delay={0.2} className="mt-12">
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  size="md"
                  className="px-4 py-1.5 text-sm backdrop-blur-sm border-neutral-700 hover:border-brand-400 transition-colors"
                >
                  #{tag}
                </Badge>
              ))}
            </div>

            <Divider variant="gradient" spacing="lg" />

            <BlogAuthor author={post.author} />
          </FadeIn>
        </Container>
      </Section>

      {relatedPosts.length > 0 && (
        <Section spacing="xl">
          <Container size="lg">
            <FadeIn className="mb-8">
              <div className="flex items-center justify-between">
                <Heading as="h2" size="h3" className="tracking-tight">
                  {t('blog.related')}
                </Heading>
                <Link to={ROUTES.BLOG}>
                  <Button variant="ghost" rightIcon="arrow-right">
                    {t('blog.allPosts')}
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section spacing="md">
        <Container size="md">
          <FadeIn className="flex justify-center">
            <Link to={ROUTES.BLOG}>
              <Button
                variant="outline"
                size="lg"
                leftIcon="arrow-left"
                className="px-8 py-3 text-lg"
              >
                {t('blog.back')}
              </Button>
            </Link>
          </FadeIn>
        </Container>
      </Section>
    </article>
  );
}

function formatContent(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hulo])/gm, '<p>')
    .replace(/(?<![>])$/gm, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hulo])/g, '$1')
    .replace(/(<\/[hulo][^>]*>)<\/p>/g, '$1');
}

export default BlogPostSection;
