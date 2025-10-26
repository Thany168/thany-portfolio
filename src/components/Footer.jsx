import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  const linkVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 dark:from-gray-950 dark:via-indigo-950 dark:to-gray-950 text-white dark:text-gray-200 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-300 dark:to-purple-300">
            Thany's Portfolio
          </h3>
          <p className="text-sm text-gray-300 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Thany Limited Edition solutions.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://www.linkedin.com/in/oun-thany/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-200 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            aria-label="Visit Thany's LinkedIn"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/Thany168/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-200 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            aria-label="Visit Thany's GitHub"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://t.me/thany_oun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-200 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            aria-label="Visit Thany's Twitter"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaTelegram size={24} />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-300 dark:text-gray-200 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            aria-label="Email Thany"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaEnvelope size={24} />
          </motion.a>
          <motion.button
            onClick={handleScrollToTop}
            className="text-gray-300 dark:text-gray-200 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            aria-label="Scroll to top"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
