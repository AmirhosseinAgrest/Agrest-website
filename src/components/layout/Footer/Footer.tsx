import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { ROUTES, footerNavItems, socialLinks } from '@/config';
import { Container } from '../Container';
import { Icon, Text, Divider } from '@/components/common';
import { FadeIn } from '@/components/motion';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('relative bg-neutral-950 border-t border-neutral-900', className)}>
      <Container size="xl" className="py-16 lg:py-20">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Link to={ROUTES.HOME} className="inline-block mb-6">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Agrest
                </span>
              </Link>

              <Text color="muted" className="mb-6 max-w-sm">
                {t('brand.description')}
              </Text>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center justify-center w-10 h-10 rounded-xl',
                      'bg-white/5 text-neutral-400',
                      'hover:bg-white/10 hover:text-white',
                      'transition-all duration-200'
                    )}
                    aria-label={social.platform}
                  >
                    <Icon name={social.icon} size="sm" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                    Navigation
                  </h4>
                  <ul className="space-y-3">
                    {footerNavItems.slice(0, 4).map((item) => (
                      <li key={item.key}>
                        <Link
                          to={item.href}
                          className={cn(
                            'text-sm text-neutral-400 hover:text-white',
                            'transition-colors duration-200'
                          )}
                        >
                          {t(`nav.${item.key}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    {footerNavItems.slice(4).map((item) => (
                      <li key={item.key}>
                        <Link
                          to={item.href}
                          className={cn(
                            'text-sm text-neutral-400 hover:text-white',
                            'transition-colors duration-200'
                          )}
                        >
                          {t(`nav.${item.key}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                    {t('contact.title')}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="mailto:amirhosseinagrest@gamil.com"
                        className={cn(
                          'flex items-center gap-2 text-sm text-neutral-400 hover:text-white',
                          'transition-colors duration-200'
                        )}
                      >
                        <Icon name="email" size="sm" />
                        amirhosseinagrest@gmail.com
                      </a>
                    </li>
                    <li>
                      <span className="flex items-center gap-2 text-sm text-neutral-400">
                        <Icon name="location" size="sm" />
                        Remote Worldwide
                      </span>
                    </li>
                    <li>
                      <span className="flex items-center gap-2 text-sm text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {t('contact.info.availableStatus')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <Divider variant="gradient" spacing="lg" className="mt-12" />

        <FadeIn delay={0.2}>
          <div className={cn(
            'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
            'pt-8'
          )}>
            <Text size="sm" color="muted">
              © 2025–{currentYear} Agrest. {t('footer.rights')}.
            </Text>

            <Text size="sm" color="muted" className="flex items-center gap-1">
              {t('footer.madeWith')}
              <Icon name="heart" size="xs" className="text-rose-400 mx-1" />
              {t('footer.by')} Amirhossein Agrest
            </Text>
          </div>
        </FadeIn>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </footer>
  );
}

export default Footer;