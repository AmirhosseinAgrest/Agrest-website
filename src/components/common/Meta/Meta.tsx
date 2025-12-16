import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig, getFullTitle, getFullImageUrl, type PageMeta } from '@/config/seo';

interface MetaProps extends PageMeta {
  children?: React.ReactNode;
}

export function Meta({
  title,
  description = siteConfig.defaultMeta.description,
  image,
  type = 'website',
  publishedAt,
  author = siteConfig.author,
  noIndex = false,
  children,
}: MetaProps) {
  const location = useLocation();
  const fullTitle = getFullTitle(title);
  const fullImage = getFullImageUrl(image);
  const url = `${siteConfig.url}${location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.social.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {type === 'article' && publishedAt && (
        <>
          <meta property="article:published_time" content={publishedAt} />
          <meta property="article:author" content={author} />
        </>
      )}

      <meta name="author" content={author} />

      {children}
    </Helmet>
  );
}

export default Meta;