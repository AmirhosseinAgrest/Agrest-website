import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Meta } from '@/components/common/Meta';
import { Button, Divider } from '@/components/common';
import { Section } from '@/components/layout';
import { FadeIn } from '@/components/motion';
import { ROUTES } from '@/config';
import {
  Hero,
  Stats,
  Values,
  Projects,
  Services,
  Skills,
  Experience,
  Testimonials,
  FAQ,
  Blog,
} from '@/components/sections';

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('meta.home.title')}
        description={t('meta.home.description')}
      />

      <Hero />

      <Stats />

      <Divider variant="gradient" spacing="xl" />

      <Values />

      <Projects showFeaturedOnly showFilter={false} limit={3} columns={3} />

      <Section spacing="sm">
        <FadeIn className="flex justify-center">
          <Link to={ROUTES.PROJECTS}>
            <Button variant="outline" size="lg" rightIcon="arrow-right">
              {t('projects.allProjects')}
            </Button>
          </Link>
        </FadeIn>
      </Section>

      <Services showCta={false} />

      <Section spacing="sm">
        <FadeIn className="flex justify-center">
          <Link to={ROUTES.SERVICES}>
            <Button variant="outline" size="lg" rightIcon="arrow-right">
              {t('common.learnMore')}
            </Button>
          </Link>
        </FadeIn>
      </Section>

      <Skills showAll={false} />

      <Testimonials variant="carousel" showFeaturedOnly />

      <Experience showAll={false} />

      <Blog showSidebar={false} showFeatured={false} limit={3} columns={3} />

      <Section spacing="sm">
        <FadeIn className="flex justify-center">
          <Link to={ROUTES.BLOG}>
            <Button variant="outline" size="lg" rightIcon="arrow-right">
              {t('blog.allPosts')}
            </Button>
          </Link>
        </FadeIn>
      </Section>

      <FAQ limit={4} />

      <Section spacing="lg">
        <FadeIn className="flex justify-center">
          <Link to={ROUTES.CONTACT}>
            <Button variant="primary" size="lg" rightIcon="arrow-right">
              {t('hero.cta.secondary')}
            </Button>
          </Link>
        </FadeIn>
      </Section>
    </>
  );
}

export default Home;