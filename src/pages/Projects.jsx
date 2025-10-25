import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with React and Tailwind.",
      img: "https://i.pinimg.com/736x/16/33/db/1633db733e69653425af9431a8c92301.jpg",
      link: "#",
    },
    {
      title: "School Management App",
      desc: "Vue.js-based web system for managing students and attendance.",
      img: "/projects/project2.png",
      link: "#",
    },
    {
      title: "Tour & Travel System",
      desc: "A Vue.js-based web system for managing travel bookings and itineraries.",
      img: "/projects/project2.png",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      desc: "A full-stack web application for online shopping, built with React and Node.js.",
      img: "/projects/project3.png",
      link: "#",
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 text-gray-900 dark:text-white pt-24 px-6 md:px-16 py-20">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
