import React, { useState } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Avatar from './components/Avatar';
import { motion, AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative flex flex-col min-h-dvh selection:bg-accent/30 overflow-x-hidden bg-white dark:bg-black transition-colors duration-500">
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Avatar />

      {/* Main Layout Layer (Relative for Z-Index management) */}
      <div className="relative flex flex-col min-h-dvh w-full">
        {/* Ambient Depth Backgrounds (Global - Now covers full scroll height) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 2.2, duration: 2 }}
            className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#0071e3] rounded-full mix-blend-screen dark:mix-blend-lighten blur-[8vw]" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 2.5, duration: 2 }}
            className="absolute w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-[#5e5ce6] rounded-full mix-blend-screen dark:mix-blend-lighten blur-[6vw] translate-x-[15vw] translate-y-[10vh]" 
          />
        </div>

        {/* Content Layer */}
        <div className="flex-grow flex flex-col items-center justify-center relative z-10 w-full pt-[5vh] pb-[5vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="w-full flex flex-col items-center"
          >
            <ThemeToggle />
            <Hero />
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
