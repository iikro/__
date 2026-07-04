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
    <section className="relative w-full flex flex-col items-center justify-center text-center">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-5xl -translate-y-3 flex-col items-center sm:-translate-y-5"
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
          className="font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-300 dark:to-gray-100 mb-3"
          style={{ fontSize: 'clamp(0.8rem, 2.5vw, 2.2rem)' }}
        >
          {displayText}<span className="inline-block w-[2px] h-[0.8em] bg-gray-700 dark:bg-white/90 ml-1 animate-pulse"></span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-8 flex w-full justify-center overflow-hidden"
        >
          <div className="relative h-14 w-full max-w-[34rem] overflow-hidden px-2 sm:h-16">
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
              className="absolute inset-0 flex items-center justify-center px-2"
            >
              <span
                className="phrase-card glass-material inline-flex max-w-full items-center gap-3 rounded-[1.35rem] px-5 py-3 text-sm font-semibold leading-5 text-[#1d1d1f] shadow-none cursor-default dark:text-[#f5f5f7] sm:px-7 sm:py-4 sm:text-base md:text-lg"
              >
                <span className="truncate">{phrases[activePhrase].text}</span>
                <span className="h-[1.15em] w-px shrink-0 bg-black/10 dark:bg-white/12" />
                <span className="truncate font-semibold text-accent dark:text-accent-dark">
                  {phrases[activePhrase].highlight}
                </span>
              </span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
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
                transition={{ type: "spring", stiffness: 360, damping: 22 }}
                className={`glass-material flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:h-14 sm:w-14 ${link.colorClass}`}
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
