import { useEffect, useRef } from 'react';

export function useDocumentTitle(title: string, restoreOnUnmount = true): void {
  const previousTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (!restoreOnUnmount) return;

    return () => {
      document.title = previousTitle.current;
    };
  }, [restoreOnUnmount]);
}

export default useDocumentTitle;