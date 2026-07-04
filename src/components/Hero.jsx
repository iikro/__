import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import Magnetic from './Magnetic';

const phrases = [
  { text: "Experiências digitais", highlight: "nativas e fluidas" },
  { text: "Design impecável", highlight: "alta performance" },
  { text: "Interfaces", highlight: "que encantam" },
];

const contactLinks = [
  { href: "https://www.linkedin.com/in/ikro/", label: "LinkedIn", colorClass: "social-link text-[#0077b5]", icon: <FaLinkedinIn size="1.18em" /> },
  { href: "https://github.com/iikro", label: "GitHub", colorClass: "social-link text-gray-950 dark:text-white", icon: <FaGithub size="1.18em" /> },
  { href: "https://wa.me/5566999520670", label: "WhatsApp", colorClass: "social-link text-[#25D366]", icon: <FaWhatsapp size="1.18em" /> },
  { href: "https://www.instagram.com/iikro__/", label: "Instagram", colorClass: "social-link text-[#E1306C]", icon: <FaInstagram size="1.18em" /> }
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Software Engineer";
  const [activePhrase, setActivePhrase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Breakpoint detection
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Carousel auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 2.75
      }
    }
  };

  const titleVariants = {
    hidden: { y: 10, opacity: 0, filter: 'blur(4px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 260, damping: 28 }
    }
  };

  return (
    <section className="relative w-full px-[5vw] flex flex-col items-center justify-center text-center">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h1
          variants={titleVariants}
          className="font-serif font-medium tracking-tight leading-[0.9] mb-1 text-gray-900 dark:text-[#f5f5f7] px-2 shimmer-text"
          style={{ fontSize: 'clamp(2.8rem, 12vw, 10rem)' }}
        >
          ikro<span className="brand-dot text-[#0071e3] dark:text-[#0a84ff] drop-shadow-[0_0_15px_rgba(0,113,227,0.8)] dark:drop-shadow-[0_0_20px_rgba(10,132,255,1)]">.</span>dev
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-300 dark:to-gray-100 mb-2"
          style={{ fontSize: 'clamp(0.8rem, 2.5vw, 2.2rem)' }}
        >
          {displayText}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="overflow-hidden mb-6 w-full flex justify-center"
        >
          <div className="relative h-14 w-[88vw] md:w-[50vw] max-w-[600px] overflow-hidden">
            <motion.div
              key={activePhrase}
              initial={isMobile ? { x: 80, opacity: 0 } : { opacity: 0.58, y: 4 }}
              animate={isMobile ? { x: 0, opacity: 1 } : { opacity: 1, y: 0 }}
              exit={isMobile ? { x: -80, opacity: 0 } : { opacity: 0, y: -6 }}
              transition={
                isMobile
                  ? { type: 'spring', stiffness: 280, damping: 28 }
                  : { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
              }
              className="absolute inset-0 flex items-center justify-center"
            >
              <span
                className="phrase-card glass-material inline-flex max-w-full items-center gap-2 px-6 py-4 rounded-2xl text-gray-800 dark:text-gray-100 font-medium tracking-tight shadow-lg cursor-default"
                style={{ fontSize: 'clamp(0.7rem, 1.6vw, 1.3rem)' }}
              >
                <span className="truncate">{phrases[activePhrase].text}</span>
                <span className="w-px h-[1.2em] shrink-0 bg-gray-400/30 dark:bg-gray-600/30 mx-1" />
                <span className="truncate text-[#0071e3] dark:text-[#0a84ff] font-semibold">
                  {phrases[activePhrase].highlight}
                </span>
              </span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 md:gap-6 items-center justify-center"
        >
          {contactLinks.map((link, index) => (
            <Magnetic key={index}>
              <motion.a
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`glass-material flex items-center justify-center p-3 md:p-4 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${link.colorClass}`}
              >
                {link.icon}
              </motion.a>
            </Magnetic>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
