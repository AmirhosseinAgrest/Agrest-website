import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ROUTES, socialLinks, type NavItem } from '@/config';
import { Icon, Button, LanguageSwitcher, Divider } from '@/components/common';

interface MobileMenuProps {
  items: NavItem[];
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const contentVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.05,
    },
  }),
};

export function MobileMenu({ items, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-40 lg:hidden"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/95 backdrop-blur-xl"
        onClick={onClose}
      />

      <motion.div
        variants={contentVariants}
        className="relative h-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
      >
        <nav className="flex-1">
          <ul className="space-y-2">
            {items.map((item, index) => {
              const isActive = location.pathname === item.href;

              return (
                <motion.li
                  key={item.key}
                  custom={index}
                  variants={itemVariants}
                >
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center gap-4 px-4 py-4 rounded-xl',
                      'text-xl font-medium transition-colors duration-200',
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {t(`nav.${item.key}`)}
                    {isActive && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-brand-400" />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <motion.div
          variants={contentVariants}
          className="mt-auto space-y-6"
        >
          <Divider variant="gradient" />

          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-500">{t('common.language')}</span>
            <LanguageSwitcher variant="buttons" size="sm" />
          </div>

          <Link to={ROUTES.CONTACT} onClick={onClose} className="block">
            <Button variant="primary" size="lg" fullWidth>
              {t('nav.contact')}
            </Button>
          </Link>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-lg',
                  'text-neutral-400 hover:text-white hover:bg-white/5',
                  'transition-colors duration-200'
                )}
                aria-label={social.platform}
              >
                <Icon name={social.icon} size="md" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MobileMenu;