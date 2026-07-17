import { ArrowRight } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';

export function Footer() {
  const containerRef = useGsapReveal({ yOffset: 30, stagger: 0.1 });

  return (
    <footer ref={containerRef} className="py-24 px-6 bg-[#F8F8F8] border-t border-[#ECECEC]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div
          data-reveal="true"
          className="max-w-2xl w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to elevate your trajectory?</h2>
          
          <form className="relative flex items-center max-w-md mx-auto mb-16" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white border border-[#ECECEC] rounded-full px-6 py-4 outline-none focus:border-[#004BFF] transition-colors text-lg text-[#111111]"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111111] text-white rounded-full flex items-center justify-center hover:bg-[#004BFF] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div data-reveal="true" className="w-full flex flex-col md:flex-row justify-between items-center border-t border-[#ECECEC] pt-8 text-sm text-[#666666]">
          <div>© {new Date().getFullYear()} Horizon Academy. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="relative group hover:text-[#111111] transition-colors">
              <span className="relative z-10">Twitter</span>
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#111111] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
            <a href="#" className="relative group hover:text-[#111111] transition-colors">
              <span className="relative z-10">LinkedIn</span>
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#111111] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
            <a href="#" className="relative group hover:text-[#111111] transition-colors">
              <span className="relative z-10">Instagram</span>
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#111111] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
