import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.dataset.theme = 'light';
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94, rotate: -8 }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed right-4 top-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[#1d1d1f] glass-material focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:text-[#f5f5f7] sm:right-6 sm:top-6 sm:h-14 sm:w-14"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {isDark ? <Sun className="h-5 w-5 sm:h-6 sm:w-6" /> : <Moon className="h-5 w-5 sm:h-6 sm:w-6" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
