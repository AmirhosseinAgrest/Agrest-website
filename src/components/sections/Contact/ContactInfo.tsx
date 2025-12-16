import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heading, Text, Icon, Badge } from '@/components/common';
import { personalInfo, socialLinks } from '@/data';

interface ContactInfoProps {
  className?: string;
}

const infoItems = [
  {
    key: 'email',
    icon: 'email' as const,
    label: 'contact.info.email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    key: 'location',
    icon: 'location' as const,
    label: 'contact.info.location',
    value: personalInfo.location,
  },
];

export function ContactInfo({ className }: ContactInfoProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('space-y-8', className)}
    >
      <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
        <Heading as="h3" size="h5" className="mb-6">
          Contact Information
        </Heading>

        <div className="space-y-5">
          {infoItems.map((item) => (
            <div key={item.key} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size="sm" className="text-neutral-400" />
              </div>
              <div>
                <Text size="xs" color="muted" className="uppercase tracking-wider mb-1">
                  {t(item.label)}
                </Text>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-neutral-200 hover:text-brand-400 transition-colors"
                  >
                    <Text size="sm" weight="medium">
                      {item.value}
                    </Text>
                  </a>
                ) : (
                  <Text size="sm" weight="medium" className="text-neutral-200">
                    {item.value}
                  </Text>
                )}
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div>
              <Text size="xs" color="muted" className="uppercase tracking-wider mb-1">
                {t('contact.info.availability')}
              </Text>
              <Badge variant="success" size="sm" dot>
                {t('contact.info.availableStatus')}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
        <Heading as="h3" size="h5" className="mb-6">
          {t('contact.social.title')}
        </Heading>

        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-3 p-3 rounded-xl',
                'bg-white/5 hover:bg-white/10',
                'text-neutral-400 hover:text-white',
                'transition-colors duration-200'
              )}
            >
              <Icon name={social.icon} size="md" />
              <Text size="sm" weight="medium">
                {social.platform}
              </Text>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ContactInfo;