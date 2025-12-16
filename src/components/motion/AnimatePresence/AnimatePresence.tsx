import { AnimatePresence as FramerAnimatePresence, type AnimatePresenceProps } from 'framer-motion';

export function AnimatePresence(props: AnimatePresenceProps) {
  return <FramerAnimatePresence {...props} />;
}

export default AnimatePresence;