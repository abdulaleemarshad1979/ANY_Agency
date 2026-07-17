import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { MagneticButton } from './MagneticButton';
import { HeroCanvas } from './HeroCanvas';

export function Hero({ isVisible }: { isVisible?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // 1. Eyebrow pill
      tl.fromTo('.hero-eyebrow', 
        { opacity: 0, scale: 0.96, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      // 2. Headline lines reveal via text-mask
      .fromTo('.hero-headline-line',
        { y: '110%' },
        { y: '0%', duration: 1, stagger: 0.1, ease: 'power4.out' },
        "-=0.6"
      )
      // 3. Subheadline fades up
      .fromTo('.hero-subhead',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.6"
      )
      // 4. CTA buttons stagger
      .fromTo('.hero-cta',
        { opacity: 0, y: 15, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        "-=0.8"
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, [isVisible]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-white">
      <HeroCanvas />
      
      <div className="z-10 max-w-5xl mx-auto text-center pointer-events-none">
        <div className="mb-6 flex justify-center hero-eyebrow opacity-0">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#004BFF] border border-[#ECECEC] px-4 py-1.5 rounded-full bg-white">
            Horizon Academy
          </span>
        </div>

        <div className="mb-6 flex flex-col items-center justify-center pointer-events-auto">
          <h1 className="text-[10vw] md:text-8xl font-bold tracking-tight leading-[0.9] text-[#111111]">
            <div className="overflow-hidden pb-2">
              <div className="hero-headline-line translate-y-[110%]">Shape the Future</div>
            </div>
            <div className="overflow-hidden pb-2">
              <div className="hero-headline-line translate-y-[110%]">of Modern Arts.</div>
            </div>
          </h1>
        </div>

        <p className="hero-subhead opacity-0 text-lg md:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed mb-10 pointer-events-auto">
          Where boundless creativity meets rigorous innovation. A specialized ecosystem engineered for the next generation of creative technologists and digital visionaries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <MagneticButton className="hero-cta opacity-0 group relative inline-flex items-center justify-center px-8 py-4 bg-[#111111] text-white overflow-hidden rounded-full font-medium transition-colors">
            <span className="absolute inset-0 w-full h-full bg-[#004BFF] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative flex items-center gap-2">
              Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
          <button className="hero-cta opacity-0 relative px-8 py-4 text-[#111111] font-medium transition-colors group">
            <span className="relative z-10">Explore Labs</span>
            <span className="absolute bottom-3 left-8 right-8 h-[1px] bg-[#111111] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#111111] to-transparent" />
      </div>
    </section>
  );
}
