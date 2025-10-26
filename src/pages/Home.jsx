import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import cover from "../assets/Cover.jpg";

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
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 text-gray-900 dark:text-white pt-24 px-6 md:px-16 overflow-hidden">
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
          <div className="absolute inset-0 bg-indigo-500  bg-opacity-0 group-hover:bg-opacity-50 rounded-full transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<<<<<<< HEAD
              Mr. Thany
=======
              Hello I'm Thany
>>>>>>> 4dd92f26410be1a1a2aa7cfc6e262cbd8cbb329d
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
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          My name's{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Oun Thany
          </span>
          . I was born in 2006 at Boeungry Village, Russey Keo Commune, Prek
          Prasab District, Kratie Province. I’m currently a Year 4{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Computer Science student
          </span>{" "}
          at the Royal University of Phnom Penh, passionate about building
          innovative and scalable web solutions. Skilled in{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            ReactJS, JavaScript, and PHP Laravel
          </span>
          , I combine technical expertise with HR tech experience to create
          user-focused applications. I’m driven by creativity, problem-solving,
          and a desire to make meaningful digital experiences. Let’s build
          something amazing together!
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-transform duration-300 transform hover:scale-105"
          >
            Explore My Work
          </a>
          <a
            href="#"
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105"
          >
            <FaFileDownload className="mr-2" /> Download Resume
          </a>
        </div>
        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <a
<<<<<<< HEAD
            href="https://github.com/thany168"
=======
            href="https://github.com/Thany168"
>>>>>>> 4dd92f26410be1a1a2aa7cfc6e262cbd8cbb329d
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
