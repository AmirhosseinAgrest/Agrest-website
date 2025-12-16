import type { Variants, Transition } from 'framer-motion';

export const easings = {
  soft: [0.25, 0.1, 0.25, 1],
  softOut: [0.22, 1, 0.36, 1],
  softIn: [0.64, 0, 0.78, 0],
  bounce: [0.34, 1.56, 0.64, 1],
} as const;

export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
} as const;

export const transitions: Record<string, Transition> = {
  soft: {
    type: 'tween',
    ease: easings.soft,
    duration: durations.normal,
  },
  softOut: {
    type: 'tween',
    ease: easings.softOut,
    duration: durations.slow,
  },
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },
  springFast: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
  },
};

export const variants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { y: '100%' },
    visible: { y: 0 },
  },
  slideDown: {
    hidden: { y: '-100%' },
    visible: { y: 0 },
  },
};

export const staggerVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.softOut,
    },
  },
};

export const hoverVariants = {
  lift: {
    y: -4,
    transition: transitions.springFast,
  },
  scale: {
    scale: 1.02,
    transition: transitions.springFast,
  },
  glow: {
    boxShadow: '0 0 30px -5px rgba(14, 165, 233, 0.4)',
    transition: transitions.soft,
  },
};

export const tapVariants = {
  scale: { scale: 0.98 },
  push: { scale: 0.95 },
};