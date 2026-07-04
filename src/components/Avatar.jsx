import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import avatarUrl from '../assets/images/avatar.jpeg';

const Avatar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -8 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 2.85, duration: 0.65, type: 'spring', stiffness: 220, damping: 24 }}
      className="fixed left-4 top-4 z-50 flex items-center gap-3 sm:left-6 sm:top-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative cursor-pointer">
        <img
          src={avatarUrl}
          alt="Icaro Pereira"
          className="relative h-11 w-11 rounded-full object-cover object-top ring-1 ring-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.16)] dark:ring-white/15 dark:shadow-[0_12px_34px_rgba(0,0,0,0.42)] sm:h-12 sm:w-12"
        />
        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#34c759] shadow-sm dark:border-[#050507]" />
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -8, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -8, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 380, damping: 24 }}
            className="glass-material whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold text-[#5f6670] dark:text-[#d7dce5]"
          >
            <span className="text-[#8d96a3] dark:text-[#8f98a6]">status: </span>
            <span className="font-semibold text-[#1f9d55] dark:text-[#34c759]">openToWork</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Avatar;
