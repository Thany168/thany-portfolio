import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import cover from "../assets/Cover.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  // Animation variants for Framer Motion
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 text-gray-900 dark:text-white pt-24 px-6 md:px-16 overflow-hidden">
      <motion.div
        className="flex justify-center items-center mb-8 md:mb-0 md:w-1/2"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <div className="relative group">
          <img
            src={cover}
            alt="Thany Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-indigo-500 dark:border-indigo-400"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-indigo-500 bg-opacity-0 group-hover:bg-opacity-50 rounded-full transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Mr. Thany
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center md:text-left md:w-1/2 space-y-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          Hey, I’m Thany
        </h1>

        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Welcome to my webpage
        </h2>
        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
          I’m a Computer Science'student!
        </h2>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Link
            to="/skills"
            className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-transform duration-300 transform hover:scale-105"
          >
            Explore My Skill
          </Link>

          <Link
            to="/about"
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105"
          >
            <FaUser className="mr-2" /> About Me
          </Link>
        </div>

        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <a
            href="https://github.com/thany168"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/oun-thany/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
