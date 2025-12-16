import { useEffect, useRef, useState, type RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

interface UseScrollAnimationReturn<T extends Element> {
  ref: RefObject<T>;
  isVisible: boolean;
  style: React.CSSProperties;
}

export function useScrollAnimation<T extends Element = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true, delay = 0 } = options;
  
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay]);

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    transitionDelay: `${delay}ms`,
  };

  return { ref, isVisible, style };
}

export default useScrollAnimation;