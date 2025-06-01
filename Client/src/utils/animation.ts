
import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right" | "none" = "none", delay = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

export const slideIn = (direction: "up" | "down" | "left" | "right", delay = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
    },
    show: {
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0,
      }
    }
  };
};

export const textVariant = (delay?: number): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay
      }
    }
  };
};

export const textContainer: Variants = {
  hidden: {
    opacity: 0
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 }
  })
};

export const textVariant2: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn"
    }
  }
};

export const zoomIn = (delay?: number, duration = 0.8): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
});

export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5
    }
  }
};

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.1
    }
  }
};

export const staggeredFade = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: delay
    }
  }
});

export const staggeredItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

export const scaleInHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] } }
};

export const hoverFadeUp: Variants = {
  rest: { y: 0 },
  hover: { y: -10, transition: { duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] } }
};
