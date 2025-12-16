import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/config';

interface NavigationProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({ items, className, onItemClick }: NavigationProps) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className={cn('flex items-center gap-1', className)}>
      {items.map((item, index) => {
        const isActive = location.pathname === item.href;

        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.05,
            }}
          >
            <Link
              to={item.href}
              onClick={onItemClick}
              className={cn(
                'relative px-4 py-2 text-sm font-medium rounded-lg',
                'transition-colors duration-200',
                isActive
                  ? 'text-white'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              )}
            >
              {t(`nav.${item.key}`)}
              
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}

export default Navigation;