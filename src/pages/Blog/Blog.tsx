import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { Section } from '@/components/layout';
import { Heading, Text, Badge } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { Blog as BlogSection } from '@/components/sections';

export function Blog() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('blog.title')}
        description={t('blog.subtitle')}
      />

      <Section spacing="xl">
        <FadeIn>
          <Badge variant="primary" className="mb-6">
            {t('blog.title')}
          </Badge>

          <Heading as="h1" size="h1" className="mb-6">
            {t('blog.subtitle')}
          </Heading>

          <Text size="xl" color="muted" className="max-w-2xl">
            Thoughts, tutorials, and insights on software development, design, and technology.
          </Text>
        </FadeIn>
      </Section>

      <BlogSection showSidebar showFeatured />
    </>
  );
}

export default Blog;