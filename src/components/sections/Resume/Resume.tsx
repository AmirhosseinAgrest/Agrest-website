import { Section } from '@/components/layout';
import { Text, Divider } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { ResumeHeader } from './ResumeHeader';
import { ResumeExperience } from './ResumeExperience';
import { ResumeEducation } from './ResumeEducation';
import { ResumeSkills } from './ResumeSkills';
import { ResumeDownload } from './ResumeDownload';
import { resumeData } from '@/data';

interface ResumeProps {
  className?: string;
}

export function Resume({ className }: ResumeProps) {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/amirhossein-agrest-resume.pdf';
    link.download = 'Amirhossein-Agrest-Resume.pdf';
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={className}>
      <Section spacing="xl">
        <ResumeHeader onDownload={handleDownload} onPrint={handlePrint} />

        <FadeIn delay={0.1} className="mt-8">
          <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
            <Text className="text-neutral-300 leading-relaxed">
              {resumeData.summary}
            </Text>
          </div>
        </FadeIn>
      </Section>

      <Divider variant="gradient" spacing="md" />

      <Section spacing="lg">
        <ResumeExperience />
        <ResumeEducation />
        <ResumeSkills />
      </Section>

      <Section spacing="lg">
        <ResumeDownload />
      </Section>
    </div>
  );
}

export default Resume;