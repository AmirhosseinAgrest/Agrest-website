import { useTranslation } from 'react-i18next';
import { Meta } from '@/components/common/Meta';
import { Divider } from '@/components/common';
import {
  AboutIntro,
  AboutStory,
  Values,
  Skills,
  Experience,
  Stats,
  Achievements,
  Philosophy,
  Testimonials,
} from '@/components/sections';

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('meta.about.title')}
        description={t('meta.about.description')}
      />

      <AboutIntro />

      <Stats />

      <Divider variant="gradient" spacing="xl" />

      <AboutStory />

      <Values />

      <Philosophy showBeliefs />

      <Skills showAll />

      <Experience />

      <Divider variant="gradient" spacing="xl" />

      <Achievements />

      <Testimonials variant="grid" limit={3} />
    </>
  );
}

export default About;