import { Monitor, Cpu, Paintbrush } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';

const offerings = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Digital Product Design",
    description: "Master the intersection of UX/UI, cognitive psychology, and rapid prototyping.",
    span: "col-span-1 md:col-span-2"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Creative Technology",
    description: "Code as a medium. Explore generative art, AI models, and interactive installations.",
    span: "col-span-1"
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: "Spatial Computing",
    description: "Design immersive environments for AR, VR, and mixed reality platforms.",
    span: "col-span-1"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Strategic Innovation",
    description: "Lead design teams and execute visionary concepts from ideation to market deployment.",
    span: "col-span-1 md:col-span-2"
  }
];

export function OfferingsMatrix() {
  const containerRef = useGsapReveal({ yOffset: 40, stagger: 0.15 });

  return (
    <section ref={containerRef} className="py-32 px-6 border-t border-[#ECECEC] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center" data-reveal="true">
           <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#004BFF] mb-4 block">Core Disciplines</span>
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Bento Box of Creativity</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {offerings.map((offering, i) => (
            <div
              key={i}
              data-reveal="true"
              className={`group relative overflow-hidden bg-[#F8F8F8] border border-[#ECECEC] rounded-3xl p-8 flex flex-col justify-end transition-all duration-300 hover:-translate-y-1 hover:border-[#111111] hover:bg-white ${offering.span}`}
            >
              <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-white border border-[#ECECEC] flex items-center justify-center text-[#111111] group-hover:text-[#004BFF] group-hover:scale-110 group-hover:border-[#004BFF] transition-all duration-500 ease-out">
                {offering.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">{offering.title}</h3>
                <p className="text-[#666666] leading-relaxed max-w-md">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
