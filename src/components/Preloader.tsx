import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400); // Wait a bit after 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-[#111111]"
        >
          HORIZON ACADEMY
        </motion.h1>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-[1px] w-48 bg-[#ECECEC] overflow-hidden">
          <motion.div 
            className="h-full bg-[#111111]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[11px] font-mono tracking-widest text-[#111111]">
          {Math.round(progress)}%
        </span>
      </div>
    </motion.div>
  );
}
