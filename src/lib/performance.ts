export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage));
}

export function prefetchRoute(path: string): void {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  document.head.appendChild(link);
}

export function lazyLoad<T>(
  importFn: () => Promise<{ default: T }>,
  retries = 3,
  delay = 1000
): Promise<{ default: T }> {
  return new Promise((resolve, reject) => {
    const attempt = (retriesLeft: number) => {
      importFn()
        .then(resolve)
        .catch((error) => {
          if (retriesLeft > 0) {
            setTimeout(() => attempt(retriesLeft - 1), delay);
          } else {
            reject(error);
          }
        });
    };
    attempt(retries);
  });
}

export function measurePerformance(name: string): () => void {
  if (typeof performance === 'undefined') {
    return () => {};
  }

  const startMark = `${name}-start`;
  const endMark = `${name}-end`;

  performance.mark(startMark);

  return () => {
    performance.mark(endMark);
    performance.measure(name, startMark, endMark);

    const entries = performance.getEntriesByName(name);
    if (entries.length > 0) {
      console.debug(`[Performance] ${name}: ${entries[0].duration.toFixed(2)}ms`);
    }
  };
}

export function debounceRaf<T extends (...args: unknown[]) => unknown>(fn: T): T {
  let rafId: number | null = null;

  return ((...args: Parameters<T>) => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      fn(...args);
      rafId = null;
    });
  }) as T;
}

export function getConnectionSpeed(): 'slow' | 'medium' | 'fast' | 'unknown' {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }

  const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
  
  if (!connection?.effectiveType) {
    return 'unknown';
  }

  switch (connection.effectiveType) {
    case 'slow-2g':
    case '2g':
      return 'slow';
    case '3g':
      return 'medium';
    case '4g':
      return 'fast';
    default:
      return 'unknown';
  }
}

export function shouldReduceData(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return connection?.saveData === true;
}