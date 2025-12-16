import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { ROUTES, mainNavItems } from '@/config';
import { Container } from '../Container';
import { Navigation } from '../Navigation';
import { MobileMenu } from '../MobileMenu';
import { Button, Icon, LanguageSwitcher } from '@/components/common';
import type { HeaderProps } from './Header.types';

export function Header({ className }: HeaderProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 11, 0)', 'rgba(10, 10, 11, 0.85)']
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)']
  );
  const headerBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(12px)']);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          borderBottomColor: headerBorder,
          backdropFilter: headerBlur,
          WebkitBackdropFilter: headerBlur,
        }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'border-b border-transparent',
          'transition-shadow duration-300',
          hasScrolled && 'shadow-soft-lg',
          className
        )}
      >
        <Container size="xl">
          <div className="flex h-18 items-center justify-between">
            <Link
              to={ROUTES.HOME}
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-bold tracking-tight text-white"
              >
                Agrest
              </motion.span>
            </Link>

            <Navigation
              items={mainNavItems}
              className="hidden lg:flex"
            />

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <LanguageSwitcher variant="dropdown" size="sm" />

              <Link to={ROUTES.CONTACT} className="hidden sm:block">
                <Button variant="primary" size="sm">
                  {t('nav.contact')}
                </Button>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'lg:hidden flex items-center justify-center',
                  'w-10 h-10 rounded-lg',
                  'text-neutral-400 hover:text-white hover:bg-white/5',
                  'transition-colors duration-200'
                )}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="md" />
              </button>
            </motion.div>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            items={mainNavItems}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="h-18" />
    </>
  );
}

export default Header;