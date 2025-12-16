
import type { Variants, Transition } from 'framer-motion';

export const transitionPresets = {
  soft: {
    type: 'tween',
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.5,
  } as Transition,

  softOut: {
    type: 'tween',
    ease: [0.22, 1, 0.36, 1],
    duration: 0.6,
  } as Transition,

  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
  } as Transition,

  springFast: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  } as Transition,

  springSlow: {
    type: 'spring',
    stiffness: 60,
    damping: 20,
    mass: 1.2,
  } as Transition,

  linear: {
    type: 'tween',
    ease: 'linear',
    duration: 0.3,
  } as Transition,
} as const;
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionPresets.soft,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.softOut,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
};

export const fadeDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.softOut,
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3 },
  },
};
export const fadeLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionPresets.softOut,
  },
};

export const fadeRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionPresets.softOut,
  },
};
export const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionPresets.spring,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.softOut,
  },
};

export const slideUpVariants: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: transitionPresets.softOut,
  },
  exit: {
    y: '100%',
    transition: { duration: 0.3 },
  },
};

export const slideDownVariants: Variants = {
  hidden: { y: '-100%' },
  visible: {
    y: 0,
    transition: transitionPresets.softOut,
  },
  exit: {
    y: '-100%',
    transition: { duration: 0.3 },
  },
};

export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const hoverScale = {
  scale: 1.02,
  transition: transitionPresets.springFast,
};

export const hoverLift = {
  y: -4,
  transition: transitionPresets.springFast,
};

export const tapScale = {
  scale: 0.98,
};
const animationPresets = {
  transitions: transitionPresets,
  variants: {
    fade: fadeVariants,
    fadeUp: fadeUpVariants,
    fadeDown: fadeDownVariants,
    fadeLeft: fadeLeftVariants,
    fadeRight: fadeRightVariants,
    scale: scaleVariants,
    slideUp: slideUpVariants,
    slideDown: slideDownVariants,
    staggerContainer: staggerContainerVariants,
    staggerItem: staggerItemVariants,
    pageTransition: pageTransitionVariants,
  },
  hover: {
    scale: hoverScale,
    lift: hoverLift,
  },
  tap: {
    scale: tapScale,
  },
} as const;

export default animationPresets;