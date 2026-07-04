import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      whileHover={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="relative z-10 w-full px-6 pb-6 text-center sm:pb-8"
    >
      <p className="text-xs font-medium text-[#7a828f] dark:text-[#7f8794]">
        &copy; {currentYear} Icaro Pereira De Paula.
      </p>
    </motion.footer>
  );
};

export default Footer;
