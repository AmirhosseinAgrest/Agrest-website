import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/layout';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroActions } from './HeroActions';
import { ScrollIndicator } from './ScrollIndicator';
import { SocialLinks } from '../SocialLinks';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <Section
      spacing="none"
      noContainer
      className={cn(
        'relative min-h-screen flex flex-col justify-center',
        className
      )}
    >
      <HeroBackground />

      <Container size="xl" className="relative z-10 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-8">
            <HeroContent />
            <HeroActions className="mt-10" />
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <SocialLinks
              orientation="vertical"
              showLabels={false}
              className="mr-8"
            />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>

      <div className="lg:hidden absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
        <SocialLinks orientation="horizontal" showLabels={false} />
      </div>
    </Section>
  );
}

export default Hero;