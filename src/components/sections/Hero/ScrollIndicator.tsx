import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  className?: string;
  onClick?: () => void;
}

export function ScrollIndicator({ className, onClick }: ScrollIndicatorProps) {
  const { t } = useTranslation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      onClick={handleClick}
      className={cn(
        'flex flex-col items-center gap-3',
        'text-neutral-500 hover:text-neutral-300',
        'transition-colors duration-300',
        className
      )}
    >
      <span className="text-xs font-medium uppercase tracking-widest">
        {t('hero.scroll')}
      </span>
      
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-2 rounded-full bg-current"
          />
        </div>
      </motion.div>
    </motion.button>
  );
}

export default ScrollIndicator;