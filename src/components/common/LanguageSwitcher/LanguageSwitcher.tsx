import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context';
import { supportedLanguages, getLanguage, type LanguageCode } from '@/i18n';
import { Icon } from '../Icon';
import type { LanguageSwitcherProps } from './LanguageSwitcher.types';

const sizeStyles = {
  sm: 'h-8 px-2.5 text-xs gap-1.5',
  md: 'h-10 px-3 text-sm gap-2',
  lg: 'h-12 px-4 text-base gap-2.5',
};

export function LanguageSwitcher({
  variant = 'dropdown',
  size = 'md',
  showFlag = true,
  showName = false,
  showNativeName = true,
  className,
}: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = getLanguage(currentLanguage);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const getDisplayText = (code: LanguageCode) => {
    const lang = getLanguage(code);
    if (showNativeName) return lang.nativeName;
    if (showName) return lang.name;
    return lang.code.toUpperCase();
  };

  function groupLanguages() {
    const groups: Record<string, { code: LanguageCode; name: string; native: string; flag: string }[]> = {};

    supportedLanguages.forEach((code) => {
      const lang = getLanguage(code);
      const englishName = lang.name;
      const firstLetter = englishName[0].toUpperCase();

      if (!groups[firstLetter]) groups[firstLetter] = [];

      groups[firstLetter].push({
        code,
        name: lang.name,
        native: lang.nativeName,
        flag: lang.flag,
      });
    });

    return groups;
  }

  if (variant === 'buttons') {
    return (
      <div className={cn('flex items-center gap-1', className)}>
        {supportedLanguages.map((code) => {
          const lang = getLanguage(code);
          const isActive = code === currentLanguage;

          return (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={cn(
                'flex items-center rounded-lg transition-all duration-200',
                sizeStyles[size],
                isActive
                  ? 'bg-white text-neutral-950'
                  : 'bg-transparent text-neutral-400 hover:text-white hover:bg-white/5'
              )}
            >
              {showFlag && <span>{lang.flag}</span>}
              <span>{getDisplayText(code)}</span>
            </button>
          );
        })}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <button
        onClick={() => {
          const currentIndex = supportedLanguages.indexOf(currentLanguage);
          const nextIndex = (currentIndex + 1) % supportedLanguages.length;
          setLanguage(supportedLanguages[nextIndex]);
        }}
        className={cn(
          'flex items-center rounded-lg bg-transparent text-neutral-400',
          'hover:text-white hover:bg-white/5 transition-all duration-200',
          sizeStyles[size],
          className
        )}
      >
        <Icon name="globe" size={size === 'lg' ? 'md' : 'sm'} />
        <span>{currentLang.code.toUpperCase()}</span>
      </button>
    );
  }

  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center rounded-lg bg-white/5 text-neutral-300',
          'border border-white/10 hover:bg-white/10 hover:text-white',
          'transition-all duration-200',
          sizeStyles[size]
        )}
      >
        {showFlag && <span>{currentLang.flag}</span>}
        <span>{currentLang.name} ({currentLang.nativeName})</span>
        <Icon
          name="chevron-down"
          size="xs"
          className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute top-full mt-2 min-w-[220px] z-50',
              'bg-neutral-900/80 backdrop-blur-xl border border-neutral-800',
              'rounded-xl shadow-2xl overflow-hidden',
              isRTL ? 'right-0' : 'left-0'
            )}
          >
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              {Object.entries(groupLanguages()).map(([letter, langs]) => (
                <div key={letter} className="border-b border-neutral-800 last:border-none">
                  
                  <div className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase">
                    {letter}
                  </div>

                  {langs.map((lang) => {
                    const isActive = lang.code === currentLanguage;

                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleSelect(lang.code)}
                        className={cn(
                          'flex items-center w-full px-3 py-2 text-sm transition-colors duration-150',
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                        )}
                      >
                        {showFlag && <span className="mr-2">{lang.flag}</span>}
                        <span className="flex-1 text-left">
                          {lang.name} ({lang.native})
                        </span>
                        {isActive && <Icon name="check" size="xs" className="text-brand-400" />}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSwitcher;