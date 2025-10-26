import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 text-gray-900 dark:text-white pt-24 px-6 md:px-16 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          I’m excited to connect for new opportunities, collaborations, or just
          a friendly chat about tech! Fill out the form below or reach out
          directly via email or social media.
        </p>

        {/* Contact Form */}
        <motion.div
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg mb-8"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactForm />
        </motion.div>
        {/* End of Contact */}

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#"
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105"
            aria-label="Email Thany"
          >
            <FaEnvelope className="mr-2" /> Email Me
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105"
            aria-label="Visit Thany's LinkedIn"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://github.com/thany168"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105"
            aria-label="Visit Thany's GitHub"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>

        {/* Call-to-Action */}
        <p className="mt-8 text-gray-600 dark:text-gray-300">
          Looking for my work?{" "}
          <Link
            to="/projects"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
            aria-label="View Thany's projects"
          >
            Check out my projects
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
