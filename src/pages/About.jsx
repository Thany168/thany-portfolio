import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-[80px] px-6 md:px-16">
      {/* Header */}
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-5xl font-extrabold mb-2 tracking-wide"
      >
        ABOUT ME
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-lg text-center max-w-3xl mb-10 text-gray-600 dark:text-gray-300"
      >
        I’m{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Oun Thany
        </span>
        , a passionate{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Computer Science
        </span>{" "}
        student from the Royal University of Phnom Penh. I love turning ideas
        into real-world digital solutions using modern web technologies like{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          React, Tailwind CSS, JavaScript,
        </span>{" "}
        and{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Vite
        </span>
        . My focus is on clean design, optimized performance, and creative
        problem solving.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col md:flex-row justify-between items-start gap-10 w-full max-w-5xl"
      >
        <div className="flex-1">
          <h3 className="bg-yellow-400 text-gray-900 font-bold text-lg inline-block px-4 py-1 rounded-md mb-5">
            What I Do?
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-gray-900 p-3 rounded-full text-xl">
                <FaCode />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Frontend Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Crafting responsive and interactive web interfaces with React
                  and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-gray-900 p-3 rounded-full text-xl">
                <FaPaintBrush />
              </div>
              <div>
                <h4 className="font-semibold text-lg">UI / UX Design</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Designing user-friendly layouts with a focus on accessibility
                  and smooth experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-gray-900 p-3 rounded-full text-xl">
                <FaServer />
              </div>
              <div>
                <h4 className="font-semibold text-lg">System Integration</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building reliable and efficient backend logic using APIs and
                  database connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="flex-1">
          <h3 className="bg-yellow-400 text-gray-900 font-bold text-lg inline-block px-4 py-1 rounded-md mb-5">
            Fun Facts
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { number: "1+", label: "Years Experience" },
              { number: "8", label: "Projects Done" },
              { number: "∞", label: "Learning Passion" },
            ].map((fact, i) => (
              <div
                key={i}
                className="bg-gray-900 dark:bg-gray-800 text-yellow-400 text-center rounded-full w-28 h-28 flex flex-col justify-center items-center mx-auto font-bold shadow-lg"
              >
                <span className="text-2xl">{fact.number}</span>
                <span className="text-xs text-gray-300">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
      >
        <Link
          to="/projects"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 font-semibold transition duration-300"
        >
          Explore My Projects
        </Link>
        <a
          href="#"
          className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold transition duration-300"
        >
          <FaFileDownload className="mr-2" /> Download Resume
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex justify-center gap-6 mt-6"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </motion.div>
    </section>
  );
}
