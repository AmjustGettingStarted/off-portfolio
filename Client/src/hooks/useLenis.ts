import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initialises a global Lenis smooth-scroll instance.
 *
 * `autoRaf: true` tells Lenis to drive itself with its own
 * requestAnimationFrame loop so you don't need a manual raf wrapper.
 *
 * If GSAP ScrollTrigger is added in the future, hook it up here:
 *   lenis.on('scroll', ScrollTrigger.update);
 *   gsap.ticker.add((time) => lenis.raf(time * 1000));
 *   gsap.ticker.lagSmoothing(0);
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}
