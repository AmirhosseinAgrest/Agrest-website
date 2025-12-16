import { cn } from '@/lib/utils';

interface SkipLinkProps {
  targetId?: string;
  className?: string;
}

export function SkipLink({ targetId = 'main-content', className }: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        'sr-only focus:not-sr-only',
        'fixed top-4 left-4 z-[100]',
        'px-4 py-2 rounded-lg',
        'bg-brand-500 text-white font-medium',
        'focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-neutral-950',
        'transition-transform',
        className
      )}
    >
      Skip to main content
    </a>
  );
}

export default SkipLink;