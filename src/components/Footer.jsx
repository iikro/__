import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      whileHover={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="relative w-full py-[max(3vh,1.5rem)] px-[5vw] text-center z-10"
    >
      <p className="text-[clamp(0.6rem,1vw,0.85rem)] font-medium text-gray-600 dark:text-gray-400">
        &copy; {currentYear} Icaro Pereira De Paula.
      </p>
    </motion.footer>
  );
};

export default Footer;
