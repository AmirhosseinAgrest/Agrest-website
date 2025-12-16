import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Section } from '@/components/layout';
import { Heading, Text, Input } from '@/components/common';
import { FadeIn } from '@/components/motion';
import { FAQItem } from './FAQItem';
import { faqCategories, getFAQByCategory } from '@/data';

interface FAQProps {
  showSearch?: boolean;
  showCategories?: boolean;
  limit?: number;
  className?: string;
}

export function FAQ({
  showSearch = false,
  showCategories = false,
  limit,
  className,
}: FAQProps) {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    let items = getFAQByCategory(activeCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          t(item.questionKey).toLowerCase().includes(query) ||
          t(item.answerKey).toLowerCase().includes(query)
      );
    }

    return limit ? items.slice(0, limit) : items;
  }, [activeCategory, searchQuery, limit, t]);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section spacing="xl" className={className}>
      <FadeIn className="text-center mb-12">
        <Heading as="h2" size="h2" className="mb-4">
          {t('faq.title')}
        </Heading>
        <Text size="lg" color="muted" className="max-w-2xl mx-auto">
          {t('faq.subtitle')}
        </Text>
      </FadeIn>

      {(showSearch || showCategories) && (
        <FadeIn delay={0.1} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {showCategories && (
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={cn(
                      'relative px-4 py-2 rounded-xl text-sm font-medium',
                      'transition-colors duration-200',
                      activeCategory === category.key
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {activeCategory === category.key && (
                      <motion.div
                        layoutId="faq-category-bg"
                        className="absolute inset-0 bg-white/10 rounded-xl"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{category.label}</span>
                  </button>
                ))}
              </div>
            )}

            {showSearch && (
              <div className="w-full sm:w-auto sm:min-w-[280px]">
                <Input
                  placeholder="Search questions..."
                  leftIcon="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size="sm"
                />
              </div>
            )}
          </div>
        </FadeIn>
      )}

      <div className="max-w-3xl mx-auto space-y-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FAQItem
              key={item.id}
              question={t(item.questionKey)}
              answer={t(item.answerKey)}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              index={index}
            />
          ))
        ) : (
          <FadeIn className="text-center py-12">
            <Text color="muted">No questions found matching your search.</Text>
          </FadeIn>
        )}
      </div>
    </Section>
  );
}

export default FAQ;