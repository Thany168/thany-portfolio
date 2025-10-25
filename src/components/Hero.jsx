import { motion } from "framer-motion";
// import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
      {/* Text Section */}
      <motion.div
        className="text-center md:text-left md:w-1/2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">
          Hi, I’m Oun Thany 👋
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          A passionate{" "}
          <span className="font-semibold text-indigo-500">Web Developer</span>{" "}
          from Cambodia. I love building modern, responsive, and interactive web
          applications.
        </p>
        <motion.a
          href="/projects"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects
        </motion.a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/3 mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          // src={profile}
          alt="Oun Thany"
          className="rounded-full shadow-lg w-64 mx-auto border-4 border-indigo-500"
        />
      </motion.div>
    </section>
  );
}
