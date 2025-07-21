'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?:
    | 'fade-in-up'
    | 'fade-in-down'
    | 'fade-in-left'
    | 'fade-in-right'
    | 'zoom-in'
    | 'zoom-out';
  className?: string;
}

const animationVariants = {
  'fade-in-up': {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  'fade-in-down': {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  'fade-in-left': {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  'fade-in-right': {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  'zoom-out': {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
  },
};

const AnimatedSection = ({
  children,
  animationType = 'fade-in-up',
  className,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const selectedVariant = animationVariants[animationType];

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={selectedVariant}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
