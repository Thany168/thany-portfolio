import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeContext from "../context/ThemeContext";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400"
        >
          MyPortfolio
        </Link>

        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 dark:text-indigo-400 font-semibold"
                  : "text-black dark:text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 dark:text-indigo-400 font-semibold"
                  : "text-black dark:text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 dark:text-indigo-400 font-semibold"
                  : "text-black dark:text-white"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 dark:text-indigo-400 font-semibold"
                  : "text-black dark:text-white"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 dark:text-indigo-400 font-semibold"
                  : "text-black dark:text-white"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-100 dark:bg-gray-900 text-black dark:text-white absolute top-full left-0 w-full shadow-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 dark:text-indigo-400 font-semibold text-lg"
                    : "text-black dark:text-white text-lg"
                }
                onClick={toggleMobileMenu} // Close menu on link click
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 dark:text-indigo-400 font-semibold text-lg"
                    : "text-black dark:text-white text-lg"
                }
                onClick={toggleMobileMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 dark:text-indigo-400 font-semibold text-lg"
                    : "text-black dark:text-white text-lg"
                }
                onClick={toggleMobileMenu}
              >
                Projects
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 dark:text-indigo-400 font-semibold text-lg"
                    : "text-black dark:text-white text-lg"
                }
                onClick={toggleMobileMenu}
              >
                Skills
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 dark:text-indigo-400 font-semibold text-lg"
                    : "text-black dark:text-white text-lg"
                }
                onClick={toggleMobileMenu}
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
