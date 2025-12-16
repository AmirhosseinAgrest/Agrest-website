export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const;
export const MEDIA_QUERIES = {
  xs: `(min-width: ${BREAKPOINTS.xs}px)`,
  sm: `(min-width: ${BREAKPOINTS.sm}px)`,
  md: `(min-width: ${BREAKPOINTS.md}px)`,
  lg: `(min-width: ${BREAKPOINTS.lg}px)`,
  xl: `(min-width: ${BREAKPOINTS.xl}px)`,
  '2xl': `(min-width: ${BREAKPOINTS['2xl']}px)`,
  '3xl': `(min-width: ${BREAKPOINTS['3xl']}px)`,

  maxXs: `(max-width: ${BREAKPOINTS.xs - 1}px)`,
  maxSm: `(max-width: ${BREAKPOINTS.sm - 1}px)`,
  maxMd: `(max-width: ${BREAKPOINTS.md - 1}px)`,
  maxLg: `(max-width: ${BREAKPOINTS.lg - 1}px)`,
  maxXl: `(max-width: ${BREAKPOINTS.xl - 1}px)`,

  mobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  desktop: `(min-width: ${BREAKPOINTS.lg}px)`,
  touch: '(hover: none) and (pointer: coarse)',
  mouse: '(hover: hover) and (pointer: fine)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
} as const;

export const CONTAINER_WIDTHS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type MediaQueryKey = keyof typeof MEDIA_QUERIES;