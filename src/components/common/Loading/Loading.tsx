import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  text?: string;
  className?: string;
}

const sizeStyles = {
  sm: 'w-5 h-5 border-2',
  md: 'w-8 h-8 border-2',
  lg: 'w-12 h-12 border-[3px]',
};

export function Loading({ size = 'md', fullScreen = false, text, className }: LoadingProps) {
  const spinner = (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <div
        className={cn(
          'rounded-full border-neutral-700 border-t-white animate-spin',
          sizeStyles[size]
        )}
      />
      {text && <p className="text-sm text-neutral-400">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export function PageLoading() {
  const { t } = useTranslation();
  
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loading size="lg" text={t('common.loading')} />
    </div>
  );
}

export default Loading;