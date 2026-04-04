import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed top-[max(3vh,1rem)] right-[max(3vw,1rem)] z-50 p-[max(0.75vw,0.75rem)] rounded-full glass-material flex items-center justify-center text-[#1d1d1f] dark:text-[#f5f5f7] cursor-pointer"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {isDark ? <Sun size="clamp(1.2rem, 1.5vw, 1.5rem)" className="w-5 h-5 sm:w-6 sm:h-6" /> : <Moon size="clamp(1.2rem, 1.5vw, 1.5rem)" className="w-5 h-5 sm:w-6 sm:h-6" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
