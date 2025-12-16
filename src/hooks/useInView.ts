import { useState, useEffect, useRef, type RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  root?: Element | null;
}

interface UseInViewReturn<T extends Element> {
  ref: RefObject<T>;
  isInView: boolean;
  hasBeenInView: boolean;
}

export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true, root = null } = options;
  
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        
        if (inView) {
          setHasBeenInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, root]);

  return { ref, isInView, hasBeenInView };
}

export default useInView;