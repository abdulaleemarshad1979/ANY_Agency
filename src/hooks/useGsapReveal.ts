import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(options: {
  delay?: number;
  yOffset?: number;
  duration?: number;
  stagger?: number;
} = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Elements with data-reveal="true" inside the ref will be staggered
      const targets = el.querySelectorAll('[data-reveal="true"]');
      const targetEls = targets.length > 0 ? targets : el;

      gsap.fromTo(targetEls, 
        { 
          y: options.yOffset || 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: options.duration || 0.8,
          delay: options.delay || 0,
          stagger: options.stagger || 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [options.delay, options.yOffset, options.duration, options.stagger]);

  return ref;
}
