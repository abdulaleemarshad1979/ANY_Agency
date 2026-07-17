import { AnimatedCounter } from './AnimatedCounter';
import { useGsapReveal } from '../hooks/useGsapReveal';

const stats = [
  { value: 98, suffix: '%', label: 'Placement Rate' },
  { value: 40, suffix: '+', label: 'Innovation Labs' },
  { value: 12, prefix: '$', suffix: 'M', label: 'Research Funding' }
];

export function ProofSystem() {
  const containerRef = useGsapReveal({ yOffset: 30, stagger: 0.15 });

  return (
    <section ref={containerRef} className="py-32 px-6 border-t border-[#ECECEC] bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-reveal="true">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">
              Proven excellence.<br />Measurable impact.
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              Our curriculum isn't just theoretical; it's a launchpad. We partner with industry leaders to ensure our graduates don't just enter the market—they redefine it.
            </p>
            <div className="w-12 h-[1px] bg-[#004BFF]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                data-reveal="true"
                className="p-8 bg-white border border-[#ECECEC] rounded-2xl"
              >
                <div className="text-4xl font-bold text-[#111111] tracking-tight mb-2">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-[12px] uppercase tracking-wider text-[#666666] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
