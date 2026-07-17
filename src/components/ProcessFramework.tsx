import { useGsapReveal } from '../hooks/useGsapReveal';

const steps = [
  { num: "01", title: "Discover", text: "Immerse in deep research, unearthing insights that redefine the creative boundary." },
  { num: "02", title: "Prototype", text: "Rapid iteration cycles moving from low-fidelity concepts to functional digital artifacts." },
  { num: "03", title: "Deploy", text: "Launch production-ready systems that scale, inspire, and drive measurable outcomes." }
];

export function ProcessFramework() {
  const containerRef = useGsapReveal({ yOffset: 40, stagger: 0.15 });

  return (
    <section ref={containerRef} className="py-32 px-6 border-t border-[#ECECEC] bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20" data-reveal="true">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Horizon Method.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          {steps.map((step, i) => (
            <div
              key={i}
              data-reveal="true"
            >
              <div className="text-[11px] font-mono tracking-widest text-[#004BFF] mb-6 block">STEP {step.num}</div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{step.title}</h3>
              <p className="text-[#A0A0A0] leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
