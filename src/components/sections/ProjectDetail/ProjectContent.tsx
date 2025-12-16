import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout';
import { Heading, Text, Badge, Icon } from '@/components/common';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import type { Project } from '@/data';

interface ProjectContentProps {
  project: Project;
  className?: string;
}

interface InfoItemProps {
  label: string;
  value: string;
  icon: 'calendar' | 'clock' | 'location' | 'star';
}

function InfoItem({ label, value, icon }: InfoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
        <Icon name={icon} size="sm" className="text-neutral-400" />
      </div>
      <div>
        <Text size="xs" color="muted" className="uppercase tracking-wider">
          {label}
        </Text>
        <Text size="sm" weight="medium" className="text-white">
          {value}
        </Text>
      </div>
    </div>
  );
}

export function ProjectContent({ project, className }: ProjectContentProps) {
  const { t } = useTranslation();

  return (
    <Section spacing="xl" className={className}>
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {project.highlights && project.highlights.length > 0 && (
            <FadeIn className="mb-12">
              <Heading as="h2" size="h3" className="mb-6">
                Key Highlights
              </Heading>

              <StaggerContainer className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <StaggerItem
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Icon name="check" size="sm" className="text-emerald-400" />
                    </div>
                    <Text className="text-neutral-200">{highlight}</Text>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          )}

          <FadeIn delay={0.2}>
            <Heading as="h2" size="h3" className="mb-6">
              {t('projects.techStack')}
            </Heading>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  size="lg"
                  className="px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-1">
          <FadeIn delay={0.3}>
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-6">
              <Heading as="h3" size="h5">
                Project Info
              </Heading>

              <div className="space-y-4">
                {project.client && (
                  <InfoItem
                    label="Client"
                    value={project.client}
                    icon="star"
                  />
                )}

                {project.duration && (
                  <InfoItem
                    label="Duration"
                    value={project.duration}
                    icon="clock"
                  />
                )}

                {project.role && (
                  <InfoItem
                    label="Role"
                    value={project.role}
                    icon="star"
                  />
                )}

                <InfoItem
                  label="Year"
                  value={project.year.toString()}
                  icon="calendar"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}

export default ProjectContent;