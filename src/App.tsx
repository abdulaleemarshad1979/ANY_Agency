/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Hero } from './components/Hero';
import { ProofSystem } from './components/ProofSystem';
import { OfferingsMatrix } from './components/OfferingsMatrix';
import { ProcessFramework } from './components/ProcessFramework';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis root>
      <div className={`min-h-screen bg-white text-[#111111] font-sans selection:bg-[#004BFF] selection:text-white ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <Hero isVisible={!loading} />
            <ProofSystem />
            <OfferingsMatrix />
            <ProcessFramework />
            <Footer />
          </>
        )}
      </div>
    </ReactLenis>
  );
}
