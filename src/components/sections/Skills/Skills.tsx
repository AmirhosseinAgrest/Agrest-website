import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { SkillCategory } from './SkillCategory';
import { skillCategories, getSkillsByCategory } from '@/data';

interface SkillsProps {
  showAll?: boolean;
  className?: string;
}

export function Skills({ showAll = false, className }: SkillsProps) {
  const { t } = useTranslation();

  const displayCategories = showAll
    ? skillCategories
    : skillCategories.filter((c) => ['frontend', 'backend', 'design'].includes(c.key));

  return (
    <Section spacing="xl" className={className}>
      <FadeIn className="mb-12">
        <Heading as="h2" size="h2" className="mb-4">
          {t('about.skills.title')}
        </Heading>
        <Text size="lg" color="muted" className="max-w-2xl">
          {t('about.skills.description')}
        </Text>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayCategories.map((category, index) => {
          const skills = getSkillsByCategory(category.key);
          if (skills.length === 0) return null;

          return (
            <SkillCategory
              key={category.key}
              category={category}
              skills={skills}
              index={index}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;