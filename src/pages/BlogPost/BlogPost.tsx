import { useParams, Navigate } from 'react-router-dom';
import { Meta } from '@/components/common/Meta';
import { BlogPostSection } from '@/components/sections';
import { getBlogPostBySlug } from '@/data';
import { ROUTES } from '@/config';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to={ROUTES.BLOG} replace />;
  }

  return (
    <>
      <Meta
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
        publishedAt={post.publishedAt}
        author={post.author.name}
      />

      <BlogPostSection post={post} />
    </>
  );
}

export default BlogPost;