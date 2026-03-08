/**
 * Optimized Animation Configuration for 120Hz Performance
 * Fast, smooth, professional animations using GPU acceleration
 */

// Optimized easing curves for 120Hz smoothness
export const easings = {
  // Fast, snappy entrance
  fastIn: [0.4, 0, 0.2, 1] as [number, number, number, number],
  // Smooth, professional exit
  fastOut: [0.2, 0, 0, 1] as [number, number, number, number],
  // Balanced for most animations
  smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  // Ultra-fast for micro-interactions
  instant: [0.1, 0, 0.1, 1] as [number, number, number, number],
};

// Optimized spring configurations for 144Hz
export const springs = {
  // Fast, responsive spring - 144Hz optimized
  fast: {
    type: "spring" as const,
    stiffness: 600,
    damping: 35,
    mass: 0.4,
  },
  // Smooth, professional spring - 144Hz optimized
  smooth: {
    type: "spring" as const,
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  },
  // Quick micro-interactions - 144Hz optimized
  quick: {
    type: "spring" as const,
    stiffness: 700,
    damping: 40,
    mass: 0.3,
  },
  // Gentle, elegant spring - 144Hz optimized
  gentle: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
    mass: 0.6,
  },
};

// Optimized durations (faster for 144Hz)
export const durations = {
  instant: 0.08,
  fast: 0.12,
  normal: 0.16,
  smooth: 0.2,
  medium: 0.25,
  slow: 0.3,
};

// Common animation variants
export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: durations.fast,
        ease: easings.fastOut,
      }
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: durations.normal,
        ease: easings.fastOut,
      }
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: durations.normal,
        ease: easings.fastOut,
      }
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: springs.quick,
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: durations.normal,
        ease: easings.fastOut,
      }
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: durations.normal,
        ease: easings.fastOut,
      }
    },
  },
};

// Hover animations
export const hover = {
  lift: {
    scale: 1.02,
    y: -2,
    transition: springs.quick,
  },
  scale: {
    scale: 1.05,
    transition: springs.quick,
  },
  glow: {
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    transition: { duration: durations.fast },
  },
};

// Tap animations
export const tap = {
  scale: {
    scale: 0.98,
    transition: springs.quick,
  },
  press: {
    scale: 0.96,
    y: 1,
    transition: springs.quick,
  },
};

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

