import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import portfolio from "../assets/portfolio.png";
import tour from "../assets/tourproject.png";
import pyproject from "../assets/py-project.png";
import phumyerng from "../assets/phumyerng.png";
import movieapp from "../assets/movieapp.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with React and Tailwind CSS, highlighting my projects, skills, and development experience.",
      img: portfolio,
      link: "https://thany-portfolio.vercel.app/",
      github: "https://github.com/Thany168/thany-portfolio",
    },
    {
      title: "E-Commerce ",
      desc: "Developed an online shopping website using mock data to simulate API fetching and understand data handling.",
      img: pyproject,

      link: "https://py-ecommerce.vercel.app/",
      github: "https://github.com/Thany168/PY-Ecommerce",
    },
    {
      title: "Movie-App ",
      desc: "I developed a movie web application that fetches data from the TMDB API as part of learning Next.js.",
      img: movieapp,
      link: "https://flix-movie-kh.vercel.app/",
      github: "https://github.com/Thany168/FlixMovie",
    },
    {
      title: "Tour & Travel System",
      desc: "Led a team in developing a Tour & Travel web application as a 3rd Year project at RUPP using HTML, CSS, JavaScript, and PHP.",
      img: tour,
      github: "https://github.com/Thany168/tour_travel",
    },
    {
      title: "Clothes Shop Application ",
      desc: "Clothes Shop Application | Team Lead (4th Year , RUPP). Led the development of a complete system, including a mobile application and admin dashboard.Tech Stack: Laravel, Flutter, PostgreSQL",
      img: phumyerng,
      github: "https://github.com/Vuthagk4/py-api.git",
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
