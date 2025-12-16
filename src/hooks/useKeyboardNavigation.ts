import { useEffect, useCallback } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

interface KeyMap {
  [key: string]: KeyHandler;
}

export function useKeyboardNavigation(
  keyMap: KeyMap,
  isActive = true
): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const handler = keyMap[event.key];
      if (handler) {
        handler(event);
      }
    },
    [keyMap]
  );

  useEffect(() => {
    if (!isActive) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, isActive]);
}

export function useEscapeKey(handler: () => void, isActive = true): void {
  useKeyboardNavigation(
    {
      Escape: handler,
    },
    isActive
  );
}

export function useArrowNavigation(
  onUp: () => void,
  onDown: () => void,
  onLeft?: () => void,
  onRight?: () => void,
  isActive = true
): void {
  useKeyboardNavigation(
    {
      ArrowUp: (e) => {
        e.preventDefault();
        onUp();
      },
      ArrowDown: (e) => {
        e.preventDefault();
        onDown();
      },
      ...(onLeft && {
        ArrowLeft: (e) => {
          e.preventDefault();
          onLeft();
        },
      }),
      ...(onRight && {
        ArrowRight: (e) => {
          e.preventDefault();
          onRight();
        },
      }),
    },
    isActive
  );
}

export default useKeyboardNavigation;