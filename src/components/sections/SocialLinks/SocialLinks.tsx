import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/common';
import { socialLinks } from '@/data';

interface SocialLinksProps {
  orientation?: 'horizontal' | 'vertical';
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const iconSizes = {
  sm: 'sm' as const,
  md: 'md' as const,
  lg: 'md' as const,
};

export function SocialLinks({
  orientation = 'horizontal',
  showLabels = false,
  size = 'md',
  className,
}: SocialLinksProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'flex items-center',
        orientation === 'vertical' ? 'flex-col gap-3' : 'flex-row gap-2',
        className
      )}
    >
      {orientation === 'vertical' && (
        <motion.div
          variants={itemVariants}
          className="w-px h-16 bg-gradient-to-b from-transparent via-neutral-700 to-neutral-700 mb-2"
        />
      )}

      {socialLinks.map((social) => (
        <motion.a
          key={social.platform}
          variants={itemVariants}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'flex items-center justify-center rounded-xl',
            'bg-white/5 text-neutral-400',
            'hover:bg-white/10 hover:text-white',
            'transition-colors duration-200',
            sizeStyles[size],
            showLabels && 'gap-2 px-4 w-auto'
          )}
          aria-label={social.platform}
        >
          <Icon name={social.icon} size={iconSizes[size]} />
          {showLabels && (
            <span className="text-sm font-medium">{social.platform}</span>
          )}
        </motion.a>
      ))}

      {orientation === 'vertical' && (
        <motion.div
          variants={itemVariants}
          className="w-px h-16 bg-gradient-to-b from-neutral-700 via-neutral-700 to-transparent mt-2"
        />
      )}
    </motion.div>
  );
}

export default SocialLinks;